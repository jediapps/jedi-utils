module.exports = ({ topic, callbackUrl }) => {
  return {
    variables: {
      topic,
      webhookSubscription: {
        callbackUrl,
        format: 'JSON'
      }
    },

    query: `
      mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
        webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
          webhookSubscription {
            id
            topic
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