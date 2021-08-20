const httpReq = require('../http-client')
const { waitInSeconds } = require('../util')
const logger = require('../logger')

class ShopifyApiClient {
  constructor ({ storeIdentifier, accessToken, shopifyAPIVersion }) {
    if (!storeIdentifier) throw Error('storeIdentifier is required')
    if (!accessToken) throw Error('accessToken is required')

    this.storeIdentifier = storeIdentifier
    this.accessToken = accessToken
    this.shopifyAPIVersion = shopifyAPIVersion
  }

  async request (config) {
    return httpReq.request(config)
  }

  async get (url, options) {
    let buildConfig = await buildConfigObj.call(this, Object.assign({}, { url }, options, { method: 'get' }))
    return this.request(buildConfig)
  }

  async post (url, options) {
    let buildConfig = await buildConfigObj.call(this, Object.assign({}, { url }, options, { method: 'post' }))
    return this.request(buildConfig)
  }

  async put (url, options) {
    let buildConfig = await buildConfigObj.call(this, Object.assign({}, { url }, options, { method: 'put' }))
    return this.request(buildConfig)
  }

  async delete (url, options) {
    let buildConfig = await buildConfigObj.call(this, Object.assign({}, { url }, options, { method: 'delete' }))
    return this.request(buildConfig)
  }

  async gql (options) {
    let toReturn

    let errCount = 0
    let expGrowthX = 1
    let maxErrCount = 20

    while (true) {
      try {
        toReturn = await this.execGQL(options)
        break
      } catch (err) {
        if (errCount > maxErrCount) {
          logger.error({
            message: err.message,
            options
          })
          throw new Error(err.message)
        }

        if (expGrowthX < 5) {
          expGrowthX++
        }

        errCount++
        await waitInSeconds(4 * expGrowthX)
        logger.debug({ message: 'Inside while loop err', errCount })
      }
    }

    return toReturn
  }

  async execGQL (options) {
    let buildConfig = await buildConfigObj.call(this, Object.assign({}, { url: 'graphql.json' }, options, { method: 'post' }))
    let result = await this.request(buildConfig)
    if (result.errors) {
      logger.debug({ storeIdentifier: this.storeIdentifier, message: 'Caught error in gql response', errors: JSON.stringify(result.errors) })
      throw new Error(JSON.stringify(result.errors))
    }
    return result
  }
}

const buildConfigObj = async function (config) {
  let newConfig = {
    baseURL: `https://${this.storeIdentifier}.myshopify.com/admin/api/${this.shopifyAPIVersion}/`,
    headers: {
      'X-Shopify-Access-Token': this.accessToken
    }
  }

  return Object.assign({}, config, newConfig)
}

module.exports = ShopifyApiClient
