import AlteryxPythonSDK
import xml.etree.ElementTree as ET
from faker import Factory
from enum import Enum
import random

class LowQualityTypes(Enum):
    LEADING_SPACE = 1,
    TRAILING_SPACE = 2,
    EMPTY = 3,
    NULL = 4,

class AyxPlugin:
    def __init__(self, n_tool_id, alteryx_engine, generic_engine, output_anchor_mgr):
        # initialize *all* members that will be used (for PEP8 compliance)

        # miscellaneous variables
        self.n_tool_id = n_tool_id
        self.name = str('FakeDataGenerator_') + str(self.n_tool_id)
        self.initialized = False

        # engine handles
        self.alteryx_engine = alteryx_engine
        self.generic_engine = generic_engine

        # output anchor management
        self.output_anchor_mgr = output_anchor_mgr
        self.output_anchor = None

        # record management
        self.record_info_in = None
        self.record_info_out = None
        self.record_creator = None
        self.record_copier = None
        self.output_field = None

        # default config settings
        self.str_record_id = None
        self.n_record_count = None
        self.output_type = None

        self.num_records = 0
        self.fake_fields = {}
        self.locale = ''
        self.fake = None
        self.is_in_chaos_mode = False
        self.probability_of_low_quality_data = 0

        return

    def output_message(self, method, status, message):
        # helper for printing messages out to the engine
        self.alteryx_engine.output_message(self.n_tool_id, status, method + ': ' + str(message))

    #
    # pi_init will be called when the Engine is ready to give us the tool configuration from the GUI
    #
    def pi_init(self, str_xml):
        try:
            root = ET.fromstring(str_xml)
            self.num_records = root.find('NumRecords').text
            fake_fields = root.find('FakeFields')
            locale = root.find('Locale').text
            self.output_message('locale', AlteryxPythonSDK.EngineMessageType.info, locale) # DEBUG
            self.fake = Factory.create(locale)
            # self.output_message('is_in_chaos_modebool', AlteryxPythonSDK.EngineMessageType.info, root.find('ChaosMode').text) # DEBUG
            self.is_in_chaos_mode = root.find('ChaosMode').text == 'True'
            self.probability_of_low_quality_data = 100 - int(root.find('DataQualityPercentage').text)
            # self.output_message('is_in_chaos_mode', AlteryxPythonSDK.EngineMessageType.info, str(self.is_in_chaos_mode)) # DEBUG
            # self.output_message('locale', AlteryxPythonSDK.EngineMessageType.info, self.locale) # DEBUG
            for field in fake_fields:
                self.fake_fields[field.find('FieldName').text] = field.find('Provider').text
        except AttributeError:
            self.output_message('pi_init', AlteryxPythonSDK.EngineMessageType.info, 'Invalid XML: ' + str_xml)
            raise

        #
        # the Engine is ready for us to get the Output anchor. We know it is called 'Output' because
        # that is what we put in our Config.xml as its name
        #
        self.output_anchor = self.output_anchor_mgr.get_output_anchor('Output')

        return

    #
    # pi_close will be called after all the records have been processed
    #
    def pi_close(self, b_has_errors):
        return

    #
    # pi_add_incoming_connection will be called when a new input is connected to this tool
    #
    def pi_add_incoming_connection(self, str_type, str_name):
        return self

    #
    # pi_add_outgoing_connection will be called when a new output is connected to this tool
    #
    def pi_add_outgoing_connection(self, str_name):
        return True

    def get_generated_value_from_provider(self, provider):
        # self.output_message('provider', AlteryxPythonSDK.EngineMessageType.info, provider)
        generated_value = ''
        if provider == 'address':
            generated_value = self.fake.address()
        elif provider == 'country':
            generated_value = self.fake.country()
        elif provider == 'name':
            generated_value = self.fake.name()
        elif provider == 'phone_number':
            generated_value = self.fake.phone_number()
        elif provider == 'mac_address':
            generated_value = self.fake.mac_address()
        elif provider == 'user_name':
            generated_value = self.fake.user_name()
        elif provider == 'url':
            generated_value = self.fake.url()
        elif provider == 'image_url':
            generated_value = self.fake.image_url()
        elif provider == 'company':
            generated_value = self.fake.company()
        elif provider == 'bs':
            generated_value = self.fake.bs()
        elif provider == 'day_of_week':
            generated_value = self.fake.day_of_week()
        elif provider == 'free_email':
            generated_value = self.fake.free_email()
        elif provider == 'job':
            generated_value = self.fake.job()
        elif provider == 'ean8':
            generated_value = self.fake.ean8()
        elif provider == 'credit_card_full':
            generated_value = self.fake.credit_card_full()
        elif provider == 'paragraph':
            generated_value = self.fake.paragraph()
        elif provider == 'text':
            generated_value = self.fake.text()
        elif provider == 'binary':
            generated_value = self.fake.binary()
        elif provider == 'file_path':
            generated_value = self.fake.file_path()
        elif provider == 'sha256':
            generated_value = self.fake.sha256()
        elif provider == 'md5':
            generated_value = self.fake.md5()
        elif provider == 'password':
            generated_value = self.fake.password()
        elif provider == 'license_plate':
            generated_value = self.fake.license_plate()
        elif provider == 'isbn13':
            generated_value = self.fake.isbn13()
        elif provider == 'latitude':
            generated_value = self.fake.latitude()
        elif provider == 'longitude':
            generated_value = self.fake.longitude()
        elif provider == 'simple_profile':
            generated_value = self.fake.simple_profile()
        elif provider == 'ssn':
            generated_value = self.fake.ssn()
        elif provider == 'user_agent':
            generated_value = self.fake.user_agent()
        elif provider == 'simple_profile':
            generated_value = self.fake.simple_profile()
        elif provider == 'profile':
            generated_value = self.fake.profile()
        elif provider == 'ipv4':
            generated_value = self.fake.ipv4()
        elif provider == 'ipv6':
            generated_value = self.fake.ipv6()
        else:
            return 'No Provider found'

        return generated_value

    def should_give_low_quality_value(self, probability_of_low_quality_data):
        should_give_low_quality_value = False
        random_number = random.randint(0, 100)
        if (random_number <= probability_of_low_quality_data):
            should_give_low_quality_value = True

        return should_give_low_quality_value

    def chaotically_set_field_value(self, field, record_creator):
        random_low_quality_type = random.choice(list(LowQualityTypes))
        self.output_message('chaotic type ', AlteryxPythonSDK.EngineMessageType.info,random_low_quality_type) # DEBUG
        if random_low_quality_type == LowQualityTypes.EMPTY:
            field.set_null(record_creator)
        elif random_low_quality_type == LowQualityTypes.NULL:
            field.set_null(record_creator)
        else:
            field.set_null(record_creator)

        return None

    #
    # pi_push_all_records will be called if there are no inputs connected to this tool
    #
    def pi_push_all_records(self, n_record_limit):
        record_info = AlteryxPythonSDK.RecordInfo(self.generic_engine)
        for fieldName, fieldProvider in self.fake_fields.items():
            # add_field(field_name, type, size, scale, source, description)
            record_info.add_field(
                fieldName,
                AlteryxPythonSDK.FieldType.v_wstring, # support other data types in the future
                10000,
                0,
                self.name,
                'A generated field'
            )

        self.output_anchor.init(record_info, '')
        self.record_creator = record_info.construct_record_creator()
        self.output_message('num records', AlteryxPythonSDK.EngineMessageType.info, self.num_records) # DEBUG
        num_records = int(self.num_records)
        for i in range(0, num_records):
            j = 0
            for field_name, field_provider in self.fake_fields.items():
                field = record_info[j]
                if (self.is_in_chaos_mode and self.should_give_low_quality_value(self.probability_of_low_quality_data)):
                    self.chaotically_set_field_value(field, self.record_creator)
                    # pass field into method that determines what happens to it
                else:
                    field_value = str(self.get_generated_value_from_provider(field_provider))
                    field.set_from_string(self.record_creator, field_value) # TODO eventually generate different types besides string
                # pass in field or determine whether or not to set here
                j = j + 1

            out_record = self.record_creator.finalize_record()
            self.output_anchor.push_record(out_record, False)
            self.record_creator.reset(0)

        return True

    #
    # ii_init will be called when an incoming connection has been initalized and has told the Engine
    #   what its output will look like. record_info_in represents what the incoming record will look like
    #
    def ii_init(self, record_info_in):
        self.output_message(
            'ii_init'
            , AlteryxPythonSDK.EngineMessageType.error
            , 'This tool does not accept an Incoming Connection'
        )
        return False

    #
    # ii_push_record will be called every time we get a new record from the upstream tool
    #
    def ii_push_record(self, in_record):
        self.output_message(
            'ii_push_record'
            , AlteryxPythonSDK.EngineMessageType.error
            , 'This tool does not accept an Incoming Connection'
        )
        return False

    #
    # ii_update_progress will be called periodically from the upstream tools, where they will tell us how far along
    #   they are in processing their data. If our tool needs to do any custom logic about how much work it has left to
    #   do, that logic should happen in here
    #
    def ii_update_progress(self, d_percent):
        self.output_message(
            'ii_update_progress'
            , AlteryxPythonSDK.EngineMessageType.error
            , 'This tool does not accept an Incoming Connection'
        )
        return

    #
    # ii_close will be called when the upstream tool is finished
    #
    def ii_close(self):
        self.output_message(
            'ii_close'
            , AlteryxPythonSDK.EngineMessageType.error
            , 'This tool does not accept an Incoming Connection'
        )
        return
