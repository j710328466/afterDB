var mongoose = require('mongoose')
var db = mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true })
var dbState = mongoose.connection

dbState.on('error', console.error.bind(console, 'connect is fail!'))

dbState.once('open', () => console.log('MongoDB is connected in port: ' + db.port))

dbState.on('disconnecting', () => console.log('disconnecting...'))

module.exports = db