import axios from "axios";
import {
  CreateChatCompletionRequest as OpenAICreateChatCompletionRequest,
  CreateChatCompletionResponse as OpenAICreateChatCompletionResponse,
  CreateCompletionRequest as OpenAICreateCompletionRequest,
  CreateCompletionResponse as OpenAICreateCompletionResponse,
} from "openai";
import { JSONArray, JSONValue } from "./common";
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
  id: string;
  /**
   *
   * @type {Date}
   * @memberof Comment
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof Comment
   */
  updatedAt: Date;
  /**
   *
   * @type {?string}
   * @memberof Comment
   */
  parentId: string | null;
  /**
   *
   * @type {string}
   * @memberof Comment
   */
  userId: string;
  /**
   *
   * @type {?string}
   * @memberof Comment
   */
  trialId: string | null;
  /**
   *
   * @type {?string}
   * @memberof Comment
   */
  reviewId: string | null;
  /**
   *
   * @type {?string}
   * @memberof Comment
   */
  trialStepId: string | null;
  /**
   *
   * @type {string}
   * @memberof Comment
   */
  content: string;
  /**
   *
   * @type {JSONValue}
   * @memberof Comment
   */
  attributes: JSONValue;
}

/**
 *
 * @export
 * @interface CommonListQueryData
 */
export interface CommonListQueryData {
  /**
   *
   * @type {string}
   * @memberof CommonListQueryData
   */
  cursor?: string;
  /**
   *
   * @type {number}
   * @memberof CommonListQueryData
   */
  pageSize?: number;
}

/**
 *
 * @export
 * @interface CommonListQueryDataWithSearch
 */
export interface CommonListQueryDataWithSearch extends CommonListQueryData {
  /**
   *
   * @type {string}
   * @memberof CommonListQueryDataWithSearch
   */
  search?: string;
}

/**
 * @type CommonListResponseData
 * @export
 */
export type CommonListResponseData = {
  hasMore: boolean;
  cursor?: string;
};

/**
 *
 * @export
 * @interface RoleByOrganization
 */
export interface RoleByOrganization {
  /**
   *
   * @type {Date}
   * @memberof RoleByOrganization
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof RoleByOrganization
   */
  updatedAt: Date;
  /**
   *
   * @type {UserRole}
   * @memberof RoleByOrganization
   */
  role: UserRole;
  /**
   *
   * @type {string}
   * @memberof RoleByOrganization
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof RoleByOrganization
   */
  organizationId: string;
}

/**
 *
 * @export
 * @interface User
 */
export interface User {
  /**
   *
   * @type {string}
   * @memberof User
   */
  id: string;
  /**
   *
   * @type {Date}
   * @memberof User
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof User
   */
  updatedAt: Date;
  /**
   *
   * @type {?string}
   * @memberof User
   */
  email: string | null;
  /**
   *
   * @type {?string}
   * @memberof User
   */
  name: string | null;
  /**
   *
   * @type {?string} // DateTime
   * @memberof User
   */
  emailVerified: string | null;
  /**
   *
   * @type {?string}
   * @memberof User
   */
  image: string | null;
  /**
   *
   * @type {?JSONValue}
   * @memberof User
   */
  attributes: JSONValue | null;
}

export type UserRole = "ADMIN" | "MEMBER";

export type Visibility =
  // Only visible to creator
  | "PRIVATE"

  // Only visible to creator and recursive members of entity and parent entities.
  // For example, if you create trial T in experiment E in workspace W,
  // T will be visible to members explicitly specified for T, plus
  // members with access to E, plus
  // members with access to W.
  | "MEMBER"

  // Visible to everyone
  | "PUBLIC";

/**
 * DATASET TYPES
 */

export type DatasetType =
  // A website link or links that can be accessed without any authentication
  | "PUBLIC_URL"

  // A file or set of files
  | "FILES";

/**
 *
 * @export
 * @interface Dataset
 */
export interface Dataset {
  /**
   *
   * @type {string}
   * @memberof Dataset
   */
  id: string;
  /**
   *
   * @type {Date}
   * @memberof Dataset
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof Dataset
   */
  updatedAt: Date;
  /**
   *
   * @type {string}
   * @memberof Dataset
   */
  name: string;
  /**
   *
   * @type {?string}
   * @memberof Dataset
   */
  description: string | null;
  /**
   *
   * @type {DatasetType}
   * @memberof Dataset
   */
  type: DatasetType;
  /**
   *
   * @type {JSONValue}
   * @memberof Dataset
   */
  metadata: JSONValue;
  /**
   *
   * @type {string}
   * @memberof Dataset
   */
  creatorId: string;
  /**
   *
   * @type {?string}
   * @memberof Dataset
   */
  organizationId: string | null;
  /**
   *
   * @type {Visibility}
   * @memberof Dataset
   */
  visibility: Visibility;
  /**
   *
   * @type {boolean}
   * @memberof Dataset
   */
  active: boolean;
  /**
   *
   * @type {?string}
   * @memberof Dataset
   */
  jobId: string | null;
  /**
   *
   * @type {?string}
   * @memberof Dataset
   */
  jobCreatedAt: string | null;
}

/**
 *
 * @export
 * @interface DatasetCreateData
 */
export interface DatasetCreateData {
  /**
   *
   * @type {string}
   * @memberof DatasetCreateData
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof DatasetCreateData
   */
  description?: string;
  /**
   *
   * @type {DatasetType}
   * @memberof DatasetCreateData
   */
  type: DatasetType;
  /**
   *
   * @type {JSONValue}
   * @memberof DatasetCreateData
   */
  metadata: JSONValue;
  /**
   *
   * @type {Array<{ id: string }>}
   * @memberof DatasetCreateData
   */
  uploads?: Array<{ id: string }>;
}

/**
 *
 * @export
 * @interface DatasetListQueryData
 */
export interface DatasetListQueryData extends CommonListQueryDataWithSearch {}

/**
 * @type DatasetUpdateData
 * @export
 */
export type DatasetUpdateData = DatasetCreateData;

/**
 * @type CreateDatasetResponse
 * @export
 */
export type CreateDatasetResponse = Dataset;

/**
 * @type ListDatasetsResponse
 * @export
 */
export type ListDatasetsResponse = {
  datasets: Array<Dataset>;
} & CommonListResponseData;

/**
 * @type ReadDatasetResponse
 * @export
 */
export type ReadDatasetResponse = Dataset & {
  members: Array<User>;
  organization: Organization;
  embeddingCollections: Array<EmbeddingCollection>;
  uploads: Array<Upload>;
};

/**
 * @type UpdateDatasetResponse
 * @export
 */
