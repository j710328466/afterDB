var mongoose = require('mongoose')
var mongo = require('../lib/mongo')

// 定义数据库实例
var UserSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    age: { type: Number },
    discription: { type: String},
    time: { type: Date, default: Date.now }
})

UserSchema.methods.createData = function (data) {
    return new Promise((resolve, reject) => {
        UserModel.create(data, (error, doc) => {
            if (error) {
                reject(error)
            } else {
                resolve(doc)
            }
        })
    })
}

UserSchema.methods.checkData = function (data = {}, fields = null, options = {}) {
    return new Promise((resolve, reject) => {
        UserModel.find(data, fields, options, (error, doc) => {
            if (error) {
                reject(error)
            } else {
                resolve(doc)
            }
        })
    })
}

var UserModel = mongo.model('user', UserSchema,'user' )
var User = new UserModel()
module.exports = UserModel