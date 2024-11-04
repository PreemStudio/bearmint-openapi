/**
 * Railway
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Account {
    /**
    * The internal id of the object.
    */
    'id'?: number;
    /**
    * The id of the object.
    */
    'address'?: string;
    /**
    * The id of the object.
    */
    'publicKey'?: string;
    /**
    * The id of the object.
    */
    'name'?: string;
    /**
    * The id of the object.
    */
    'nonce'?: number;
    /**
    * The id of the object.
    */
    'balances'?: string;
    /**
    * The id of the object.
    */
    'lockedBalances'?: string;
    /**
    * The id of the object.
    */
    'stakes'?: string;
    /**
    * The id of the object.
    */
    'validator'?: string;
    /**
    * The id of the object.
    */
    'metadata'?: string;
    /**
    * The creation date of the object.
    */
    'createdAt'?: Date;
    /**
    * The updating date of the object.
    */
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "publicKey",
            "baseName": "public_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "nonce",
            "baseName": "nonce",
            "type": "number",
            "format": ""
        },
        {
            "name": "balances",
            "baseName": "balances",
            "type": "string",
            "format": ""
        },
        {
            "name": "lockedBalances",
            "baseName": "locked_balances",
            "type": "string",
            "format": ""
        },
        {
            "name": "stakes",
            "baseName": "stakes",
            "type": "string",
            "format": ""
        },
        {
            "name": "validator",
            "baseName": "validator",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return Account.attributeTypeMap;
    }

    public constructor() {
    }
}
