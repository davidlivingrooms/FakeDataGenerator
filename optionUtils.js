const optionUtils = (function() {
    return {
      getGeneratorOptionListByCategory: (category) => {
        let optionList = []
        switch(category) {
          case 'all':
            return optionUtils.getAllOptions()
            break
          case 'address':
            return optionUtils.getAddressOptionList()
            break
          case 'barcode':
            return optionUtils.getBarcodeOptionList()
            break
          case 'color':
            return optionUtils.getColorOptionList()
            break
          case 'company':
            return optionUtils.getCompanyOptionList()
            break
          case 'creditCard':
            return optionUtils.getCreditCardOptionList()
            break
          case 'currency':
            return optionUtils.getCurrencyOptionList()
            break
          case 'dateTime':
            return optionUtils.getDateTimeOptionList()
            break
          case 'file':
            return optionUtils.getFileOptionList()
            break
          case 'internet':
            return optionUtils.getInternetOptionList()
            break
          case 'isbn':
            return optionUtils.getISBNOptionList()
            break
          case 'lorem':
            return optionUtils.getLoremOptionList()
            break
          case 'misc':
            return optionUtils.getMiscellaniousOptionList()
            break
          case 'person':
            return optionUtils.getPersonOptionList()
            break
          case 'userAgent':
            return optionUtils.getUserAgentOptionList()
            break
          default:
            console.error('Unrecognized category type.')
            break
        }

        return optionList
      },
      getAllOptions: () => {
        return optionUtils.getAddressOptionList()
      },
      getGeneratorCategoryOptionList: () => {
        const optionList = [
          {
            value: 'all',
            label: 'All'
          },
          {
            value: 'address',
            label: 'Address'
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
          {
            value: 'boolean',
            label: 'Boolean'
          },
          {
            value: 'locale',
            label: 'Locale'
          },
          {
            value: 'md5',
            label: 'MD5'
          },
          {
            value: 'uuid4',
            label: 'UUID4'
          },
          {
            value: 'binary',
            label: 'Binary'
          },
          {
            value: 'password',
            label: 'Password'
          },
          {
            value: 'sha1',
            label: 'SHA1'
          },
          {
            value: 'sha256',
            label: 'SHA256'
          },
          {
            value: 'languageCode',
            label: 'Language Code'
          },
          {
            value: 'nullBoolean',
            label: 'Null Boolean'
          },
          {
            value: 'phoneNumber',
            label: 'Phone Number'
          },
          {
            value: 'ssn',
            label: 'Social Security Number'
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
      getDateTimeOptionList: () => {
        const optionList = [
          {
            value: 'dateTimeThisYear',
            label: 'DateTime This Year'
          },
          {
            value: 'pastDate',
            label: 'Past Date'
          },          
          {
            value: 'timeZone',
            label: 'Time Zone'
          },          
          {
            value: 'timeDelta',
            label: 'DateTime This Year'
          },
          {
            value: 'futureDate',
            label: 'Future Date'
          },
          {
            value: 'dateTimeThisDecade',
            label: 'DateTime This Decade'
          },
          {
            value: 'dateTime',
            label: 'DateTime'
          },
          {
            value: 'dayOfWeek',
            label: 'Day Of Week'
          },
          {
            value: 'pastDateTime',
            label: 'Past DateTime'
          },
          {
            value: 'iso8601',
            label: 'ISO 8601 DateTime'
          },
          {
            value: 'dayOfMonth',
            label: 'Day Of Month'
          },
          {
            value: 'futureDateTime',
            label: 'Future DateTime'
          },
          {
            value: 'time',
            label: 'Time'
          },
          {
            value: 'date',
            label: 'Date'
          },
          {
            value: 'century',
            label: 'Century'
          },
          {
            value: 'year',
            label: 'Year'
          },
          {
            value: 'dateTimeThisMonth',
            label: 'DateTime This Month'
          },
          {
            value: 'month',
            label: 'Month'
          },
          {
            value: 'monthName',
            label: 'Month Name'
          },
          {
            value: 'unixTime',
            label: 'Unix Time'
          },
        ]

        return optionList
      },
      getFileOptionList: () => {
        const optionList = [
          {
            value: 'fileName',
            label: 'File Name'
          },
          {
            value: 'fileExtension',
            label: 'File Extension'
          },          
          {
            value: 'mimeType',
            label: 'Mime Type'
          },         
          {
            value: 'filePath',
            label: 'File Path'
          },
        ]

        return optionList
      },
      getInternetOptionList: () => {
        const optionList = [
          {
            value: 'imageUrl',
            label: 'Image URL'
          },
          {
            value: 'macAddress',
            label: 'Mac Address'
          },          
          {
            value: 'uriExtension',
            label: 'URI Extension'
          },         
          {
            value: 'safeEmail',
            label: 'Safe Email'
          },
          {
            value: 'freeEmail',
            label: 'Free Email'
          },         
          {
            value: 'uri',
            label: 'URI'
          },         
          {
            value: 'domainName',
            label: 'Domain Name'
          },         
          {
            value: 'companyEmail',
            label: 'Company Email'
          },         
          {
            value: 'freeEmailDomain',
            label: 'Free Email Domain'
          },         
          {
            value: 'ipv4',
            label: 'IPv4 Address'
          },         
          {
            value: 'email',
            label: 'Email'
          },         
          {
            value: 'userName',
            label: 'UserName'
          },         
          {
            value: 'tld',
            label: 'Top Level Domain'
          },
          {
            value: 'url',
            label: 'URL'
          },                  
          {
            value: 'uriPath',
            label: 'URI Path'
          },                  
          {
            value: 'slug',
            label: 'Slug'
          },                  
          {
            value: 'uriPage',
            label: 'URI Page'
          },                  
          {
            value: 'ipv6',
            label: 'IPV6 Address'
          },                  
          {
            value: 'domainWord',
            label: 'Domain Word'
          },         
        ]

        return optionList
      },
      getISBNOptionList: () => {
        const optionList = [
          {
            value: 'isbn10',
            label: 'ISBN 10'
          },
          {
            value: 'isbn13',
            label: 'ISBN 13'
          },          
        ]

        return optionList
      },
     getLoremOptionList: () => {
        const optionList = [
          {
            value: 'sentence',
            label: 'Sentence'
          },
          {
            value: 'paragraph',
            label: 'Paragraph'
          },          
          {
            value: 'word',
            label: 'Word'
          },         
        ]

        return optionList
      },
     getPersonOptionList: () => {
        const optionList = [
          {
            value: 'prefixFemale',
            label: 'Prefix Female'
          },
          {
            value: 'firstName',
            label: 'First Name'
          },          
          {
            value: 'firstNameMale',
            label: 'First Name Male'
          },         
          {
            value: 'name',
            label: 'Full Name'
          },
          {
            value: 'nameMale',
            label: 'Full Name Male'
          },         
          {
            value: 'suffix',
            label: 'Suffix'
          },         
          {
            value: 'lastName',
            label: 'Last Name'
          },         
          {
            value: 'firstNameFemale',
            label: 'First Name Female'
          },         
          {
            value: 'fullNameFemale',
            label: 'Full Name Female'
          },         
          {
            value: 'prefix',
            label: 'Prefix'
          },         
        ]

        return optionList
      },
      getUserAgentOptionList: () => {
        const optionList = [
          {
            value: 'chrome',
            label: 'Chrome (User Agent)'
          },
          {
            value: 'firefox',
            label: 'FireFox (User Agent)'
          },          
          {
            value: 'opera',
            label: 'Opera (User Agent)'
          },         
          {
            value: 'safari',
            label: 'Safari (User Agent)'
          },
          {
            value: 'internetExplorer',
            label: 'Internet Explorer (User Agent)'
          },         
          {
            value: 'windowsPlatformToken',
            label: 'Windows Platform Token'
          },         
          {
            value: 'linuxPlatformToken',
            label: 'Windows Platform Token'
          },         
          {
            value: 'userAgent',
            label: 'User Agent'
          },         
          {
            value: 'macPlatformToken',
            label: 'Mac Plaform Token'
          },         
        ]

        return optionList
      },
      optionSorter: (option1, option2) => {
        return option1.label.localeCompare(option2.label)
      }
    }
}())
