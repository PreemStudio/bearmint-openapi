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

export class ApiEntitiesGet200Response {
    'data'?: Array;
    'links'?: any;
    'meta'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "any",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiEntitiesGet200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