export type UpdateDatasetResponse = Dataset;

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
  id: string;
  /**
   *
   * @type {Date}
   * @memberof EmbeddingCollection
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof EmbeddingCollection
   */
  updatedAt: Date;
  /**
   *
   * @type {JSONValue}
   * @memberof EmbeddingCollection
   */
  metadata: JSONValue;
  /**
   *
   * @type {string}
   * @memberof EmbeddingCollection
   */
  name: string;
  /**
   *
   * @type {?string}
   * @memberof EmbeddingCollection
   */
  description: string | null;
  /**
   *
   * @type {?boolean}
   * @memberof EmbeddingCollection
   */
  ready: boolean | null;
  /**
   *
   * @type {?string}
   * @memberof EmbeddingCollection
   */
  error: string | null;
  /**
   *
   * @type {boolean}
   * @memberof EmbeddingCollection
   */
  promoted: boolean;
  /**
   *
   * @type {string}
   * @memberof EmbeddingCollection
   */
  creatorId: string;
  /**
   *
   * @type {string}
   * @memberof EmbeddingCollection
   */
  datasetId: string;
  /**
   *
   * @type {?string}
   * @memberof EmbeddingCollection
   */
  organizationId: string | null;
  /**
   *
   * @type {Visibility}
   * @memberof EmbeddingCollection
   */
  visibility: Visibility;
  /**
   *
   * @type {boolean}
   * @memberof EmbeddingCollection
   */
  active: boolean;
  /**
   *
   * @type {?string}
   * @memberof EmbeddingCollection
   */
  jobId: string | null;
  /**
   *
   * @type {?string}
   * @memberof EmbeddingCollection
   */
  jobCreatedAt: string | null;
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
  id: string;
  /**
   *
   * @type {Date}
   * @memberof EmbeddingData
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof EmbeddingData
   */
  updatedAt: Date;
  /**
   *
   * @type {string}
   * @memberof EmbeddingData
   */
  uploadId: string;
  /**
   *
   * @type {string}
   * @memberof EmbeddingData
   */
  embeddingCollectionId: string;
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
  name: string;
  /**
   *
   * @type {string}
   * @memberof EmbeddingCollectionCreateData
   */
  description?: string;
  /**
   *
   * @type {Array<{id: string}>}
   * @memberof EmbeddingCollectionCreateData
   */
  uploads?: Array<{ id: string }>;
}

/**
 *
 * @export
 * @interface EmbeddingCollectionListQueryData
 */
export interface EmbeddingCollectionListQueryData
  extends CommonListQueryDataWithSearch {
  /**
   * If true, only return embedding collections that are ready
   * @type {boolean}
   * @memberof EmbeddingCollectionListQueryData
   */
  ready?: boolean;
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
export type ListEmbeddingCollectionsResponse = {
  embeddingCollections: Array<ReadEmbeddingCollectionResponse>;
} & CommonListResponseData;

/**
 * @type ReadEmbeddingCollectionResponse
 * @export
 */
export type ReadEmbeddingCollectionResponse = EmbeddingCollection & {
  embeddings: Array<EmbeddingData & { upload: Upload }>;
  members: Array<User>;
  organization: Organization;
};

export type EmbeddingCollectionStatus = "PROCESSING" | "READY" | "ERROR";

/**
 * @type EmbeddingCollectionStatusResponse
 * @export
 */
export type EmbeddingCollectionStatusResponse = {
  status: EmbeddingCollectionStatus;
};

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
  id: string;
  /**
   *
   * @type {Date}
   * @memberof Experiment
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof Experiment
   */
  updatedAt: Date;
  /**
   *
   * @type {string}
   * @memberof Experiment
   */
  creatorId: string;
  /**
   *
   * @type {string}
   * @memberof Experiment
   */
  workspaceId: string;
  /**
   *
   * @type {Visibility}
   * @memberof Experiment
   */
  visibility: Visibility;
  /**
   *
   * @type {string}
   * @memberof Experiment
   */
  name: string;
  /**
   *
   * @type {?string}
   * @memberof Experiment
   */
  description: string | null;
  /**
   *
   * @type {?string}
   * @memberof Experiment
   */
  modelId: string | null;
  /**
   *
   * @type {JSONValue | null}
   * @memberof Experiment
   */
  parameters: JSONValue | null;
  /**
   * The input-output schema for inference for this experiment
   * @type {JSONValue | null}
   * @memberof Experiment
   */
  inferenceSchema: JSONValue | null;
  /**
   * The input-output schema for fine-tuning for this experiment
   * @type {JSONValue | null}
   * @memberof Experiment
   */
  fineTuningSchema: JSONValue | null;
  /**
   *
   * @type {?string}
   * @memberof Experiment
   */
  primaryTrialId: string | null;
  /**
   *
   * @type {boolean}
   * @memberof Experiment
   */
  active: boolean;
  /**
   *
   * @type {JSONValue | null}
   * @memberof Experiment
   */
  attributes: JSONValue | null;
}

/**
 *
 * @export
 * @interface ExperimentCreateData
 */
export interface ExperimentCreateData {
  /**
   *
   * @type {string}
   * @memberof ExperimentCreateData
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ExperimentCreateData
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof ExperimentCreateData
   */
  modelId?: string;
  /**
   *
   * @type {string}
   * @memberof ExperimentCreateData
   */
  workspaceId?: string;
}

/**
 *
 * @export
 * @interface ExperimentListQueryData
 */
export interface ExperimentListQueryData extends CommonListQueryDataWithSearch {
  /**
   *
   * @type {string}
   * @memberof ExperimentListQueryData
   */
  workspaceId?: string;
}

/**
 * @type ExperimentUpdateData
 * @export
 */
export type ExperimentUpdateData = ExperimentCreateData;

/**
 * @type CreateExperimentResponse
 * @export
 */
export type CreateExperimentResponse = Experiment;

/**
 * @type ListExperimentsResponse
 * @export
 */
export type ListExperimentsResponse = {
  experiments: Array<Experiment>;
} & CommonListResponseData;

/**
 * @type ReadExperimentResponse
 * @export
 */
export type ReadExperimentResponse = Experiment & {
  baseModel: Model | null;
  members: Array<User>;
  trials: Array<Trial>;
  workspace: Workspace;
};

/**
 * @type UpdateExperimentResponse
 * @export
 */
export type UpdateExperimentResponse = Experiment;

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
  id: string;
  /**
   *
   * @type {Date}
   * @memberof Model
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof Model
   */
  updatedAt: Date;
  /**
   *
   * @type {string}
   * @memberof Model
   */
  creatorId: string;
  /**
   *
   * @type {string}
   * @memberof Model
   */
  organizationId: string;
  /**
   *
   * @type {Visibility}
   * @memberof Model
   */
  visibility: Visibility;
  /**
   *
   * @type {string}
   * @memberof Model
   */
  name: string;
  /**
   *
   * @type {?string}
   * @memberof Model
   */
  description: string | null;
  /**
   *
   * @type {boolean}
   * @memberof Model
   */
  promoted: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Model
   */
  active: boolean;
  /**
   *
   * @type {?string}
   * @memberof Model
   */
  parentId: string | null;
  /**
   * The input-output schema for inference for this model
   * @type {JSONValue | null}
   * @memberof Model
   */
  inferenceSchema: JSONValue | null;
  /**
   * The input-output schema for fine-tuning for this model
   * @type {JSONValue | null}
   * @memberof Model
   */
  fineTuningSchema: JSONValue | null;
  /**
   *
   * @type {?string}
   * @memberof Model
   */
  inferenceEndpoint: string | null;
  /**
   *
   * @type {JSONValue | null}
   * @memberof Model
   */
  attributes: JSONValue | null;
}

/**
 *
 * @export
 * @interface ModelCreateData
 */
