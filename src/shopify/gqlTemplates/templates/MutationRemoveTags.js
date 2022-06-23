module.exports = ({ id, tags }) => {
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
}