/**
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 EclipseSource Munich
 * Licensed under MIT
 * https://github.com/eclipsesource/jsonforms-editor/blob/master/LICENSE
 * ---------------------------------------------------------------------
 */
import { SchemaService } from '@jsonforms/editor/src';

const exampleSchema = {
    "type": "object",
    "properties": {
        "digitalCalibrationCertificate": {
            "type": "object",
            "required": [
                "administrativeData",
                "measurementResults",
                "schemaVersion"
            ],
            "properties": {
                "administrativeData": {
                    "type": "object",
                    "required": [
                        "dccSoftware",
                        "coreData",
                        "items",
                        "calibrationLaboratory",
                        "respPersons",
                        "customer"
                    ],
                    "properties": {
                        "dccSoftware": {
                            "type": "object",
                            "required": [
                                "software"
                            ],
                            "properties": {
                                "software": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "required": [
                                            "name",
                                            "release"
                                        ],
                                        "properties": {
                                            "name": {
                                                "type": "object",
                                                "required": [
                                                    "content"
                                                ],
                                                "properties": {
                                                    "content": {
                                                        "type": "string"
                                                    },
                                                    "id": {
                                                        "type": "string"
                                                    }
                                                }
                                            },
                                            "release": {
                                                "type": "string"
                                            },
                                            "id": {
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "minItems": 1
                                }
                            }
                        },
                        "coreData": {
                            "type": "object",
                            "required": [
                                "countryCodeISO3166_1",
                                "usedLangCodeISO639_1",
                                "mandatoryLangCodeISO639_1",
                                "uniqueIdentifier",
                                "beginPerformanceDate",
                                "endPerformanceDate"
                            ],
                            "properties": {
                                "countryCodeISO3166_1": {
                                    "type": "string"
                                },
                                "usedLangCodeISO639_1": {
                                    "type": "string"
                                },
                                "mandatoryLangCodeISO639_1": {
                                    "type": "string"
                                },
                                "uniqueIdentifier": {
                                    "type": "string"
                                },
                                "identifications": {
                                    "type": "object",
                                    "required": [
                                        "identification"
                                    ],
                                    "properties": {
                                        "identification": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "required": [
                                                    "issuer",
                                                    "value"
                                                ],
                                                "properties": {
                                                    "issuer": {
                                                        "type": "string",
                                                        "enum": [
                                                            "manufacturer",
                                                            "calibrationLaboratory",
                                                            "customer",
                                                            "owner",
                                                            "other"
                                                        ]
                                                    },
                                                    "value": {
                                                        "type": "string"
                                                    },
                                                    "description": {
                                                        "type": "object",
                                                        "required": [
                                                            "content"
                                                        ],
                                                        "properties": {
                                                            "content": {
                                                                "type": "string"
                                                            },
                                                            "id": {
                                                                "type": "string"
                                                            }
                                                        }
                                                    },
                                                    "id": {
                                                        "type": "string"
                                                    },
                                                    "refType": {
                                                        "type": "string"
                                                    }
                                                }
                                            },
                                            "minItems": 1
                                        }
                                    }
                                },
                                "beginPerformanceDate": {
                                    "type": "string",
                                    "format": "date"
                                },
                                "endPerformanceDate": {
                                    "type": "string",
                                    "format": "date"
                                }
                            }
                        },
                        "items": {
                            "type": "object",
                            "required": [
                                "item"
                            ],
                            "properties": {
                                "item": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "required": [
                                            "name",
                                            "manufacturer",
                                            "identifications"
                                        ],
                                        "properties": {
                                            "name": {
                                                "type": "object",
                                                "required": [
                                                    "content"
                                                ],
                                                "properties": {
                                                    "content": {
                                                        "type": "string"
                                                    },
                                                    "id": {
                                                        "type": "string"
                                                    }
                                                }
                                            },
                                            "description": {
                                                "type": "object",
                                                "required": [
                                                    "content"
                                                ],
                                                "properties": {
                                                    "content": {
                                                        "type": "string"
                                                    },
                                                    "id": {
                                                        "type": "string"
                                                    }
                                                }
                                            },
                                            "manufacturer": {
                                                "type": "object",
                                                "required": [
                                                    "name"
                                                ],
                                                "properties": {
                                                    "name": {
                                                        "type": "object",
                                                        "required": [
                                                            "content"
                                                        ],
                                                        "properties": {
                                                            "content": {
                                                                "type": "string"
                                                            },
                                                            "id": {
                                                                "type": "string"
                                                            }
                                                        }
                                                    },
                                                    "eMail": {
                                                        "type": "string"
                                                    },
                                                    "phone": {
                                                        "type": "string"
                                                    },
                                                    "fax": {
                                                        "type": "string"
                                                    },
                                                    "location": {
                                                        "type": "object",
                                                        "required": [
                                                            "countryCode"
                                                        ],
                                                        "properties": {
                                                            "city": {
                                                                "type": "string"
                                                            },
                                                            "countryCode": {
                                                                "type": "string"
                                                            },
                                                            "postCode": {
                                                                "type": "string"
                                                            },
                                                            "postOfficeBox": {
                                                                "type": "string"
                                                            },
                                                            "state": {
                                                                "type": "string"
                                                            },
                                                            "street": {
                                                                "type": "string"
                                                            },
                                                            "streetNo": {
                                                                "type": "string"
                                                            },
                                                            "further": {
                                                                "type": "object",
                                                                "required": [
                                                                    "content"
                                                                ],
                                                                "properties": {
                                                                    "content": {
                                                                        "type": "string"
                                                                    },
                                                                    "id": {
                                                                        "type": "string"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "id": {
                                                        "type": "string"
                                                    }
                                                }
                                            },
                                            "model": {
                                                "type": "string"
                                            },
                                            "identifications": {
                                                "type": "object",
                                                "required": [
                                                    "identification"
                                                ],
                                                "properties": {
                                                    "identification": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "object",
                                                            "required": [
                                                                "issuer",
                                                                "value"
                                                            ],
                                                            "properties": {
                                                                "issuer": {
                                                                    "type": "string",
                                                                    "enum": [
                                                                        "manufacturer",
                                                                        "calibrationLaboratory",
                                                                        "customer",
                                                                        "owner",
                                                                        "other"
                                                                    ]
                                                                },
                                                                "value": {
                                                                    "type": "string"
                                                                },
                                                                "description": {
                                                                    "type": "object",
                                                                    "required": [
                                                                        "content"
                                                                    ],
                                                                    "properties": {
                                                                        "content": {
                                                                            "type": "string"
                                                                        },
                                                                        "id": {
                                                                            "type": "string"
                                                                        }
                                                                    }
                                                                },
                                                                "id": {
                                                                    "type": "string"
                                                                },
                                                                "refType": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        },
                                                        "minItems": 1
                                                    }
                                                }
                                            },
                                            "id": {
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "minItems": 1
                                }
                            }
                        },
                        "calibrationLaboratory": {
                            "type": "object",
                            "required": [
                                "contact"
                            ],
                            "properties": {
                                "calibrationLaboratoryCode": {
                                    "type": "string"
                                },
                                "contact": {
                                    "type": "object",
                                    "required": [
                                        "name",
                                        "eMail",
                                        "location"
                                    ],
                                    "properties": {
                                        "name": {
                                            "type": "object",
                                            "required": [
                                                "content"
                                            ],
                                            "properties": {
                                                "content": {
                                                    "type": "string"
                                                },
                                                "id": {
                                                    "type": "string"
                                                }
                                            }
                                        },
                                        "eMail": {
                                            "type": "string"
                                        },
                                        "phone": {
                                            "type": "string"
                                        },
                                        "fax": {
                                            "type": "string"
                                        },
                                        "location": {
                                            "type": "object",
                                            "required": [
                                                "countryCode"
                                            ],
                                            "properties": {
                                                "city": {
                                                    "type": "string"
                                                },
                                                "countryCode": {
                                                    "type": "string"
                                                },
                                                "postCode": {
                                                    "type": "string"
                                                },
                                                "postOfficeBox": {
                                                    "type": "string"
                                                },
                                                "state": {
                                                    "type": "string"
                                                },
                                                "street": {
                                                    "type": "string"
                                                },
                                                "streetNo": {
                                                    "type": "string"
                                                },
                                                "further": {
                                                    "type": "object",
                                                    "required": [
                                                        "content"
                                                    ],
                                                    "properties": {
                                                        "content": {
                                                            "type": "string"
                                                        },
                                                        "id": {
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "id": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "respPersons": {
                            "type": "object",
                            "required": [
                                "respPerson"
                            ],
                            "properties": {
                                "respPerson": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "required": [
                                            "person"
                                        ],
                                        "properties": {
                                            "person": {
                                                "type": "object",
                                                "required": [
                                                    "name"
                                                ],
                                                "properties": {
                                                    "name": {
                                                        "type": "object",
                                                        "required": [
                                                            "content"
                                                        ],
                                                        "properties": {
                                                            "content": {
                                                                "type": "string"
                                                            },
                                                            "id": {
                                                                "type": "string"
                                                            }
                                                        }
                                                    },
                                                    "eMail": {
                                                        "type": "string"
                                                    },
                                                    "phone": {
                                                        "type": "string"
                                                    },
                                                    "fax": {
                                                        "type": "string"
                                                    },
                                                    "location": {
                                                        "type": "object",
                                                        "required": [
                                                            "countryCode"
                                                        ],
                                                        "properties": {
                                                            "city": {
                                                                "type": "string"
                                                            },
                                                            "countryCode": {
                                                                "type": "string"
                                                            },
                                                            "postCode": {
                                                                "type": "string"
                                                            },
                                                            "postOfficeBox": {
                                                                "type": "string"
                                                            },
                                                            "state": {
                                                                "type": "string"
                                                            },
                                                            "street": {
                                                                "type": "string"
                                                            },
                                                            "streetNo": {
                                                                "type": "string"
                                                            },
                                                            "further": {
                                                                "type": "object",
                                                                "required": [
                                                                    "content"
                                                                ],
                                                                "properties": {
                                                                    "content": {
                                                                        "type": "string"
                                                                    },
                                                                    "id": {
                                                                        "type": "string"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "id": {
                                                        "type": "string"
                                                    }
                                                }
                                            },
                                            "description": {
                                                "type": "object",
                                                "required": [
                                                    "content"
                                                ],
                                                "properties": {
                                                    "content": {
                                                        "type": "string"
                                                    },
                                                    "id": {
                                                        "type": "string"
                                                    }
                                                }
                                            },
                                            "role": {
                                                "type": "string",
                                                "enum": [
                                                    "supervisor",
                                                    "technician",
                                                    "witness"
                                                ]
                                            },
                                            "mainSigner": {
                                                "type": "boolean"
                                            },
                                            "id": {
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "minItems": 1
                                }
                            }
                        },
                        "customer": {
                            "type": "object",
                            "required": [
                                "name",
                                "eMail",
                                "location"
                            ],
                            "properties": {
                                "name": {
                                    "type": "object",
                                    "required": [
                                        "content"
                                    ],
                                    "properties": {
                                        "content": {
                                            "type": "string"
                                        },
                                        "id": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "eMail": {
                                    "type": "string"
                                },
                                "phone": {
                                    "type": "string"
                                },
                                "fax": {
                                    "type": "string"
                                },
                                "location": {
                                    "type": "object",
                                    "required": [
                                        "countryCode"
                                    ],
                                    "properties": {
                                        "city": {
                                            "type": "string"
                                        },
                                        "countryCode": {
                                            "type": "string"
                                        },
                                        "postCode": {
                                            "type": "string"
                                        },
                                        "postOfficeBox": {
                                            "type": "string"
                                        },
                                        "state": {
                                            "type": "string"
                                        },
                                        "street": {
                                            "type": "string"
                                        },
                                        "streetNo": {
                                            "type": "string"
                                        },
                                        "further": {
                                            "type": "object",
                                            "required": [
                                                "content"
                                            ],
                                            "properties": {
                                                "content": {
                                                    "type": "string"
                                                },
                                                "id": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    }
                                },
                                "id": {
                                    "type": "string"
                                }
                            }
                        },
                        "statements": {
                            "type": "object",
                            "required": [
                                "statement"
                            ],
                            "properties": {
                                "statement": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "countryCodeISO3166_1": {
                                                "type": "array",
                                                "items": {
                                                    "type": "string"
                                                },
                                                "minItems": 0
                                            },
                                            "convention": {
                                                "type": "string"
                                            },
                                            "traceable": {
                                                "type": "boolean"
                                            },
                                            "norm": {
                                                "type": "string"
                                            },
                                            "reference": {
                                                "type": "string"
                                            },
                                            "declaration": {
                                                "type": "object",
                                                "required": [
                                                    "content"
                                                ],
                                                "properties": {
                                                    "content": {
                                                        "type": "string"
                                                    },
                                                    "id": {
                                                        "type": "string"
                                                    }
                                                }
                                            },
                                            "date": {
                                                "type": "string",
                                                "format": "date"
                                            },
                                            "resposibleAuthority": {
                                                "type": "object",
                                                "required": [
                                                    "name",
                                                    "eMail",
                                                    "location"
                                                ],
                                                "properties": {
                                                    "name": {
                                                        "type": "object",
                                                        "required": [
                                                            "content"
                                                        ],
                                                        "properties": {
                                                            "content": {
                                                                "type": "string"
                                                            },
                                                            "id": {
                                                                "type": "string"
                                                            }
                                                        }
                                                    },
                                                    "eMail": {
                                                        "type": "string"
                                                    },
                                                    "phone": {
                                                        "type": "string"
                                                    },
                                                    "fax": {
                                                        "type": "string"
                                                    },
                                                    "location": {
                                                        "type": "object",
                                                        "required": [
                                                            "countryCode"
                                                        ],
                                                        "properties": {
                                                            "city": {
                                                                "type": "string"
                                                            },
                                                            "countryCode": {
                                                                "type": "string"
                                                            },
                                                            "postCode": {
                                                                "type": "string"
                                                            },
                                                            "postOfficeBox": {
                                                                "type": "string"
                                                            },
                                                            "state": {
                                                                "type": "string"
                                                            },
                                                            "street": {
                                                                "type": "string"
                                                            },
                                                            "streetNo": {
                                                                "type": "string"
                                                            },
                                                            "further": {
                                                                "type": "object",
                                                                "required": [
                                                                    "content"
                                                                ],
                                                                "properties": {
                                                                    "content": {
                                                                        "type": "string"
                                                                    },
                                                                    "id": {
                                                                        "type": "string"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "id": {
                                                        "type": "string"
                                                    }
                                                }
                                            },
                                            "conformity": {
                                                "type": "string",
                                                "enum": [
                                                    "pass",
                                                    "fail",
                                                    "conditionalPass",
                                                    "conditionalFail",
                                                    "noPass",
                                                    "noFail"
                                                ]
                                            },
                                            "data": {
                                                "type": "object",
                                                "required": [
                                                    "quantity"
                                                ],
                                                "properties": {
                                                    "formula": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "object",
                                                            "required": [
                                                                "latex",
                                                                "mathml"
                                                            ],
                                                            "properties": {
                                                                "latex": {
                                                                    "type": "string"
                                                                },
                                                                "mathml": {
                                                                    "type": "object",
                                                                    "properties": {
                                                                        "Any": {
                                                                            "type": "object"
                                                                        },
                                                                        "id": {
                                                                            "type": "string"
                                                                        }
                                                                    }
                                                                },
                                                                "id": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        },
                                                        "minItems": 0
                                                    },
                                                    "quantity": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "object",
                                                            "required": [
                                                                "name",
                                                                "real"
                                                            ],
                                                            "properties": {
                                                                "name": {
                                                                    "type": "object",
                                                                    "required": [
                                                                        "content"
                                                                    ],
                                                                    "properties": {
                                                                        "content": {
                                                                            "type": "string"
                                                                        },
                                                                        "id": {
                                                                            "type": "string"
                                                                        }
                                                                    }
                                                                },
                                                                "description": {
                                                                    "type": "object",
                                                                    "required": [
                                                                        "content"
                                                                    ],
                                                                    "properties": {
                                                                        "content": {
                                                                            "type": "string"
                                                                        },
                                                                        "id": {
                                                                            "type": "string"
                                                                        }
                                                                    }
                                                                },
                                                                "real": {
                                                                    "type": "object",
                                                                    "required": [
                                                                        "value",
                                                                        "unit",
                                                                        "expandedUnc",
                                                                        "coverageInterval"
                                                                    ],
                                                                    "properties": {
                                                                        "label": {
                                                                            "type": "string"
                                                                        },
                                                                        "value": {
                                                                            "type": "number"
                                                                        },
                                                                        "unit": {
                                                                            "type": "string"
                                                                        },
                                                                        "dateTime": {
                                                                            "type": "string",
                                                                            "format": "date-time"
                                                                        },
                                                                        "expandedUnc": {
                                                                            "type": "object",
                                                                            "required": [
                                                                                "uncertainty",
                                                                                "coverageFactor",
                                                                                "coverageProbability"
                                                                            ],
                                                                            "properties": {
                                                                                "uncertainty": {
                                                                                    "type": "number"
                                                                                },
                                                                                "coverageFactor": {
                                                                                    "type": "number"
                                                                                },
                                                                                "coverageProbability": {
                                                                                    "type": "number"
                                                                                },
                                                                                "distribution": {
                                                                                    "type": "string"
                                                                                }
                                                                            }
                                                                        },
                                                                        "coverageInterval": {
                                                                            "type": "object",
                                                                            "required": [
                                                                                "standardUnc",
                                                                                "intervalMin",
                                                                                "intervalMax",
                                                                                "coverageProbability"
                                                                            ],
                                                                            "properties": {
                                                                                "standardUnc": {
                                                                                    "type": "number"
                                                                                },
                                                                                "intervalMin": {
                                                                                    "type": "number"
                                                                                },
                                                                                "intervalMax": {
                                                                                    "type": "number"
                                                                                },
                                                                                "coverageProbability": {
                                                                                    "type": "number"
                                                                                },
                                                                                "distribution": {
                                                                                    "type": "string"
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                "id": {
                                                                    "type": "string"
                                                                },
                                                                "refId": {
                                                                    "type": "string"
                                                                },
                                                                "refType": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        },
                                                        "minItems": 1
                                                    },
                                                    "id": {
                                                        "type": "string"
                                                    },
                                                    "refId": {
                                                        "type": "string"
                                                    },
                                                    "refType": {
                                                        "type": "string"
                                                    }
                                                }
                                            },
                                            "id": {
                                                "type": "string"
                                            },
                                            "refId": {
                                                "type": "string"
                                            },
                                            "refType": {
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "minItems": 1
                                }
                            }
                        }
                    }
                },
                "measurementResults": {
                    "type": "object",
                    "required": [
                        "measurementResult"
                    ],
                    "properties": {
                        "measurementResult": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "required": [
                                    "name",
                                    "results"
                                ],
                                "properties": {
                                    "name": {
                                        "type": "object",
                                        "required": [
                                            "content"
                                        ],
                                        "properties": {
                                            "content": {
                                                "type": "string"
                                            },
                                            "id": {
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "description": {
                                        "type": "object",
                                        "required": [
                                            "content"
                                        ],
                                        "properties": {
                                            "content": {
                                                "type": "string"
                                            },
                                            "id": {
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "usedMethods": {
                                        "type": "object",
                                        "required": [
                                            "usedMethod"
                                        ],
                                        "properties": {
                                            "usedMethod": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "required": [
                                                        "name"
                                                    ],
                                                    "properties": {
                                                        "name": {
                                                            "type": "object",
                                                            "required": [
                                                                "content"
                                                            ],
                                                            "properties": {
                                                                "content": {
                                                                    "type": "string"
                                                                },
                                                                "id": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        },
                                                        "description": {
                                                            "type": "object",
                                                            "required": [
                                                                "content"
                                                            ],
                                                            "properties": {
                                                                "content": {
                                                                    "type": "string"
                                                                },
                                                                "id": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        },
                                                        "norm": {
                                                            "type": "string"
                                                        },
                                                        "id": {
                                                            "type": "string"
                                                        },
                                                        "refType": {
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                "minItems": 1
                                            }
                                        }
                                    },
                                    "influenceConditions": {
                                        "type": "object",
                                        "required": [
                                            "influenceCondition"
                                        ],
                                        "properties": {
                                            "influenceCondition": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "required": [
                                                        "name",
                                                        "data"
                                                    ],
                                                    "properties": {
                                                        "name": {
                                                            "type": "object",
                                                            "required": [
                                                                "content"
                                                            ],
                                                            "properties": {
                                                                "content": {
                                                                    "type": "string"
                                                                },
                                                                "id": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        },
                                                        "description": {
                                                            "type": "object",
                                                            "required": [
                                                                "content"
                                                            ],
                                                            "properties": {
                                                                "content": {
                                                                    "type": "string"
                                                                },
                                                                "id": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        },
                                                        "status": {
                                                            "type": "string",
                                                            "enum": [
                                                                "beforeAdjustment",
                                                                "afterAdjustment",
                                                                "beforeRepair",
                                                                "afterRepair"
                                                            ]
                                                        },
                                                        "data": {
                                                            "type": "object",
                                                            "required": [
                                                                "quantity"
                                                            ],
                                                            "properties": {
                                                                "formula": {
                                                                    "type": "array",
                                                                    "items": {
                                                                        "type": "object",
                                                                        "required": [
                                                                            "latex",
                                                                            "mathml"
                                                                        ],
                                                                        "properties": {
                                                                            "latex": {
                                                                                "type": "string"
                                                                            },
                                                                            "mathml": {
                                                                                "type": "object",
                                                                                "properties": {
                                                                                    "Any": {
                                                                                        "type": "object"
                                                                                    },
                                                                                    "id": {
                                                                                        "type": "string"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "id": {
                                                                                "type": "string"
                                                                            }
                                                                        }
                                                                    },
                                                                    "minItems": 0
                                                                },
                                                                "quantity": {
                                                                    "type": "array",
                                                                    "items": {
                                                                        "type": "object",
                                                                        "required": [
                                                                            "name",
                                                                            "real"
                                                                        ],
                                                                        "properties": {
                                                                            "name": {
                                                                                "type": "object",
                                                                                "required": [
                                                                                    "content"
                                                                                ],
                                                                                "properties": {
                                                                                    "content": {
                                                                                        "type": "string"
                                                                                    },
                                                                                    "id": {
                                                                                        "type": "string"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "description": {
                                                                                "type": "object",
                                                                                "required": [
                                                                                    "content"
                                                                                ],
                                                                                "properties": {
                                                                                    "content": {
                                                                                        "type": "string"
                                                                                    },
                                                                                    "id": {
                                                                                        "type": "string"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "real": {
                                                                                "type": "object",
                                                                                "required": [
                                                                                    "value",
                                                                                    "unit",
                                                                                    "expandedUnc",
                                                                                    "coverageInterval"
                                                                                ],
                                                                                "properties": {
                                                                                    "label": {
                                                                                        "type": "string"
                                                                                    },
                                                                                    "value": {
                                                                                        "type": "number"
                                                                                    },
                                                                                    "unit": {
                                                                                        "type": "string"
                                                                                    },
                                                                                    "dateTime": {
                                                                                        "type": "string",
                                                                                        "format": "date-time"
                                                                                    },
                                                                                    "expandedUnc": {
                                                                                        "type": "object",
                                                                                        "required": [
                                                                                            "uncertainty",
                                                                                            "coverageFactor",
                                                                                            "coverageProbability"
                                                                                        ],
                                                                                        "properties": {
                                                                                            "uncertainty": {
                                                                                                "type": "number"
                                                                                            },
                                                                                            "coverageFactor": {
                                                                                                "type": "number"
                                                                                            },
                                                                                            "coverageProbability": {
                                                                                                "type": "number"
                                                                                            },
                                                                                            "distribution": {
                                                                                                "type": "string"
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "coverageInterval": {
                                                                                        "type": "object",
                                                                                        "required": [
                                                                                            "standardUnc",
                                                                                            "intervalMin",
                                                                                            "intervalMax",
                                                                                            "coverageProbability"
                                                                                        ],
                                                                                        "properties": {
                                                                                            "standardUnc": {
                                                                                                "type": "number"
                                                                                            },
                                                                                            "intervalMin": {
                                                                                                "type": "number"
                                                                                            },
                                                                                            "intervalMax": {
                                                                                                "type": "number"
                                                                                            },
                                                                                            "coverageProbability": {
                                                                                                "type": "number"
                                                                                            },
                                                                                            "distribution": {
                                                                                                "type": "string"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            },
                                                                            "id": {
                                                                                "type": "string"
                                                                            },
                                                                            "refId": {
                                                                                "type": "string"
                                                                            },
                                                                            "refType": {
                                                                                "type": "string"
                                                                            }
                                                                        }
                                                                    },
                                                                    "minItems": 1
                                                                },
                                                                "id": {
                                                                    "type": "string"
                                                                },
                                                                "refId": {
                                                                    "type": "string"
                                                                },
                                                                "refType": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        },
                                                        "id": {
                                                            "type": "string"
                                                        },
                                                        "refType": {
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                "minItems": 1
                                            }
                                        }
                                    },
                                    "results": {
                                        "type": "object",
                                        "required": [
                                            "result"
                                        ],
                                        "properties": {
                                            "result": {
                                                "type": "object",
                                                "required": [
                                                    "name",
                                                    "data"
                                                ],
                                                "properties": {
                                                    "name": {
                                                        "type": "object",
                                                        "required": [
                                                            "content"
                                                        ],
                                                        "properties": {
                                                            "content": {
                                                                "type": "string"
                                                            },
                                                            "id": {
                                                                "type": "string"
                                                            }
                                                        }
                                                    },
                                                    "description": {
                                                        "type": "object",
                                                        "required": [
                                                            "content"
                                                        ],
                                                        "properties": {
                                                            "content": {
                                                                "type": "string"
                                                            },
                                                            "id": {
                                                                "type": "string"
                                                            }
                                                        }
                                                    },
                                                    "data": {
                                                        "type": "object",
                                                        "required": [
                                                            "list"
                                                        ],
                                                        "properties": {
                                                            "formula": {
                                                                "type": "array",
                                                                "items": {
                                                                    "type": "object",
                                                                    "required": [
                                                                        "latex",
                                                                        "mathml"
                                                                    ],
                                                                    "properties": {
                                                                        "latex": {
                                                                            "type": "string"
                                                                        },
                                                                        "mathml": {
                                                                            "type": "object",
                                                                            "properties": {
                                                                                "Any": {
                                                                                    "type": "object"
                                                                                },
                                                                                "id": {
                                                                                    "type": "string"
                                                                                }
                                                                            }
                                                                        },
                                                                        "id": {
                                                                            "type": "string"
                                                                        }
                                                                    }
                                                                },
                                                                "minItems": 0
                                                            },
                                                            "list": {
                                                                "type": "array",
                                                                "items": {
                                                                    "type": "object",
                                                                    "required": [
                                                                        "quantity"
                                                                    ],
                                                                    "properties": {
                                                                        "name": {
                                                                            "type": "object",
                                                                            "required": [
                                                                                "content"
                                                                            ],
                                                                            "properties": {
                                                                                "content": {
                                                                                    "type": "string"
                                                                                },
                                                                                "id": {
                                                                                    "type": "string"
                                                                                }
                                                                            }
                                                                        },
                                                                        "dateTime": {
                                                                            "type": "string",
                                                                            "format": "date-time"
                                                                        },
                                                                        "quantity": {
                                                                            "type": "array",
                                                                            "items": {
                                                                                "type": "object",
                                                                                "required": [
                                                                                    "real"
                                                                                ],
                                                                                "properties": {
                                                                                    "real": {
                                                                                        "type": "object",
                                                                                        "required": [
                                                                                            "value",
                                                                                            "unit",
                                                                                            "expandedUnc",
                                                                                            "coverageInterval"
                                                                                        ],
                                                                                        "properties": {
                                                                                            "label": {
                                                                                                "type": "string"
                                                                                            },
                                                                                            "value": {
                                                                                                "type": "number"
                                                                                            },
                                                                                            "unit": {
                                                                                                "type": "string"
                                                                                            },
                                                                                            "dateTime": {
                                                                                                "type": "string",
                                                                                                "format": "date-time"
                                                                                            },
                                                                                            "expandedUnc": {
                                                                                                "type": "object",
                                                                                                "required": [
                                                                                                    "uncertainty",
                                                                                                    "coverageFactor",
                                                                                                    "coverageProbability"
                                                                                                ],
                                                                                                "properties": {
                                                                                                    "uncertainty": {
                                                                                                        "type": "number"
                                                                                                    },
                                                                                                    "coverageFactor": {
                                                                                                        "type": "number"
                                                                                                    },
                                                                                                    "coverageProbability": {
                                                                                                        "type": "number"
                                                                                                    },
                                                                                                    "distribution": {
                                                                                                        "type": "string"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "coverageInterval": {
                                                                                                "type": "object",
                                                                                                "required": [
                                                                                                    "standardUnc",
                                                                                                    "intervalMin",
                                                                                                    "intervalMax",
                                                                                                    "coverageProbability"
                                                                                                ],
                                                                                                "properties": {
                                                                                                    "standardUnc": {
                                                                                                        "type": "number"
                                                                                                    },
                                                                                                    "intervalMin": {
                                                                                                        "type": "number"
                                                                                                    },
                                                                                                    "intervalMax": {
                                                                                                        "type": "number"
                                                                                                    },
                                                                                                    "coverageProbability": {
                                                                                                        "type": "number"
                                                                                                    },
                                                                                                    "distribution": {
                                                                                                        "type": "string"
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "id": {
                                                                                        "type": "string"
                                                                                    },
                                                                                    "refId": {
                                                                                        "type": "string"
                                                                                    },
                                                                                    "refType": {
                                                                                        "type": "string"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "minItems": 1
                                                                        },
                                                                        "measuringEquipments": {
                                                                            "type": "object",
                                                                            "required": [
                                                                                "measuringEquipment"
                                                                            ],
                                                                            "properties": {
                                                                                "measuringEquipment": {
                                                                                    "type": "array",
                                                                                    "items": {
                                                                                        "type": "object",
                                                                                        "required": [
                                                                                            "name"
                                                                                        ],
                                                                                        "properties": {
                                                                                            "name": {
                                                                                                "type": "object",
                                                                                                "required": [
                                                                                                    "content"
                                                                                                ],
                                                                                                "properties": {
                                                                                                    "content": {
                                                                                                        "type": "string"
                                                                                                    },
                                                                                                    "id": {
                                                                                                        "type": "string"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "description": {
                                                                                                "type": "object",
                                                                                                "required": [
                                                                                                    "content"
                                                                                                ],
                                                                                                "properties": {
                                                                                                    "content": {
                                                                                                        "type": "string"
                                                                                                    },
                                                                                                    "id": {
                                                                                                        "type": "string"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "certificate": {
                                                                                                "type": "object",
                                                                                                "required": [
                                                                                                    "referral",
                                                                                                    "referralID",
                                                                                                    "procedure",
                                                                                                    "value"
                                                                                                ],
                                                                                                "properties": {
                                                                                                    "referral": {
                                                                                                        "type": "object",
                                                                                                        "required": [
                                                                                                            "content"
                                                                                                        ],
                                                                                                        "properties": {
                                                                                                            "content": {
                                                                                                                "type": "string"
                                                                                                            },
                                                                                                            "id": {
                                                                                                                "type": "string"
                                                                                                            }
                                                                                                        }
                                                                                                    },
                                                                                                    "referralID": {
                                                                                                        "type": "string"
                                                                                                    },
                                                                                                    "procedure": {
                                                                                                        "type": "string"
                                                                                                    },
                                                                                                    "value": {
                                                                                                        "type": "string"
                                                                                                    },
                                                                                                    "id": {
                                                                                                        "type": "string"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "manufacturer": {
                                                                                                "type": "object",
                                                                                                "required": [
                                                                                                    "name"
                                                                                                ],
                                                                                                "properties": {
                                                                                                    "name": {
                                                                                                        "type": "object",
                                                                                                        "required": [
                                                                                                            "content"
                                                                                                        ],
                                                                                                        "properties": {
                                                                                                            "content": {
                                                                                                                "type": "string"
                                                                                                            },
                                                                                                            "id": {
                                                                                                                "type": "string"
                                                                                                            }
                                                                                                        }
                                                                                                    },
                                                                                                    "eMail": {
                                                                                                        "type": "string"
                                                                                                    },
                                                                                                    "phone": {
                                                                                                        "type": "string"
                                                                                                    },
                                                                                                    "fax": {
                                                                                                        "type": "string"
                                                                                                    },
                                                                                                    "location": {
                                                                                                        "type": "object",
                                                                                                        "required": [
                                                                                                            "countryCode"
                                                                                                        ],
                                                                                                        "properties": {
                                                                                                            "city": {
                                                                                                                "type": "string"
                                                                                                            },
                                                                                                            "countryCode": {
                                                                                                                "type": "string"
                                                                                                            },
                                                                                                            "postCode": {
                                                                                                                "type": "string"
                                                                                                            },
                                                                                                            "postOfficeBox": {
                                                                                                                "type": "string"
                                                                                                            },
                                                                                                            "state": {
                                                                                                                "type": "string"
                                                                                                            },
                                                                                                            "street": {
                                                                                                                "type": "string"
                                                                                                            },
                                                                                                            "streetNo": {
                                                                                                                "type": "string"
                                                                                                            },
                                                                                                            "further": {
                                                                                                                "type": "object",
                                                                                                                "required": [
                                                                                                                    "content"
                                                                                                                ],
                                                                                                                "properties": {
                                                                                                                    "content": {
                                                                                                                        "type": "string"
                                                                                                                    },
                                                                                                                    "id": {
                                                                                                                        "type": "string"
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    },
                                                                                                    "id": {
                                                                                                        "type": "string"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "model": {
                                                                                                "type": "string"
                                                                                            },
                                                                                            "identifications": {
                                                                                                "type": "object",
                                                                                                "required": [
                                                                                                    "identification"
                                                                                                ],
                                                                                                "properties": {
                                                                                                    "identification": {
                                                                                                        "type": "array",
                                                                                                        "items": {
                                                                                                            "type": "object",
                                                                                                            "required": [
                                                                                                                "issuer",
                                                                                                                "value"
                                                                                                            ],
                                                                                                            "properties": {
                                                                                                                "issuer": {
                                                                                                                    "type": "string",
                                                                                                                    "enum": [
                                                                                                                        "manufacturer",
                                                                                                                        "calibrationLaboratory",
                                                                                                                        "customer",
                                                                                                                        "owner",
                                                                                                                        "other"
                                                                                                                    ]
                                                                                                                },
                                                                                                                "value": {
                                                                                                                    "type": "string"
                                                                                                                },
                                                                                                                "description": {
                                                                                                                    "type": "object",
                                                                                                                    "required": [
                                                                                                                        "content"
                                                                                                                    ],
                                                                                                                    "properties": {
                                                                                                                        "content": {
                                                                                                                            "type": "string"
                                                                                                                        },
                                                                                                                        "id": {
                                                                                                                            "type": "string"
                                                                                                                        }
                                                                                                                    }
                                                                                                                },
                                                                                                                "id": {
                                                                                                                    "type": "string"
                                                                                                                },
                                                                                                                "refType": {
                                                                                                                    "type": "string"
                                                                                                                }
                                                                                                            }
                                                                                                        },
                                                                                                        "minItems": 1
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "id": {
                                                                                                "type": "string"
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "minItems": 1
                                                                                }
                                                                            }
                                                                        },
                                                                        "measurementMetaData": {
                                                                            "type": "object",
                                                                            "required": [
                                                                                "metaData"
                                                                            ],
                                                                            "properties": {
                                                                                "metaData": {
                                                                                    "type": "array",
                                                                                    "items": {
                                                                                        "type": "object",
                                                                                        "required": [
                                                                                            "conformity",
                                                                                            "data"
                                                                                        ],
                                                                                        "properties": {
                                                                                            "conformity": {
                                                                                                "type": "string",
                                                                                                "enum": [
                                                                                                    "pass",
                                                                                                    "fail",
                                                                                                    "conditionalPass",
                                                                                                    "conditionalFail",
                                                                                                    "noPass",
                                                                                                    "noFail"
                                                                                                ]
                                                                                            },
                                                                                            "data": {
                                                                                                "type": "object",
                                                                                                "required": [
                                                                                                    "list"
                                                                                                ],
                                                                                                "properties": {
                                                                                                    "formula": {
                                                                                                        "type": "array",
                                                                                                        "items": {
                                                                                                            "type": "object",
                                                                                                            "required": [
                                                                                                                "latex",
                                                                                                                "mathml"
                                                                                                            ],
                                                                                                            "properties": {
                                                                                                                "latex": {
                                                                                                                    "type": "string"
                                                                                                                },
                                                                                                                "mathml": {
                                                                                                                    "type": "object",
                                                                                                                    "properties": {
                                                                                                                        "Any": {
                                                                                                                            "type": "object"
                                                                                                                        },
                                                                                                                        "id": {
                                                                                                                            "type": "string"
                                                                                                                        }
                                                                                                                    }
                                                                                                                },
                                                                                                                "id": {
                                                                                                                    "type": "string"
                                                                                                                }
                                                                                                            }
                                                                                                        },
                                                                                                        "minItems": 0
                                                                                                    },
                                                                                                    "list": {
                                                                                                        "type": "object",
                                                                                                        "required": [
                                                                                                            "quantity"
                                                                                                        ],
                                                                                                        "properties": {
                                                                                                            "quantity": {
                                                                                                                "type": "array",
                                                                                                                "items": {
                                                                                                                    "type": "object",
                                                                                                                    "required": [
                                                                                                                        "real"
                                                                                                                    ],
                                                                                                                    "properties": {
                                                                                                                        "real": {
                                                                                                                            "type": "object",
                                                                                                                            "required": [
                                                                                                                                "value",
                                                                                                                                "unit",
                                                                                                                                "expandedUnc",
                                                                                                                                "coverageInterval"
                                                                                                                            ],
                                                                                                                            "properties": {
                                                                                                                                "label": {
                                                                                                                                    "type": "string"
                                                                                                                                },
                                                                                                                                "value": {
                                                                                                                                    "type": "number"
                                                                                                                                },
                                                                                                                                "unit": {
                                                                                                                                    "type": "string"
                                                                                                                                },
                                                                                                                                "dateTime": {
                                                                                                                                    "type": "string",
                                                                                                                                    "format": "date-time"
                                                                                                                                },
                                                                                                                                "expandedUnc": {
                                                                                                                                    "type": "object",
                                                                                                                                    "required": [
                                                                                                                                        "uncertainty",
                                                                                                                                        "coverageFactor",
                                                                                                                                        "coverageProbability"
                                                                                                                                    ],
                                                                                                                                    "properties": {
                                                                                                                                        "uncertainty": {
                                                                                                                                            "type": "number"
                                                                                                                                        },
                                                                                                                                        "coverageFactor": {
                                                                                                                                            "type": "number"
                                                                                                                                        },
                                                                                                                                        "coverageProbability": {
                                                                                                                                            "type": "number"
                                                                                                                                        },
                                                                                                                                        "distribution": {
                                                                                                                                            "type": "string"
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                },
                                                                                                                                "coverageInterval": {
                                                                                                                                    "type": "object",
                                                                                                                                    "required": [
                                                                                                                                        "standardUnc",
                                                                                                                                        "intervalMin",
                                                                                                                                        "intervalMax",
                                                                                                                                        "coverageProbability"
                                                                                                                                    ],
                                                                                                                                    "properties": {
                                                                                                                                        "standardUnc": {
                                                                                                                                            "type": "number"
                                                                                                                                        },
                                                                                                                                        "intervalMin": {
                                                                                                                                            "type": "number"
                                                                                                                                        },
                                                                                                                                        "intervalMax": {
                                                                                                                                            "type": "number"
                                                                                                                                        },
                                                                                                                                        "coverageProbability": {
                                                                                                                                            "type": "number"
                                                                                                                                        },
                                                                                                                                        "distribution": {
                                                                                                                                            "type": "string"
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        },
                                                                                                                        "id": {
                                                                                                                            "type": "string"
                                                                                                                        },
                                                                                                                        "refId": {
                                                                                                                            "type": "string"
                                                                                                                        },
                                                                                                                        "refType": {
                                                                                                                            "type": "string"
                                                                                                                        }
                                                                                                                    }
                                                                                                                },
                                                                                                                "minItems": 1
                                                                                                            },
                                                                                                            "id": {
                                                                                                                "type": "string"
                                                                                                            },
                                                                                                            "refId": {
                                                                                                                "type": "string"
                                                                                                            },
                                                                                                            "refType": {
                                                                                                                "type": "string"
                                                                                                            }
                                                                                                        }
                                                                                                    },
                                                                                                    "id": {
                                                                                                        "type": "string"
                                                                                                    },
                                                                                                    "refId": {
                                                                                                        "type": "string"
                                                                                                    },
                                                                                                    "refType": {
                                                                                                        "type": "string"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "id": {
                                                                                                "type": "string"
                                                                                            },
                                                                                            "refId": {
                                                                                                "type": "string"
                                                                                            },
                                                                                            "refType": {
                                                                                                "type": "string"
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "minItems": 1
                                                                                }
                                                                            }
                                                                        },
                                                                        "id": {
                                                                            "type": "string"
                                                                        },
                                                                        "refId": {
                                                                            "type": "string"
                                                                        },
                                                                        "refType": {
                                                                            "type": "string"
                                                                        }
                                                                    }
                                                                },
                                                                "minItems": 1
                                                            },
                                                            "id": {
                                                                "type": "string"
                                                            },
                                                            "refId": {
                                                                "type": "string"
                                                            },
                                                            "refType": {
                                                                "type": "string"
                                                            }
                                                        }
                                                    },
                                                    "id": {
                                                        "type": "string"
                                                    },
                                                    "refId": {
                                                        "type": "string"
                                                    },
                                                    "refType": {
                                                        "type": "string"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "id": {
                                        "type": "string"
                                    },
                                    "refId": {
                                        "type": "string"
                                    },
                                    "refType": {
                                        "type": "string"
                                    }
                                }
                            },
                            "minItems": 1
                        }
                    }
                },
                "comment": {
                    "type": "object",
                    "properties": {
                        "Any": {
                            "type": "array",
                            "items": {
                                "type": "object"
                            },
                            "minItems": 0
                        }
                    }
                },
                "schemaVersion": {
                    "type": "string"
                }
            }
        }
    }
}

const cachedUischema = window.localStorage.getItem('cachedUischema')
const exampleUischema = cachedUischema ? JSON.parse(cachedUischema) : undefined

export class ExampleSchemaService implements SchemaService {
  getSchema = async () => exampleSchema;
  getUiSchema = async () => exampleUischema;
}
