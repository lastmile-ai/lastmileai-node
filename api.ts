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
 * @interface Account
 */
export interface Account {
  /**
   *
   * @type {string}
   * @memberof Account
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Account
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Account
   */
  updatedAt: string;
  /**
   *
   * @type {string}
   * @memberof Account
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof Account
   */
  type: string;
  /**
   *
   * @type {string}
   * @memberof Account
   */
  provider: string;
  /**
   *
   * @type {string}
   * @memberof Account
   */
  providerAccountId: string;
  /**
   *
   * @type {?string}
   * @memberof Account
   */
  refresh_token: string | null;
  /**
   *
   * @type {?number}
   * @memberof Account
   */
  refresh_token_expires_in: number | null;
  /**
   *
   * @type {?string}
   * @memberof Account
   */
  access_token: string | null;
  /**
   *
   * @type {?number}
   * @memberof Account
   */
  expires_at: number | null;
  /**
   *
   * @type {?string}
   * @memberof Account
   */
  token_type: string | null;
  /**
   *
   * @type {?string}
   * @memberof Account
   */
  scope: string | null;
  /**
   *
   * @type {?string}
   * @memberof Account
   */
  id_token: string | null;
  /**
   *
   * @type {?string}
   * @memberof Account
   */
  session_state: string | null;
  /**
   *
   * @type {?string}
   * @memberof Account
   */
  oauth_token_secret: string | null;
  /**
   *
   * @type {?string}
   * @memberof Account
   */
  oauth_token: string | null;
}

/**
 *
 * @export
 * @interface ApiToken
 */
export interface ApiToken {
  /**
   *
   * @type {string}
   * @memberof ApiToken
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof ApiToken
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof ApiToken
   */
  updatedAt: string;
  /**
   *
   * @type {string}
   * @memberof ApiToken
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ApiToken
   */
  token: string;
  /**
   *
   * @type {?string}
   * @memberof ApiToken
   */
  lastUsed: string | null;
  /**
   *
   * @type {boolean}
   * @memberof ApiToken
   */
  invalidated: boolean;
  /**
   *
   * @type {string}
   * @memberof ApiToken
   */
  userId: string;
}

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
   * @type {string}
   * @memberof Comment
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Comment
   */
  updatedAt: string;
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
  /**
   *
   * @type {string}
   * @memberof CommonListQueryData
   */
  name?: string;
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
 * @interface Feedback
 */
export interface Feedback {
  /**
   *
   * @type {string}
   * @memberof Feedback
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Feedback
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Feedback
   */
  updatedAt: string;
  /**
   *
   * @type {string}
   * @memberof Feedback
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof Feedback
   */
  feedback: string;
  /**
   *
   * @type {?string}
   * @memberof Feedback
   */
  page: string | null;
  /**
   *
   * @type {?JSONValue}
   * @memberof Feedback
   */
  attributes: JSONValue | null;
}

/**
 *
 * @export
 * @interface InvitedMember
 */
export interface InvitedMember {
  /**
   *
   * @type {string}
   * @memberof InvitedMember
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof InvitedMember
   */
  updatedAt: string;
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
 *
 * @export
 * @interface Profile
 */
export interface Profile {
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  updatedAt: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  bio: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  pic: string;
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  userId: string;
  /**
   *
   * @type {?JSONValue}
   * @memberof Profile
   */
  attributes: JSONValue;
}

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
   * @type {string}
   * @memberof Review
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Review
   */
  updatedAt: string;
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
  /**
   *
   * @type {Array<Comment>}
   * @memberof Review
   */
  comments: Array<Comment>;
}

/**
 *
 * @export
 * @interface RoleByOrganization
 */
