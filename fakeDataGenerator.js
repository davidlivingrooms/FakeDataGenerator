const fakeDataGenerator = (function() {
    return {
      appendAyxTagToTarget: ({targetEl, uiProps}) => {
          const ayxTag = document.createElement('ayx')
          ayxTag.setAttribute('data-ui-props', `${JSON.stringify(uiProps)}`)
          targetEl.appendChild(ayxTag)
        },
      addNewColumn: () => {
        const fieldId = 'Field_' + Math.random() + Date.now()
        fakeDataGenerator.addColumn({fieldId})
      },
      addColumn: ({providerValue, fieldNameValue, fieldId}) => {
        const fieldNameId =  'fieldNameTextBox_' + Math.random() + Date.now()
        const providerId = 'providerDropDown_' + Math.random() + Date.now()

        // add container
        const row = document.createElement('div')
        row.className = 'row'

        // add textbox label
        const textBoxLabel = document.createElement('label')
        textBoxLabel.innerText = 'Column Name'
        row.appendChild(textBoxLabel)

        // add textbox
        const textBoxUIProps = {
          type: 'TextBox',
          widgetId: fieldNameId,
          placeholder: 'Enter new column name here'
        }

        fakeDataGenerator.appendAyxTagToTarget({
          targetEl: row,
          uiProps: textBoxUIProps
        })

        // add dropdown label
        const dropDownLabel = document.createElement('label')
        dropDownLabel.innerText = 'Generator Type'
        row.appendChild(dropDownLabel)

        // add dropdown
        const providerUIProps = {
          type: 'DropDown',
          widgetId: providerId,
        }

        fakeDataGenerator.appendAyxTagToTarget({
          targetEl: row,
          uiProps: providerUIProps
        })

        document.getElementById('container').appendChild(row)

        // render the row so that the widget id is available
        window.Alteryx.Gui.Manager.addWidget(row)

        const alteryxDataItems = window.Alteryx.Gui.FakeDataGenerator.AlteryxDataItems
        const manager = window.Alteryx.Gui.Manager

        // create and add data item container to parent
        const fieldContainer = new alteryxDataItems.DataItemContainer(fieldId)

        const simpleString = new alteryxDataItems.SimpleString('FieldName')
        if (fieldNameValue) {
          simpleString.setValue(fieldNameValue)
        }

        const stringSelector = new alteryxDataItems.StringSelector('Provider')
        stringSelector.setOptionList(fakeDataGenerator.getGeneratorTypeOptionList())

        if (providerValue) {
          stringSelector.setValue(providerValue)
        }

        manager.bindDataItemToWidget(simpleString, fieldNameId)
        manager.bindDataItemToWidget(stringSelector, providerId)
        fieldContainer.addDataItem(simpleString)
        fieldContainer.addDataItem(stringSelector)
        manager.getDataItem('FakeFields').addDataItem(fieldContainer)
      },
      getGeneratorTypeOptionList: () => {
        const optionList = [
          {
            value: 'address',
            label: 'Address'
          },
          {
            value: 'country',
            label: 'Country'
          },
          {
            value: 'name',
            label: 'Person Name'
          },
          {
            value: 'phone_number',
            label: 'Phone Number'
          },
          {
            value: 'mac_address',
            label: 'Mac Address'
          },
          {
            value: 'user_name',
            label: 'User Name'
          },
          {
            value: 'url',
            label: 'URL'
          },
          {
            value: 'image_url',
            label: 'Image URL'
          },
          {
            value: 'bs',
            label: 'BS buzzwords'
          },
          {
            value: 'company',
            label: 'Company'
          },
          {
            value: 'day_of_week',
            label: 'Day of Week'
          },
          {
            value: 'free_email',
            label: 'Email'
          },
          {
            value: 'job',
            label: 'Job'
          },
          {
            value: 'ean8',
            label: 'Barcode(ean8)'
          },
          {
            value: 'credit_card_full',
            label: 'Credit Card Full'
          },
          {
            value: 'paragraph',
            label: 'Paragraph'
          },
          {
            value: 'text',
            label: 'Text'
          },
          {
            value: 'binary',
            label: 'Binary'
          },
          {
            value: 'file_path',
            label: 'File Path'
          },
          {
            value: 'sha256',
            label: 'SHA256'
          },
          {
            value: 'md5',
            label: 'MD5'
          },
          {
            value: 'password',
            label: 'Password'
          },
          {
            value: 'license_plate',
            label: 'License Plate'
          },
          {
            value: 'isbn13',
            label: 'ISBN(13)'
          },
          {
            value: 'latitude',
            label: 'Latitude'
          },
          {
            value: 'longitude',
            label: 'Longitude'
          },
          {
            value: 'ssn',
            label: 'SSN'
          },
          {
            value: 'user_agent',
            label: 'User Agent'
          },
          {
            value: 'profile',
            label: 'Profile'
          },
          {
            value: 'simple_profile',
            label: 'Simple Profile'
          },
          {
            value: 'ipv4',
            label: 'IPv4'
          },
          {
            value: 'ipv6',
            label: 'IPv6'
          },
        ]

        return optionList.sort((option1, option2) => {
             return option1.label.localeCompare(option2.label)
        })
      },
    }
}());