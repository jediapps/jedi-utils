const Order = require('./templates/Order')
const Customer = require('./templates/Customer')
const MutationAddTags = require('./templates/MutationAddTags')
const MutationRemoveTags = require('./templates/MutationRemoveTags')
const MutationOrderNoteUpdate = require('./templates/MutationOrderNoteUpdate')
const MutationCustomerNoteUpdate = require('./templates/MutationCustomerNoteUpdate')
const MutationCollectionReorderProducts = require('./templates/MutationCollectionReorderProducts')
const MutationCollectionUpdate = require('./templates/MutationCollectionUpdate')
const MutationWebhookSubscriptionCreate = require('./templates/MutationWebhookSubscriptionCreate')

module.exports = {
  Order,
  Customer,

  MutationAddTags,
  MutationRemoveTags,
  MutationOrderNoteUpdate,
  MutationCustomerNoteUpdate,
  MutationCollectionReorderProducts,
  MutationCollectionUpdate,
  MutationWebhookSubscriptionCreate
}