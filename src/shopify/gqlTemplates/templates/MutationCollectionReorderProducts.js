module.exports = ({ id, moves }) => {
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
}