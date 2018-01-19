var router = require('express').Router()
var UserModel = require('../DB/users')

router.get('/', function (req, res, next) {
    var user = {
        username: 'jzx',
        password: '123',
        age: 12
    }
    User.createData(user)
        .then(result => {
            res.send(result)
        })
})

module.exports = router;