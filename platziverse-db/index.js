'use strict'

const setupDataBase = require('./lib/db')
const setupAgent = require('./models/agent')
const setupMetric = require('./models/metric')

module.exports = async function(config) {
  const sequelize = setupDataBase(config)
  const AgentModel = setupAgent(config)
  const MetricModel = setupMetric(config)

  AgentModel.hasMany(MetricModel)
  MetricModel.belongsTo(AgentModel)

  await sequelize.authenticate()

  if (config.setup) await sequelize.sync({ force: true })

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