export interface ModelCreateData {
  /**
   *
   * @type {string}
   * @memberof ModelCreateData
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ModelCreateData
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCreateData
   */
  inferenceEndpoint?: string;
  /**
   *
   * @type {JSONArray}
   * @memberof ModelCreateData
   */
  inferenceSchema?: JSONArray;
  /**
   *
   * @type {JSONArray}
   * @memberof ModelCreateData
   */
  fineTuningSchema?: JSONArray;
  /**
   *
   * @type {Array<{id?: string}>}
   * @memberof ModelCreateData
   */
  uploads?: Array<{ id?: string }>;
  /**
   *
   * @type {boolean}
   * @memberof ModelCreateData
   */
  promoted?: boolean;
  /**
   *
   * @type {string}
   * @memberof ModelCreateData
   */
  visibility?: Visibility;
}

/**
 *
 * @export
 * @interface ModelListQueryData
 */
export interface ModelListQueryData extends CommonListQueryDataWithSearch {
  /**
   * If true, only return models that are promoted
   * @type {boolean}
   * @memberof ModelListQueryData
   */
  promoted?: boolean;
}

/**
 * @type ModelUpdateData
 * @export
 */
export type ModelUpdateData = ModelCreateData;

/**
 * @type CreateModelResponse
 * @export
 */
export type CreateModelResponse = Model;

/**
 * @type ListModelsResponse
 * @export
 */
export type ListModelsResponse = {
  models: Array<Model>;
} & CommonListResponseData;

/**
 * @type ReadModelResponse
 * @export
 */
export type ReadModelResponse = Model & {
  children: Array<Model>;
  embeddingCollections: Array<EmbeddingCollection>;
  members: Array<User>;
  organization: Organization | null;
  parent: Model | null;
};

/**
 * @type UpdateModelResponse
 * @export
 */
export type UpdateModelResponse = Model;

/**
 * NOTIFICATION TYPES
 */

/**
 *
 * @export
 * @interface Notification
 */
export interface Notification {
  /**
   *
   * @type {string}
   * @memberof Notification
   */
  id: string;
  /**
   *
   * @type {Date}
   * @memberof Notification
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof Notification
   */
  updatedAt: Date;
  /**
   *
   * @type {string}
   * @memberof Notification
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof Notification
   */
  name: string;
  /**
   *
   * @type {?string}
   * @memberof Notification
   */
  message: string | null;
  /**
   *
   * @type {boolean}
   * @memberof Notification
   */
  unread: boolean;
}

/**
 *
 * @export
 * @interface NotificationListQueryData
 */
export interface NotificationListQueryData
  extends CommonListQueryDataWithSearch {}

/**
 * @type ListNotificationsResponse
 * @export
 */
export type ListNotificationsResponse = {
  notifications: Array<Notification>;
} & CommonListResponseData;

/**
 * ORGANIZATION TYPES
 */

/**
 *
 * @export
 * @interface Organization
 */
export interface Organization {
  /**
   *
   * @type {string}
   * @memberof Organization
   */
  id: string;
  /**
   *
   * @type {Date}
   * @memberof Organization
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof Organization
   */
  updatedAt: Date;
  /**
   *
   * @type {string}
   * @memberof Organization
   */
  name: string;
  /**
   *
   * @type {?string}
   * @memberof Organization
   */
  description: string | null;
  /**
   *
   * @type {boolean}
   * @memberof Organization
   */
  active: boolean;
  /**
   *
   * @type {JSONValue | null}
   * @memberof Organization
   */
  attributes: JSONValue | null;
}

/**
 *
 * @export
 * @interface OrganizationCreateData
 */
export interface OrganizationCreateData {
  /**
   *
   * @type {string}
   * @memberof OrganizationCreateData
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof OrganizationCreateData
   */
  description?: string;
}

/**
 *
 * @export
 * @interface OrganizationListQueryData
 */
export interface OrganizationListQueryData
  extends CommonListQueryDataWithSearch {}

/**
 * @type OrganizationUpdateData
 * @export
 */
export type OrganizationUpdateData = OrganizationCreateData;

/**
 * @type CreateOrganizationResponse
 * @export
 */
export type CreateOrganizationResponse = Organization;

/**
 * @type ListOrganizationsResponse
 * @export
 */
export type ListOrganizationsResponse = {
  organizations: Array<Organization>;
} & CommonListResponseData;

/**
 * @type ReadOrganizationResponse
 * @export
 */
export type ReadOrganizationResponse = Organization & {
  invitedMembers: Array<InvitedMember>;
  members: Array<User>;
  rolesByOrganization: Array<RoleByOrganization>;
};

/**
 * @type UpdateOrganizationResponse
 * @export
 */
export type UpdateOrganizationResponse = Organization;

/**
 * ORGANIZATION MEMBER TYPES
 */

/**
 *
 * @export
 * @interface InvitedMember
 */
export interface InvitedMember {
  /**
   *
   * @type {Date}
   * @memberof InvitedMember
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof InvitedMember
   */
  updatedAt: Date;
  /**
   *
   * @type {string}
   * @memberof InvitedMember
   */
  organizationId: string;
  /**
   *
   * @type {string}
   * @memberof InvitedMember
   */
  email: string;
  /**
   *
   * @type {?string}
   * @memberof InvitedMember
   */
  userId: string | null;
  /**
   *
   * @type {boolean}
   * @memberof InvitedMember
   */
  acceptedInvite: boolean;
}

/**
 * @type AddOrganizationMemberResponse
 * @export
 */
export type AddOrganizationMemberResponse = InvitedMember;

/**
 * REVIEW TYPES
 */

/**
 *
 * @export
 * @interface Review
 */
export interface Review {
  /**
   *
   * @type {string}
   * @memberof Review
   */
  id: string;
  /**
   *
   * @type {Date}
   * @memberof Review
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof Review
   */
  updatedAt: Date;
  /**
   *
   * @type {string}
   * @memberof Review
   */
  creatorId: string;
  /**
   *
   * @type {?string}
   * @memberof Review
   */
  organizationId: string | null;
  /**
   *
   * @type {Visibility}
   * @memberof Review
   */
  visibility: Visibility;
  /**
   *
   * @type {boolean}
   * @memberof Review
   */
  active: string;
  /**
   *
   * @type {string}
   * @memberof Review
   */
  trial1Id: string;
  /**
   *
   * @type {string}
   * @memberof Review
   */
  trial2Id: string;
}

/**
 *
 * @export
 * @interface ReviewListQueryData
 */
export interface ReviewListQueryData extends CommonListQueryDataWithSearch {}

/**
 * @type ListReviewsResponse
 * @export
 */
export type ListReviewsResponse = {
  reviews: Array<Review>;
} & CommonListResponseData;

/**
 * @type ReadReviewResponse
 * @export
 */
export type ReadReviewResponse = Review & {
  comments: Array<Comment & { user: User }>;
  members: Array<User>;
  organization: Organization | null;
  trial1: Trial;
  trial2: Trial;
};

/**
 * PRIVATE TOKEN TYPES
 */

/**
 *
 * @export
 * @interface SanitizedToken
 */
export interface SanitizedToken {
  /**
   *
   * @type {string}
   * @memberof SanitizedToken
   */
  id: string;
  /**
   *
   * @type {Date}
   * @memberof SanitizedToken
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof SanitizedToken
   */
  name: Date;
  /**
   *
   * @type {?Date}
   * @memberof SanitizedToken
   */
  lastUsed?: Date | null;
}

