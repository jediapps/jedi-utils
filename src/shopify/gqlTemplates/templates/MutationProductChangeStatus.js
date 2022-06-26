module.exports = ({ productId, status }) => {
  return {
    variables: {
      productId,
      status 
    },
    query: `
      mutation productChangeStatus($productId: ID!, $status: ProductStatus!) {
        productChangeStatus(productId: $productId, status: $status) {
          product {
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