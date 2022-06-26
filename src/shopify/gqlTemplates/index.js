const Orders = require('./templates/Orders')
const Customers = require('./templates/Customers')
const ProductVariants = require('./templates/ProductVariants')

const MutationAddTags = require('./templates/MutationAddTags')
const MutationRemoveTags = require('./templates/MutationRemoveTags')
const MutationOrderNoteUpdate = require('./templates/MutationOrderNoteUpdate')
const MutationCustomerNoteUpdate = require('./templates/MutationCustomerNoteUpdate')
const MutationCollectionReorderProducts = require('./templates/MutationCollectionReorderProducts')
const MutationCollectionUpdate = require('./templates/MutationCollectionUpdate')
const MutationWebhookSubscriptionCreate = require('./templates/MutationWebhookSubscriptionCreate')
const MutationProductChangeStatus = require('./templates/MutationProductChangeStatus')

module.exports = {
  Orders,
  Customers,
  ProductVariants,

  MutationAddTags,
  MutationRemoveTags,
  MutationOrderNoteUpdate,
  MutationCustomerNoteUpdate,
  MutationCollectionReorderProducts,
  MutationCollectionUpdate,
  MutationWebhookSubscriptionCreate,
  MutationProductChangeStatus
}