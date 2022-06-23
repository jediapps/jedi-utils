module.exports = ({ cursor = null, query = '', first = 100 }) => {
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
}