export interface RoleByOrganization {
  /**
   *
   * @type {string}
   * @memberof RoleByOrganization
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof RoleByOrganization
   */
  updatedAt: string;
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
 * @interface Session
 */
export interface Session {
  /**
   *
   * @type {string}
   * @memberof Session
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Session
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Session
   */
  updatedAt: string;
  /**
   *
   * @type {string}
   * @memberof Session
   */
  sessionToken: string;
  /**
   *
   * @type {string}
   * @memberof Session
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof Session
   */
  expires: string; // DateTime
}

/**
 *
 * @export
 * @interface StripeCustomer
 */
export interface StripeCustomer {
  /**
   *
   * @type {string}
   * @memberof StripeCustomer
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof StripeCustomer
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof StripeCustomer
   */
  updatedAt: string;
  /**
   *
   * @type {string}
   * @memberof StripeCustomer
   */
  stripedCustomerID: string;
  /**
   *
   * @type {?string}
   * @memberof StripeCustomer
   */
  stripeProductId: string | null;
  /**
   *
   * @type {?string}
   * @memberof StripeCustomer
   */
  stripeSubscriptionId: string | null;
  /**
   *
   * @type {?string}
   * @memberof StripeCustomer
   */
  stripeSubscriptionName: string | null;
  /**
   *
   * @type {?string}
   * @memberof StripeCustomer
   */
  paymentStatus: string | null;
  /**
   *
   * @type {string}
   * @memberof StripeCustomer
   */
  userId: string;
  /**
   *
   * @type {?JSONValue}
   * @memberof StripeCustomer
   */
  attributes: JSONValue | null;
}

/**
 *
 * @export
 * @interface Tag
 */
export interface Tag {
  /**
   *
   * @type {string}
   * @memberof Tag
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Tag
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Review
   */
  updatedAt: string;
  /**
   *
   * @type {string}
   * @memberof Review
   */
  creatorId: string;
  /**
   *
   * @type {string}
   * @memberof Review
   */
  name: string;
  /**
   *
   * @type {?string}
   * @memberof Review
   */
  description: string | null;
  /**
   *
   * @type {?JSONValue}
   * @memberof Review
   */
  attributes: JSONValue | null;
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
  id: string;
  /**
   *
   * @type {string}
   * @memberof Upload
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Upload
   */
  updatedAt: string;
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
   * @type {string}
   * @memberof User
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  updatedAt: string;
  /**
   *
   * @type {?string}
   * @memberof User
   */
  email: string | null;
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
   * @type {Array<Account>}
   * @memberof User
   */
  accounts: Array<Account>;
  /**
   *
   * @type {Array<Session}
   * @memberof User
   */
  sessions: Array<Session>;
  /**
   *
   * @type {Array<ApiToken>}
   * @memberof User
   */
  apiTokens: Array<ApiToken>;
  /**
   *
   * @type {Array<Organization>}
   * @memberof User
   */
  organizations: Array<Organization>;
  /**
   *
   * @type {Array<RoleByOrganization>}
   * @memberof User
   */
  rolesByOrganization: Array<RoleByOrganization>;
  /**
   *
   * @type {?Profile}
   * @memberof User
   */
  profile: Profile | null;
  /**
   *
   * @type {?UserSetting}
   * @memberof User
   */
  userSetting: UserSetting | null;
  /**
   *
   * @type {?StripeCustomer}
   * @memberof User
   */
  stripeCustomer: StripeCustomer | null;
  /**
   *
   * @type {Array<Trial>}
   * @memberof User
   */
  createdTrials: Array<Trial>;
  /**
   *
   * @type {Array<TrialStep>}
   * @memberof User
   */
  createdTrialSteps: Array<TrialStep>;
  /**
   *
   * @type {Array<Upload>}
   * @memberof User
   */
  createdUploads: Array<Upload>;
  /**
   *
   * @type {Array<InvitedMember>}
   * @memberof User
   */
  userInvites: Array<InvitedMember>;
  /**
   *
   * @type {Array<Notification>}
   * @memberof User
   */
  userNotifications: Array<Notification>;
  /**
   *
   * @type {Array<Comment>}
   * @memberof User
   */
  userComments: Array<Comment>;
  /**
   *
   * @type {Array<Feedback>}
   * @memberof User
   */
  userFeedback: Array<Feedback>;
  /**
   *
   * @type {Array<Review>}
   * @memberof User
   */
  createdReviews: Array<Review>;
  /**
   *
   * @type {Array<EmbeddingCollection>}
   * @memberof User
   */
  createdEmbeddingCollections: Array<EmbeddingCollection>;
  /**
   *
   * @type {Array<Dataset>}
   * @memberof User
   */
  createadDatasets: Array<Dataset>;
  /**
   *
   * @type {Array<Tag>}
   * @memberof User
   */
  createdTags: Array<Tag>;
  /**
   *
   * @type {?JSONValue}
   * @memberof User
   */
  attributes: JSONValue | null;
}

export enum UserRole {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
}

/**
 *
 * @export
 * @interface UserSetting
 */
export interface UserSetting {
  /**
   *
   * @type {string}
   * @memberof UserSetting
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof UserSetting
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof UserSetting
   */
  updatedAt: string;
  /**
   *
   * @type {string}
   * @memberof UserSetting
   */
  userId: string;
  /**
   *
   * @type {?JSONValue}
   * @memberof UserSetting
   */
  properties: JSONValue | null;
  /**
   *
   * @type {?JSONValue}
   * @memberof UserSetting
   */
  attributes: JSONValue | null;
}

export enum Visibility {
  // Only visible to creator
  PRIVATE = "PRIVATE",

