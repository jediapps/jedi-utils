const winston = require('winston')
const LOG_LEVEL = 'debug'

const logLevels = {
  levels: {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    debug: 4,
    trace: 5
  },
  colors: {
    fatal: 'red',
    error: 'orange',
    warning: 'yellow',
    info: 'green',
    debug: 'blue',
    trace: 'gray'
  }
}

// TODO: verfiy that colorize, timestamp works fine

try {
  var loggerSettings = {
    level: LOG_LEVEL,
    levels: logLevels.levels,
    transports: [
      new winston.transports.Console({
        colorize: true,
        timestamp: true,
        json: true
      })
    ]
  }
} catch (err) {
  console.log('winston error', err.message)
}

module.exports = winston.createLogger(loggerSettings)
