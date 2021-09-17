module.exports = {
  getGQLOrderTemplate ({ cursor = null, query = '', first = 100 }) {
    return {
      variables: {
        first,
        cursor,
        query
      },

      query: `
        query Orders($first: Int, $cursor: String, $query: String)
        {
          orders(first: $first, after: $cursor, query: $query) {
            pageInfo {
              hasNextPage
            }
            edges {
              cursor
              node {
                id
                name
                shippingAddress {
                  name
                  address1
                  city
                  province
                }
              }
            }
          }
        }
      `
    }
  },

  getGQLCustomerTemplate ({ cursor = null, query = '', first = 100 }) {
    return {
      variables: {
        first,
        cursor,
        query
      },

      query: `
        query Customers($first: Int, $cursor: String, $query: String)
        {
          customers(first: $first, after: $cursor, query: $query) {
            pageInfo {
              hasNextPage
            }
            edges {
              cursor
              node {
                id
                displayName
                email
              }
            }
          }
        }
      `
    }
  },

  getGQLMutationAddTagsTemplate ({ id, tags }) {
    return {
      variables: {
        id,
        tags
      },

      query: `
        mutation tagsAdd($id: ID!, $tags: [String!]!) {
          tagsAdd(id: $id, tags: $tags) {
            node {
              id
            }
            userErrors {
              field
              message
            }
          }
        }
      `
    }
  },

  getGQLMutationRemoveTagsTemplate ({ id, tags }) {
    return {
      variables: {
        id,
        tags
      },

      query: `
        mutation tagsRemove($id: ID!, $tags: [String!]!) {
          tagsRemove(id: $id, tags: $tags) {
            node {
              id
            }
            userErrors {
              field
              message
            }
          }
        }
      `
    }
  },

  getGQLMutationOrderNoteUpdateTemplate ({ id, note }) {
    return {
      variables: {
        input: {
          id,
          note
        }
      },
      query: `
        mutation orderUpdate($input: OrderInput!) {
          orderUpdate(input: $input) {
            order {
              id
            }
            userErrors {
              field
              message
            }
          }
        }
      `
    }
  },

  getGQLMutationCustomerNoteUpdateTemplate ({ id, note }) {
    return {
      variables: {
        input: {
          id,
          note
        }
      },
      query: `
        mutation customerUpdate($input: CustomerInput!) {
          customerUpdate(input: $input) {
            customer {
              id
            }
            userErrors {
              field
              message
            }
          }
        }
      `
    }
  },

  getGQLMutationCollectionReorderProductsTemplate ({ id, moves }) {
    return {
      variables: {
        id,
        moves
      },
      query: `
        mutation collectionReorderProducts($id: ID!, $moves: [MoveInput!]!) {
          collectionReorderProducts(id: $id, moves: $moves) {
            job {
              id
            }
            userErrors {
              field
              message
            }
          }
        }
      `
    }
  },

  getGQLMutationCollectionUpdateTemplate ({ collection }) {
    return {
      variables: {
        collection
      },
      query: `
        mutation collectionUpdate($collection: CollectionInput!) {
          collectionUpdate(input: $collection) {
            collection {
              id
            }
            job {
              id
            }
            userErrors {
              field
              message
            }
          }
        }
      `
    }
  }
}
