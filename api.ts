import axios from "axios";
import { JSONValue } from "./common";
import { Configuration } from "./configuration";

/**
 * GENERAL TYPES
 */

/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    'updatedAt': string;
    /**
     * 
     * @type {?string}
     * @memberof Comment
     */
    'parentId': string | null;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    'userId': string;
    /**
     * 
     * @type {?string}
     * @memberof Comment
     */
    'trialId': string | null;
    /**
     * 
     * @type {?string}
     * @memberof Comment
     */
    'reviewId': string | null;
    /**
     * 
     * @type {?string}
     * @memberof Comment
     */
    'trialStepId': string | null;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    'content': string;
    /**
     * 
     * @type {JSONValue}
     * @memberof Comment
     */
    'attributes': JSONValue;
}

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
     * @type {string}
     * @memberof Upload
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof Upload
     */
    'updatedAt': string;
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
     * @type {string}
     * @memberof EmbeddingCollection
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof EmbeddingCollection
     */
    'updatedAt': string;
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
     * @type {string}
     * @memberof EmbeddingData
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof EmbeddingData
     */
    'updatedAt': string;
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
    'uploads'?: Array<{ id: string }>;
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
     * @type {string}
     * @memberof Experiment
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof Experiment
     */
    'updatedAt': string;
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
     * @type {string}
     * @memberof Model
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof Model
     */
    'updatedAt': string;
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

export enum TrialType {
    INFERENCE = 'INFERENCE',
    FINE_TUNE = 'FINE_TUNE',
}

/**
 * State of a trial -- once a trial is closed, its model is available for consumption
 */
export enum TrialState {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
}

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
     * @type {string}
     * @memberof Trial
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof Trial
     */
    'updatedAt': string;
    /**
     * 
     * @type {string}
     * @memberof Trial
     */
    'creatorId': string;
    /**
     * 
     * @type {?string}
     * @memberof Trial
     */
    'name': string | null;
    /**
     * 
     * @type {TrialType}
     * @memberof Trial
     */
    'type': TrialType;
    /**
     * 
     * @type {TrialState}
     * @memberof Trial
     */
    'state': TrialState;
    /**
     * 
     * @type {string}
     * @memberof Trial
     */
    'experimentId': string;
    /**
     * 
     * @type {?string}
     * @memberof Trial
     */
    'playgroundModelId': string | null;
    /**
     * 
     * @type {?string}
     * @memberof Trial
     */
    'modelId': string | null;
    /**
     * 
     * @type {Array<Comment>}
     * @memberof Trial
     */
    'comments': Array<Comment>;
    /**
     * 
     * @type {JSONValue | null}
     * @memberof Trial
     */
    'parameters': JSONValue | null;
    /**
     * 
     * @type {Array<TrialStep>}
     * @memberof Trial
     */
    'trialSteps': Array<TrialStep>;
    /**
     * 
     * @type {?string}
     * @memberof Trial
     */
    'rootStepId': string | null;
    /**
     * 
     * @type {?string}
     * @memberof Trial
     */
    'latestStepId': string | null;
    /**
     * 
     * @type {JSONValue | null}
     * @memberof Trial
     */
    'attributed': JSONValue | null;
    /**
     * 
     * @type {?string}
     * @memberof Trial
     */
    'organizationId': string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Trial
     */
    'active': boolean;
    /**
     * 
     * @type {?string}
     * @memberof Trial
     */
    'forkedFromTrialId': string | null;
    /**
     * 
     * @type {?string}
     * @memberof Trial
     */
    'forkedFromTrialStepId': string | null;
}

/**
 * Modeling the DAG representing a trial run -- each 'step' is a node in the DAG & is either:
 * - an input to a model,
 * - an output from a model,
 * - a user-defined type of a trial step,
 * - some other future type of step in a trial run.
 * Each step can contain metadata, such as:
 * - model metrics (training loss, validation loss, token accuracy, etc.) that correspond to the model at that point-in-time
 * - trial step metrics (token accuracy) that correspond to the trial step (metrics for the node itself).
 * As a result, traversing this DAG can provide a time-travel view of model performance/metrics step-by-step, and can enable
 * streaming results to long-running trials, and find the point of optimal performance within a single trial.
 * Finally, since these 'steps' are flexible in their structure, they can represent anything users want them to
 * @export
 * @interface TrialStep
 */
