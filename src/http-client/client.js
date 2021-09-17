const axios = require('axios')
const axiosRetry = require('axios-retry')
const logger = require('../logger')

const client = axios.create({
  timeout: 60000,
  headers: {
    json: true
  }
})

axiosRetry(client, {
  retries: 5,
  retryDelay: axiosRetry.exponentialDelay,
  shouldResetTimeout: true,
  retryCondition: function (error) {
    // TODO: handle specific errors codes only for retry
    if (error && error.response && error.response.status) {
      if (error.response.status === 429) {
        logger.info({
          message: 'inside axiosRetry',
          statusCode: error.response.status
        })
        return true
      }
    }

    return false
  }
})

module.exports = client
