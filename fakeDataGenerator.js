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
          const parent = $(event.target).parent().parent()
          parent.parent().add(parent).fadeOut('slow',function(){$(this).remove();});

          // remove data item
          fakeFieldsContainer.removeDataItem(fieldContainerDataName)
        }

    },
      addColumn: ({providerValue, fieldNameValue, fieldId}) => {
        const fieldNameId =  'fieldNameTextBox_' + Math.random() + Date.now()
        const providerId = 'providerDropDown_' + Math.random() + Date.now()

        const header = document.createElement('h3')
        header.innerText = 'Column'

        // add column container
        const container = document.createElement('div')

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

        // add dropdown label
        const dropDownLabel = document.createElement('label')
        dropDownLabel.innerText = 'Generator Type'
        columnContainer.appendChild(dropDownLabel)

        // add dropdown
        const providerUIProps = {
          type: 'DropDown',
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

        buttonTag.onclick = fakeDataGenerator.deleteColumn.bind(this, fieldId)

        container.appendChild(header)
        container.appendChild(columnContainer)

        document.getElementById('accordion').appendChild(container)

        // render the row so that the widget id is available
        window.Alteryx.Gui.Manager.addWidget(columnContainer)
        $( "#accordion" ).accordion( "refresh" )

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
      getGeneratorCategoryOptionList: () => {
        const optionList = [
          {
            value: 'address',
            label: 'Address'
          },
          {
            value: 'automotive',
            label: 'Automotive'
          },
          {
            value: 'barcode',
            label: 'Barcode'
          },
          {
            value: 'color',
            label: 'Color'
          },
          {
            value: 'company',
            label: 'Company'
          },
          {
            value: 'credCard',
            label: 'Credit Card'
          },
          {
            value: 'currency',
            label: 'Currency'
          },
          {
            value: 'dataTime',
            label: 'Date Time'
          },
          {
            value: 'file',
            label: 'File'
          },
          {
            value: 'internet',
            label: 'Internet'
          },
          {
            value: 'isbn',
            label: 'ISBN'
          },
          {
            value: 'job',
            label: 'Job'
          },
          {
            value: 'lorem',
            label: 'Lorem Ipsum'
          },
          {
            value: 'misc',
            label: 'Misc'
          },
          {
            value: 'person',
            label: 'Person'
          },
          {
            value: 'phoneNumber',
            label: 'Phone Number'
          },
          {
            value: 'profile',
            label: 'Profile'
          },
          {
            value: 'ssn',
            label: 'SSN'
          },
          {
            value: 'userAgent',
            label: 'User Agent'
          },
        ]

        return optionList
      },
      getMiscellaniousOptionList: () => {
        const optionList = [
          {
            value: 'licensePlate',
            label: 'License Plate'
          },
        ]

        return optionList
      },
      getAddressOptionList: () => {
        const optionList = [
          {
            value: 'country',
            label: 'Country'
          },
          {
            value: 'cityPrefix',
            label: 'City Prefix'
          },
          {
            value: 'secondaryAddress',
            label: 'Secondary Address'
          },
          {
            value: 'randomDigit',
            label: 'Random Digit'
          },
          {
            value: 'randomLetter',
            label: 'Random Letter'
          },
          {
            value: 'citySuffix',
            label: 'City Suffix'
          },
          {
            value: 'streetName',
            label: 'Street Name'
          },
          {
            value: 'longitude',
            label: 'Longitude'
          },
          {
            value: 'militaryDPO',
            label: 'Military Diplomatic Post Office'
          },
          {
            value: 'zipCode',
            label: 'Zip Code'
          },
          {
            value: 'buildingNumber',
            label: 'Building Number'
          },
          {
            value: 'militaryShip',
            label: 'Military Ship'
          },
          {
            value: 'streetSuffix',
            label: 'Street Suffix'
          },
          {
            value: 'streetAddress',
            label: 'Street Address'
          },
          {
            value: 'latitude',
            label: 'Latitude'
          },
          {
            value: 'zipCodePlus4',
            label: 'Zip+4'
          },
          {
            value: 'state',
            label: 'State'
          },
          {
            value: 'city',
            label: 'City'
          },
          {
            value: 'militaryAPO',
            label: 'Military Army Post Office'
          },
          {
            value: 'stateAbbr',
            label: 'State Abbreviation'
          },
          {
            value: 'postalCodePlus4',
            label: 'Postal+4'
          },
          {
            value: 'postalCode',
            label: 'Postal Code'
          },
          {
            value: 'countryCode',
            label: 'Country Code'
          },
          {
            value: 'address',
            label: 'Address'
          },
          {
            value: 'postCode',
            label: 'Post Code'
          },
          {
            value: 'militaryState',
            label: 'Military State'
          }
        ]

        return optionList
      },
      getBarcodeOptionList: () => {
        const optionList = [
          {
            value: 'ean8',
            label: 'EAN-8'
          },
          {
            value: 'ean13',
            label: 'EAN-13'
          }
        ]

        return optionList
      },
      getColorOptionList: () => {
        const optionList = [
          {
            value: 'rgbCssColor',
            label: 'RGB CSS Color'
          },
          {
            value: 'hexColor',
            label: 'Hex Color'
          },
          {
            value: 'colorName',
            label: 'Color Name'
          },
          {
            value: 'safeColorName',
            label: 'Safe Color Name'
          },
          {
            value: 'safeHexColor',
            label: 'Sage Hex Color'
          },
          {
            value: 'rgbColor',
            label: 'RGB Color'
          }
        ]

        return optionList
      },
      getCompanyOptionList: () => {
        const optionList = [
          {
            value: 'company',
            label: 'Company'
          },
          {
            value: 'catchPhrase',
            label: 'Catch Phrase'
          },
          {
            value: 'companySuffix',
            label: 'Company Suffix'
          },
          {
            value: 'bs',
            label: 'Buzz Words'
          },
        ]

        return optionList
      },
      getCreditCardOptionList: () => {
        const optionList = [
          {
            value: 'securityCode',
            label: 'Security Code'
          },
          {
            value: 'number',
            label: 'Number'
          },
          {
            value: 'provider',
            label: 'Provider'
          },          {
            value: 'expirationDate',
            label: 'Expiration Date'
          },          {
            value: 'full',
            label: 'Full Info'
          },
        ]

        return optionList
      },
      getCurrencyOptionList: () => {
        const optionList = [
          {
            value: 'cryptoCode',
            label: 'Cryptocurrency Code'
          },
          {
            value: 'currencyCode',
            label: 'Currency Code'
          }
        ]

        return optionList
      },
      getGeneratorOptionListByCategory: (category) => {
        let optionList = []
        switch(category) {
          case 'address':
            return fakeDataGenerator.getAddressOptionList()
            break
          default:
            console.error('Unrecognized category type.')
            break
        }

        return optionList
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
}())
