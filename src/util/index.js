module.exports = {
  waitInSeconds (s) {
    return new Promise(resolve => setTimeout(() => resolve(), 1000 * s))
  },

  waitInMilliSeconds (ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
  }
}
