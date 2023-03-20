import axios from "axios";
import { JSONValue } from "./common";
import { Configuration } from "./configuration";

/**
 * GENERAL TYPES
 */

/**
 * 
 * @export
 * @interface Upload
 */
export interface Upload {
    /**
     * 
     * @type {string}
     * @memberof Upload
     */
    'id': string;
    /**
     * 
     * @type {Date}
     * @memberof Upload
     */
    'createdAt': Date;
    /**
     * 
     * @type {Date}
     * @memberof Upload
     */
    'updatedAt': Date;
    /**
     * 
     * @type {string}
     * @memberof Upload
     */
    'url': string;
    /**
     * 
     * @type {JSONValue}
     * @memberof Upload
     */
    'metadata': JSONValue;
    /**
     * 
     * @type {string}
     * @memberof Upload
     */
    'modelId': string;
    /**
     * 
     * @type {string}
     * @memberof Upload
     */
    'creatorId': string;
    /**
     * 
     * @type {boolean}
     * @memberof Upload
     */
    'active': boolean;
    /**
     * 
     * @type {JSONValue | null}
     * @memberof Upload
     */
    'attributes': JSONValue | null;
    /**
     * 
     * @type {?string}
     * @memberof Upload
     */
    'trialStepId': string | null;
    /**
     * 
     * @type {?string}
     * @memberof Upload
     */
    'embeddingDataId': string | null;
}


export enum Visibility {
    // Only visible to creator
    PRIVATE = 'PRIVATE',
    // Only visible to creator and recursive members of entity and parent entities.
    // For example, if you create trial T in experiment E in workspace W,
    // T will be visible to members explicitly specified for T, plus
    // members with access to E, plus
    // members with access to W.
    MEMBER = 'MEMBER',
    // Visible to everyone
    PUBLIC = 'PUBLIC',
}

/**
 * EMBEDDING TYPES
 */

/**
 * 
 * @export
 * @interface EmbeddingCollection
 */
export interface EmbeddingCollection {
    /**
     * 
     * @type {string}
     * @memberof EmbeddingCollection
     */
    'id': string;
    /**
     * 
     * @type {Date}
     * @memberof EmbeddingCollection
     */
    'createdAt': Date;
    /**
     * 
     * @type {Date}
     * @memberof EmbeddingCollection
     */
    'updatedAt': Date;
    /**
     * 
     * @type {JSONValue}
     * @memberof EmbeddingCollection
     */
    'metadata': JSONValue;
    /**
     * 
     * @type {string}
     * @memberof EmbeddingCollection
     */
    'name': string;
    /**
     * 
     * @type {?string}
     * @memberof EmbeddingCollection
     */
    'description': string | null;
    /**
     * 
     * @type {?boolean}
     * @memberof EmbeddingCollection
     */
    'ready': boolean | null;
    /**
     * 
     * @type {?string}
     * @memberof EmbeddingCollection
     */
    'error': string | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmbeddingCollection
     */
    'promoted': boolean;
    /**
     * 
     * @type {string}
     * @memberof EmbeddingCollection
     */
    'creatorId': string;
    /**
     * 
     * @type {?string}
     * @memberof EmbeddingCollection
     */
    'organizationId': string | null;
    /**
     * 
     * @type {Visibility}
     * @memberof EmbeddingCollection
     */
    'visibility': Visibility;
    /**
     * 
     * @type {boolean}
     * @memberof EmbeddingCollection
     */
    'active': boolean;
    /**
     * 
     * @type {Array<EmbeddingData>}
     * @memberof EmbeddingCollection
     */
    'embeddings': Array<EmbeddingData>;
    /**
     * 
     * @type {Array<Model>}
     * @memberof EmbeddingCollection
     */
    'models': Array<Model>;
}

/**
 * 
 * @export
 * @interface EmbeddingData
 */
export interface EmbeddingData {
    /**
     * 
     * @type {string}
     * @memberof EmbeddingData
     */
    'id': string;
    /**
     * 
     * @type {Date}
     * @memberof EmbeddingData
     */
    'createdAt': Date;
    /**
     * 
     * @type {Date}
     * @memberof EmbeddingData
     */
    'updatedAt': Date;
    /**
     * 
     * @type {string}
     * @memberof EmbeddingData
     */
    'uploadId': string;
    /**
     * 
     * @type {string}
     * @memberof EmbeddingData
     */
    'embeddingCollectionId': string;
}