/**
 *
 * @export
 * @interface Token
 */
export interface Token extends SanitizedToken {
  /**
   *
   * @type {Date}
   * @memberof Token
   */
  updatedAt: Date;
  /**
   *
   * @type {string}
   * @memberof Token
   */
  token: string;
}

/**
 *
 * @export
 * @interface TokenCreateData
 */
export interface TokenCreateData {
  /**
   *
   * @type {string}
   * @memberof TokenCreateData
   */
  name: string;
}

/**
 *
 * @export
 * @interface TokenListQueryData
 */
export interface TokenListQueryData extends CommonListQueryData {}

/**
 * @type CreateTokenResponse
 * @export
 */
export type CreateTokenResponse = Token;

/**
 * @type ListTokensResponse
 * @export
 */
export type ListTokensResponse = {
  apiTokens: Array<SanitizedToken>;
} & CommonListResponseData;

/**
 * PUBLIC TOKEN TYPES
 */

/**
 *
 * @export
 * @interface PublicToken
 */
export interface PublicToken extends Token {
  /**
   * Defines the scopes of API access allowed to this token
   * @type {JSONValue}
   * @memberof PublicToken
   */
  scopes: JSONValue;
}

/**
 *
 * @export
 * @interface PublicTokenCreateData
 */
export interface PublicTokenCreateData extends TokenCreateData {}

/**
 *
 * @export
 * @interface PublicTokenListQueryData
 */
export interface PublicTokenListQueryData extends CommonListQueryData {}

/**
 * @type CreatePublicTokenResponse
 * @export
 */
export type CreatePublicTokenResponse = PublicToken;

/**
 * @type ListPublicTokensResponse
 * @export
 */
export type ListPublicTokensResponse = {
  apiTokens: Array<SanitizedToken>;
} & CommonListResponseData;

/**
 * TRIAL TYPES
 */

export type TrialType = "INFERENCE" | "FINE_TUNE";

/**
 * State of a trial -- once a trial is closed, its model is available for consumption
 */
export type TrialState = "OPEN" | "CLOSED";

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
  id: string;
  /**
   *
   * @type {Date}
   * @memberof Trial
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof Trial
   */
  updatedAt: Date;
  /**
   *
   * @type {string}
   * @memberof Trial
   */
  creatorId: string;
  /**
   *
   * @type {?string}
   * @memberof Trial
   */
  name: string | null;
  /**
   *
   * @type {TrialType}
   * @memberof Trial
   */
  type: TrialType;
  /**
   *
   * @type {TrialState}
   * @memberof Trial
   */
  state: TrialState;
  /**
   *
   * @type {string}
   * @memberof Trial
   */
  experimentId: string;
  /**
   *
   * @type {?string}
   * @memberof Trial
   */
  playgroundModelId: string | null;
  /**
   *
   * @type {?string}
   * @memberof Trial
   */
  modelId: string | null;
  /**
   *
   * @type {JSONValue | null}
   * @memberof Trial
   */
  parameters: JSONValue | null;
  /**
   *
   * @type {?string}
   * @memberof Trial
   */
  rootStepId: string | null;
  /**
   *
   * @type {?string}
   * @memberof Trial
   */
  latestStepId: string | null;
  /**
   *
   * @type {JSONValue | null}
   * @memberof Trial
   */
  attributes: JSONValue | null;
  /**
   *
   * @type {?string}
   * @memberof Trial
   */
  organizationId: string | null;
  /**
   *
   * @type {Visibility}
   * @memberof Trial
   */
  visibility: Visibility;
  /**
   *
   * @type {boolean}
   * @memberof Trial
   */
  active: boolean;
  /**
   *
   * @type {?string}
   * @memberof Trial
   */
  forkedFromTrialId: string | null;
  /**
   *
   * @type {?string}
   * @memberof Trial
   */
  forkedFromTrialStepId: string | null;
}

/**
 *
 * @export
 * @interface TrialCloneData
 */
export interface TrialCloneData {
  /**
   * The id of the trial to clone
   * @type {string}
   * @memberof TrialCloneData
   */
  trialId: string;
  /**
   * The id of the trial step to clone up to.
   * If unspecified, we'll clone everything up to the latest step in the specified trial
   * @type {string}
   * @memberof TrialCloneData
   */
  trialStepId?: string;
  /**
   * The name for the newly-cloned trial
   * @type {string}
   * @memberof TrialCloneData
   */
  cloneName?: string;
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
  name?: string;
  /**
   *
   * @type {string}
   * @memberof TrialCreateData
   */
  experimentId?: string;
  /**
   *
   * @type {string}
   * @memberof TrialCreateData
   */
  modelId?: string;
  /**
   *
   * @type {string}
   * @memberof TrialCreateData
   */
  steps?: Array<TrialStepCreateDataCore>;
  /**
   *
   * @type {JSONValue}
   * @memberof TrialCreateData
   */
  parameters?: JSONValue;
}

/**
 *
 * @export
 * @interface TrialForkData
 */
export interface TrialForkData {
  /**
   * The id of the trial to fork
   * @type {string}
   * @memberof TrialForkData
   */
  trialId: string;
  /**
   * The id of the trial step to fork up to.
   * If unspecified, we'll fork everything up to the latest step in the specified trial
   * @type {string}
   * @memberof TrialForkData
   */
  trialStepId?: string;
  /**
   * The name for the newly-forked trial
   * @type {string}
   * @memberof TrialForkData
   */
  forkName?: string;
}

/**
 *
 * @export
 * @interface TrialListQueryData
 */
export interface TrialListQueryData extends CommonListQueryDataWithSearch {
  /**
   *
   * @type {boolean}
   * @memberof TrialListQueryData
   */
  experimentId?: boolean;
}

/**
 * @type TrialUpdateData
 * @export
 */
export type TrialUpdateData = TrialCreateData;

/**
 * @type CloneTrialResponse
 * @export
 */
export type CloneTrialResponse = Trial;

/**
 * @type CreateTrialResponse
 * @export
 */
export type CreateTrialResponse = Trial & {
  experiment: Experiment;
};

/**
 * @type ForkTrialResponse
 * @export
 */
export type ForkTrialResponse = Trial;

/**
 * @type ListTrialsResponse
 * @export
 */
export type ListTrialsResponse = {
  trials: Array<Trial>;
} & CommonListResponseData;

/**
 * @type ReadTrialResponse
 * @export
 */
export type ReadTrialResponse = Trial & {
  comments: Array<Comment>;
  experiment: Experiment;
  members: Array<User>;
  organization: Organization | null;
  playgroundModel: Model | null;
  steps: Array<TrialStep>;
};

/**
 * @type UpdateTrialResponse
 * @export
 */
export type UpdateTrialResponse = Trial;

