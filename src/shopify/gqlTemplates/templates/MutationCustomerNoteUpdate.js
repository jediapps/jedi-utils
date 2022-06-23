module.exports = ({ id, note }) => {
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
}