/**
 * 
 * @export
 * @interface EmbeddingCollectionCreateData
 */
export interface EmbeddingCollectionCreateData {
    /**
     * 
     * @type {string}
     * @memberof EmbeddingCollectionCreateData
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof EmbeddingCollectionCreateData
     */
    'description'?: string;
    /**
     * 
     * @type {Array<{id: string}>}
     * @memberof EmbeddingCollectionCreateData
     */
    'uploads'?: string;
}

/**
 * 
 * @export
 * @interface EmbeddingCollectionsListQueryData
 */
export interface EmbeddingCollectionsListQueryData {
    /**
     * 
     * @type {string}
     * @memberof EmbeddingCollectionsListQueryData
     */
    'cursor'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmbeddingCollectionsListQueryData
     */
    'pageSize'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmbeddingCollectionsListQueryData
     */
    'name'?: string;
}

/**
 * @type EmbeddingCollectionUpdateData
 * @export
 */
export type EmbeddingCollectionUpdateData = EmbeddingCollectionCreateData;

/**
 * @type CreateEmbeddingCollectionResponse 
 * @export
 */
export type CreateEmbeddingCollectionResponse = EmbeddingCollection;

/**
 * @type ListEmbeddingCollectionsResponse
 * @export
 */
export type ListEmbeddingCollectionsResponse = Array<EmbeddingCollection>;

/**
 * @type ReadEmbeddingCollectionResponse
 * @export
 */
export type ReadEmbeddingCollectionResponse = EmbeddingCollection;

/**
 * @type UpdateEmbeddingCollectionResponse
 * @export
 */
export type UpdateEmbeddingCollectionResponse = EmbeddingCollection;

/**
 * EXPERIMENT TYPES
 */

/**
 * 
 * @export
 * @interface Experiment
 */
export interface Experiment {
    /**
     * 
     * @type {string}
     * @memberof Experiment
     */
    'id': string;
    /**
     * 
     * @type {Date}
     * @memberof Experiment
     */
    'createdAt': Date;
    /**
     * 
     * @type {Date}
     * @memberof Experiment
     */
    'updatedAt': Date;
    /**
     * 
     * @type {string}
     * @memberof Experiment
     */
    'creatorId': string;
    /**
     * 
     * @type {string}
     * @memberof Experiment
     */
    'workspaceId': string;
    /**
     * 
     * @type {Visibility}
     * @memberof Experiment
     */
    'visibility': Visibility;
    /**
     * 
     * @type {string}
     * @memberof Experiment
     */
    'name': string;
    /**
     * 
     * @type {?string}
     * @memberof Experiment
     */
    'description': string | null;
    /**
     * 
     * @type {?string}
     * @memberof Experiment
     */
    'modelId': string | null;
    /**
     *
     * @type {JSONValue | null}
     * @memberof Experiment
     */
    'parameters': JSONValue | null;
    /**
     * The input-output schema for inference for this experiment
     * @type {JSONValue | null}
     * @memberof Experiment
     */
    'inferenceSchema': JSONValue | null;
    /**
     * The input-output schema for fine-tuning for this experiment
     * @type {JSONValue | null}
     * @memberof Experiment
     */
    'fineTuningSchema': JSONValue | null;
    /**
     *
     * @type {Array<Trial>}
     * @memberof Experiment
     */
    'trials': Array<Trial>;
    /**
     * 
     * @type {?string}
     * @memberof Experiment
     */
    'primaryTrialId': string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Experiment
     */
    'active': boolean;
    /**
     *
     * @type {JSONValue | null}
     * @memberof Experiment
     */
    'attributes': JSONValue | null;
}

/**
 * MODEL TYPES
 */

/**
 * 
 * @export
 * @interface Model
 */
