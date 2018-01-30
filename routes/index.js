// var router = require('express').Router()
// var querystring = require('querystring')    // 表单提交字符串解析
// var base = require('../DB/index')

// // 登录
// router.post('/login', function (req, res, next) {
//     base.findOnly(req.body)
//         .then(result => {
//             console.log(result)
//             if (result == null) {
//                 console.log('登录失败')
//                 res.end('登录失败');
//             } else {
//                 console.log('登录成功')
//                 res.end(result._id.toString());
//             }
//         })
// })

// // 注册
// router.post('/', function (req, res, next) {
//     var filter = {
//         name: req.body.name,
//         tel: req.body.tel,
//         idCard: req.body.idCard
//     }
//     base.checkData(filter)
//         .then(result => {
//             if (result.length === 0) {
//                 console.log('可注册')
//                 base.createData(req.body)
//                     .then(result => {
//                         res.end('注册成功');
//                     })
//             } else {
//                 res.end('账号已存在');
//             }
//         })
    
// })

// module.exports = router;