/**
 * TRIAL STEP TYPES
 */

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
  id: string;
  /**
   *
   * @type {Date}
   * @memberof TrialStep
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof TrialStep
   */
  updatedAt: Date;
  /**
   *
   * @type {string}
   * @memberof TrialStep
   */
  creatorId: string;
  /**
   * Type of step in the Trial execution DAG (e.g. 'input', 'output', etc.)
   * @type {string}
   * @memberof TrialStep
   */
  type: string;
  /**
   * Data in the TrialStep (e.g. input prompt text, output image URL, etc.)
   * @type {JSONValue}
   * @memberof TrialStep
   */
  data: JSONValue;
  /**
   * Metadata associated with this TrialStep (e.g. metrics for the model for this particular step)
   * @type {JSONValue}
   * @memberof TrialStep
   */
  metadata: JSONValue;
  /**
   * Parent step ID (always specified unless this is the first step)
   * @type {?string}
   * @memberof TrialStep
   */
  previousStepId: string | null;
  /**
   * Children step IDs
   * @type {Array<string>}
   * @memberof TrialStep
   */
  nextStepIds: Array<string>;
  /**
   *
   * @type {JSONValue | null}
   * @memberof TrialStep
   */
  attributes: JSONValue | null;
}

/**
 *
 * @export
 * @interface TrialStepCreateDataCore
 */
export interface TrialStepCreateDataCore {
  /**
   *
   * @type {JSONValue}
   * @memberof TrialStepCreateDataCore
   */
  data: JSONValue;
  /**
   *
   * @type {string}
   * @memberof TrialStepCreateDataCore
   */
  type: string;
  /**
   *
   * @type {JSONValue}
   * @memberof TrialStepCreateDataCore
   */
  metadata?: JSONValue;
}

/**
 *
 * @export
 * @interface TrialStepCreateData
 */
export interface TrialStepCreateData extends TrialStepCreateDataCore {
  /**
   * The trial to add the step to
   * @type {string}
   * @memberof TrialStepCreateData
   */
  trialId: string;
}

/**
 *
 * @export
 * @interface TrialStepUpdateData
 */
export interface TrialStepUpdateData {
  /**
   * The trial step to update
   * @type {string}
   * @memberof TrialStepUpdateData
   */
  id: string;
  /**
   *
   * @type {JSONArray}
   * @memberof TrialStepUpdateData
   */
  metadata: JSONArray;
}

/**
 * @type CreateTrialStepResponse
 * @export
 */
export type CreateTrialStepResponse = TrialStep;

/**
 * @type UpdateTrialStepResponse
 * @export
 */
export type UpdateTrialStepResponse = TrialStep;

/**
 * UPLOAD TYPES
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
  id: string;
  /**
   *
   * @type {Date}
   * @memberof Upload
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof Upload
   */
  updatedAt: Date;
  /**
   *
   * @type {string}
   * @memberof Upload
   */
  url: string;
  /**
   *
   * @type {JSONValue}
   * @memberof Upload
   */
  metadata: JSONValue;
  /**
   *
   * @type {string}
   * @memberof Upload
   */
  modelId: string;
  /**
   *
   * @type {string}
   * @memberof Upload
   */
  creatorId: string;
  /**
   *
   * @type {boolean}
   * @memberof Upload
   */
  active: boolean;
  /**
   *
   * @type {JSONValue | null}
   * @memberof Upload
   */
  attributes: JSONValue | null;
  /**
   *
   * @type {?string}
   * @memberof Upload
   */
  trialStepId: string | null;
  /**
   *
   * @type {?string}
   * @memberof Upload
   */
  embeddingDataId: string | null;
  /**
   *
   * @type {?string}
   * @memberof Upload
   */
  datasetId: string | null;
}

type UploadAttachmentEntity = "model" | "trialstep";

/**
 *
 * @export
 * @interface UploadAttachData
 */
export interface UploadAttachData {
  /**
   * The entity type to attach the upload to
   * @type {UploadAttachmentEntity}
   * @memberof UploadAttachData
   */
  entity: UploadAttachmentEntity;
  /**
   * The id of the entity to attach the upload to
   * @type {string}
   * @memberof UploadAttachData
   */
  entityId: string;
}

/**
 *
 * @export
 * @interface UploadCreateData
 */
export interface UploadCreateData {
  /**
   * The s3 url to upload the data to
   * @type {string}
   * @memberof UploadCreateData
   */
  url: string;
  /**
   * Metadata to set for the upload data
   * @type {JSONValue}
   * @memberof UploadCreateData
   */
  metadata: JSONValue;
}

/**
 * @type AttachUploadResponse
 * @export
 */
export type AttachUploadResponse = Upload;

/**
 * @type CreateUploadResponse
 * @export
 */
export type CreateUploadResponse = {
  id: string;
  url: string;
};

/**
 * @type UploadPolicyResponse
 * @export
 */
export type UploadPolicyResponse = {
  s3Policy: string;
  s3Signature: string;
  AWSAccessKeyId: string;
  userId: string;
};

/**
 * WORKSPACE TYPES
 */

/**
 *
 * @export
 * @interface Workspace
 */
export interface Workspace {
  /**
   *
   * @type {string}
   * @memberof Workspace
   */
  id: string;
  /**
   *
   * @type {Date}
   * @memberof Workspace
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof Workspace
   */
  updatedAt: Date;
  /**
   *
   * @type {string}
   * @memberof Workspace
   */
  creatorId: string;
  /**
   *
   * @type {?string}
   * @memberof Workspace
   */
  organizationId: string | null;
  /**
   *
   * @type {Visibility}
   * @memberof Workspace
   */
  visibility: Visibility;
  /**
   *
   * @type {string}
   * @memberof Workspace
   */
  name: string;
  /**
   *
   * @type {?string}
   * @memberof Workspace
   */
  primaryExperimentId: string | null;
  /**
   *
   * @type {boolean}
   * @memberof Workspace
   */
  active: string;
  /**
   *
   * @type {?JSONValue}
   * @memberof Workspace
   */
  attributes: JSONValue | null;
}

/**
 *
 * @export
 * @interface WorkspaceCreateData
 */
export interface WorkspaceCreateData {
  /**
   *
   * @type {string}
   * @memberof WorkspaceCreateData
   */
  name: string;
}

/**
 *
 * @export
 * @interface WorkspaceListQueryData
 */
export interface WorkspaceListQueryData extends CommonListQueryDataWithSearch {}

/**
 * @type WorkspaceUpdateData
 * @export
 */
export type WorkspaceUpdateData = WorkspaceCreateData;

/**
 * @type CreateWorkspaceResponse
 * @export
 */
export type CreateWorkspaceResponse = {
  id: string;
  name: string;
};

/**
 * @type ListWorkspacesResponse
 * @export
 */
