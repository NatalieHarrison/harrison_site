/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReviewsInput = {
  id?: string | null,
  name?: string | null,
  company?: string | null,
  comment?: string | null,
  date?: string | null,
  _version?: number | null,
};

export type ModelReviewsConditionInput = {
  name?: ModelStringInput | null,
  company?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelReviewsConditionInput | null > | null,
  or?: Array< ModelReviewsConditionInput | null > | null,
  not?: ModelReviewsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Reviews = {
  __typename: "Reviews",
  id: string,
  name?: string | null,
  company?: string | null,
  comment?: string | null,
  date?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateReviewsInput = {
  id: string,
  name?: string | null,
  company?: string | null,
  comment?: string | null,
  date?: string | null,
  _version?: number | null,
};

export type DeleteReviewsInput = {
  id: string,
  _version?: number | null,
};

export type ModelReviewsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  company?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelReviewsFilterInput | null > | null,
  or?: Array< ModelReviewsFilterInput | null > | null,
  not?: ModelReviewsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelReviewsConnection = {
  __typename: "ModelReviewsConnection",
  items:  Array<Reviews | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionReviewsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  company?: ModelSubscriptionStringInput | null,
  comment?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReviewsFilterInput | null > | null,
  or?: Array< ModelSubscriptionReviewsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateReviewsMutationVariables = {
  input: CreateReviewsInput,
  condition?: ModelReviewsConditionInput | null,
};

export type CreateReviewsMutation = {
  createReviews?:  {
    __typename: "Reviews",
    id: string,
    name?: string | null,
    company?: string | null,
    comment?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateReviewsMutationVariables = {
  input: UpdateReviewsInput,
  condition?: ModelReviewsConditionInput | null,
};

export type UpdateReviewsMutation = {
  updateReviews?:  {
    __typename: "Reviews",
    id: string,
    name?: string | null,
    company?: string | null,
    comment?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteReviewsMutationVariables = {
  input: DeleteReviewsInput,
  condition?: ModelReviewsConditionInput | null,
};

export type DeleteReviewsMutation = {
  deleteReviews?:  {
    __typename: "Reviews",
    id: string,
    name?: string | null,
    company?: string | null,
    comment?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetReviewsQueryVariables = {
  id: string,
};

export type GetReviewsQuery = {
  getReviews?:  {
    __typename: "Reviews",
    id: string,
    name?: string | null,
    company?: string | null,
    comment?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewsConnection",
    items:  Array< {
      __typename: "Reviews",
      id: string,
      name?: string | null,
      company?: string | null,
      comment?: string | null,
      date?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncReviewsQueryVariables = {
  filter?: ModelReviewsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncReviewsQuery = {
  syncReviews?:  {
    __typename: "ModelReviewsConnection",
    items:  Array< {
      __typename: "Reviews",
      id: string,
      name?: string | null,
      company?: string | null,
      comment?: string | null,
      date?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateReviewsSubscriptionVariables = {
  filter?: ModelSubscriptionReviewsFilterInput | null,
};

export type OnCreateReviewsSubscription = {
  onCreateReviews?:  {
    __typename: "Reviews",
    id: string,
    name?: string | null,
    company?: string | null,
    comment?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateReviewsSubscriptionVariables = {
  filter?: ModelSubscriptionReviewsFilterInput | null,
};

export type OnUpdateReviewsSubscription = {
  onUpdateReviews?:  {
    __typename: "Reviews",
    id: string,
    name?: string | null,
    company?: string | null,
    comment?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteReviewsSubscriptionVariables = {
  filter?: ModelSubscriptionReviewsFilterInput | null,
};

export type OnDeleteReviewsSubscription = {
  onDeleteReviews?:  {
    __typename: "Reviews",
    id: string,
    name?: string | null,
    company?: string | null,
    comment?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
