const logger = require('server/services/logger')

class AgendaWrapper {
  constructor (agenda) {
    this.agenda = agenda
  }

  async repeatEvery ({ interval, timezone, jobName, data }) {
    logger.info({
      message: 'inside register method of scheduler'
    })

    if (!interval) throw new Error('interval is required')
    if (!timezone) throw new Error('timezone is required')
    if (!jobName) throw new Error('jobName is required')
    if (!data.appJobId) throw new Error('data.appJobId is required')

    const job = this.agenda.create(jobName, data)
    await job.save()

    job.repeatEvery(interval, { timezone, skipImmediate: true })
    await job.save()
  }
}

module.exports = AgendaWrapper