export type ListWorkspacesResponse = {
  workspaces: Array<{
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
} & CommonListResponseData;

/**
 * @type ReadWorkspaceResponse
 * @export
 */
export type ReadWorkspaceResponse = Workspace & {
  organization: Organization | null;
  members: Array<User>;
  experiments: Array<Experiment>;
};

/**
 * @type UpdateWorkspaceResponse
 * @export
 */
export type UpdateWorkspaceResponse = Workspace;

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
   * HELPERS
   */

  /**
   *
   * @summary Returns status of API layer
   */
  public async apiHealth(): Promise<{ status: string }> {
    // Only need the 'User-Agent' header from the default config
    let headers;
    if (this.configuration.defaultAxiosConfig.headers) {
      headers = {
        "User-Agent":
          this.configuration.defaultAxiosConfig.headers["User-Agent"],
      };
    }
    const res = await axios.get("health", {
      ...this.configuration.defaultAxiosConfig,
      headers,
    });
    return res.data;
  }

  /**
   * DATASETS
   */

  /**
   *
   * @summary Creates and returns a new Dataset
   * @param {DatasetCreateData} data Data to set in the created Dataset
   */
  public async createDataset(
    data: DatasetCreateData
  ): Promise<CreateDatasetResponse> {
    const res = await axios.post(
      "datasets/create",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Deletes a specified Dataset
   * @param {string} id The id of the Dataset to delete
   */
  public async deleteDataset(id: string): Promise<{ status: string }> {
    const res = await axios.delete("datasets/delete", {
      ...this.configuration.defaultAxiosConfig,
      data: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Returns a list of Datasets. Supports pagination and filtering by search string
   * @param {DatasetListQueryData} [queryData] Query / pagination filters
   */
  public async listDatasets(
    queryData?: DatasetListQueryData
  ): Promise<ListDatasetsResponse> {
    const res = await axios.get("datasets/list", {
      ...this.configuration.defaultAxiosConfig,
      params: {
        cursor: queryData?.cursor,
        pageSize: queryData?.pageSize?.toString(),
        search: queryData?.search,
      },
    });
    return res.data;
  }

  /**
   *
   * @summary Reads a Dataset
   * @param {string} id The id of the Dataset to read
   */
  public async readDataset(id: string): Promise<ReadDatasetResponse> {
    const res = await axios.get("datasets/read", {
      ...this.configuration.defaultAxiosConfig,
      params: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Update the data associated with a Dataset
   * @param {string} id The id of the Dataset to update
   * @param {DatasetUpdateData} data Data to update for the Dataset
   */
  public async updateDataset(
    id: string,
    data: DatasetUpdateData
  ): Promise<UpdateDatasetResponse> {
    const res = await axios.put(
      "datasets/update",
      { ...data, id },
      this.configuration.defaultAxiosConfig
    );
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
  public async createEmbeddingCollection(
    data: EmbeddingCollectionCreateData
  ): Promise<CreateEmbeddingCollectionResponse> {
    const res = await axios.post(
      "embeddings/create",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Deletes a specified EmbeddingCollection
   * @param {string} id The id of the EmbeddingCollection to delete
   */
  public async deleteEmbeddingCollection(
    id: string
  ): Promise<{ status: string }> {
    const res = await axios.delete("embeddings/delete", {
      ...this.configuration.defaultAxiosConfig,
      data: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Returns a list of EmbeddingCollections. Supports pagination and filtering by search string
   * @param {EmbeddingCollectionListQueryData} [queryData] Query / pagination filters
   */
  public async listEmbeddingCollections(
    queryData?: EmbeddingCollectionListQueryData
  ): Promise<ListEmbeddingCollectionsResponse> {
    const res = await axios.get("embeddings/list", {
      ...this.configuration.defaultAxiosConfig,
      params: {
        cursor: queryData?.cursor,
        pageSize: queryData?.pageSize?.toString(),
        search: queryData?.search,
        ready: queryData?.ready?.toString(),
      },
    });
    return res.data;
  }

  /**
   *
   * @summary Reads an EmbeddingCollection
   * @param {string} id The id of the EmbeddingCollection to read
   */
  public async readEmbeddingCollection(
    id: string
  ): Promise<ReadEmbeddingCollectionResponse> {
    const res = await axios.get("embeddings/read", {
      ...this.configuration.defaultAxiosConfig,
      params: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Returns the status of an EmbeddingCollection
   * @param {string} id The id of the EmbeddingCollection to obtain status of
   */
  public async embeddingCollectionStatus(
    id: string
  ): Promise<EmbeddingCollectionStatusResponse> {
    const res = await axios.get("embeddings/status", {
      ...this.configuration.defaultAxiosConfig,
      params: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Update the data associated with an EmbeddingCollection
   * @param {string} id The id of the EmbeddingCollection to update
   * @param {EmbeddingCollectionUpdateData} data Data to update for the EmbeddingCollection
   */
  public async updateEmbeddingCollection(
    id: string,
    data: EmbeddingCollectionUpdateData
  ): Promise<UpdateEmbeddingCollectionResponse> {
    const res = await axios.put(
      "embeddings/update",
      { ...data, id },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   * EXPERIMENTS
   */

  /**
   *
   * @summary Creates and returns a new Experiment
   * @param {EmbeddingCollectionCreateData} data Data to set in the created Experiment
   */
  public async createExperiment(
    data: ExperimentCreateData
  ): Promise<CreateExperimentResponse> {
    const res = await axios.post(
      "experiments/create",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Deletes a specified Experiment
   * @param {string} id The id of the Experiment to delete
   */
  public async deleteExperiment(id: string): Promise<{ status: string }> {
    const res = await axios.delete("experiments/delete", {
      ...this.configuration.defaultAxiosConfig,
      data: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Returns a list of Experiments. Supports pagination and filtering by search string
   * @param {ExperimentListQueryData} [queryData] Query / pagination filters
   */
  public async listExperiments(
    queryData?: ExperimentListQueryData
  ): Promise<ListExperimentsResponse> {
    const res = await axios.get("experiments/list", {
      ...this.configuration.defaultAxiosConfig,
      params: {
        cursor: queryData?.cursor,
        pageSize: queryData?.pageSize?.toString(),
        search: queryData?.search,
        workspaceId: queryData?.workspaceId,
      },
    });
    return res.data;
  }

  /**
   *
   * @summary Reads an Experiment
   * @param {string} id The id of the Experiment to read
   */
  public async readExperiment(id: string): Promise<ReadExperimentResponse> {
    const res = await axios.get("emperiments/read", {
      ...this.configuration.defaultAxiosConfig,
      params: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Update the data associated with an Experiment
   * @param {string} id The id of the Experiment to update
   * @param {ExperimentUpdateData} data Data to update for the Experiment
   */
  public async updateExperiment(
    id: string,
    data: ExperimentUpdateData
  ): Promise<UpdateExperimentResponse> {
    const res = await axios.put(
      "experiments/update",
      { ...data, id },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   * INFERENCE
   */

  /**
   *
   * @summary Provides text chat completion using OpenAI models
   * @param {OpenAICreateChatCompletionRequest} data OpenAI CreateChatCompletionRequest
   */
  public async createOpenAIChatCompletion(
    data: OpenAICreateChatCompletionRequest
  ): Promise<OpenAICreateChatCompletionResponse> {
    const res = await axios.post(
      "inference/openai/chatgpt/completion",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Provides text completion using OpenAI models
   * @param {OpenAICreateCompletionRequest} data OpenAI CreateCompletionRequest
   */
  public async createOpenAICompletion(
    data: OpenAICreateCompletionRequest
  ): Promise<OpenAICreateCompletionResponse> {
    const res = await axios.post(
      "inference/openai/completion",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   * MODELS
   */

  /**
   *
   * @summary Creates and returns a new Model
   * @param {ModelCreateData} data Data to set in the created Model
   */
  public async createModel(
    data: ModelCreateData
  ): Promise<CreateModelResponse> {
    const res = await axios.post(
      "models/create",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Deletes a specified Model
   * @param {string} id The id of the Model to delete
   */
  public async deleteModel(id: string): Promise<{ status: string }> {
    const res = await axios.delete("models/delete", {
      ...this.configuration.defaultAxiosConfig,
      data: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Returns a list of Models. Supports pagination and filtering by search string
   * @param {ModelListQueryData} [queryData] Query / pagination filters
   */
  public async listModels(
    queryData?: ModelListQueryData
  ): Promise<ListModelsResponse> {
    const res = await axios.get("models/list", {
      ...this.configuration.defaultAxiosConfig,
      params: {
        cursor: queryData?.cursor,
        pageSize: queryData?.pageSize?.toString(),
        search: queryData?.search,
        promoted: queryData?.promoted,
      },
    });
    return res.data;
  }

  /**
   *
   * @summary Reads a Model
   * @param {string} id The id of the Model to read
   */
  public async readModel(id: string): Promise<ReadModelResponse> {
    const res = await axios.get("models/read", {
      ...this.configuration.defaultAxiosConfig,
      params: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Update the data associated with a Model
   * @param {string} id The id of the Model to update
   * @param {ModelUpdateData} data Data to update for the Model
   */
  public async updateModel(
    id: string,
    data: ModelUpdateData
  ): Promise<UpdateModelResponse> {
    const res = await axios.put(
      "models/update",
      { ...data, id },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   * NOTIFICATIONS
   */

  /**
   *
   * @summary Returns a list of Notifications. Supports pagination and filtering by search string
   * @param {ModelListQueryData} [queryData] Query / pagination filters
   */
  public async listNotifications(
    queryData?: NotificationListQueryData
  ): Promise<ListNotificationsResponse> {
    const res = await axios.get("notifications/list", {
      ...this.configuration.defaultAxiosConfig,
      params: {
        cursor: queryData?.cursor,
        pageSize: queryData?.pageSize?.toString(),
        search: queryData?.search,
      },
    });
    return res.data;
  }

  /**
   *
   * @summary Update either a specific notification, or all notifications, to mark as read
   * @param {string} [id] Optional id of the Notification to mark as read
   * @param {boolean} [all] Optional flag to mark all Notificaitons as read. Takes precedence over id
   */
  public async updateNotificationRead(
    id?: string,
    all?: boolean
  ): Promise<{ status: string }> {
    const res = await axios.put(
      "notifications/updateread",
      { id, all },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   * ORGANIZATIONS
   */

  /**
   *
   * @summary Creates and returns a new Organization
   * @param {OrganizationCreateData} data Data to set in the created Organization
   */
  public async createOrganization(
    data: OrganizationCreateData
  ): Promise<CreateOrganizationResponse> {
    const res = await axios.post(
      "orgs/create",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Deletes a specified Organization
   * @param {string} id The id of the Organization to delete
   */
  public async deleteOrganization(id: string): Promise<{ status: string }> {
    const res = await axios.delete("orgs/delete", {
      ...this.configuration.defaultAxiosConfig,
      data: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Returns a list of Organizations. Supports pagination and filtering by search string
   * @param {OrganizationListQueryData} [queryData] Query / pagination filters
   */
  public async listOrganizations(
    queryData?: OrganizationListQueryData
  ): Promise<ListOrganizationsResponse> {
    const res = await axios.get("orgs/list", {
      ...this.configuration.defaultAxiosConfig,
      params: {
        cursor: queryData?.cursor,
        pageSize: queryData?.pageSize?.toString(),
        search: queryData?.search,
      },
    });
    return res.data;
  }

  /**
   *
   * @summary Reads an Organization
   * @param {string} id The id of the Organization to read
   */
  public async readOrganization(id: string): Promise<ReadOrganizationResponse> {
    const res = await axios.get("orgs/read", {
      ...this.configuration.defaultAxiosConfig,
      params: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Update the data associated with an Organization
   * @param {string} id The id of the Organization to update
   * @param {OrganizationUpdateData} data Data to update for the Organization
   */
  public async updateOrganization(
    id: string,
    data: OrganizationUpdateData
  ): Promise<UpdateOrganizationResponse> {
    const res = await axios.put(
      "orgs/update",
      { ...data, id },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   * ORGANIZATION MEMBERS
   */

  /**
   *
   * @summary Accept the invite to an Organization
   * @param {string} id The id of the Organization to accept the invite for
   */
  public async acceptOrganizationInvite(
    id: string
  ): Promise<{ status: string }> {
    const res = await axios.post(
      "orgs/members/acceptinvite",
      { id },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Add a member to an Organization
   * @param {string} id The id of the Organization to add the member to
   * @param {string} email The email of the member to add to the organization
   */
  public async addOrganizationMember(
    id: string,
    email: string
  ): Promise<AddOrganizationMemberResponse> {
    const res = await axios.post(
      "orgs/members/add",
      { id, email },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Change the role of a member within the organization
   * @param {string} id The id of the Organization
   * @param {string} memberId The id of the organization member whose role will be updated
   * @param {UserRole} role The new UserRole for the organization member
   */
  public async changeOrganizationMemberRole(
    id: string,
    memberId: string,
    role: UserRole
  ): Promise<{ status: string }> {
    const res = await axios.post(
      "orgs/members/changerole",
      { id, memberId, role },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Reject the invite to an Organization
   * @param {string} id The id of the Organization to reject the invite for
   */
  public async rejectOrganizationInvite(
    id: string
  ): Promise<{ status: string }> {
    const res = await axios.post(
      "orgs/members/rejectInvite",
      { id },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Remove a member to an Organization
   * @param {string} id The id of the Organization to remove the member from
   * @param {string} email The email of the member to remove from the organization
   */
  public async removeOrganizationMember(
    id: string,
    email: string
  ): Promise<{ status: string }> {
    const res = await axios.post(
      "orgs/members/remove",
      { id, email },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   * REVIEWS
   */

  /**
   *
   * @summary Returns a list of Reviews. Supports pagination and filtering by search string
   * @param {ReviewListQueryData} [queryData] Query / pagination filters
   */
  public async listReviews(
    queryData?: ReviewListQueryData
  ): Promise<ListReviewsResponse> {
    const res = await axios.get("reviews/list", {
      ...this.configuration.defaultAxiosConfig,
      params: {
        cursor: queryData?.cursor,
        pageSize: queryData?.pageSize?.toString(),
        search: queryData?.search,
      },
    });
    return res.data;
  }

  /**
   *
   * @summary Reads a Review
   * @param {string} id The id of the Review to read
   */
  public async readReview(id: string): Promise<ReadReviewResponse> {
    const res = await axios.get("reviews/read", {
      ...this.configuration.defaultAxiosConfig,
      params: { id },
    });
    return res.data;
  }

  /**
   * PRIVATE TOKENS
   */

  /**
   *
   * @summary Creates and returns a new private Token
   * @param {TokenCreateData} data Data to set in the created Token
   */
  public async createToken(
    data: TokenCreateData
  ): Promise<CreateTokenResponse> {
    const res = await axios.post(
      "tokens/create",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Deletes a specified private Token
   * @param {string} id The id of the Token to delete
   */
  public async deleteToken(id: string): Promise<{ status: string }> {
    const res = await axios.delete("tokens/delete", {
      ...this.configuration.defaultAxiosConfig,
      data: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Returns a list of private Tokens. Supports pagination
   * @param {TokenListQueryData} [queryData] Query / pagination filters
   */
  public async listTokens(
    queryData?: TokenListQueryData
  ): Promise<ListTokensResponse> {
    const res = await axios.get("tokens/list", {
      ...this.configuration.defaultAxiosConfig,
      params: {
        cursor: queryData?.cursor,
        pageSize: queryData?.pageSize?.toString(),
      },
    });
    return res.data;
  }

  /**
   * PUBLIC TOKENS
   */

  /**
   *
   * @summary Creates and returns a new Public Token
   * @param {TokenCreateData} data Data to set in the created Token
   */
  public async createPublicToken(
    data: PublicTokenCreateData
  ): Promise<CreatePublicTokenResponse> {
    const res = await axios.post(
      "tokens/public/create",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Deletes a specified Public Token
   * @param {string} id The id of the Token to delete
   */
  public async deletePublicToken(id: string): Promise<{ status: string }> {
    const res = await axios.delete("tokens/public/delete", {
      ...this.configuration.defaultAxiosConfig,
      data: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Returns a list of Public Tokens. Supports pagination
   * @param {PublicTokenListQueryData} [queryData] Query / pagination filters
   */
  public async listPublicTokens(
    queryData?: PublicTokenListQueryData
  ): Promise<ListPublicTokensResponse> {
    const res = await axios.get("tokens/public/list", {
      ...this.configuration.defaultAxiosConfig,
      params: {
        cursor: queryData?.cursor,
        pageSize: queryData?.pageSize?.toString(),
      },
    });
    return res.data;
  }

  /**
   * TRIALS
   */

  /**
   *
   * @summary Creates and clone of a Trial
   * @param {TrialCloneData} data Data to describe the clone
   */
  public async cloneTrial(data: TrialCloneData): Promise<CloneTrialResponse> {
    const res = await axios.post(
      "trials/clone",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Creates and returns a new Trial
   * @param {TrialCreateData} data Data to set in the created Trial
   */
  public async createTrial(
    data: TrialCreateData
  ): Promise<CreateTrialResponse> {
    const res = await axios.post(
      "trials/create",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Deletes a specified Trial
   * @param {string} id The id of the Trial to delete
   */
  public async deleteTrial(id: string): Promise<{ status: string }> {
    const res = await axios.delete("trials/delete", {
      ...this.configuration.defaultAxiosConfig,
      data: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Creates a fork (by ref) of a Trial
   * @param {TrialForkData} data Data to describe the fork
   */
  public async forkTrial(data: TrialForkData): Promise<ForkTrialResponse> {
    const res = await axios.post(
      "trials/fork",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Returns a list of Trials. Supports pagination and filtering by search string
   * @param {TrialListQueryData} [queryData] Query / pagination filters
   */
  public async listTrials(
    queryData?: TrialListQueryData
  ): Promise<ListTrialsResponse> {
    const res = await axios.get("trials/list", {
      ...this.configuration.defaultAxiosConfig,
      params: {
        cursor: queryData?.cursor,
        pageSize: queryData?.pageSize?.toString(),
        search: queryData?.search,
      },
    });
    return res.data;
  }

  /**
   *
   * @summary Reads a Trial
   * @param {string} id The id of the Trial to read
   */
  public async readTrial(id: string): Promise<ReadTrialResponse> {
    const res = await axios.get("trials/read", {
      ...this.configuration.defaultAxiosConfig,
      params: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Update the data associated with a Trial
   * @param {string} id The id of the Trial to update
   * @param {TrialUpdateData} data Data to update for the Trial
   */
  public async updateTrial(
    id: string,
    data: TrialUpdateData
  ): Promise<UpdateTrialResponse> {
    const res = await axios.put(
      "trials/update",
      { ...data, id },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   * TRIAL STEPS
   */

  /**
   *
   * @summary Creates and returns a new TrialStep
   * @param {TrialStepCreateData} data Data to set in the created TrialStep
   */
  public async createTrialStep(
    data: TrialStepCreateData
  ): Promise<CreateTrialStepResponse> {
    const res = await axios.post(
      "trialsteps/create",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Update the data associated with a TrialStep
   * @param {string} id The id of the TrialStep to update
   * @param {TrialStepUpdateData} data Data to update for the TrialStep
   */
  public async updateTrialStep(
    id: string,
    data: TrialStepUpdateData
  ): Promise<UpdateTrialStepResponse> {
    const res = await axios.put(
      "trialsteps/update",
      { ...data, id },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   * UPLOADS
   */

  /**
   *
   * @summary Attaches an Upload to an entity
   * @param {string} id The id of the Upload to attach
   * @param {UploadAttachData} data Specifies the entity to attach the Upload to
   */
  public async attachUpload(
    id: string,
    data: UploadAttachData
  ): Promise<AttachUploadResponse> {
    const res = await axios.put(
      "upload/attach",
      { ...data, id },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Creates and returns a new Upload
   * @param {UploadCreateData} data Data to set in the created Upload
   */
  public async createUpload(
    data: UploadCreateData
  ): Promise<CreateUploadResponse> {
    const res = await axios.post(
      "upload/create",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Returns an upload policy to client to upload to S3. Part of upload flow.
   */
  public async uploadPolicy(): Promise<UploadPolicyResponse> {
    const res = await axios.get("upload/policy", {
      ...this.configuration.defaultAxiosConfig,
    });
    return res.data;
  }

  /**
   * WORKSPACES
   */

  /**
   *
   * @summary Creates and returns a new Workspace
   * @param {WorkspaceCreateData} data Data to set in the created Workspace
   */
  public async createWorkspace(
    data: WorkspaceCreateData
  ): Promise<CreateWorkspaceResponse> {
    const res = await axios.post(
      "workspaces/create",
      data,
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }

  /**
   *
   * @summary Deletes a specified Workspace
   * @param {string} id The id of the Workspace to delete
   */
  public async deleteWorkspace(id: string): Promise<{ status: string }> {
    const res = await axios.delete("workspaces/delete", {
      ...this.configuration.defaultAxiosConfig,
      data: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Returns a list of Workspaces. Supports pagination and filtering by search string
   * @param {WorkspaceListQueryData} [queryData] Query / pagination filters
   */
  public async listWorkspaces(
    queryData?: WorkspaceListQueryData
  ): Promise<ListWorkspacesResponse> {
    const res = await axios.get("workspaces/list", {
      ...this.configuration.defaultAxiosConfig,
      params: {
        cursor: queryData?.cursor,
        pageSize: queryData?.pageSize?.toString(),
        search: queryData?.search,
      },
    });
    return res.data;
  }

  /**
   *
   * @summary Reads a Workspace
   * @param {string} id The id of the Workspace to read
   */
  public async readWorkspace(id: string): Promise<ReadWorkspaceResponse> {
    const res = await axios.get("workspaces/read", {
      ...this.configuration.defaultAxiosConfig,
      params: { id },
    });
    return res.data;
  }

  /**
   *
   * @summary Update the data associated with a Workspace
   * @param {string} id The id of the Workspace to update
   * @param {WorkspaceUpdateData} data Data to update for the Workspace
   */
  public async updateWorkspace(
    id: string,
    data: WorkspaceUpdateData
  ): Promise<UpdateWorkspaceResponse> {
    const res = await axios.put(
      "workspaces/update",
      { ...data, id },
      this.configuration.defaultAxiosConfig
    );
    return res.data;
  }
}
