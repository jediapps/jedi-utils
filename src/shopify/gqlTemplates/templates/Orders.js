module.exports = ({ cursor = null, query = '', first = 100 }) => {
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
}