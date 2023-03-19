import axios from "axios";
import { JSONObject } from "./common";
import { Configuration } from "./configuration";


/**
 * EMBEDDINGS
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
    'updatedAt': number;
    /**
     * 
     * @type {JSONObject}
     * @memberof EmbeddingCollection
     */
    'metadata': JSONObject;
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
    * @summary Returns a list of embedding collections. Supports pagination and filtering by name
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
    * @summary Reads an embedding collection
    * @param {string} id The id of the embedding collection to read
    */
    public async readEmbeddingCollection(id: string): Promise<ReadEmbeddingCollectionResponse> {
        const res = await axios.get('embeddings/read', { ...this.configuration.defaultAxiosConfig, params: { id } });
        return res.data.json();
    }

    /**
    * 
    * @summary Reads an embedding collection
    * @param {string} id The id of the embedding collection to read
    * @param {EmbeddingCollectionUpdateData} data Data to update for the EmbeddingCollection
    */
    public async updateEmbeddingCollection(id: string, data: EmbeddingCollectionUpdateData): Promise<UpdateEmbeddingCollectionResponse> {
        const res = await axios.put('embeddings/update', { ...this.configuration.defaultAxiosConfig, data });
        return res.data.json();
    }
};