export interface TrialStep {
    /**
     * 
     * @type {string}
     * @memberof TrialStep
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof TrialStep
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof TrialStep
     */
    'updatedAt': string;
    /**
     * 
     * @type {string}
     * @memberof TrialStep
     */
    'creatorId': string;
    /**
     * Type of step in the Trial execution DAG (e.g. 'input', 'output', etc.)
     * @type {string}
     * @memberof TrialStep
     */
    'type': string;
    /**
     * Data in the TrialStep (e.g. input prompt text, output image URL, etc.)
     * @type {JSONValue}
     * @memberof TrialStep
     */
    'data': JSONValue;
    /**
     * Metadata associated with this TrialStep (e.g. metrics for the model for this particular step)
     * @type {JSONValue}
     * @memberof TrialStep
     */
    'metadata': JSONValue;
    /**
     * Any uploads to storage that are referenced in the metrics data in some way
     * @type {Array<Upload>}
     * @memberof TrialStep
     */
    'uploads': Array<Upload>;
    /**
     * Parent step ID (always specified unless this is the first step)
     * @type {?string}
     * @memberof TrialStep
     */
    'previousStepId': string | null;
    /**
     * Children step IDs
     * @type {Array<string>}
     * @memberof TrialStep
     */
    'nextStepIds': Array<string>;
    /**
     *
     * @type {Array<Trial>}
     * @memberof TrialStep
     */
    'trials': Array<Trial>;
    /**
     * All human-in-the-loop feedback associated with this trial step
     * @type {Array<TrialStepFeedback>}
     * @memberof TrialStep
     */
    'trialStepFeedback': Array<TrialStepFeedback>;
    /**
     *
     * @type {Array<Comment>}
     * @memberof TrialStep
     */
    'comments': Array<Comment>;
    /**
     *
     * @type {JSONValue | null}
     * @memberof TrialStep
     */
    'attributes': JSONValue | null;
}

/**
 * Represents a human-in-the-loop feedback for each trial step (e.g. upvoting an image created by the model)
 * @export
 * @interface TrialStepFeedback
 */
export interface TrialStepFeedback {
    /**
     * 
     * @type {string}
     * @memberof TrialStepFeedback
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof TrialStepFeedback
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof TrialStepFeedback
     */
    'updatedAt': string;
    /**
     * 
     * @type {string}
     * @memberof TrialStepFeedback
     */
    'trialId': string;
    /**
     * 
     * @type {string}
     * @memberof TrialStepFeedback
     */
    'trialStepId': string;
    /**
     * Feedback (e.g. upvote, downvote, etc.)
     * @type {JSONValue}
     * @memberof TrialStepFeedback
     */
    'feedback': JSONValue;
    /**
     * Person giving the feedback
     * @type {?string}
     * @memberof TrialStepFeedback
     */
    'userId': string | null;
    /**
     * 
     * @type {JSONValue | null}
     * @memberof TrialStepFeedback
     */
    'attributes': JSONValue | null;
}

/**
 * 
 * @export
 * @interface TrialCreateData
 */
export interface TrialCreateData {
    /**
     * 
     * @type {string}
     * @memberof TrialCreateData
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof TrialCreateData
     */
    'experimentId'?: string;
    /**
     * 
     * @type {string}
     * @memberof TrialCreateData
     */
    'modelId'?: string;
}

/**
 * @type CreateTrialResponse
 * @export
 */
export type CreateTrialResponse = Trial;

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
        // Only need the 'User-Agent' header from the default config
        let headers;
        if (this.configuration.defaultAxiosConfig.headers) {
            headers = { 'User-Agent': this.configuration.defaultAxiosConfig.headers['User-Agent'] };
        }
        const res = await axios.get('health', { ...this.configuration.defaultAxiosConfig, headers });
        return res.data;
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
        return res.data;
    }

    /**
     * 
     * @summary Deletes a specified EmbeddingCollection and returns its ID
     * @param {string} id The ID of the EmbeddingCollection to delete
     */
    public async deleteEmbeddingCollection(id: string): Promise<{ status: string }> {
        const res = await axios.delete('embeddings/delete', { ...this.configuration.defaultAxiosConfig, data: { id } });
        return res.data;
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
        return res.data;
    }

    /**
    * 
    * @summary Reads an EmbeddingCollection
    * @param {string} id The id of the EmbeddingCollection to read
    */
    public async readEmbeddingCollection(id: string): Promise<ReadEmbeddingCollectionResponse> {
        const res = await axios.get('embeddings/read', { ...this.configuration.defaultAxiosConfig, params: { id } });
        return res.data;
    }

    /**
    * 
    * @summary Update the data associated with an EmbeddingCollection
    * @param {string} id The id of the EmbeddingCollection to update
    * @param {EmbeddingCollectionUpdateData} data Data to update for the EmbeddingCollection
    */
    public async updateEmbeddingCollection(id: string, data: EmbeddingCollectionUpdateData): Promise<UpdateEmbeddingCollectionResponse> {
        const res = await axios.put('embeddings/update', { ...this.configuration.defaultAxiosConfig, data });
        return res.data;
    }


    /**
     * TRIALS
     */

    /**
     * 
     * @summary Creates and returns a new Trial
     * @param {TrialCreateData} data Data to set in the created Trial
     */
    public async createTrial(data: TrialCreateData): Promise<CreateTrialResponse> {
        const res = await axios.post('trials/create', { ...this.configuration.defaultAxiosConfig, data });
        return res.data;
    }
};