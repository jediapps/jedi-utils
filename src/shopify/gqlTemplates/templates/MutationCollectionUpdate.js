module.exports = ({ collection }) => {
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