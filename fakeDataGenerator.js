const fakeDataGenerator = (function() {
    return {
      appendAyxTagToTarget: ({targetEl, uiProps}) => {
          const ayxTag = document.createElement('ayx')
          ayxTag.setAttribute('data-ui-props', `${JSON.stringify(uiProps)}`)
          targetEl.appendChild(ayxTag)
          return ayxTag
        },
      addNewColumn: () => {
        const fieldId = 'Field_' + Math.random() + Date.now()
        fakeDataGenerator.addColumn({fieldId})
      },
      deleteColumn: (fieldContainerDataName, event) => {
        const fakeFieldsContainer = window.Alteryx.Gui.Manager.getDataItem('FakeFields')
        if (fakeFieldsContainer.getDataItems().length > 1) {
          const parentElement = $(event.target).parents('.group')[0]
          // parent.parent().add(parent).fadeOut('slow',function(){$(this).remove();});
          $(parentElement).fadeOut('slow', function () {
            $(this).remove()
          })

          // remove data item
          fakeFieldsContainer.removeDataItem(fieldContainerDataName)
        }
      },
      addColumn: ({categoryValue, providerValue, fieldNameValue, fieldId}) => {
        const fieldNameId =  'fieldNameTextBox_' + Math.random() + Date.now()
        const providerId = 'providerDropDown_' + Math.random() + Date.now()
        const categoryId = 'categoryDropDown' + Math.random() + Date.now()

        const header = document.createElement('h3')
        header.innerText = 'Column'

        // add container
        const container = document.createElement('div')
        container.className = 'group'

        // add column container
        const columnContainer= document.createElement('div')

        // add textbox label
        const textBoxLabel = document.createElement('label')
        textBoxLabel.innerText = 'Column Name'
        columnContainer.appendChild(textBoxLabel)

        // add textbox
        const textBoxUIProps = {
          type: 'TextBox',
          widgetId: fieldNameId,
          placeholder: 'Enter new column name here'
        }

        fakeDataGenerator.appendAyxTagToTarget({
          targetEl: columnContainer,
          uiProps: textBoxUIProps
        })

        // add category dropdown label
        const categoryLabel= document.createElement('label')
        categoryLabel.innerText = 'Category'
        columnContainer.appendChild(categoryLabel)

        // add category dropdown
        const categoryUIProps= {
          type: 'DropDown',
          widgetId: categoryId,
        }

        fakeDataGenerator.appendAyxTagToTarget({
          targetEl: columnContainer,
          uiProps: categoryUIProps 
        })

        // add combobox label
        const providerLabel = document.createElement('label')
        providerLabel.innerText = 'Fake Data Type'
        columnContainer.appendChild(providerLabel)

        // add combobox 
        const providerUIProps = {
          type: 'DropDown',
          searchable: true,
          widgetId: providerId,
        }

        fakeDataGenerator.appendAyxTagToTarget({
          targetEl: columnContainer,
          uiProps: providerUIProps
        })

        // add delete column button
        const buttonId = 'deleteColumnButton_' + Math.random() + Date.now()
        const deleteColumnButtonProps = {
          type: 'Button',
          widgetId: buttonId,
          label: 'Delete Column',
        }

        const buttonTag = fakeDataGenerator.appendAyxTagToTarget({
          targetEl: columnContainer,
          uiProps: deleteColumnButtonProps,
        })

        container.appendChild(header)
        container.appendChild(columnContainer)

        document.getElementById('accordion').appendChild(container)

        // render the row so that the widget id is available
        window.Alteryx.Gui.Manager.addWidget(columnContainer)
        window.Alteryx.Gui.Manager.setProp(buttonId, 'onClick', fakeDataGenerator.deleteColumn.bind(this, fieldId))
        $( "#accordion" ).accordion( "refresh" )

        const alteryxDataItems = window.Alteryx.Gui.FakeDataGenerator.AlteryxDataItems
        const manager = window.Alteryx.Gui.Manager

        // create and add data item container to parent
        const fieldContainer = new alteryxDataItems.DataItemContainer(fieldId)

        const simpleString = new alteryxDataItems.SimpleString('FieldName')
        if (fieldNameValue) {
          simpleString.setValue(fieldNameValue)
        }

        // set up category data item
        const categoryStringSelector = new alteryxDataItems.StringSelector('Category')
        categoryStringSelector.setOptionList(optionUtils.getGeneratorCategoryOptionList())
        // set up provider data item
        const stringSelector = new alteryxDataItems.StringSelector('Provider')
        stringSelector.setOptionList(optionUtils.getAllOptions())

        categoryStringSelector.registerPropertyListener('value', (event) => {
          // clear and update the provider dropdown when the category changes
          stringSelector.setOptionList(optionUtils.getGeneratorOptionListByCategory(event.value))
          stringSelector.setValue('')
        })
        categoryStringSelector.setValue(categoryValue ? categoryValue : 'all')

        if (providerValue) {
          stringSelector.setValue(providerValue)
        }

        manager.bindDataItemToWidget(simpleString, fieldNameId)
        manager.bindDataItemToWidget(stringSelector, providerId)
        manager.bindDataItemToWidget(categoryStringSelector, categoryId)
        fieldContainer.addDataItem(simpleString)
        fieldContainer.addDataItem(stringSelector)
        fieldContainer.addDataItem(categoryStringSelector)
        manager.getDataItem('FakeFields').addDataItem(fieldContainer)
      },
    }
}())
