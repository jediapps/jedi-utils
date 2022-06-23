const logger = require('../logger')
const Agenda = require('agenda')

class AgendaWrapper {
  constructor (MONGODB_URI, COLLECTION_NAME) {
    const connectionOpts = { db: { address: MONGODB_URI, collection: COLLECTION_NAME }, processEvery: 10000 }
    const agenda = new Agenda(connectionOpts)

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
