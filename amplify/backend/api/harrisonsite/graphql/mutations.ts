/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReviews = /* GraphQL */ `
  mutation CreateReviews(
    $input: CreateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    createReviews(input: $input, condition: $condition) {
      id
      name
      company
      comment
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateReviews = /* GraphQL */ `
  mutation UpdateReviews(
    $input: UpdateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    updateReviews(input: $input, condition: $condition) {
      id
      name
      company
      comment
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteReviews = /* GraphQL */ `
  mutation DeleteReviews(
    $input: DeleteReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    deleteReviews(input: $input, condition: $condition) {
      id
      name
      company
      comment
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
