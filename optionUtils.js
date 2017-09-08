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
          case 'image':
            return optionUtils.getImageOptionList()
            break
          case 'company':
            return optionUtils.getCompanyOptionList()
            break
          case 'finance':
            return optionUtils.getFinanceOptionList()
            break
          case 'commerce':
            return optionUtils.getCommerceOptionList()
            break
          case 'dateTime':
            return optionUtils.getDateTimeOptionList()
            break
          case 'system':
            return optionUtils.getSystemOptionList()
            break
          case 'internet':
            return optionUtils.getInternetOptionList()
            break
          case 'lorem':
            return optionUtils.getLoremOptionList()
            break
          case 'person':
            return optionUtils.getPersonOptionList()
            break
          case 'database':
            return optionUtils.getDatabaseOptionList()
            break
          default:
            console.error('Unrecognized category type: ' + category)
            break
        }

        return optionList
      },
      getAllOptions: () => {
        return optionUtils.getAddressOptionList().concat(
          optionUtils.getImageOptionList(),
          optionUtils.getCommerceOptionList(),
          optionUtils.getCompanyOptionList(),
          optionUtils.getFinanceOptionList(),
          optionUtils.getDateTimeOptionList(),
          optionUtils.getSystemOptionList(),
          optionUtils.getInternetOptionList(),
          optionUtils.getLoremOptionList(),
          optionUtils.getDatabaseOptionList(),
          optionUtils.getPersonOptionList()).sort(optionUtils.optionSorter)
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
            value: 'company',
            label: 'Company'
          },
          {
            value: 'commerce',
            label: 'Commerce'
          },
          {
            value: 'database',
            label: 'Database'
          },
          {
            value: 'dateTime',
            label: 'Date Time'
          },
          {
            value: 'finance',
            label: 'Finance'
          },
          {
            value: 'internet',
            label: 'Internet'
          },
          {
            value: 'lorem',
            label: 'Lorem Ipsum'
          },
          {
            value: 'person',
            label: 'Person'
          },
          {
            value: 'image',
            label: 'Image'
          },
          {
            value: 'system',
            label: 'System'
          }
        ]

        return optionList
      },
      getAddressOptionList: () => {
        const optionList = [
          {
            value: 'addressCountry',
            label: '(Address) Country'
          },
          {
            value: 'addressCounty',
            label: '(Address) County'
          },
          {
            value: 'addressCityPrefix',
            label: '(Address) City Prefix'
          },
          {
            value: 'addressSecondaryAddress',
            label: '(Address) Secondary Address'
          },
          {
            value: 'addressCitySuffix',
            label: '(Address) City Suffix'
          },
          {
            value: 'addressStreetName',
            label: '(Address) Street Name'
          },
          {
            value: 'addressLongitude',
            label: '(Address) Longitude'
          },
          {
            value: 'addressZipCode',
            label: '(Address) Zip Code'
          },
          {
            value: 'addressStreetSuffix',
            label: '(Address) Street Suffix'
          },
          {
            value: 'addressStreetPrefix',
            label: '(Address) Street Prefix'
          },
          {
            value: 'addressStreetAddress',
            label: '(Address) Street Address'
          },
          {
            value: 'addressLatitude',
            label: '(Address) Latitude'
          },
          {
            value: 'addressState',
            label: '(Address) State'
          },
          {
            value: 'addressCity',
            label: '(Address) City'
          },
          {
            value: 'addressStateAbbr',
            label: '(Address) State Abbreviation'
          },
          {
            value: 'addressCountryCode',
            label: '(Address) Country Code'
          },
        ]

        return optionList
      },
      getImageOptionList: () => {
        const optionList = [
          {
            value: 'imageUrl',
            label: '(Image) URL'
          },
          {
            value: 'imageAvatar',
            label: '(Image) Avatar'
          },
          {
            value: 'imageAbstract',
            label: '(Image) Abstract'
          },
          {
            value: 'imageAnimals',
            label: '(Image) Animals'
          },
          {
            value: 'imageBusiness',
            label: '(Image) Business'
          },
          {
            value: 'imageCats',
            label: '(Image) Cats'
          },
          {
            value: 'imageCity',
            label: '(Image) City'
          },
          {
            value: 'imageFood',
            label: '(Image) Food'
          },
          {
            value: 'imageNightLife',
            label: '(Image) Night Life'
          },
          {
            value: 'imageFashion',
            label: '(Image) Fashion'
          },
          {
            value: 'imagePeople',
            label: '(Image) People'
          },
          {
            value: 'imageNature',
            label: '(Image) Nature'
          },
          {
            value: 'imageSports',
            label: '(Image) Sports'
          },
          {
            value: 'imageTechnics',
            label: '(Image) Technics'
          },
          {
            value: 'imageTransport',
            label: '(Image) Transport'
          },
          {
            value: 'imageDataUri',
            label: '(Image) Data URI'
          },
        ]

        return optionList
      },
      getCompanyOptionList: () => {
        const optionList = [
          {
            value: 'companyName',
            label: '(Company) Name'
          },
          {
            value: 'companyCatchPhrase',
            label: '(Company) Catch Phrase'
          },
          {
            value: 'companyDepartment',
            label: '(Company) Department'
          },
          {
            value: 'companySuffix',
            label: '(Company) Suffix'
          },
          {
            value: 'companyBS',
            label: '(Company) Buzz Words'
          },
        ]

        return optionList
      },
      getDatabaseOptionList: () => {
        const optionList = [
          {
            value: 'databaseColumn',
            label: '(Database) Column'
          },
          {
            value: 'databaseType',
            label: '(Database) Column Type'
          },
          {
            value: 'databaseCollation',
            label: '(Database) Collation'
          },
          {
            value: 'databaseEngine',
            label: '(Database) Engine'
          },
        ]

        return optionList
      },
      getCommerceOptionList: () => {
        const optionList = [
          {
            value: 'commerceProductName',
            label: '(Commerce) Product Name'
          },
          {
            value: 'commercePrice',
            label: '(Commerce) Price'
          },
          {
            value: 'commerceProductAdjective',
            label: '(Commerce) Product Adjective'
          },          
          {
            value: 'commerceProductMaterial',
            label: '(Commerce) Product Material'
          },          
          {
            value: 'commerceProduct',
            label: '(Commerce) Product'
          },
          {
            value: 'commerceProductName',
            label: '(Commerce) Product Name'
          },
        ]

        return optionList
      },
      getFinanceOptionList: () => {
        const optionList = [
          {
            value: 'financeAccountNumber',
            label: '(Finance) Account Number'
          },
          {
            value: 'financeAccountName',
            label: '(Finance) Account Name'
          },
          {
            value: 'financeMask',
            label: '(Finance) Mask'
          },
          {
            value: 'financeAccountAmount',
            label: '(Finance) Account Amount'
          },
          {
            value: 'financeTransactionType',
            label: '(Finance) Transaction Type'
          },
          {
            value: 'financeCurrencyCode',
            label: '(Finance) Currency Code'
          },
          {
            value: 'financeCurrencyName',
            label: '(Finance) Currency Name'
          },
          {
            value: 'financeCurrencySymbol',
            label: '(Finance) Currency Symbol'
          },
          {
            value: 'financeBitCoinAddress',
            label: '(Finance) BitCoin Address'
          },
          {
            value: 'financeIBAN',
            label: '(Finance) IBAN'
          },
          {
            value: 'financeBIC',
            label: '(Finance) BIC'
          },
        ]

        return optionList
      },
      getDateTimeOptionList: () => {
        const optionList = [
          {
            value: 'dateMonth',
            label: '(DateTime) Month'
          },
          {
            value: 'dateDayOfWeek',
            label: '(DateTime) Day Of Week'
          },
          {
            value: 'datePastDateTime',
            label: '(DateTime) Past DateTime'
          },
          {
            value: 'dateFutureDateTime',
            label: '(DateTime) Future DateTime'
          },
        ]

        return optionList
      },
      getSystemOptionList: () => {
        const optionList = [
          {
            value: 'systemFileName',
            label: '(System) File Name'
          },
          {
            value: 'systemCommonFileName',
            label: '(System) Common File Name'
          },
          {
            value: 'systemMimeType',
            label: '(System) Mime Type'
          },
          {
            value: 'systemCommonFileType',
            label: '(System) Common File Type'
          },
          {
            value: 'systemCommonFileExt',
            label: '(System) Common File Extension'
          },
          {
            value: 'systemFileType',
            label: '(System) File Type'
          },
          {
            value: 'systemFileExt',
            label: '(System) File Extension'
          },
          {
            value: 'systemSemver',
            label: '(System) SemVer'
          },
        ]

        return optionList
      },
      getInternetOptionList: () => {
        const optionList = [
          {
            value: 'internetEmail',
            label: '(Internet) Email'
          },
          {
            value: 'internetUserName',
            label: '(Internet) UserName'
          },          
          {
            value: 'internetProtocol',
            label: '(Internet) Protocol'
          },        
          {
            value: 'internetURL',
            label: '(Internet) URL'
          },        
          {
            value: 'internetDomainName',
            label: '(Internet) Domain Name'
          },        
          {
            value: 'internetDomainSuffix',
            label: '(Internet) Domain Suffix'
          },        
          {
            value: 'internetDomainWord',
            label: '(Internet) Domain Word'
          },        
          {
            value: 'internetIP',
            label: '(Internet) IPv4'
          },        
          {
            value: 'internetIPV6',
            label: '(Internet) IPv6'
          },        
          {
            value: 'internetUserAgent',
            label: '(Internet) User Agent'
          },        
          {
            value: 'internetMacAddress',
            label: '(Internet) Mac Address'
          },         
          {
            value: 'internetPassword',
            label: '(Internet) Password'
          },         
        ]

        return optionList
      },
     getLoremOptionList: () => {
        const optionList = [
          {
            value: 'loremWord',
            label: '(Lorem) Word'
          },
          {
            value: 'loremWords',
            label: '(Lorem) Words'
          },
          {
            value: 'loremSentence',
            label: '(Lorem) Sentence'
          },
          {
            value: 'loremSlug',
            label: '(Lorem) Slug'
          },
          {
            value: 'loremSentences',
            label: '(Lorem) Sentences'
          },
          {
            value: 'loremParagraph',
            label: '(Lorem) Paragraph'
          },
          {
            value: 'loremParagraphs',
            label: '(Lorem) Paragraphs'
          },
          {
            value: 'loremText',
            label: '(Lorem) Text'
          },
          {
            value: 'loremLines',
            label: '(Lorem) Lines'
          },
        ]

        return optionList
      },
     getPersonOptionList: () => {
        const optionList = [
          {
            value: 'nameFirstName',
            label: '(Person) First Name'
          },         
          {
            value: 'nameLastName',
            label: '(Person) Last Name'
          }, 
          {
            value: 'nameFullName',
            label: '(Person) Full Name'
          }, 
          {
            value: 'nameJobTitle',
            label: '(Person) Job Title'
          }, 
          {
            value: 'namePrefix',
            label: '(Person) Name Prefix'
          }, 
          {
            value: 'nameSuffix',
            label: '(Person) Name Suffix'
          }, 
          {
            value: 'nameTitle',
            label: '(Person) Name Title'
          }, 
          {
            value: 'namePhoneNumber',
            label: '(Person) Phone Number'
          }, 
          {
            value: 'nameJobDescriptor',
            label: '(Person) Job Descriptor'
          }, 
          {
            value: 'nameJobArea',
            label: '(Person) Job Area'
          }, 
          {
            value: 'nameJobType',
            label: '(Person) Job Type'
          }, 
        ]

        return optionList
      },
      optionSorter: (option1, option2) => {
        return option1.label.localeCompare(option2.label)
      }
    }
}())
