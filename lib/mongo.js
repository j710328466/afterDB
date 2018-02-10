const mongoose = require('mongoose')
const host1 = "dds-rj9da129fba7f8e41174-pub.mongodb.rds.aliyuncs.com";
const port1 = 3717;
const host2 = "dds-rj9da129fba7f8e42915-pub.mongodb.rds.aliyuncs.com";
const port2 = 3717;
const username = "root";
const password = "88888888";
const replSetName = "mgset-4988039";
const demoDb = "admin";
const url = `mongodb://${username}:${password}@${host1}:${port1},${host2}:${port2}/${demoDb}`
const Option = {
  replicaSet: replSetName
}
const db = mongoose.connect(url, Option)
const dbState = mongoose.connection

dbState.on('error', console.error.bind(console, 'connect is fail!'))

dbState.once('open', () => console.log('Cloud MongoDB is connected!'))

dbState.on('disconnecting', () => console.log('disconnecting...'))



module.exports = db