const client = require('./client')

module.exports = {
  async request (config) {
    const response = await client.request(config)

    return response.data
  },

  async get (config) {
    return this.request(Object.assign({}, config, { method: 'get' }))
  },

  async post (config) {
    return this.request(Object.assign({}, config, { method: 'post' }))
  },

  async put (config) {
    return this.request(Object.assign({}, config, { method: 'put' }))
  },

  async delete (config) {
    return this.request(Object.assign({}, config, { method: 'delete' }))
  }
}
