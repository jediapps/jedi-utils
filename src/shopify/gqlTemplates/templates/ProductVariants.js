module.exports = ({ cursor = null, query = '', first = 100 }) => {
  return {
    variables: {
      first,
      cursor,
      query
    },

    query: `
      query ProductVariants($first: Int, $cursor: String, $query: String)
      {
        productVariants(first: $first, after: $cursor, query: $query) {
          pageInfo {
            hasNextPage
          }
          edges {
            cursor
            node {
              id
              availableForSale
              displayName
              inventoryPolicy
              inventoryQuantity
              sku
              title
            }
          }
        }
      }
    `
  }
}