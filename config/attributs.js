let attributs = {

    'iot/services': {
        'readonly': {
            'update': ['_id', 'service', 'subservice', 'apikey', 'resource', '__v'],
            'clone': ['_id', 'service', 'subservice', 'apikey', 'resource', '__v'],
            'create': ['_id', 'service', 'subservice', 'apikey', 'resource', '__v']
        },
        'readwrite': {
            'update': ['entity_type', 'attributes', 'lazy', 'commands', 'internal_attributes', 'static_attributes'],
            'clone': ['entity_type', 'attributes', 'lazy', 'commands', 'internal_attributes', 'static_attributes'],
            'create': ['entity_type', 'attributes', 'lazy', 'commands', 'internal_attributes', 'static_attributes']
        },
        'list': [{ name: 'service', label: 'Service' }, { name: 'subservice', label: 'Service Path' }, { name: 'resource', label: 'Resource' }, { name: 'apikey', label: 'API Key' }],
        'key': '_id'
    },
    'iot/devices': {
        'readonly': ['device_id', 'service', 'service_path'],
        'list': [{ name: 'service', label: 'Service' }, { name: 'service_path', label: 'Service Path' }, { name: 'device_id', label: 'Device ID' }],
        'key': 'device_id'
    }

}

module.exports = attributs