export interface Model {
    /**
     * 
     * @type {string}
     * @memberof Model
     */
    'id': string;
    /**
     * 
     * @type {Date}
     * @memberof Model
     */
    'createdAt': Date;
    /**
     * 
     * @type {Date}
     * @memberof Model
     */
    'updatedAt': Date;
    /**
     * 
     * @type {string}
     * @memberof Model
     */
    'creatorId': string;
    /**
     * 
     * @type {string}
     * @memberof Model
     */
    'organizationId': string;
    /**
     * 
     * @type {Visibility}
     * @memberof Model
     */
    'visibility': Visibility;
    /**
     * 
     * @type {string}
     * @memberof Model
     */
    'name': string;
    /**
     * 
     * @type {?string}
     * @memberof Model
     */
    'description': string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Model
     */
    'promoted': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Model
     */
    'active': boolean;
    /**
     * The input-output schema for inference for this model
     * @type {JSONValue | null}
     * @memberof Model
     */
    'inferenceSchema': JSONValue | null;
    /**
     * The input-output schema for fine-tuning for this model
     * @type {JSONValue | null}
     * @memberof Model
     */
    'fineTuningSchema': JSONValue | null;
    /**
     *
     * @type {?string}
     * @memberof Model
     */
    'inferenceEndpoint': string | null;
    /**
     *
     * @type {Array<Upload>}
     * @memberof Model
     */
    'modelUploads': Array<Upload>;
    /**
     *
     * @type {JSONValue | null}
     * @memberof Model
     */
    'attributes': JSONValue | null;
    /**
     *
     * @type {Array<Experiment>}
     * @memberof Model
     */
    'Experiment': Array<Experiment>;
}

/**
 * TRIAL TYPES
 */

/**
 * 
 * @export
 * @interface Trial
 */
export interface Trial {
    /**
     * 
     * @type {string}
     * @memberof Trial
     */
    'id': string;
    /**
     * 
     * @type {Date}
     * @memberof Trial
     */
    'createdAt': Date;
    /**
     * 
     * @type {Date}
     * @memberof Trial
     */
    'updatedAt': Date;
    /**
     * 
     * @type {string}
     * @memberof Trial
     */
    'creatorId': string;
}

/**
 * API Class
 */

/**
 * LastMileAIApi - API for interfacing with LastMileAI
 * @export
 * @class LastMileAIApi
 */
export class LastMileAIApi {
    protected configuration: Configuration;
    protected defaultHeaders: undefined;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

    /**
     * GENERAL
     */

    /**
     * 
     * @summary Returns status of API layer
     */
    public async apiHealth(): Promise<{ status: string }> {
        const res = await axios.get('health', this.configuration.defaultAxiosConfig);
        return res.data.json();
    }

    /**
     * EMBEDDINGS
     */

    /**
     * 
     * @summary Creates and returns a new EmbeddingCollection
     * @param {EmbeddingCollectionCreateData} data Data to set in the created EmbeddingCollection
     */
    public async createEmbeddingCollection(data: EmbeddingCollectionCreateData): Promise<CreateEmbeddingCollectionResponse> {
        const res = await axios.post('embeddings/create', { ...this.configuration.defaultAxiosConfig, data });
        return res.data.json();
    }

    /**
     * 
     * @summary Deletes a specified EmbeddingCollection and returns its ID
     * @param {string} id The ID of the EmbeddingCollection to delete
     */
    public async deleteEmbeddingCollection(id: string): Promise<{ status: string }> {
        const res = await axios.delete('embeddings/delete', { ...this.configuration.defaultAxiosConfig, data: { id } });
        return res.data.json();
    }

    /**
    * 
    * @summary Returns a list of EmbeddingCollections. Supports pagination and filtering by name
    * @param {EmbeddingCollectionsListQueryData} [queryData] The cursor id of the last item provided by listEmbeddingCollections API
    */
    public async listEmbeddingCollections(queryData?: EmbeddingCollectionsListQueryData): Promise<ListEmbeddingCollectionsResponse> {
        const res = await axios.get('embeddings/list', {
            ...this.configuration.defaultAxiosConfig,
            params: {
                cursor: queryData?.cursor,
                pageSize: queryData?.pageSize?.toString(),
                search: queryData?.name,
            }
        });
        return res.data.json();
    }

    /**
    * 
    * @summary Reads an EmbeddingCollection
    * @param {string} id The id of the EmbeddingCollection to read
    */
    public async readEmbeddingCollection(id: string): Promise<ReadEmbeddingCollectionResponse> {
        const res = await axios.get('embeddings/read', { ...this.configuration.defaultAxiosConfig, params: { id } });
        return res.data.json();
    }

    /**
    * 
    * @summary Update the data associated with an EmbeddingCollection
    * @param {string} id The id of the EmbeddingCollection to update
    * @param {EmbeddingCollectionUpdateData} data Data to update for the EmbeddingCollection
    */
    public async updateEmbeddingCollection(id: string, data: EmbeddingCollectionUpdateData): Promise<UpdateEmbeddingCollectionResponse> {
        const res = await axios.put('embeddings/update', { ...this.configuration.defaultAxiosConfig, data });
        return res.data.json();
    }
};