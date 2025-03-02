export default {
    "kind": "collectionType",
    "collectionName": "EmailTemplate",
    "info": {
        "displayName": "Email Template",
        "singularName": "email-template",
        "pluralName": "email-templates",
        "description": ""
    },
    "attributes": {
        "subject": {
            "type": "string"
        },
        "template": {
            "type": "uid",
            "targetField": "subject"
        },
        "content": {
            "type": "richtext"
        }
    },
}