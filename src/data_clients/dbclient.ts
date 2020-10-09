// tslint:disable


import * as request from "superagent";
import {
    SuperAgentStatic,
    SuperAgentRequest,
    Response
} from "superagent";

export type RequestHeaders = {
    [header: string]: string;
}
export type RequestHeadersHandler = (headers: RequestHeaders) => RequestHeaders;

export type ConfigureAgentHandler = (agent: SuperAgentStatic) => SuperAgentStatic;

export type ConfigureRequestHandler = (agent: SuperAgentRequest) => SuperAgentRequest;

export type CallbackHandler = (err: any, res ? : request.Response) => void;

export type dataset = {
    'dataset_name' ? : string;
    'metadata' ? : string;
} & {
    [key: string]: any;
};

export type example = {
    'dataset_name' ? : string;
    'content' ? : string;
    'example_id' ? : string;
    'metadata' ? : string;
} & {
    [key: string]: any;
};

export type gold_tokens = {
    'bilu' ? : string;
    'label' ? : string;
    'anno_span' ? : string;
    'vfirst' ? : string;
    'vlast' ? : string;
    'is_first' ? : boolean;
    'is_last' ? : boolean;
    'start_offset' ? : number;
    'end_offset' ? : number;
    'span' ? : string;
    'token_id' ? : number;
    'tokenizer' ? : string;
    'example_id' ? : string;
    'token_text' ? : string;
    'substring' ? : string;
    'vocab_id' ? : number;
    'labelset_name' ? : string;
} & {
    [key: string]: any;
};

export type golden_token_arrays = {
    'example_id' ? : string;
    'dataset_name' ? : string;
    'labelset_name' ? : string;
    'annotated_tokens' ? : string;
} & {
    [key: string]: any;
};

export type human_annotation = {
    'annotation_id' ? : string;
    'labelset_name' ? : string;
    'start_offset' ? : number;
    'end_offset' ? : number;
    'span' ? : string;
    'example_id' ? : string;
    'label' ? : string;
    'correct' ? : boolean;
} & {
    [key: string]: any;
};

export type label = {
    'labelset_name' ? : string;
    'label' ? : string;
    'bilu' ? : string;
    'description' ? : string;
    'vocab_id' ? : number;
} & {
    [key: string]: any;
};

export type labelset = {
    'labelset_name' ? : string;
} & {
    [key: string]: any;
};

export type model = {
    'model_name' ? : string;
    'labelset_name' ? : string;
    'version' ? : number;
    'model_id' ? : string;
    'parent_id' ? : string;
} & {
    [key: string]: any;
};

export type model_prediction = {
    'labelset_name' ? : string;
    'start_offset' ? : number;
    'end_offset' ? : number;
    'tokenizer' ? : string;
    'example_id' ? : string;
    'dataset_name' ? : string;
    'label' ? : string;
    'span' ? : string;
    'bilu' ? : "B" | "I" | "L" | "U";
    'model_id' ? : string;
    'annotation_start' ? : number;
    'annotation_end' ? : number;
    'annotation_span' ? : string;
} & {
    [key: string]: any;
};

export type model_testament = {
    'model_id' ? : string;
    'example_id' ? : string;
} & {
    [key: string]: any;
};

export type model_train_log = {
    'model_id' ? : string;
    'example_id' ? : string;
} & {
    [key: string]: any;
};

export type token = {
    'start_offset' ? : number;
    'end_offset' ? : number;
    'span' ? : string;
    'token_id' ? : number;
    'tokenizer' ? : string;
    'example_id' ? : string;
    'token_text' ? : string;
    'substring' ? : string;
} & {
    [key: string]: any;
};

export type tokenizer = {
    'name' ? : string;
} & {
    [key: string]: any;
};

export type Response_getDataset_200 = Array < dataset >
;

export type Response_getExample_200 = Array < example >
;

export type Response_getGoldTokens_200 = Array < gold_tokens >
;

export type Response_getGoldenTokenArrays_200 = Array < golden_token_arrays >
;

export type Response_getHumanAnnotation_200 = Array < human_annotation >
;

export type Response_getLabel_200 = Array < label >
;

export type Response_getLabelset_200 = Array < labelset >
;

export type Response_getModel_200 = Array < model >
;

export type Response_getModelPrediction_200 = Array < model_prediction >
;

export type Response_getModelTestament_200 = Array < model_testament >
;

export type Response_getModelTrainLog_200 = Array < model_train_log >
;

export type Response_getToken_200 = Array < token >
;

export type Response_getTokenizer_200 = Array < tokenizer >
;

export type Logger = {
    log: (line: string) => any
};

export interface ResponseWithBody < S extends number, T > extends Response {
    status: S;
    body: T;
}

export type QueryParameters = {
    [param: string]: any
};

export interface CommonRequestOptions {
    $queryParameters ? : QueryParameters;
    $domain ? : string;
    $path ? : string | ((path: string) => string);
    $retries ? : number; // number of retries; see: https://github.com/visionmedia/superagent/blob/master/docs/index.md#retrying-requests
    $timeout ? : number; // request timeout in milliseconds; see: https://github.com/visionmedia/superagent/blob/master/docs/index.md#timeouts
    $deadline ? : number; // request deadline in milliseconds; see: https://github.com/visionmedia/superagent/blob/master/docs/index.md#timeouts
}

