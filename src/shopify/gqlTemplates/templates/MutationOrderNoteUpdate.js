module.exports = ({ id, note }) => {
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
}