module.exports = ({ id, tags }) => {
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
}