/**
 * This is a dynamic API generated by PostgREST
 * @class Test
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export class DBClient {

    private domain: string = "http://0.0.0.0:3001";
    private errorHandlers: CallbackHandler[] = [];
    private requestHeadersHandler ? : RequestHeadersHandler;
    private configureAgentHandler ? : ConfigureAgentHandler;
    private configureRequestHandler ? : ConfigureRequestHandler;

    constructor(domain ? : string, private logger ? : Logger) {
        if (domain) {
            this.domain = domain;
        }
    }

    getDomain() {
        return this.domain;
    }

    addErrorHandler(handler: CallbackHandler) {
        this.errorHandlers.push(handler);
    }

    setRequestHeadersHandler(handler: RequestHeadersHandler) {
        this.requestHeadersHandler = handler;
    }

    setConfigureAgentHandler(handler: ConfigureAgentHandler) {
        this.configureAgentHandler = handler;
    }

    setConfigureRequestHandler(handler: ConfigureRequestHandler) {
        this.configureRequestHandler = handler;
    }

    private request(method: string, url: string, body: any, headers: RequestHeaders, queryParameters: QueryParameters, form: any, reject: CallbackHandler, resolve: CallbackHandler, opts: CommonRequestOptions) {
        if (this.logger) {
            this.logger.log(`Call ${method} ${url}`);
        }

        const agent = this.configureAgentHandler ?
            this.configureAgentHandler(request.default) :
            request.default;

        let req = agent(method, url);
        if (this.configureRequestHandler) {
            req = this.configureRequestHandler(req);
        }

        req = req.query(queryParameters);

        if (this.requestHeadersHandler) {
            headers = this.requestHeadersHandler({
                ...headers
            });
        }

        req.set(headers);

        if (body) {
            req.send(body);

            if (typeof(body) === 'object' && !(body.constructor.name === 'Buffer')) {
                headers['content-type'] = 'application/json';
            }
        }

        if (Object.keys(form).length > 0) {
            req.type('form');
            req.send(form);
        }

        if (opts.$retries && opts.$retries > 0) {
            req.retry(opts.$retries);
        }

        if (opts.$timeout && opts.$timeout > 0 || opts.$deadline && opts.$deadline > 0) {
            req.timeout({
                deadline: opts.$deadline,
                response: opts.$timeout
            });
        }

        req.end((error, response) => {
            // an error will also be emitted for a 4xx and 5xx status code
            // the error object will then have error.status and error.response fields
            // see superagent error handling: https://github.com/visionmedia/superagent/blob/master/docs/index.md#error-handling
            if (error) {
                reject(error);
                this.errorHandlers.forEach(handler => handler(error));
            } else {
                resolve(response);
            }
        });
    }

    private convertParameterCollectionFormat < T > (param: T, collectionFormat: string | undefined): T | string {
        if (Array.isArray(param) && param.length >= 2) {
            switch (collectionFormat) {
                case "csv":
                    return param.join(",");
                case "ssv":
                    return param.join(" ");
                case "tsv":
                    return param.join("\t");
                case "pipes":
                    return param.join("|");
                default:
                    return param;
            }
        }

        return param;
    }

    rootEndpoint_getURL(parameters: {} & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * OpenAPI description (this document)
     * @method
     * @name Test#rootEndpoint_get
     */
    rootEndpoint_get(parameters: {} & CommonRequestOptions): Promise < ResponseWithBody < 200, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/openapi+json, application/json';
            headers['content-type'] = 'application/json';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    getDatasetURL(parameters: {
        'datasetName' ? : string,
        'metadata' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/dataset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['datasetName'] !== undefined) {
            queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                parameters['datasetName'],
                ''
            );
        }

        if (parameters['metadata'] !== undefined) {
            queryParameters['metadata'] = this.convertParameterCollectionFormat(
                parameters['metadata'],
                ''
            );
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters['order'] !== undefined) {
            queryParameters['order'] = this.convertParameterCollectionFormat(
                parameters['order'],
                ''
            );
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = this.convertParameterCollectionFormat(
                parameters['offset'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#getDataset
         * @param {string} datasetName - This is a dynamic API generated by PostgREST
         * @param {string} metadata - This is a dynamic API generated by PostgREST
         * @param {string} select - Filtering Columns
         * @param {string} order - Ordering
         * @param {string} range - Limiting and Pagination
         * @param {string} rangeUnit - Limiting and Pagination
         * @param {string} offset - Limiting and Pagination
         * @param {string} limit - Limiting and Pagination
        
    */
    getDataset(parameters: {
        'datasetName' ? : string,
        'metadata' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_getDataset_200 > | ResponseWithBody < 206, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/dataset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['datasetName'] !== undefined) {
                queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                    parameters['datasetName'],
                    ''
                );
            }

            if (parameters['metadata'] !== undefined) {
                queryParameters['metadata'] = this.convertParameterCollectionFormat(
                    parameters['metadata'],
                    ''
                );
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['order'] !== undefined) {
                queryParameters['order'] = this.convertParameterCollectionFormat(
                    parameters['order'],
                    ''
                );
            }

            if (parameters['range'] !== undefined) {
                headers['Range'] = parameters['range'];
            }

            if (parameters['rangeUnit'] !== undefined) {
                headers['Range-Unit'] = parameters['rangeUnit'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = this.convertParameterCollectionFormat(
                    parameters['offset'],
                    ''
                );
            }

            if (parameters['limit'] !== undefined) {
                queryParameters['limit'] = this.convertParameterCollectionFormat(
                    parameters['limit'],
                    ''
                );
            }

            headers['Prefer'] = 'count=none';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postDatasetURL(parameters: {
        'dataset' ? : dataset,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/dataset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#postDataset
     * @param {} dataset - dataset
     * @param {string} select - Filtering Columns
     * @param {string} prefer - Preference
     */
    postDataset(parameters: {
        'dataset' ? : dataset,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/dataset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['dataset'] !== undefined) {
                body = parameters['dataset'];
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    deleteDatasetURL(parameters: {
        'datasetName' ? : string,
        'metadata' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/dataset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['datasetName'] !== undefined) {
            queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                parameters['datasetName'],
                ''
            );
        }

        if (parameters['metadata'] !== undefined) {
            queryParameters['metadata'] = this.convertParameterCollectionFormat(
                parameters['metadata'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#deleteDataset
     * @param {string} datasetName - This is a dynamic API generated by PostgREST
     * @param {string} metadata - This is a dynamic API generated by PostgREST
     * @param {string} prefer - Preference
     */
    deleteDataset(parameters: {
        'datasetName' ? : string,
        'metadata' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/dataset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['datasetName'] !== undefined) {
                queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                    parameters['datasetName'],
                    ''
                );
            }

            if (parameters['metadata'] !== undefined) {
                queryParameters['metadata'] = this.convertParameterCollectionFormat(
                    parameters['metadata'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    patchDatasetURL(parameters: {
        'datasetName' ? : string,
        'metadata' ? : string,
        'dataset' ? : dataset,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/dataset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['datasetName'] !== undefined) {
            queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                parameters['datasetName'],
                ''
            );
        }

        if (parameters['metadata'] !== undefined) {
            queryParameters['metadata'] = this.convertParameterCollectionFormat(
                parameters['metadata'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#patchDataset
     * @param {string} datasetName - This is a dynamic API generated by PostgREST
     * @param {string} metadata - This is a dynamic API generated by PostgREST
     * @param {} dataset - dataset
     * @param {string} prefer - Preference
     */
    patchDataset(parameters: {
        'datasetName' ? : string,
        'metadata' ? : string,
        'dataset' ? : dataset,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/dataset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['datasetName'] !== undefined) {
                queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                    parameters['datasetName'],
                    ''
                );
            }

            if (parameters['metadata'] !== undefined) {
                queryParameters['metadata'] = this.convertParameterCollectionFormat(
                    parameters['metadata'],
                    ''
                );
            }

            if (parameters['dataset'] !== undefined) {
                body = parameters['dataset'];
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('PATCH', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    getExampleURL(parameters: {
        'datasetName' ? : string,
        'content' ? : string,
        'exampleId' ? : string,
        'metadata' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/example';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['datasetName'] !== undefined) {
            queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                parameters['datasetName'],
                ''
            );
        }

        if (parameters['content'] !== undefined) {
            queryParameters['content'] = this.convertParameterCollectionFormat(
                parameters['content'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['metadata'] !== undefined) {
            queryParameters['metadata'] = this.convertParameterCollectionFormat(
                parameters['metadata'],
                ''
            );
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters['order'] !== undefined) {
            queryParameters['order'] = this.convertParameterCollectionFormat(
                parameters['order'],
                ''
            );
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = this.convertParameterCollectionFormat(
                parameters['offset'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#getExample
         * @param {string} datasetName - This is a dynamic API generated by PostgREST
         * @param {string} content - This is a dynamic API generated by PostgREST
         * @param {string} exampleId - This is a dynamic API generated by PostgREST
         * @param {string} metadata - This is a dynamic API generated by PostgREST
         * @param {string} select - Filtering Columns
         * @param {string} order - Ordering
         * @param {string} range - Limiting and Pagination
         * @param {string} rangeUnit - Limiting and Pagination
         * @param {string} offset - Limiting and Pagination
         * @param {string} limit - Limiting and Pagination
        
    */
    getExample(parameters: {
        'datasetName' ? : string,
        'content' ? : string,
        'exampleId' ? : string,
        'metadata' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_getExample_200 > | ResponseWithBody < 206, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/example';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['datasetName'] !== undefined) {
                queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                    parameters['datasetName'],
                    ''
                );
            }

            if (parameters['content'] !== undefined) {
                queryParameters['content'] = this.convertParameterCollectionFormat(
                    parameters['content'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['metadata'] !== undefined) {
                queryParameters['metadata'] = this.convertParameterCollectionFormat(
                    parameters['metadata'],
                    ''
                );
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['order'] !== undefined) {
                queryParameters['order'] = this.convertParameterCollectionFormat(
                    parameters['order'],
                    ''
                );
            }

            if (parameters['range'] !== undefined) {
                headers['Range'] = parameters['range'];
            }

            if (parameters['rangeUnit'] !== undefined) {
                headers['Range-Unit'] = parameters['rangeUnit'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = this.convertParameterCollectionFormat(
                    parameters['offset'],
                    ''
                );
            }

            if (parameters['limit'] !== undefined) {
                queryParameters['limit'] = this.convertParameterCollectionFormat(
                    parameters['limit'],
                    ''
                );
            }

            headers['Prefer'] = 'count=none';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postExampleURL(parameters: {
        'example' ? : example,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/example';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#postExample
     * @param {} example - example
     * @param {string} select - Filtering Columns
     * @param {string} prefer - Preference
     */
    postExample(parameters: {
        'example' ? : example,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/example';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['example'] !== undefined) {
                body = parameters['example'];
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    deleteExampleURL(parameters: {
        'datasetName' ? : string,
        'content' ? : string,
        'exampleId' ? : string,
        'metadata' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/example';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['datasetName'] !== undefined) {
            queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                parameters['datasetName'],
                ''
            );
        }

        if (parameters['content'] !== undefined) {
            queryParameters['content'] = this.convertParameterCollectionFormat(
                parameters['content'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['metadata'] !== undefined) {
            queryParameters['metadata'] = this.convertParameterCollectionFormat(
                parameters['metadata'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#deleteExample
     * @param {string} datasetName - This is a dynamic API generated by PostgREST
     * @param {string} content - This is a dynamic API generated by PostgREST
     * @param {string} exampleId - This is a dynamic API generated by PostgREST
     * @param {string} metadata - This is a dynamic API generated by PostgREST
     * @param {string} prefer - Preference
     */
    deleteExample(parameters: {
        'datasetName' ? : string,
        'content' ? : string,
        'exampleId' ? : string,
        'metadata' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/example';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['datasetName'] !== undefined) {
                queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                    parameters['datasetName'],
                    ''
                );
            }

            if (parameters['content'] !== undefined) {
                queryParameters['content'] = this.convertParameterCollectionFormat(
                    parameters['content'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['metadata'] !== undefined) {
                queryParameters['metadata'] = this.convertParameterCollectionFormat(
                    parameters['metadata'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    patchExampleURL(parameters: {
        'datasetName' ? : string,
        'content' ? : string,
        'exampleId' ? : string,
        'metadata' ? : string,
        'example' ? : example,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/example';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['datasetName'] !== undefined) {
            queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                parameters['datasetName'],
                ''
            );
        }

        if (parameters['content'] !== undefined) {
            queryParameters['content'] = this.convertParameterCollectionFormat(
                parameters['content'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['metadata'] !== undefined) {
            queryParameters['metadata'] = this.convertParameterCollectionFormat(
                parameters['metadata'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#patchExample
     * @param {string} datasetName - This is a dynamic API generated by PostgREST
     * @param {string} content - This is a dynamic API generated by PostgREST
     * @param {string} exampleId - This is a dynamic API generated by PostgREST
     * @param {string} metadata - This is a dynamic API generated by PostgREST
     * @param {} example - example
     * @param {string} prefer - Preference
     */
    patchExample(parameters: {
        'datasetName' ? : string,
        'content' ? : string,
        'exampleId' ? : string,
        'metadata' ? : string,
        'example' ? : example,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/example';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['datasetName'] !== undefined) {
                queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                    parameters['datasetName'],
                    ''
                );
            }

            if (parameters['content'] !== undefined) {
                queryParameters['content'] = this.convertParameterCollectionFormat(
                    parameters['content'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['metadata'] !== undefined) {
                queryParameters['metadata'] = this.convertParameterCollectionFormat(
                    parameters['metadata'],
                    ''
                );
            }

            if (parameters['example'] !== undefined) {
                body = parameters['example'];
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('PATCH', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    getGoldTokensURL(parameters: {
        'bilu' ? : string,
        'label' ? : string,
        'annoSpan' ? : string,
        'vfirst' ? : string,
        'vlast' ? : string,
        'isFirst' ? : string,
        'isLast' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'tokenId' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'tokenText' ? : string,
        'substring' ? : string,
        'vocabId' ? : string,
        'labelsetName' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/gold_tokens';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['bilu'] !== undefined) {
            queryParameters['bilu'] = this.convertParameterCollectionFormat(
                parameters['bilu'],
                ''
            );
        }

        if (parameters['label'] !== undefined) {
            queryParameters['label'] = this.convertParameterCollectionFormat(
                parameters['label'],
                ''
            );
        }

        if (parameters['annoSpan'] !== undefined) {
            queryParameters['anno_span'] = this.convertParameterCollectionFormat(
                parameters['annoSpan'],
                ''
            );
        }

        if (parameters['vfirst'] !== undefined) {
            queryParameters['vfirst'] = this.convertParameterCollectionFormat(
                parameters['vfirst'],
                ''
            );
        }

        if (parameters['vlast'] !== undefined) {
            queryParameters['vlast'] = this.convertParameterCollectionFormat(
                parameters['vlast'],
                ''
            );
        }

        if (parameters['isFirst'] !== undefined) {
            queryParameters['is_first'] = this.convertParameterCollectionFormat(
                parameters['isFirst'],
                ''
            );
        }

        if (parameters['isLast'] !== undefined) {
            queryParameters['is_last'] = this.convertParameterCollectionFormat(
                parameters['isLast'],
                ''
            );
        }

        if (parameters['startOffset'] !== undefined) {
            queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                parameters['startOffset'],
                ''
            );
        }

        if (parameters['endOffset'] !== undefined) {
            queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                parameters['endOffset'],
                ''
            );
        }

        if (parameters['span'] !== undefined) {
            queryParameters['span'] = this.convertParameterCollectionFormat(
                parameters['span'],
                ''
            );
        }

        if (parameters['tokenId'] !== undefined) {
            queryParameters['token_id'] = this.convertParameterCollectionFormat(
                parameters['tokenId'],
                ''
            );
        }

        if (parameters['tokenizer'] !== undefined) {
            queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                parameters['tokenizer'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['tokenText'] !== undefined) {
            queryParameters['token_text'] = this.convertParameterCollectionFormat(
                parameters['tokenText'],
                ''
            );
        }

        if (parameters['substring'] !== undefined) {
            queryParameters['substring'] = this.convertParameterCollectionFormat(
                parameters['substring'],
                ''
            );
        }

        if (parameters['vocabId'] !== undefined) {
            queryParameters['vocab_id'] = this.convertParameterCollectionFormat(
                parameters['vocabId'],
                ''
            );
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters['order'] !== undefined) {
            queryParameters['order'] = this.convertParameterCollectionFormat(
                parameters['order'],
                ''
            );
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = this.convertParameterCollectionFormat(
                parameters['offset'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#getGoldTokens
         * @param {string} bilu - This is a dynamic API generated by PostgREST
         * @param {string} label - This is a dynamic API generated by PostgREST
         * @param {string} annoSpan - This is a dynamic API generated by PostgREST
         * @param {string} vfirst - This is a dynamic API generated by PostgREST
         * @param {string} vlast - This is a dynamic API generated by PostgREST
         * @param {string} isFirst - This is a dynamic API generated by PostgREST
         * @param {string} isLast - This is a dynamic API generated by PostgREST
         * @param {string} startOffset - This is a dynamic API generated by PostgREST
         * @param {string} endOffset - This is a dynamic API generated by PostgREST
         * @param {string} span - This is a dynamic API generated by PostgREST
         * @param {string} tokenId - This is a dynamic API generated by PostgREST
         * @param {string} tokenizer - This is a dynamic API generated by PostgREST
         * @param {string} exampleId - This is a dynamic API generated by PostgREST
         * @param {string} tokenText - This is a dynamic API generated by PostgREST
         * @param {string} substring - This is a dynamic API generated by PostgREST
         * @param {string} vocabId - This is a dynamic API generated by PostgREST
         * @param {string} labelsetName - This is a dynamic API generated by PostgREST
         * @param {string} select - Filtering Columns
         * @param {string} order - Ordering
         * @param {string} range - Limiting and Pagination
         * @param {string} rangeUnit - Limiting and Pagination
         * @param {string} offset - Limiting and Pagination
         * @param {string} limit - Limiting and Pagination
        
    */
    getGoldTokens(parameters: {
        'bilu' ? : string,
        'label' ? : string,
        'annoSpan' ? : string,
        'vfirst' ? : string,
        'vlast' ? : string,
        'isFirst' ? : string,
        'isLast' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'tokenId' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'tokenText' ? : string,
        'substring' ? : string,
        'vocabId' ? : string,
        'labelsetName' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_getGoldTokens_200 > | ResponseWithBody < 206, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/gold_tokens';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['bilu'] !== undefined) {
                queryParameters['bilu'] = this.convertParameterCollectionFormat(
                    parameters['bilu'],
                    ''
                );
            }

            if (parameters['label'] !== undefined) {
                queryParameters['label'] = this.convertParameterCollectionFormat(
                    parameters['label'],
                    ''
                );
            }

            if (parameters['annoSpan'] !== undefined) {
                queryParameters['anno_span'] = this.convertParameterCollectionFormat(
                    parameters['annoSpan'],
                    ''
                );
            }

            if (parameters['vfirst'] !== undefined) {
                queryParameters['vfirst'] = this.convertParameterCollectionFormat(
                    parameters['vfirst'],
                    ''
                );
            }

            if (parameters['vlast'] !== undefined) {
                queryParameters['vlast'] = this.convertParameterCollectionFormat(
                    parameters['vlast'],
                    ''
                );
            }

            if (parameters['isFirst'] !== undefined) {
                queryParameters['is_first'] = this.convertParameterCollectionFormat(
                    parameters['isFirst'],
                    ''
                );
            }

            if (parameters['isLast'] !== undefined) {
                queryParameters['is_last'] = this.convertParameterCollectionFormat(
                    parameters['isLast'],
                    ''
                );
            }

            if (parameters['startOffset'] !== undefined) {
                queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                    parameters['startOffset'],
                    ''
                );
            }

            if (parameters['endOffset'] !== undefined) {
                queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                    parameters['endOffset'],
                    ''
                );
            }

            if (parameters['span'] !== undefined) {
                queryParameters['span'] = this.convertParameterCollectionFormat(
                    parameters['span'],
                    ''
                );
            }

            if (parameters['tokenId'] !== undefined) {
                queryParameters['token_id'] = this.convertParameterCollectionFormat(
                    parameters['tokenId'],
                    ''
                );
            }

            if (parameters['tokenizer'] !== undefined) {
                queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                    parameters['tokenizer'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['tokenText'] !== undefined) {
                queryParameters['token_text'] = this.convertParameterCollectionFormat(
                    parameters['tokenText'],
                    ''
                );
            }

            if (parameters['substring'] !== undefined) {
                queryParameters['substring'] = this.convertParameterCollectionFormat(
                    parameters['substring'],
                    ''
                );
            }

            if (parameters['vocabId'] !== undefined) {
                queryParameters['vocab_id'] = this.convertParameterCollectionFormat(
                    parameters['vocabId'],
                    ''
                );
            }

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['order'] !== undefined) {
                queryParameters['order'] = this.convertParameterCollectionFormat(
                    parameters['order'],
                    ''
                );
            }

            if (parameters['range'] !== undefined) {
                headers['Range'] = parameters['range'];
            }

            if (parameters['rangeUnit'] !== undefined) {
                headers['Range-Unit'] = parameters['rangeUnit'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = this.convertParameterCollectionFormat(
                    parameters['offset'],
                    ''
                );
            }

            if (parameters['limit'] !== undefined) {
                queryParameters['limit'] = this.convertParameterCollectionFormat(
                    parameters['limit'],
                    ''
                );
            }

            headers['Prefer'] = 'count=none';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    getGoldenTokenArraysURL(parameters: {
        'exampleId' ? : string,
        'datasetName' ? : string,
        'labelsetName' ? : string,
        'annotatedTokens' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/golden_token_arrays';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['datasetName'] !== undefined) {
            queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                parameters['datasetName'],
                ''
            );
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['annotatedTokens'] !== undefined) {
            queryParameters['annotated_tokens'] = this.convertParameterCollectionFormat(
                parameters['annotatedTokens'],
                ''
            );
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters['order'] !== undefined) {
            queryParameters['order'] = this.convertParameterCollectionFormat(
                parameters['order'],
                ''
            );
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = this.convertParameterCollectionFormat(
                parameters['offset'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#getGoldenTokenArrays
         * @param {string} exampleId - This is a dynamic API generated by PostgREST
         * @param {string} datasetName - This is a dynamic API generated by PostgREST
         * @param {string} labelsetName - This is a dynamic API generated by PostgREST
         * @param {string} annotatedTokens - This is a dynamic API generated by PostgREST
         * @param {string} select - Filtering Columns
         * @param {string} order - Ordering
         * @param {string} range - Limiting and Pagination
         * @param {string} rangeUnit - Limiting and Pagination
         * @param {string} offset - Limiting and Pagination
         * @param {string} limit - Limiting and Pagination
        
    */
    getGoldenTokenArrays(parameters: {
        'exampleId' ? : string,
        'datasetName' ? : string,
        'labelsetName' ? : string,
        'annotatedTokens' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_getGoldenTokenArrays_200 > | ResponseWithBody < 206, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/golden_token_arrays';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['datasetName'] !== undefined) {
                queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                    parameters['datasetName'],
                    ''
                );
            }

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['annotatedTokens'] !== undefined) {
                queryParameters['annotated_tokens'] = this.convertParameterCollectionFormat(
                    parameters['annotatedTokens'],
                    ''
                );
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['order'] !== undefined) {
                queryParameters['order'] = this.convertParameterCollectionFormat(
                    parameters['order'],
                    ''
                );
            }

            if (parameters['range'] !== undefined) {
                headers['Range'] = parameters['range'];
            }

            if (parameters['rangeUnit'] !== undefined) {
                headers['Range-Unit'] = parameters['rangeUnit'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = this.convertParameterCollectionFormat(
                    parameters['offset'],
                    ''
                );
            }

            if (parameters['limit'] !== undefined) {
                queryParameters['limit'] = this.convertParameterCollectionFormat(
                    parameters['limit'],
                    ''
                );
            }

            headers['Prefer'] = 'count=none';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    getHumanAnnotationURL(parameters: {
        'annotationId' ? : string,
        'labelsetName' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'exampleId' ? : string,
        'label' ? : string,
        'correct' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/human_annotation';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['annotationId'] !== undefined) {
            queryParameters['annotation_id'] = this.convertParameterCollectionFormat(
                parameters['annotationId'],
                ''
            );
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['startOffset'] !== undefined) {
            queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                parameters['startOffset'],
                ''
            );
        }

        if (parameters['endOffset'] !== undefined) {
            queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                parameters['endOffset'],
                ''
            );
        }

        if (parameters['span'] !== undefined) {
            queryParameters['span'] = this.convertParameterCollectionFormat(
                parameters['span'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['label'] !== undefined) {
            queryParameters['label'] = this.convertParameterCollectionFormat(
                parameters['label'],
                ''
            );
        }

        if (parameters['correct'] !== undefined) {
            queryParameters['correct'] = this.convertParameterCollectionFormat(
                parameters['correct'],
                ''
            );
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters['order'] !== undefined) {
            queryParameters['order'] = this.convertParameterCollectionFormat(
                parameters['order'],
                ''
            );
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = this.convertParameterCollectionFormat(
                parameters['offset'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#getHumanAnnotation
         * @param {string} annotationId - This is a dynamic API generated by PostgREST
         * @param {string} labelsetName - This is a dynamic API generated by PostgREST
         * @param {string} startOffset - This is a dynamic API generated by PostgREST
         * @param {string} endOffset - This is a dynamic API generated by PostgREST
         * @param {string} span - This is a dynamic API generated by PostgREST
         * @param {string} exampleId - This is a dynamic API generated by PostgREST
         * @param {string} label - This is a dynamic API generated by PostgREST
         * @param {string} correct - This is a dynamic API generated by PostgREST
         * @param {string} select - Filtering Columns
         * @param {string} order - Ordering
         * @param {string} range - Limiting and Pagination
         * @param {string} rangeUnit - Limiting and Pagination
         * @param {string} offset - Limiting and Pagination
         * @param {string} limit - Limiting and Pagination
        
    */
    getHumanAnnotation(parameters: {
        'annotationId' ? : string,
        'labelsetName' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'exampleId' ? : string,
        'label' ? : string,
        'correct' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_getHumanAnnotation_200 > | ResponseWithBody < 206, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/human_annotation';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['annotationId'] !== undefined) {
                queryParameters['annotation_id'] = this.convertParameterCollectionFormat(
                    parameters['annotationId'],
                    ''
                );
            }

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['startOffset'] !== undefined) {
                queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                    parameters['startOffset'],
                    ''
                );
            }

            if (parameters['endOffset'] !== undefined) {
                queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                    parameters['endOffset'],
                    ''
                );
            }

            if (parameters['span'] !== undefined) {
                queryParameters['span'] = this.convertParameterCollectionFormat(
                    parameters['span'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['label'] !== undefined) {
                queryParameters['label'] = this.convertParameterCollectionFormat(
                    parameters['label'],
                    ''
                );
            }

            if (parameters['correct'] !== undefined) {
                queryParameters['correct'] = this.convertParameterCollectionFormat(
                    parameters['correct'],
                    ''
                );
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['order'] !== undefined) {
                queryParameters['order'] = this.convertParameterCollectionFormat(
                    parameters['order'],
                    ''
                );
            }

            if (parameters['range'] !== undefined) {
                headers['Range'] = parameters['range'];
            }

            if (parameters['rangeUnit'] !== undefined) {
                headers['Range-Unit'] = parameters['rangeUnit'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = this.convertParameterCollectionFormat(
                    parameters['offset'],
                    ''
                );
            }

            if (parameters['limit'] !== undefined) {
                queryParameters['limit'] = this.convertParameterCollectionFormat(
                    parameters['limit'],
                    ''
                );
            }

            headers['Prefer'] = 'count=none';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postHumanAnnotationURL(parameters: {
        'humanAnnotation' ? : human_annotation,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/human_annotation';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#postHumanAnnotation
     * @param {} humanAnnotation - human_annotation
     * @param {string} select - Filtering Columns
     * @param {string} prefer - Preference
     */
    postHumanAnnotation(parameters: {
        'humanAnnotation' ? : human_annotation,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/human_annotation';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['humanAnnotation'] !== undefined) {
                body = parameters['humanAnnotation'];
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    deleteHumanAnnotationURL(parameters: {
        'annotationId' ? : string,
        'labelsetName' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'exampleId' ? : string,
        'label' ? : string,
        'correct' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/human_annotation';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['annotationId'] !== undefined) {
            queryParameters['annotation_id'] = this.convertParameterCollectionFormat(
                parameters['annotationId'],
                ''
            );
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['startOffset'] !== undefined) {
            queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                parameters['startOffset'],
                ''
            );
        }

        if (parameters['endOffset'] !== undefined) {
            queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                parameters['endOffset'],
                ''
            );
        }

        if (parameters['span'] !== undefined) {
            queryParameters['span'] = this.convertParameterCollectionFormat(
                parameters['span'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['label'] !== undefined) {
            queryParameters['label'] = this.convertParameterCollectionFormat(
                parameters['label'],
                ''
            );
        }

        if (parameters['correct'] !== undefined) {
            queryParameters['correct'] = this.convertParameterCollectionFormat(
                parameters['correct'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#deleteHumanAnnotation
     * @param {string} annotationId - This is a dynamic API generated by PostgREST
     * @param {string} labelsetName - This is a dynamic API generated by PostgREST
     * @param {string} startOffset - This is a dynamic API generated by PostgREST
     * @param {string} endOffset - This is a dynamic API generated by PostgREST
     * @param {string} span - This is a dynamic API generated by PostgREST
     * @param {string} exampleId - This is a dynamic API generated by PostgREST
     * @param {string} label - This is a dynamic API generated by PostgREST
     * @param {string} correct - This is a dynamic API generated by PostgREST
     * @param {string} prefer - Preference
     */
    deleteHumanAnnotation(parameters: {
        'annotationId' ? : string,
        'labelsetName' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'exampleId' ? : string,
        'label' ? : string,
        'correct' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/human_annotation';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['annotationId'] !== undefined) {
                queryParameters['annotation_id'] = this.convertParameterCollectionFormat(
                    parameters['annotationId'],
                    ''
                );
            }

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['startOffset'] !== undefined) {
                queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                    parameters['startOffset'],
                    ''
                );
            }

            if (parameters['endOffset'] !== undefined) {
                queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                    parameters['endOffset'],
                    ''
                );
            }

            if (parameters['span'] !== undefined) {
                queryParameters['span'] = this.convertParameterCollectionFormat(
                    parameters['span'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['label'] !== undefined) {
                queryParameters['label'] = this.convertParameterCollectionFormat(
                    parameters['label'],
                    ''
                );
            }

            if (parameters['correct'] !== undefined) {
                queryParameters['correct'] = this.convertParameterCollectionFormat(
                    parameters['correct'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    patchHumanAnnotationURL(parameters: {
        'annotationId' ? : string,
        'labelsetName' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'exampleId' ? : string,
        'label' ? : string,
        'correct' ? : string,
        'humanAnnotation' ? : human_annotation,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/human_annotation';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['annotationId'] !== undefined) {
            queryParameters['annotation_id'] = this.convertParameterCollectionFormat(
                parameters['annotationId'],
                ''
            );
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['startOffset'] !== undefined) {
            queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                parameters['startOffset'],
                ''
            );
        }

        if (parameters['endOffset'] !== undefined) {
            queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                parameters['endOffset'],
                ''
            );
        }

        if (parameters['span'] !== undefined) {
            queryParameters['span'] = this.convertParameterCollectionFormat(
                parameters['span'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['label'] !== undefined) {
            queryParameters['label'] = this.convertParameterCollectionFormat(
                parameters['label'],
                ''
            );
        }

        if (parameters['correct'] !== undefined) {
            queryParameters['correct'] = this.convertParameterCollectionFormat(
                parameters['correct'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#patchHumanAnnotation
     * @param {string} annotationId - This is a dynamic API generated by PostgREST
     * @param {string} labelsetName - This is a dynamic API generated by PostgREST
     * @param {string} startOffset - This is a dynamic API generated by PostgREST
     * @param {string} endOffset - This is a dynamic API generated by PostgREST
     * @param {string} span - This is a dynamic API generated by PostgREST
     * @param {string} exampleId - This is a dynamic API generated by PostgREST
     * @param {string} label - This is a dynamic API generated by PostgREST
     * @param {string} correct - This is a dynamic API generated by PostgREST
     * @param {} humanAnnotation - human_annotation
     * @param {string} prefer - Preference
     */
    patchHumanAnnotation(parameters: {
        'annotationId' ? : string,
        'labelsetName' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'exampleId' ? : string,
        'label' ? : string,
        'correct' ? : string,
        'humanAnnotation' ? : human_annotation,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/human_annotation';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['annotationId'] !== undefined) {
                queryParameters['annotation_id'] = this.convertParameterCollectionFormat(
                    parameters['annotationId'],
                    ''
                );
            }

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['startOffset'] !== undefined) {
                queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                    parameters['startOffset'],
                    ''
                );
            }

            if (parameters['endOffset'] !== undefined) {
                queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                    parameters['endOffset'],
                    ''
                );
            }

            if (parameters['span'] !== undefined) {
                queryParameters['span'] = this.convertParameterCollectionFormat(
                    parameters['span'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['label'] !== undefined) {
                queryParameters['label'] = this.convertParameterCollectionFormat(
                    parameters['label'],
                    ''
                );
            }

            if (parameters['correct'] !== undefined) {
                queryParameters['correct'] = this.convertParameterCollectionFormat(
                    parameters['correct'],
                    ''
                );
            }

            if (parameters['humanAnnotation'] !== undefined) {
                body = parameters['humanAnnotation'];
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('PATCH', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    getLabelURL(parameters: {
        'labelsetName' ? : string,
        'label' ? : string,
        'bilu' ? : string,
        'description' ? : string,
        'vocabId' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/label';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['label'] !== undefined) {
            queryParameters['label'] = this.convertParameterCollectionFormat(
                parameters['label'],
                ''
            );
        }

        if (parameters['bilu'] !== undefined) {
            queryParameters['bilu'] = this.convertParameterCollectionFormat(
                parameters['bilu'],
                ''
            );
        }

        if (parameters['description'] !== undefined) {
            queryParameters['description'] = this.convertParameterCollectionFormat(
                parameters['description'],
                ''
            );
        }

        if (parameters['vocabId'] !== undefined) {
            queryParameters['vocab_id'] = this.convertParameterCollectionFormat(
                parameters['vocabId'],
                ''
            );
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters['order'] !== undefined) {
            queryParameters['order'] = this.convertParameterCollectionFormat(
                parameters['order'],
                ''
            );
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = this.convertParameterCollectionFormat(
                parameters['offset'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#getLabel
         * @param {string} labelsetName - This is a dynamic API generated by PostgREST
         * @param {string} label - This is a dynamic API generated by PostgREST
         * @param {string} bilu - This is a dynamic API generated by PostgREST
         * @param {string} description - This is a dynamic API generated by PostgREST
         * @param {string} vocabId - This is a dynamic API generated by PostgREST
         * @param {string} select - Filtering Columns
         * @param {string} order - Ordering
         * @param {string} range - Limiting and Pagination
         * @param {string} rangeUnit - Limiting and Pagination
         * @param {string} offset - Limiting and Pagination
         * @param {string} limit - Limiting and Pagination
        
    */
    getLabel(parameters: {
        'labelsetName' ? : string,
        'label' ? : string,
        'bilu' ? : string,
        'description' ? : string,
        'vocabId' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_getLabel_200 > | ResponseWithBody < 206, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/label';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['label'] !== undefined) {
                queryParameters['label'] = this.convertParameterCollectionFormat(
                    parameters['label'],
                    ''
                );
            }

            if (parameters['bilu'] !== undefined) {
                queryParameters['bilu'] = this.convertParameterCollectionFormat(
                    parameters['bilu'],
                    ''
                );
            }

            if (parameters['description'] !== undefined) {
                queryParameters['description'] = this.convertParameterCollectionFormat(
                    parameters['description'],
                    ''
                );
            }

            if (parameters['vocabId'] !== undefined) {
                queryParameters['vocab_id'] = this.convertParameterCollectionFormat(
                    parameters['vocabId'],
                    ''
                );
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['order'] !== undefined) {
                queryParameters['order'] = this.convertParameterCollectionFormat(
                    parameters['order'],
                    ''
                );
            }

            if (parameters['range'] !== undefined) {
                headers['Range'] = parameters['range'];
            }

            if (parameters['rangeUnit'] !== undefined) {
                headers['Range-Unit'] = parameters['rangeUnit'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = this.convertParameterCollectionFormat(
                    parameters['offset'],
                    ''
                );
            }

            if (parameters['limit'] !== undefined) {
                queryParameters['limit'] = this.convertParameterCollectionFormat(
                    parameters['limit'],
                    ''
                );
            }

            headers['Prefer'] = 'count=none';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postLabelURL(parameters: {
        'label' ? : label,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/label';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#postLabel
     * @param {} label - label
     * @param {string} select - Filtering Columns
     * @param {string} prefer - Preference
     */
    postLabel(parameters: {
        'label' ? : label,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/label';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['label'] !== undefined) {
                body = parameters['label'];
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    deleteLabelURL(parameters: {
        'labelsetName' ? : string,
        'label' ? : string,
        'bilu' ? : string,
        'description' ? : string,
        'vocabId' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/label';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['label'] !== undefined) {
            queryParameters['label'] = this.convertParameterCollectionFormat(
                parameters['label'],
                ''
            );
        }

        if (parameters['bilu'] !== undefined) {
            queryParameters['bilu'] = this.convertParameterCollectionFormat(
                parameters['bilu'],
                ''
            );
        }

        if (parameters['description'] !== undefined) {
            queryParameters['description'] = this.convertParameterCollectionFormat(
                parameters['description'],
                ''
            );
        }

        if (parameters['vocabId'] !== undefined) {
            queryParameters['vocab_id'] = this.convertParameterCollectionFormat(
                parameters['vocabId'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#deleteLabel
     * @param {string} labelsetName - This is a dynamic API generated by PostgREST
     * @param {string} label - This is a dynamic API generated by PostgREST
     * @param {string} bilu - This is a dynamic API generated by PostgREST
     * @param {string} description - This is a dynamic API generated by PostgREST
     * @param {string} vocabId - This is a dynamic API generated by PostgREST
     * @param {string} prefer - Preference
     */
    deleteLabel(parameters: {
        'labelsetName' ? : string,
        'label' ? : string,
        'bilu' ? : string,
        'description' ? : string,
        'vocabId' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/label';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['label'] !== undefined) {
                queryParameters['label'] = this.convertParameterCollectionFormat(
                    parameters['label'],
                    ''
                );
            }

            if (parameters['bilu'] !== undefined) {
                queryParameters['bilu'] = this.convertParameterCollectionFormat(
                    parameters['bilu'],
                    ''
                );
            }

            if (parameters['description'] !== undefined) {
                queryParameters['description'] = this.convertParameterCollectionFormat(
                    parameters['description'],
                    ''
                );
            }

            if (parameters['vocabId'] !== undefined) {
                queryParameters['vocab_id'] = this.convertParameterCollectionFormat(
                    parameters['vocabId'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    patchLabelURL(parameters: {
        'labelsetName' ? : string,
        'label' ? : string,
        'bilu' ? : string,
        'description' ? : string,
        'vocabId' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/label';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['label'] !== undefined) {
            queryParameters['label'] = this.convertParameterCollectionFormat(
                parameters['label'],
                ''
            );
        }

        if (parameters['bilu'] !== undefined) {
            queryParameters['bilu'] = this.convertParameterCollectionFormat(
                parameters['bilu'],
                ''
            );
        }

        if (parameters['description'] !== undefined) {
            queryParameters['description'] = this.convertParameterCollectionFormat(
                parameters['description'],
                ''
            );
        }

        if (parameters['vocabId'] !== undefined) {
            queryParameters['vocab_id'] = this.convertParameterCollectionFormat(
                parameters['vocabId'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#patchLabel
     * @param {string} labelsetName - This is a dynamic API generated by PostgREST
     * @param {string} label - This is a dynamic API generated by PostgREST
     * @param {string} bilu - This is a dynamic API generated by PostgREST
     * @param {string} description - This is a dynamic API generated by PostgREST
     * @param {string} vocabId - This is a dynamic API generated by PostgREST
     * @param {} label - label
     * @param {string} prefer - Preference
     */
    patchLabel(parameters: {
        'labelsetName' ? : string,
        'label' ? : string,
        'bilu' ? : string,
        'description' ? : string,
        'vocabId' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/label';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['label'] !== undefined) {
                queryParameters['label'] = this.convertParameterCollectionFormat(
                    parameters['label'],
                    ''
                );
            }

            if (parameters['bilu'] !== undefined) {
                queryParameters['bilu'] = this.convertParameterCollectionFormat(
                    parameters['bilu'],
                    ''
                );
            }

            if (parameters['description'] !== undefined) {
                queryParameters['description'] = this.convertParameterCollectionFormat(
                    parameters['description'],
                    ''
                );
            }

            if (parameters['vocabId'] !== undefined) {
                queryParameters['vocab_id'] = this.convertParameterCollectionFormat(
                    parameters['vocabId'],
                    ''
                );
            }

            if (parameters['label'] !== undefined) {
                body = parameters['label'];
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('PATCH', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    getLabelsetURL(parameters: {
        'labelsetName' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/labelset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters['order'] !== undefined) {
            queryParameters['order'] = this.convertParameterCollectionFormat(
                parameters['order'],
                ''
            );
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = this.convertParameterCollectionFormat(
                parameters['offset'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#getLabelset
         * @param {string} labelsetName - This is a dynamic API generated by PostgREST
         * @param {string} select - Filtering Columns
         * @param {string} order - Ordering
         * @param {string} range - Limiting and Pagination
         * @param {string} rangeUnit - Limiting and Pagination
         * @param {string} offset - Limiting and Pagination
         * @param {string} limit - Limiting and Pagination
        
    */
    getLabelset(parameters: {
        'labelsetName' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_getLabelset_200 > | ResponseWithBody < 206, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/labelset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['order'] !== undefined) {
                queryParameters['order'] = this.convertParameterCollectionFormat(
                    parameters['order'],
                    ''
                );
            }

            if (parameters['range'] !== undefined) {
                headers['Range'] = parameters['range'];
            }

            if (parameters['rangeUnit'] !== undefined) {
                headers['Range-Unit'] = parameters['rangeUnit'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = this.convertParameterCollectionFormat(
                    parameters['offset'],
                    ''
                );
            }

            if (parameters['limit'] !== undefined) {
                queryParameters['limit'] = this.convertParameterCollectionFormat(
                    parameters['limit'],
                    ''
                );
            }

            headers['Prefer'] = 'count=none';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postLabelsetURL(parameters: {
        'labelset' ? : labelset,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/labelset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#postLabelset
     * @param {} labelset - labelset
     * @param {string} select - Filtering Columns
     * @param {string} prefer - Preference
     */
    postLabelset(parameters: {
        'labelset' ? : labelset,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/labelset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['labelset'] !== undefined) {
                body = parameters['labelset'];
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    deleteLabelsetURL(parameters: {
        'labelsetName' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/labelset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#deleteLabelset
     * @param {string} labelsetName - This is a dynamic API generated by PostgREST
     * @param {string} prefer - Preference
     */
    deleteLabelset(parameters: {
        'labelsetName' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/labelset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    patchLabelsetURL(parameters: {
        'labelsetName' ? : string,
        'labelset' ? : labelset,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/labelset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#patchLabelset
     * @param {string} labelsetName - This is a dynamic API generated by PostgREST
     * @param {} labelset - labelset
     * @param {string} prefer - Preference
     */
    patchLabelset(parameters: {
        'labelsetName' ? : string,
        'labelset' ? : labelset,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/labelset';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['labelset'] !== undefined) {
                body = parameters['labelset'];
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('PATCH', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    getModelURL(parameters: {
        'modelName' ? : string,
        'labelsetName' ? : string,
        'version' ? : string,
        'modelId' ? : string,
        'parentId' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['modelName'] !== undefined) {
            queryParameters['model_name'] = this.convertParameterCollectionFormat(
                parameters['modelName'],
                ''
            );
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['version'] !== undefined) {
            queryParameters['version'] = this.convertParameterCollectionFormat(
                parameters['version'],
                ''
            );
        }

        if (parameters['modelId'] !== undefined) {
            queryParameters['model_id'] = this.convertParameterCollectionFormat(
                parameters['modelId'],
                ''
            );
        }

        if (parameters['parentId'] !== undefined) {
            queryParameters['parent_id'] = this.convertParameterCollectionFormat(
                parameters['parentId'],
                ''
            );
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters['order'] !== undefined) {
            queryParameters['order'] = this.convertParameterCollectionFormat(
                parameters['order'],
                ''
            );
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = this.convertParameterCollectionFormat(
                parameters['offset'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#getModel
         * @param {string} modelName - This is a dynamic API generated by PostgREST
         * @param {string} labelsetName - This is a dynamic API generated by PostgREST
         * @param {string} version - This is a dynamic API generated by PostgREST
         * @param {string} modelId - This is a dynamic API generated by PostgREST
         * @param {string} parentId - This is a dynamic API generated by PostgREST
         * @param {string} select - Filtering Columns
         * @param {string} order - Ordering
         * @param {string} range - Limiting and Pagination
         * @param {string} rangeUnit - Limiting and Pagination
         * @param {string} offset - Limiting and Pagination
         * @param {string} limit - Limiting and Pagination
        
    */
    getModel(parameters: {
        'modelName' ? : string,
        'labelsetName' ? : string,
        'version' ? : string,
        'modelId' ? : string,
        'parentId' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_getModel_200 > | ResponseWithBody < 206, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['modelName'] !== undefined) {
                queryParameters['model_name'] = this.convertParameterCollectionFormat(
                    parameters['modelName'],
                    ''
                );
            }

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['version'] !== undefined) {
                queryParameters['version'] = this.convertParameterCollectionFormat(
                    parameters['version'],
                    ''
                );
            }

            if (parameters['modelId'] !== undefined) {
                queryParameters['model_id'] = this.convertParameterCollectionFormat(
                    parameters['modelId'],
                    ''
                );
            }

            if (parameters['parentId'] !== undefined) {
                queryParameters['parent_id'] = this.convertParameterCollectionFormat(
                    parameters['parentId'],
                    ''
                );
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['order'] !== undefined) {
                queryParameters['order'] = this.convertParameterCollectionFormat(
                    parameters['order'],
                    ''
                );
            }

            if (parameters['range'] !== undefined) {
                headers['Range'] = parameters['range'];
            }

            if (parameters['rangeUnit'] !== undefined) {
                headers['Range-Unit'] = parameters['rangeUnit'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = this.convertParameterCollectionFormat(
                    parameters['offset'],
                    ''
                );
            }

            if (parameters['limit'] !== undefined) {
                queryParameters['limit'] = this.convertParameterCollectionFormat(
                    parameters['limit'],
                    ''
                );
            }

            headers['Prefer'] = 'count=none';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postModelURL(parameters: {
        'model' ? : model,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#postModel
     * @param {} model - model
     * @param {string} select - Filtering Columns
     * @param {string} prefer - Preference
     */
    postModel(parameters: {
        'model' ? : model,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    deleteModelURL(parameters: {
        'modelName' ? : string,
        'labelsetName' ? : string,
        'version' ? : string,
        'modelId' ? : string,
        'parentId' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['modelName'] !== undefined) {
            queryParameters['model_name'] = this.convertParameterCollectionFormat(
                parameters['modelName'],
                ''
            );
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['version'] !== undefined) {
            queryParameters['version'] = this.convertParameterCollectionFormat(
                parameters['version'],
                ''
            );
        }

        if (parameters['modelId'] !== undefined) {
            queryParameters['model_id'] = this.convertParameterCollectionFormat(
                parameters['modelId'],
                ''
            );
        }

        if (parameters['parentId'] !== undefined) {
            queryParameters['parent_id'] = this.convertParameterCollectionFormat(
                parameters['parentId'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#deleteModel
     * @param {string} modelName - This is a dynamic API generated by PostgREST
     * @param {string} labelsetName - This is a dynamic API generated by PostgREST
     * @param {string} version - This is a dynamic API generated by PostgREST
     * @param {string} modelId - This is a dynamic API generated by PostgREST
     * @param {string} parentId - This is a dynamic API generated by PostgREST
     * @param {string} prefer - Preference
     */
    deleteModel(parameters: {
        'modelName' ? : string,
        'labelsetName' ? : string,
        'version' ? : string,
        'modelId' ? : string,
        'parentId' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['modelName'] !== undefined) {
                queryParameters['model_name'] = this.convertParameterCollectionFormat(
                    parameters['modelName'],
                    ''
                );
            }

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['version'] !== undefined) {
                queryParameters['version'] = this.convertParameterCollectionFormat(
                    parameters['version'],
                    ''
                );
            }

            if (parameters['modelId'] !== undefined) {
                queryParameters['model_id'] = this.convertParameterCollectionFormat(
                    parameters['modelId'],
                    ''
                );
            }

            if (parameters['parentId'] !== undefined) {
                queryParameters['parent_id'] = this.convertParameterCollectionFormat(
                    parameters['parentId'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    patchModelURL(parameters: {
        'modelName' ? : string,
        'labelsetName' ? : string,
        'version' ? : string,
        'modelId' ? : string,
        'parentId' ? : string,
        'model' ? : model,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['modelName'] !== undefined) {
            queryParameters['model_name'] = this.convertParameterCollectionFormat(
                parameters['modelName'],
                ''
            );
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['version'] !== undefined) {
            queryParameters['version'] = this.convertParameterCollectionFormat(
                parameters['version'],
                ''
            );
        }

        if (parameters['modelId'] !== undefined) {
            queryParameters['model_id'] = this.convertParameterCollectionFormat(
                parameters['modelId'],
                ''
            );
        }

        if (parameters['parentId'] !== undefined) {
            queryParameters['parent_id'] = this.convertParameterCollectionFormat(
                parameters['parentId'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#patchModel
     * @param {string} modelName - This is a dynamic API generated by PostgREST
     * @param {string} labelsetName - This is a dynamic API generated by PostgREST
     * @param {string} version - This is a dynamic API generated by PostgREST
     * @param {string} modelId - This is a dynamic API generated by PostgREST
     * @param {string} parentId - This is a dynamic API generated by PostgREST
     * @param {} model - model
     * @param {string} prefer - Preference
     */
    patchModel(parameters: {
        'modelName' ? : string,
        'labelsetName' ? : string,
        'version' ? : string,
        'modelId' ? : string,
        'parentId' ? : string,
        'model' ? : model,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['modelName'] !== undefined) {
                queryParameters['model_name'] = this.convertParameterCollectionFormat(
                    parameters['modelName'],
                    ''
                );
            }

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['version'] !== undefined) {
                queryParameters['version'] = this.convertParameterCollectionFormat(
                    parameters['version'],
                    ''
                );
            }

            if (parameters['modelId'] !== undefined) {
                queryParameters['model_id'] = this.convertParameterCollectionFormat(
                    parameters['modelId'],
                    ''
                );
            }

            if (parameters['parentId'] !== undefined) {
                queryParameters['parent_id'] = this.convertParameterCollectionFormat(
                    parameters['parentId'],
                    ''
                );
            }

            if (parameters['model'] !== undefined) {
                body = parameters['model'];
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('PATCH', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    getModelPredictionURL(parameters: {
        'labelsetName' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'datasetName' ? : string,
        'label' ? : string,
        'span' ? : string,
        'bilu' ? : string,
        'modelId' ? : string,
        'annotationStart' ? : string,
        'annotationEnd' ? : string,
        'annotationSpan' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_prediction';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['startOffset'] !== undefined) {
            queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                parameters['startOffset'],
                ''
            );
        }

        if (parameters['endOffset'] !== undefined) {
            queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                parameters['endOffset'],
                ''
            );
        }

        if (parameters['tokenizer'] !== undefined) {
            queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                parameters['tokenizer'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['datasetName'] !== undefined) {
            queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                parameters['datasetName'],
                ''
            );
        }

        if (parameters['label'] !== undefined) {
            queryParameters['label'] = this.convertParameterCollectionFormat(
                parameters['label'],
                ''
            );
        }

        if (parameters['span'] !== undefined) {
            queryParameters['span'] = this.convertParameterCollectionFormat(
                parameters['span'],
                ''
            );
        }

        if (parameters['bilu'] !== undefined) {
            queryParameters['bilu'] = this.convertParameterCollectionFormat(
                parameters['bilu'],
                ''
            );
        }

        if (parameters['modelId'] !== undefined) {
            queryParameters['model_id'] = this.convertParameterCollectionFormat(
                parameters['modelId'],
                ''
            );
        }

        if (parameters['annotationStart'] !== undefined) {
            queryParameters['annotation_start'] = this.convertParameterCollectionFormat(
                parameters['annotationStart'],
                ''
            );
        }

        if (parameters['annotationEnd'] !== undefined) {
            queryParameters['annotation_end'] = this.convertParameterCollectionFormat(
                parameters['annotationEnd'],
                ''
            );
        }

        if (parameters['annotationSpan'] !== undefined) {
            queryParameters['annotation_span'] = this.convertParameterCollectionFormat(
                parameters['annotationSpan'],
                ''
            );
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters['order'] !== undefined) {
            queryParameters['order'] = this.convertParameterCollectionFormat(
                parameters['order'],
                ''
            );
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = this.convertParameterCollectionFormat(
                parameters['offset'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#getModelPrediction
         * @param {string} labelsetName - This is a dynamic API generated by PostgREST
         * @param {string} startOffset - This is a dynamic API generated by PostgREST
         * @param {string} endOffset - This is a dynamic API generated by PostgREST
         * @param {string} tokenizer - This is a dynamic API generated by PostgREST
         * @param {string} exampleId - This is a dynamic API generated by PostgREST
         * @param {string} datasetName - This is a dynamic API generated by PostgREST
         * @param {string} label - This is a dynamic API generated by PostgREST
         * @param {string} span - This is a dynamic API generated by PostgREST
         * @param {string} bilu - This is a dynamic API generated by PostgREST
         * @param {string} modelId - This is a dynamic API generated by PostgREST
         * @param {string} annotationStart - This is a dynamic API generated by PostgREST
         * @param {string} annotationEnd - This is a dynamic API generated by PostgREST
         * @param {string} annotationSpan - This is a dynamic API generated by PostgREST
         * @param {string} select - Filtering Columns
         * @param {string} order - Ordering
         * @param {string} range - Limiting and Pagination
         * @param {string} rangeUnit - Limiting and Pagination
         * @param {string} offset - Limiting and Pagination
         * @param {string} limit - Limiting and Pagination
        
    */
    getModelPrediction(parameters: {
        'labelsetName' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'datasetName' ? : string,
        'label' ? : string,
        'span' ? : string,
        'bilu' ? : string,
        'modelId' ? : string,
        'annotationStart' ? : string,
        'annotationEnd' ? : string,
        'annotationSpan' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_getModelPrediction_200 > | ResponseWithBody < 206, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_prediction';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['startOffset'] !== undefined) {
                queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                    parameters['startOffset'],
                    ''
                );
            }

            if (parameters['endOffset'] !== undefined) {
                queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                    parameters['endOffset'],
                    ''
                );
            }

            if (parameters['tokenizer'] !== undefined) {
                queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                    parameters['tokenizer'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['datasetName'] !== undefined) {
                queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                    parameters['datasetName'],
                    ''
                );
            }

            if (parameters['label'] !== undefined) {
                queryParameters['label'] = this.convertParameterCollectionFormat(
                    parameters['label'],
                    ''
                );
            }

            if (parameters['span'] !== undefined) {
                queryParameters['span'] = this.convertParameterCollectionFormat(
                    parameters['span'],
                    ''
                );
            }

            if (parameters['bilu'] !== undefined) {
                queryParameters['bilu'] = this.convertParameterCollectionFormat(
                    parameters['bilu'],
                    ''
                );
            }

            if (parameters['modelId'] !== undefined) {
                queryParameters['model_id'] = this.convertParameterCollectionFormat(
                    parameters['modelId'],
                    ''
                );
            }

            if (parameters['annotationStart'] !== undefined) {
                queryParameters['annotation_start'] = this.convertParameterCollectionFormat(
                    parameters['annotationStart'],
                    ''
                );
            }

            if (parameters['annotationEnd'] !== undefined) {
                queryParameters['annotation_end'] = this.convertParameterCollectionFormat(
                    parameters['annotationEnd'],
                    ''
                );
            }

            if (parameters['annotationSpan'] !== undefined) {
                queryParameters['annotation_span'] = this.convertParameterCollectionFormat(
                    parameters['annotationSpan'],
                    ''
                );
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['order'] !== undefined) {
                queryParameters['order'] = this.convertParameterCollectionFormat(
                    parameters['order'],
                    ''
                );
            }

            if (parameters['range'] !== undefined) {
                headers['Range'] = parameters['range'];
            }

            if (parameters['rangeUnit'] !== undefined) {
                headers['Range-Unit'] = parameters['rangeUnit'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = this.convertParameterCollectionFormat(
                    parameters['offset'],
                    ''
                );
            }

            if (parameters['limit'] !== undefined) {
                queryParameters['limit'] = this.convertParameterCollectionFormat(
                    parameters['limit'],
                    ''
                );
            }

            headers['Prefer'] = 'count=none';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postModelPredictionURL(parameters: {
        'modelPrediction' ? : model_prediction,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_prediction';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#postModelPrediction
     * @param {} modelPrediction - model_prediction
     * @param {string} select - Filtering Columns
     * @param {string} prefer - Preference
     */
    postModelPrediction(parameters: {
        'modelPrediction' ? : model_prediction,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_prediction';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['modelPrediction'] !== undefined) {
                body = parameters['modelPrediction'];
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    deleteModelPredictionURL(parameters: {
        'labelsetName' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'datasetName' ? : string,
        'label' ? : string,
        'span' ? : string,
        'bilu' ? : string,
        'modelId' ? : string,
        'annotationStart' ? : string,
        'annotationEnd' ? : string,
        'annotationSpan' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_prediction';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['startOffset'] !== undefined) {
            queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                parameters['startOffset'],
                ''
            );
        }

        if (parameters['endOffset'] !== undefined) {
            queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                parameters['endOffset'],
                ''
            );
        }

        if (parameters['tokenizer'] !== undefined) {
            queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                parameters['tokenizer'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['datasetName'] !== undefined) {
            queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                parameters['datasetName'],
                ''
            );
        }

        if (parameters['label'] !== undefined) {
            queryParameters['label'] = this.convertParameterCollectionFormat(
                parameters['label'],
                ''
            );
        }

        if (parameters['span'] !== undefined) {
            queryParameters['span'] = this.convertParameterCollectionFormat(
                parameters['span'],
                ''
            );
        }

        if (parameters['bilu'] !== undefined) {
            queryParameters['bilu'] = this.convertParameterCollectionFormat(
                parameters['bilu'],
                ''
            );
        }

        if (parameters['modelId'] !== undefined) {
            queryParameters['model_id'] = this.convertParameterCollectionFormat(
                parameters['modelId'],
                ''
            );
        }

        if (parameters['annotationStart'] !== undefined) {
            queryParameters['annotation_start'] = this.convertParameterCollectionFormat(
                parameters['annotationStart'],
                ''
            );
        }

        if (parameters['annotationEnd'] !== undefined) {
            queryParameters['annotation_end'] = this.convertParameterCollectionFormat(
                parameters['annotationEnd'],
                ''
            );
        }

        if (parameters['annotationSpan'] !== undefined) {
            queryParameters['annotation_span'] = this.convertParameterCollectionFormat(
                parameters['annotationSpan'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#deleteModelPrediction
     * @param {string} labelsetName - This is a dynamic API generated by PostgREST
     * @param {string} startOffset - This is a dynamic API generated by PostgREST
     * @param {string} endOffset - This is a dynamic API generated by PostgREST
     * @param {string} tokenizer - This is a dynamic API generated by PostgREST
     * @param {string} exampleId - This is a dynamic API generated by PostgREST
     * @param {string} datasetName - This is a dynamic API generated by PostgREST
     * @param {string} label - This is a dynamic API generated by PostgREST
     * @param {string} span - This is a dynamic API generated by PostgREST
     * @param {string} bilu - This is a dynamic API generated by PostgREST
     * @param {string} modelId - This is a dynamic API generated by PostgREST
     * @param {string} annotationStart - This is a dynamic API generated by PostgREST
     * @param {string} annotationEnd - This is a dynamic API generated by PostgREST
     * @param {string} annotationSpan - This is a dynamic API generated by PostgREST
     * @param {string} prefer - Preference
     */
    deleteModelPrediction(parameters: {
        'labelsetName' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'datasetName' ? : string,
        'label' ? : string,
        'span' ? : string,
        'bilu' ? : string,
        'modelId' ? : string,
        'annotationStart' ? : string,
        'annotationEnd' ? : string,
        'annotationSpan' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_prediction';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['startOffset'] !== undefined) {
                queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                    parameters['startOffset'],
                    ''
                );
            }

            if (parameters['endOffset'] !== undefined) {
                queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                    parameters['endOffset'],
                    ''
                );
            }

            if (parameters['tokenizer'] !== undefined) {
                queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                    parameters['tokenizer'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['datasetName'] !== undefined) {
                queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                    parameters['datasetName'],
                    ''
                );
            }

            if (parameters['label'] !== undefined) {
                queryParameters['label'] = this.convertParameterCollectionFormat(
                    parameters['label'],
                    ''
                );
            }

            if (parameters['span'] !== undefined) {
                queryParameters['span'] = this.convertParameterCollectionFormat(
                    parameters['span'],
                    ''
                );
            }

            if (parameters['bilu'] !== undefined) {
                queryParameters['bilu'] = this.convertParameterCollectionFormat(
                    parameters['bilu'],
                    ''
                );
            }

            if (parameters['modelId'] !== undefined) {
                queryParameters['model_id'] = this.convertParameterCollectionFormat(
                    parameters['modelId'],
                    ''
                );
            }

            if (parameters['annotationStart'] !== undefined) {
                queryParameters['annotation_start'] = this.convertParameterCollectionFormat(
                    parameters['annotationStart'],
                    ''
                );
            }

            if (parameters['annotationEnd'] !== undefined) {
                queryParameters['annotation_end'] = this.convertParameterCollectionFormat(
                    parameters['annotationEnd'],
                    ''
                );
            }

            if (parameters['annotationSpan'] !== undefined) {
                queryParameters['annotation_span'] = this.convertParameterCollectionFormat(
                    parameters['annotationSpan'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    patchModelPredictionURL(parameters: {
        'labelsetName' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'datasetName' ? : string,
        'label' ? : string,
        'span' ? : string,
        'bilu' ? : string,
        'modelId' ? : string,
        'annotationStart' ? : string,
        'annotationEnd' ? : string,
        'annotationSpan' ? : string,
        'modelPrediction' ? : model_prediction,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_prediction';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['labelsetName'] !== undefined) {
            queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                parameters['labelsetName'],
                ''
            );
        }

        if (parameters['startOffset'] !== undefined) {
            queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                parameters['startOffset'],
                ''
            );
        }

        if (parameters['endOffset'] !== undefined) {
            queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                parameters['endOffset'],
                ''
            );
        }

        if (parameters['tokenizer'] !== undefined) {
            queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                parameters['tokenizer'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['datasetName'] !== undefined) {
            queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                parameters['datasetName'],
                ''
            );
        }

        if (parameters['label'] !== undefined) {
            queryParameters['label'] = this.convertParameterCollectionFormat(
                parameters['label'],
                ''
            );
        }

        if (parameters['span'] !== undefined) {
            queryParameters['span'] = this.convertParameterCollectionFormat(
                parameters['span'],
                ''
            );
        }

        if (parameters['bilu'] !== undefined) {
            queryParameters['bilu'] = this.convertParameterCollectionFormat(
                parameters['bilu'],
                ''
            );
        }

        if (parameters['modelId'] !== undefined) {
            queryParameters['model_id'] = this.convertParameterCollectionFormat(
                parameters['modelId'],
                ''
            );
        }

        if (parameters['annotationStart'] !== undefined) {
            queryParameters['annotation_start'] = this.convertParameterCollectionFormat(
                parameters['annotationStart'],
                ''
            );
        }

        if (parameters['annotationEnd'] !== undefined) {
            queryParameters['annotation_end'] = this.convertParameterCollectionFormat(
                parameters['annotationEnd'],
                ''
            );
        }

        if (parameters['annotationSpan'] !== undefined) {
            queryParameters['annotation_span'] = this.convertParameterCollectionFormat(
                parameters['annotationSpan'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#patchModelPrediction
     * @param {string} labelsetName - This is a dynamic API generated by PostgREST
     * @param {string} startOffset - This is a dynamic API generated by PostgREST
     * @param {string} endOffset - This is a dynamic API generated by PostgREST
     * @param {string} tokenizer - This is a dynamic API generated by PostgREST
     * @param {string} exampleId - This is a dynamic API generated by PostgREST
     * @param {string} datasetName - This is a dynamic API generated by PostgREST
     * @param {string} label - This is a dynamic API generated by PostgREST
     * @param {string} span - This is a dynamic API generated by PostgREST
     * @param {string} bilu - This is a dynamic API generated by PostgREST
     * @param {string} modelId - This is a dynamic API generated by PostgREST
     * @param {string} annotationStart - This is a dynamic API generated by PostgREST
     * @param {string} annotationEnd - This is a dynamic API generated by PostgREST
     * @param {string} annotationSpan - This is a dynamic API generated by PostgREST
     * @param {} modelPrediction - model_prediction
     * @param {string} prefer - Preference
     */
    patchModelPrediction(parameters: {
        'labelsetName' ? : string,
        'startOffset' ? : string,
        'endOffset' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'datasetName' ? : string,
        'label' ? : string,
        'span' ? : string,
        'bilu' ? : string,
        'modelId' ? : string,
        'annotationStart' ? : string,
        'annotationEnd' ? : string,
        'annotationSpan' ? : string,
        'modelPrediction' ? : model_prediction,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_prediction';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['labelsetName'] !== undefined) {
                queryParameters['labelset_name'] = this.convertParameterCollectionFormat(
                    parameters['labelsetName'],
                    ''
                );
            }

            if (parameters['startOffset'] !== undefined) {
                queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                    parameters['startOffset'],
                    ''
                );
            }

            if (parameters['endOffset'] !== undefined) {
                queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                    parameters['endOffset'],
                    ''
                );
            }

            if (parameters['tokenizer'] !== undefined) {
                queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                    parameters['tokenizer'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['datasetName'] !== undefined) {
                queryParameters['dataset_name'] = this.convertParameterCollectionFormat(
                    parameters['datasetName'],
                    ''
                );
            }

            if (parameters['label'] !== undefined) {
                queryParameters['label'] = this.convertParameterCollectionFormat(
                    parameters['label'],
                    ''
                );
            }

            if (parameters['span'] !== undefined) {
                queryParameters['span'] = this.convertParameterCollectionFormat(
                    parameters['span'],
                    ''
                );
            }

            if (parameters['bilu'] !== undefined) {
                queryParameters['bilu'] = this.convertParameterCollectionFormat(
                    parameters['bilu'],
                    ''
                );
            }

            if (parameters['modelId'] !== undefined) {
                queryParameters['model_id'] = this.convertParameterCollectionFormat(
                    parameters['modelId'],
                    ''
                );
            }

            if (parameters['annotationStart'] !== undefined) {
                queryParameters['annotation_start'] = this.convertParameterCollectionFormat(
                    parameters['annotationStart'],
                    ''
                );
            }

            if (parameters['annotationEnd'] !== undefined) {
                queryParameters['annotation_end'] = this.convertParameterCollectionFormat(
                    parameters['annotationEnd'],
                    ''
                );
            }

            if (parameters['annotationSpan'] !== undefined) {
                queryParameters['annotation_span'] = this.convertParameterCollectionFormat(
                    parameters['annotationSpan'],
                    ''
                );
            }

            if (parameters['modelPrediction'] !== undefined) {
                body = parameters['modelPrediction'];
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('PATCH', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    getModelTestamentURL(parameters: {
        'modelId' ? : string,
        'exampleId' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_testament';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['modelId'] !== undefined) {
            queryParameters['model_id'] = this.convertParameterCollectionFormat(
                parameters['modelId'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters['order'] !== undefined) {
            queryParameters['order'] = this.convertParameterCollectionFormat(
                parameters['order'],
                ''
            );
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = this.convertParameterCollectionFormat(
                parameters['offset'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#getModelTestament
         * @param {string} modelId - This is a dynamic API generated by PostgREST
         * @param {string} exampleId - This is a dynamic API generated by PostgREST
         * @param {string} select - Filtering Columns
         * @param {string} order - Ordering
         * @param {string} range - Limiting and Pagination
         * @param {string} rangeUnit - Limiting and Pagination
         * @param {string} offset - Limiting and Pagination
         * @param {string} limit - Limiting and Pagination
        
    */
    getModelTestament(parameters: {
        'modelId' ? : string,
        'exampleId' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_getModelTestament_200 > | ResponseWithBody < 206, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_testament';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['modelId'] !== undefined) {
                queryParameters['model_id'] = this.convertParameterCollectionFormat(
                    parameters['modelId'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['order'] !== undefined) {
                queryParameters['order'] = this.convertParameterCollectionFormat(
                    parameters['order'],
                    ''
                );
            }

            if (parameters['range'] !== undefined) {
                headers['Range'] = parameters['range'];
            }

            if (parameters['rangeUnit'] !== undefined) {
                headers['Range-Unit'] = parameters['rangeUnit'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = this.convertParameterCollectionFormat(
                    parameters['offset'],
                    ''
                );
            }

            if (parameters['limit'] !== undefined) {
                queryParameters['limit'] = this.convertParameterCollectionFormat(
                    parameters['limit'],
                    ''
                );
            }

            headers['Prefer'] = 'count=none';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postModelTestamentURL(parameters: {
        'modelTestament' ? : model_testament,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_testament';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#postModelTestament
     * @param {} modelTestament - model_testament
     * @param {string} select - Filtering Columns
     * @param {string} prefer - Preference
     */
    postModelTestament(parameters: {
        'modelTestament' ? : model_testament,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_testament';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['modelTestament'] !== undefined) {
                body = parameters['modelTestament'];
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    deleteModelTestamentURL(parameters: {
        'modelId' ? : string,
        'exampleId' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_testament';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['modelId'] !== undefined) {
            queryParameters['model_id'] = this.convertParameterCollectionFormat(
                parameters['modelId'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#deleteModelTestament
     * @param {string} modelId - This is a dynamic API generated by PostgREST
     * @param {string} exampleId - This is a dynamic API generated by PostgREST
     * @param {string} prefer - Preference
     */
    deleteModelTestament(parameters: {
        'modelId' ? : string,
        'exampleId' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_testament';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['modelId'] !== undefined) {
                queryParameters['model_id'] = this.convertParameterCollectionFormat(
                    parameters['modelId'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    patchModelTestamentURL(parameters: {
        'modelId' ? : string,
        'exampleId' ? : string,
        'modelTestament' ? : model_testament,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_testament';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['modelId'] !== undefined) {
            queryParameters['model_id'] = this.convertParameterCollectionFormat(
                parameters['modelId'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#patchModelTestament
     * @param {string} modelId - This is a dynamic API generated by PostgREST
     * @param {string} exampleId - This is a dynamic API generated by PostgREST
     * @param {} modelTestament - model_testament
     * @param {string} prefer - Preference
     */
    patchModelTestament(parameters: {
        'modelId' ? : string,
        'exampleId' ? : string,
        'modelTestament' ? : model_testament,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_testament';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['modelId'] !== undefined) {
                queryParameters['model_id'] = this.convertParameterCollectionFormat(
                    parameters['modelId'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['modelTestament'] !== undefined) {
                body = parameters['modelTestament'];
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('PATCH', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    getModelTrainLogURL(parameters: {
        'modelId' ? : string,
        'exampleId' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_train_log';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['modelId'] !== undefined) {
            queryParameters['model_id'] = this.convertParameterCollectionFormat(
                parameters['modelId'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters['order'] !== undefined) {
            queryParameters['order'] = this.convertParameterCollectionFormat(
                parameters['order'],
                ''
            );
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = this.convertParameterCollectionFormat(
                parameters['offset'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#getModelTrainLog
         * @param {string} modelId - This is a dynamic API generated by PostgREST
         * @param {string} exampleId - This is a dynamic API generated by PostgREST
         * @param {string} select - Filtering Columns
         * @param {string} order - Ordering
         * @param {string} range - Limiting and Pagination
         * @param {string} rangeUnit - Limiting and Pagination
         * @param {string} offset - Limiting and Pagination
         * @param {string} limit - Limiting and Pagination
        
    */
    getModelTrainLog(parameters: {
        'modelId' ? : string,
        'exampleId' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_getModelTrainLog_200 > | ResponseWithBody < 206, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_train_log';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['modelId'] !== undefined) {
                queryParameters['model_id'] = this.convertParameterCollectionFormat(
                    parameters['modelId'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['order'] !== undefined) {
                queryParameters['order'] = this.convertParameterCollectionFormat(
                    parameters['order'],
                    ''
                );
            }

            if (parameters['range'] !== undefined) {
                headers['Range'] = parameters['range'];
            }

            if (parameters['rangeUnit'] !== undefined) {
                headers['Range-Unit'] = parameters['rangeUnit'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = this.convertParameterCollectionFormat(
                    parameters['offset'],
                    ''
                );
            }

            if (parameters['limit'] !== undefined) {
                queryParameters['limit'] = this.convertParameterCollectionFormat(
                    parameters['limit'],
                    ''
                );
            }

            headers['Prefer'] = 'count=none';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postModelTrainLogURL(parameters: {
        'modelTrainLog' ? : model_train_log,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_train_log';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#postModelTrainLog
     * @param {} modelTrainLog - model_train_log
     * @param {string} select - Filtering Columns
     * @param {string} prefer - Preference
     */
    postModelTrainLog(parameters: {
        'modelTrainLog' ? : model_train_log,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_train_log';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['modelTrainLog'] !== undefined) {
                body = parameters['modelTrainLog'];
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    deleteModelTrainLogURL(parameters: {
        'modelId' ? : string,
        'exampleId' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_train_log';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['modelId'] !== undefined) {
            queryParameters['model_id'] = this.convertParameterCollectionFormat(
                parameters['modelId'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#deleteModelTrainLog
     * @param {string} modelId - This is a dynamic API generated by PostgREST
     * @param {string} exampleId - This is a dynamic API generated by PostgREST
     * @param {string} prefer - Preference
     */
    deleteModelTrainLog(parameters: {
        'modelId' ? : string,
        'exampleId' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_train_log';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['modelId'] !== undefined) {
                queryParameters['model_id'] = this.convertParameterCollectionFormat(
                    parameters['modelId'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    patchModelTrainLogURL(parameters: {
        'modelId' ? : string,
        'exampleId' ? : string,
        'modelTrainLog' ? : model_train_log,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_train_log';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['modelId'] !== undefined) {
            queryParameters['model_id'] = this.convertParameterCollectionFormat(
                parameters['modelId'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#patchModelTrainLog
     * @param {string} modelId - This is a dynamic API generated by PostgREST
     * @param {string} exampleId - This is a dynamic API generated by PostgREST
     * @param {} modelTrainLog - model_train_log
     * @param {string} prefer - Preference
     */
    patchModelTrainLog(parameters: {
        'modelId' ? : string,
        'exampleId' ? : string,
        'modelTrainLog' ? : model_train_log,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/model_train_log';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['modelId'] !== undefined) {
                queryParameters['model_id'] = this.convertParameterCollectionFormat(
                    parameters['modelId'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['modelTrainLog'] !== undefined) {
                body = parameters['modelTrainLog'];
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('PATCH', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    getTokenURL(parameters: {
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'tokenId' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'tokenText' ? : string,
        'substring' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/token';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['startOffset'] !== undefined) {
            queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                parameters['startOffset'],
                ''
            );
        }

        if (parameters['endOffset'] !== undefined) {
            queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                parameters['endOffset'],
                ''
            );
        }

        if (parameters['span'] !== undefined) {
            queryParameters['span'] = this.convertParameterCollectionFormat(
                parameters['span'],
                ''
            );
        }

        if (parameters['tokenId'] !== undefined) {
            queryParameters['token_id'] = this.convertParameterCollectionFormat(
                parameters['tokenId'],
                ''
            );
        }

        if (parameters['tokenizer'] !== undefined) {
            queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                parameters['tokenizer'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['tokenText'] !== undefined) {
            queryParameters['token_text'] = this.convertParameterCollectionFormat(
                parameters['tokenText'],
                ''
            );
        }

        if (parameters['substring'] !== undefined) {
            queryParameters['substring'] = this.convertParameterCollectionFormat(
                parameters['substring'],
                ''
            );
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters['order'] !== undefined) {
            queryParameters['order'] = this.convertParameterCollectionFormat(
                parameters['order'],
                ''
            );
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = this.convertParameterCollectionFormat(
                parameters['offset'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#getToken
         * @param {string} startOffset - This is a dynamic API generated by PostgREST
         * @param {string} endOffset - This is a dynamic API generated by PostgREST
         * @param {string} span - This is a dynamic API generated by PostgREST
         * @param {string} tokenId - This is a dynamic API generated by PostgREST
         * @param {string} tokenizer - This is a dynamic API generated by PostgREST
         * @param {string} exampleId - This is a dynamic API generated by PostgREST
         * @param {string} tokenText - This is a dynamic API generated by PostgREST
         * @param {string} substring - This is a dynamic API generated by PostgREST
         * @param {string} select - Filtering Columns
         * @param {string} order - Ordering
         * @param {string} range - Limiting and Pagination
         * @param {string} rangeUnit - Limiting and Pagination
         * @param {string} offset - Limiting and Pagination
         * @param {string} limit - Limiting and Pagination
        
    */
    getToken(parameters: {
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'tokenId' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'tokenText' ? : string,
        'substring' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_getToken_200 > | ResponseWithBody < 206, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/token';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['startOffset'] !== undefined) {
                queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                    parameters['startOffset'],
                    ''
                );
            }

            if (parameters['endOffset'] !== undefined) {
                queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                    parameters['endOffset'],
                    ''
                );
            }

            if (parameters['span'] !== undefined) {
                queryParameters['span'] = this.convertParameterCollectionFormat(
                    parameters['span'],
                    ''
                );
            }

            if (parameters['tokenId'] !== undefined) {
                queryParameters['token_id'] = this.convertParameterCollectionFormat(
                    parameters['tokenId'],
                    ''
                );
            }

            if (parameters['tokenizer'] !== undefined) {
                queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                    parameters['tokenizer'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['tokenText'] !== undefined) {
                queryParameters['token_text'] = this.convertParameterCollectionFormat(
                    parameters['tokenText'],
                    ''
                );
            }

            if (parameters['substring'] !== undefined) {
                queryParameters['substring'] = this.convertParameterCollectionFormat(
                    parameters['substring'],
                    ''
                );
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['order'] !== undefined) {
                queryParameters['order'] = this.convertParameterCollectionFormat(
                    parameters['order'],
                    ''
                );
            }

            if (parameters['range'] !== undefined) {
                headers['Range'] = parameters['range'];
            }

            if (parameters['rangeUnit'] !== undefined) {
                headers['Range-Unit'] = parameters['rangeUnit'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = this.convertParameterCollectionFormat(
                    parameters['offset'],
                    ''
                );
            }

            if (parameters['limit'] !== undefined) {
                queryParameters['limit'] = this.convertParameterCollectionFormat(
                    parameters['limit'],
                    ''
                );
            }

            headers['Prefer'] = 'count=none';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postTokenURL(parameters: {
        'token' ? : token,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/token';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#postToken
     * @param {} token - token
     * @param {string} select - Filtering Columns
     * @param {string} prefer - Preference
     */
    postToken(parameters: {
        'token' ? : token,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/token';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['token'] !== undefined) {
                body = parameters['token'];
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    deleteTokenURL(parameters: {
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'tokenId' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'tokenText' ? : string,
        'substring' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/token';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['startOffset'] !== undefined) {
            queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                parameters['startOffset'],
                ''
            );
        }

        if (parameters['endOffset'] !== undefined) {
            queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                parameters['endOffset'],
                ''
            );
        }

        if (parameters['span'] !== undefined) {
            queryParameters['span'] = this.convertParameterCollectionFormat(
                parameters['span'],
                ''
            );
        }

        if (parameters['tokenId'] !== undefined) {
            queryParameters['token_id'] = this.convertParameterCollectionFormat(
                parameters['tokenId'],
                ''
            );
        }

        if (parameters['tokenizer'] !== undefined) {
            queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                parameters['tokenizer'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['tokenText'] !== undefined) {
            queryParameters['token_text'] = this.convertParameterCollectionFormat(
                parameters['tokenText'],
                ''
            );
        }

        if (parameters['substring'] !== undefined) {
            queryParameters['substring'] = this.convertParameterCollectionFormat(
                parameters['substring'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#deleteToken
     * @param {string} startOffset - This is a dynamic API generated by PostgREST
     * @param {string} endOffset - This is a dynamic API generated by PostgREST
     * @param {string} span - This is a dynamic API generated by PostgREST
     * @param {string} tokenId - This is a dynamic API generated by PostgREST
     * @param {string} tokenizer - This is a dynamic API generated by PostgREST
     * @param {string} exampleId - This is a dynamic API generated by PostgREST
     * @param {string} tokenText - This is a dynamic API generated by PostgREST
     * @param {string} substring - This is a dynamic API generated by PostgREST
     * @param {string} prefer - Preference
     */
    deleteToken(parameters: {
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'tokenId' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'tokenText' ? : string,
        'substring' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/token';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['startOffset'] !== undefined) {
                queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                    parameters['startOffset'],
                    ''
                );
            }

            if (parameters['endOffset'] !== undefined) {
                queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                    parameters['endOffset'],
                    ''
                );
            }

            if (parameters['span'] !== undefined) {
                queryParameters['span'] = this.convertParameterCollectionFormat(
                    parameters['span'],
                    ''
                );
            }

            if (parameters['tokenId'] !== undefined) {
                queryParameters['token_id'] = this.convertParameterCollectionFormat(
                    parameters['tokenId'],
                    ''
                );
            }

            if (parameters['tokenizer'] !== undefined) {
                queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                    parameters['tokenizer'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['tokenText'] !== undefined) {
                queryParameters['token_text'] = this.convertParameterCollectionFormat(
                    parameters['tokenText'],
                    ''
                );
            }

            if (parameters['substring'] !== undefined) {
                queryParameters['substring'] = this.convertParameterCollectionFormat(
                    parameters['substring'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    patchTokenURL(parameters: {
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'tokenId' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'tokenText' ? : string,
        'substring' ? : string,
        'token' ? : token,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/token';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['startOffset'] !== undefined) {
            queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                parameters['startOffset'],
                ''
            );
        }

        if (parameters['endOffset'] !== undefined) {
            queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                parameters['endOffset'],
                ''
            );
        }

        if (parameters['span'] !== undefined) {
            queryParameters['span'] = this.convertParameterCollectionFormat(
                parameters['span'],
                ''
            );
        }

        if (parameters['tokenId'] !== undefined) {
            queryParameters['token_id'] = this.convertParameterCollectionFormat(
                parameters['tokenId'],
                ''
            );
        }

        if (parameters['tokenizer'] !== undefined) {
            queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                parameters['tokenizer'],
                ''
            );
        }

        if (parameters['exampleId'] !== undefined) {
            queryParameters['example_id'] = this.convertParameterCollectionFormat(
                parameters['exampleId'],
                ''
            );
        }

        if (parameters['tokenText'] !== undefined) {
            queryParameters['token_text'] = this.convertParameterCollectionFormat(
                parameters['tokenText'],
                ''
            );
        }

        if (parameters['substring'] !== undefined) {
            queryParameters['substring'] = this.convertParameterCollectionFormat(
                parameters['substring'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#patchToken
     * @param {string} startOffset - This is a dynamic API generated by PostgREST
     * @param {string} endOffset - This is a dynamic API generated by PostgREST
     * @param {string} span - This is a dynamic API generated by PostgREST
     * @param {string} tokenId - This is a dynamic API generated by PostgREST
     * @param {string} tokenizer - This is a dynamic API generated by PostgREST
     * @param {string} exampleId - This is a dynamic API generated by PostgREST
     * @param {string} tokenText - This is a dynamic API generated by PostgREST
     * @param {string} substring - This is a dynamic API generated by PostgREST
     * @param {} token - token
     * @param {string} prefer - Preference
     */
    patchToken(parameters: {
        'startOffset' ? : string,
        'endOffset' ? : string,
        'span' ? : string,
        'tokenId' ? : string,
        'tokenizer' ? : string,
        'exampleId' ? : string,
        'tokenText' ? : string,
        'substring' ? : string,
        'token' ? : token,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/token';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['startOffset'] !== undefined) {
                queryParameters['start_offset'] = this.convertParameterCollectionFormat(
                    parameters['startOffset'],
                    ''
                );
            }

            if (parameters['endOffset'] !== undefined) {
                queryParameters['end_offset'] = this.convertParameterCollectionFormat(
                    parameters['endOffset'],
                    ''
                );
            }

            if (parameters['span'] !== undefined) {
                queryParameters['span'] = this.convertParameterCollectionFormat(
                    parameters['span'],
                    ''
                );
            }

            if (parameters['tokenId'] !== undefined) {
                queryParameters['token_id'] = this.convertParameterCollectionFormat(
                    parameters['tokenId'],
                    ''
                );
            }

            if (parameters['tokenizer'] !== undefined) {
                queryParameters['tokenizer'] = this.convertParameterCollectionFormat(
                    parameters['tokenizer'],
                    ''
                );
            }

            if (parameters['exampleId'] !== undefined) {
                queryParameters['example_id'] = this.convertParameterCollectionFormat(
                    parameters['exampleId'],
                    ''
                );
            }

            if (parameters['tokenText'] !== undefined) {
                queryParameters['token_text'] = this.convertParameterCollectionFormat(
                    parameters['tokenText'],
                    ''
                );
            }

            if (parameters['substring'] !== undefined) {
                queryParameters['substring'] = this.convertParameterCollectionFormat(
                    parameters['substring'],
                    ''
                );
            }

            if (parameters['token'] !== undefined) {
                body = parameters['token'];
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('PATCH', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    getTokenizerURL(parameters: {
        'name' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/tokenizer';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['name'] !== undefined) {
            queryParameters['name'] = this.convertParameterCollectionFormat(
                parameters['name'],
                ''
            );
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters['order'] !== undefined) {
            queryParameters['order'] = this.convertParameterCollectionFormat(
                parameters['order'],
                ''
            );
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = this.convertParameterCollectionFormat(
                parameters['offset'],
                ''
            );
        }

        if (parameters['limit'] !== undefined) {
            queryParameters['limit'] = this.convertParameterCollectionFormat(
                parameters['limit'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#getTokenizer
         * @param {string} name - This is a dynamic API generated by PostgREST
         * @param {string} select - Filtering Columns
         * @param {string} order - Ordering
         * @param {string} range - Limiting and Pagination
         * @param {string} rangeUnit - Limiting and Pagination
         * @param {string} offset - Limiting and Pagination
         * @param {string} limit - Limiting and Pagination
        
    */
    getTokenizer(parameters: {
        'name' ? : string,
        'select' ? : string,
        'order' ? : string,
        'range' ? : string,
        'rangeUnit' ? : string,
        'offset' ? : string,
        'limit' ? : string|number,
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, Response_getTokenizer_200 > | ResponseWithBody < 206, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/tokenizer';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['name'] !== undefined) {
                queryParameters['name'] = this.convertParameterCollectionFormat(
                    parameters['name'],
                    ''
                );
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['order'] !== undefined) {
                queryParameters['order'] = this.convertParameterCollectionFormat(
                    parameters['order'],
                    ''
                );
            }

            if (parameters['range'] !== undefined) {
                headers['Range'] = parameters['range'];
            }

            if (parameters['rangeUnit'] !== undefined) {
                headers['Range-Unit'] = parameters['rangeUnit'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = this.convertParameterCollectionFormat(
                    parameters['offset'],
                    ''
                );
            }

            if (parameters['limit'] !== undefined) {
                queryParameters['limit'] = this.convertParameterCollectionFormat(
                    parameters['limit'],
                    ''
                );
            }

            headers['Prefer'] = 'count=none';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postTokenizerURL(parameters: {
        'tokenizer' ? : tokenizer,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/tokenizer';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['select'] !== undefined) {
            queryParameters['select'] = this.convertParameterCollectionFormat(
                parameters['select'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#postTokenizer
     * @param {} tokenizer - tokenizer
     * @param {string} select - Filtering Columns
     * @param {string} prefer - Preference
     */
    postTokenizer(parameters: {
        'tokenizer' ? : tokenizer,
        'select' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 201, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/tokenizer';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['tokenizer'] !== undefined) {
                body = parameters['tokenizer'];
            }

            if (parameters['select'] !== undefined) {
                queryParameters['select'] = this.convertParameterCollectionFormat(
                    parameters['select'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    deleteTokenizerURL(parameters: {
        'name' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/tokenizer';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['name'] !== undefined) {
            queryParameters['name'] = this.convertParameterCollectionFormat(
                parameters['name'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#deleteTokenizer
     * @param {string} name - This is a dynamic API generated by PostgREST
     * @param {string} prefer - Preference
     */
    deleteTokenizer(parameters: {
        'name' ? : string,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/tokenizer';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['name'] !== undefined) {
                queryParameters['name'] = this.convertParameterCollectionFormat(
                    parameters['name'],
                    ''
                );
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    patchTokenizerURL(parameters: {
        'name' ? : string,
        'tokenizer' ? : tokenizer,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/tokenizer';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['name'] !== undefined) {
            queryParameters['name'] = this.convertParameterCollectionFormat(
                parameters['name'],
                ''
            );
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Test#patchTokenizer
     * @param {string} name - This is a dynamic API generated by PostgREST
     * @param {} tokenizer - tokenizer
     * @param {string} prefer - Preference
     */
    patchTokenizer(parameters: {
        'name' ? : string,
        'tokenizer' ? : tokenizer,
        'prefer' ? : "return=representation" | "return=minimal" | "return=none",
    } & CommonRequestOptions): Promise < ResponseWithBody < 204, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/tokenizer';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json, text/csv';
            headers['content-type'] = 'application/json';

            if (parameters['name'] !== undefined) {
                queryParameters['name'] = this.convertParameterCollectionFormat(
                    parameters['name'],
                    ''
                );
            }

            if (parameters['tokenizer'] !== undefined) {
                body = parameters['tokenizer'];
            }

            if (parameters['prefer'] !== undefined) {
                headers['Prefer'] = parameters['prefer'];
            }

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            this.request('PATCH', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postRpcRegisterModelURL(parameters: {
        'args': {
            'labelset_name': string;
            'model_name': string;
            '_parent_id' ? : string;
            'version': number;
        } & {
            [key: string]: any;
        },
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/rpc/register_model';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#postRpcRegisterModel
         * @param {} args - This is a dynamic API generated by PostgREST
        
    */
    postRpcRegisterModel(parameters: {
        'args': {
            'labelset_name': string;
            'model_name': string;
            '_parent_id' ? : string;
            'version': number;
        } & {
            [key: string]: any;
        },
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/rpc/register_model';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json';
            headers['content-type'] = 'application/json';

            if (parameters['args'] !== undefined) {
                body = parameters['args'];
            }

            if (parameters['args'] === undefined) {
                reject(new Error('Missing required  parameter: args'));
                return;
            }

            headers['Prefer'] = 'params=single-object';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postRpcRegisterTokenizerURL(parameters: {
        'args': {
            '_name': string;
        } & {
            [key: string]: any;
        },
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/rpc/register_tokenizer';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * 
    * @method
    * @name Test#postRpcRegisterTokenizer
         * @param {} args - This is a dynamic API generated by PostgREST
        
    */
    postRpcRegisterTokenizer(parameters: {
        'args': {
            '_name': string;
        } & {
            [key: string]: any;
        },
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/rpc/register_tokenizer';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json';
            headers['content-type'] = 'application/json';

            if (parameters['args'] !== undefined) {
                body = parameters['args'];
            }

            if (parameters['args'] === undefined) {
                reject(new Error('Missing required  parameter: args'));
                return;
            }

            headers['Prefer'] = 'params=single-object';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

    postRpcTestingTruncateTablesURL(parameters: {
        'args': {} & {
            [key: string]: any;
        },
    } & CommonRequestOptions): string {
        let queryParameters: QueryParameters = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/rpc/testing_truncate_tables';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            };
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * Call this function to truncate all tables between tests
    TODO limit access to this to a particular user once we have auth in place
    
    * @method
    * @name Test#postRpcTestingTruncateTables
         * @param {} args - This is a dynamic API generated by PostgREST
        
    */
    postRpcTestingTruncateTables(parameters: {
        'args': {} & {
            [key: string]: any;
        },
    } & CommonRequestOptions): Promise < ResponseWithBody < 200, void >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/rpc/testing_truncate_tables';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: QueryParameters = {};
        let headers: RequestHeaders = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['accept'] = 'application/json, application/vnd.pgrst.object+json';
            headers['content-type'] = 'application/json';

            if (parameters['args'] !== undefined) {
                body = parameters['args'];
            }

            if (parameters['args'] === undefined) {
                reject(new Error('Missing required  parameter: args'));
                return;
            }

            headers['Prefer'] = 'params=single-object';

            if (parameters.$queryParameters) {
                queryParameters = {
                    ...queryParameters,
                    ...parameters.$queryParameters
                };
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve, parameters);
        });
    }

}

export default DBClient;