  // Only visible to creator and recursive members of entity and parent entities.
  // For example, if you create trial T in experiment E in workspace W,
  // T will be visible to members explicitly specified for T, plus
  // members with access to E, plus
  // members with access to W.
  MEMBER = "MEMBER",

  // Visible to everyone
  PUBLIC = "PUBLIC",
}

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
   * @type {string}
   * @memberof Workspace
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Workspace
   */
  updatedAt: string;
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
   * @type {Array<Experiment>}
   * @memberof Workspace
   */
  experiments: Array<Experiment>;
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
 * DATASET TYPES
 */

export enum DatasetType {
  // A website link or links that can be accessed without any authentication
  PUBLIC_URL = "PUBLIC_URL",

  // A file or set of files
  FILES = "FILES",
}

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
   * @type {string}
   * @memberof Dataset
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Dataset
   */
  updatedAt: string;
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
  /**
   *
   * @type {Array<EmbeddingCollection>}
   * @memberof Dataset
   */
  embeddingCollections: Array<EmbeddingCollection>;
  /**
   *
   * @type {Array<Upload>}
   * @memberof Dataset
   */
  uploads: Array<Upload>;
  /**
   * A dataset isn't associated explicitly with a single model, but if it is used in a model fork,
   * the reference is recorded here
   * @type {Array<Model>}
   * @memberof Dataset
   */
  models: Array<Model>;
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
export interface DatasetListQueryData extends CommonListQueryData {}

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
export type ListDatasetsResponse = Array<
  { datasets: Array<Dataset> } & CommonListResponseData
>;

/**
 * @type ReadDatasetResponse
 * @export
 */
export type ReadDatasetResponse = Dataset;

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
   * @type {string}
   * @memberof EmbeddingCollection
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof EmbeddingCollection
   */
  updatedAt: string;
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
   * @type {Array<EmbeddingData>}
   * @memberof EmbeddingCollection
   */
  embeddings: Array<EmbeddingData>;
  /**
   *
   * @type {Array<Model>}
   * @memberof EmbeddingCollection
   */
  models: Array<Model>;
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
   * @type {string}
   * @memberof EmbeddingData
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof EmbeddingData
   */
  updatedAt: string;
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
export interface EmbeddingCollectionListQueryData extends CommonListQueryData {}

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
export type ListEmbeddingCollectionsResponse = Array<
  { embeddingCollections: Array<EmbeddingCollection> } & CommonListResponseData
>;

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
  id: string;
  /**
   *
   * @type {string}
   * @memberof Experiment
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Experiment
   */
  updatedAt: string;
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
   * @type {Array<Trial>}
   * @memberof Experiment
   */
  trials: Array<Trial>;
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
export interface ExperimentListQueryData extends CommonListQueryData {
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
export type ListExperimentsResponse = Array<
  { experiments: Array<Experiment> } & CommonListResponseData
>;

/**
 * @type ReadExperimentResponse
 * @export
 */
export type ReadExperimentResponse = Experiment;

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
   * @type {string}
   * @memberof Model
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Model
   */
  updatedAt: string;
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
   * @type {Array<EmbeddingCollection>}
   * @memberof Model
   */
  embeddingCollections: Array<EmbeddingCollection>;
  /**
   *
   * @type {Array<Dataset>}
   * @memberof Model
   */
  datasets: Array<Dataset>;
  /**
   *
   * @type {?string}
   * @memberof Model
   */
  inferenceEndpoint: string | null;
  /**
   *
   * @type {Array<Upload>}
   * @memberof Model
   */
  modelUploads: Array<Upload>;
  /**
   *
   * @type {JSONValue | null}
   * @memberof Model
   */
  attributes: JSONValue | null;
  /**
   *
   * @type {Array<Experiment>}
   * @memberof Model
   */
  Experiment: Array<Experiment>;
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
export interface ModelListQueryData extends CommonListQueryData {}

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
export type ListModelsResponse = Array<
  { models: Array<Model> } & CommonListResponseData
>;

/**
 * @type ReadModelResponse
 * @export
 */
export type ReadModelResponse = Model;

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
   * @type {string}
   * @memberof Notification
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Notification
   */
  updatedAt: string;
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
  /**
   *
   * @type {?string}
   * @memberof Notification
   */
  link: string | null;
  /**
   *
   * @type {?JSONValue}
   * @memberof Notification
   */
  attributes: JSONValue | null;
}

/**
 *
 * @export
 * @interface NotificationListQueryData
 */
export interface NotificationListQueryData extends CommonListQueryData {}

/**
 * @type ListNotificationsResponse
 * @export
 */
export type ListNotificationsResponse = Array<
  { notifications: Array<Notification> } & CommonListResponseData
>;

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
   * @type {string}
   * @memberof Organization
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Organization
   */
  updatedAt: string;
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
   * @type {Array<User>}
   * @memberof Organization
   */
  members: Array<User>;
  /**
   *
   * @type {Array<RoleByOrganization>}
   * @memberof Organization
   */
  rolesByOrganization: Array<RoleByOrganization>;
  /**
   *
   * @type {Array<InvitedMember>}
   * @memberof Organization
   */
  invitedMembers: Array<InvitedMember>;
  /**
   *
   * @type {Array<Model>}
   * @memberof Organization
   */
  models: Array<Model>;
  /**
   *
   * @type {Array<Workspace>}
   * @memberof Organization
   */
  workspace: Array<Workspace>;
  /**
   *
   * @type {Array<Review>}
   * @memberof Organization
   */
  reviews: Array<Review>;
  /**
   *
   * @type {Array<Trial>}
   * @memberof Organization
   */
  trials: Array<Trial>;
  /**
   *
   * @type {Array<EmbeddingCollection>}
   * @memberof Organization
   */
  embeddingCollections: Array<EmbeddingCollection>;
  /**
   *
   * @type {Array<Dataset>}
   * @memberof Organization
   */
  datasets: Array<Dataset>;
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
export interface OrganizationListQueryData extends CommonListQueryData {}

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
export type ListOrganizationsResponse = Array<
  { organizations: Array<Organization> } & CommonListResponseData
>;

/**
 * @type ReadOrganizationResponse
 * @export
 */
export type ReadOrganizationResponse = Organization;

/**
 * @type UpdateOrganizationResponse
 * @export
 */
export type UpdateOrganizationResponse = Organization;

/**
 * TRIAL TYPES
 */

export enum TrialType {
  INFERENCE = "INFERENCE",
  FINE_TUNE = "FINE_TUNE",
}

/**
 * State of a trial -- once a trial is closed, its model is available for consumption
 */
export enum TrialState {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
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
  id: string;
  /**
   *
   * @type {string}
   * @memberof Trial
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Trial
   */
  updatedAt: string;
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
   * @type {Array<Comment>}
   * @memberof Trial
   */
  comments: Array<Comment>;
  /**
   *
   * @type {JSONValue | null}
   * @memberof Trial
   */
  parameters: JSONValue | null;
  /**
   *
   * @type {Array<TrialStep>}
   * @memberof Trial
   */
  trialSteps: Array<TrialStep>;
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
  attributed: JSONValue | null;
  /**
   *
   * @type {?string}
   * @memberof Trial
   */
  organizationId: string | null;
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
   * @type {string}
   * @memberof TrialStep
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof TrialStep
   */
  updatedAt: string;
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
   * Any uploads to storage that are referenced in the metrics data in some way
   * @type {Array<Upload>}
   * @memberof TrialStep
   */
  uploads: Array<Upload>;
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
   * @type {Array<Trial>}
   * @memberof TrialStep
   */
  trials: Array<Trial>;
  /**
   * All human-in-the-loop feedback associated with this trial step
   * @type {Array<TrialStepFeedback>}
   * @memberof TrialStep
   */
  trialStepFeedback: Array<TrialStepFeedback>;
  /**
   *
   * @type {Array<Comment>}
   * @memberof TrialStep
   */
  comments: Array<Comment>;
  /**
   *
   * @type {JSONValue | null}
   * @memberof TrialStep
   */
  attributes: JSONValue | null;
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
  id: string;
  /**
   *
   * @type {string}
   * @memberof TrialStepFeedback
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof TrialStepFeedback
   */
  updatedAt: string;
  /**
   *
   * @type {string}
   * @memberof TrialStepFeedback
   */
  trialId: string;
  /**
   *
   * @type {string}
   * @memberof TrialStepFeedback
   */
  trialStepId: string;
  /**
   * Feedback (e.g. upvote, downvote, etc.)
   * @type {JSONValue}
   * @memberof TrialStepFeedback
   */
  feedback: JSONValue;
  /**
   * Person giving the feedback
   * @type {?string}
   * @memberof TrialStepFeedback
   */
  userId: string | null;
  /**
   *
   * @type {JSONValue | null}
   * @memberof TrialStepFeedback
   */
  attributes: JSONValue | null;
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
   * @param {string} id The ID of the Dataset to delete
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
   * @summary Returns a list of Datasets. Supports pagination and filtering by name
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
        search: queryData?.name,
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
   * @param {string} id The ID of the EmbeddingCollection to delete
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
   * @summary Returns a list of EmbeddingCollections. Supports pagination and filtering by name
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
        search: queryData?.name,
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
   * @param {string} id The ID of the Experiment to delete
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
   * @summary Returns a list of Experiments. Supports pagination and filtering by name
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
        search: queryData?.name,
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
   * @param {string} id The ID of the Model to delete
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
   * @summary Returns a list of Models. Supports pagination and filtering by name
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
        search: queryData?.name,
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
   * @summary Returns a list of Notifications. Supports pagination and filtering by name
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
        search: queryData?.name,
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
   * @param {string} id The ID of the Organization to delete
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
   * @summary Returns a list of Organizations. Supports pagination and filtering by name
   * @param {OrganizationListQueryDAta} [queryData] Query / pagination filters
   */
  public async listOrganizations(
    queryData?: OrganizationListQueryData
  ): Promise<ListOrganizationsResponse> {
    const res = await axios.get("orgs/list", {
      ...this.configuration.defaultAxiosConfig,
      params: {
        cursor: queryData?.cursor,
        pageSize: queryData?.pageSize?.toString(),
        search: queryData?.name,
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
   * TRIALS
   */

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
}
