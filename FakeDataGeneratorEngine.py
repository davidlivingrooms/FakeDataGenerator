import AlteryxPythonSDK
import xml.etree.ElementTree as ET
from faker import Factory
fake = Factory.create()

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
        self.fakeFields = {}

        return

    def output_message(self, method, status, message):
        # helper for printing messages out to the engine
        self.alteryx_engine.output_message(self.n_tool_id, status, method + ': ' + str(message))

    #
    # pi_init will be called when the Engine is ready to give us the tool configuration from the GUI
    #
    def pi_init(self, str_xml):
        try:
            self.output_message('xml', AlteryxPythonSDK.EngineMessageType.info, str_xml) # DEBUG
            root = ET.fromstring(str_xml)
            self.num_records = root.find('NumRecords').text
            self.output_message('num_records', AlteryxPythonSDK.EngineMessageType.info, self.num_records) # DEBUG
            # self.n_record_count = int(root.find('StartValue').text) - 1
            fieldName = root.find('columnName').text
            self.output_message('columnName', AlteryxPythonSDK.EngineMessageType.info, fieldName) # DEBUG
            fakerProvider = root.find('fakerProvider').text
            self.output_message('fakerProvider', AlteryxPythonSDK.EngineMessageType.info, fakerProvider) # DEBUG
            self.fakeFields[fieldName] = fakerProvider
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

    #
    # pi_push_all_records will be called if there are no inputs connected to this tool
    #
    def pi_push_all_records(self, n_record_limit):
        record_info = AlteryxPythonSDK.RecordInfo(self.generic_engine)

        self.output_message('fakeFields', AlteryxPythonSDK.EngineMessageType.info, self.fakeFields) # DEBUG
        for fieldName, fieldProvider in self.fakeFields.items():
            self.output_message('fieldName', AlteryxPythonSDK.EngineMessageType.info, fieldName)
            self.output_message('fieldProvider', AlteryxPythonSDK.EngineMessageType.info, fieldProvider)
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
        self.output_message('fakeFieldsLength', AlteryxPythonSDK.EngineMessageType.info, len(self.fakeFields)) # DEBUG
        self.record_creator = record_info.construct_record_creator()
        self.output_message('recordFieldsLength', AlteryxPythonSDK.EngineMessageType.info, record_info.num_fields) # DEBUG
        for i in range(0, int(self.num_records)):
            for field_num in range(0, record_info.num_fields):
                field = record_info[field_num]
                field.set_from_string(self.record_creator, 'sdf')
                self.output_message('field description', AlteryxPythonSDK.EngineMessageType.info, field.description)
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
