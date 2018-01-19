var router = require('express').Router()
var querystring = require('querystring')    // 表单提交字符串解析
var base = require('../DB/index')

router.post('/login', function (req, res, next) {
    // var postData = '';
    // req.on('data', function (data) {
    //     postData += data;
    // }).on('end', function () {
    //     if (postData !== '') {
    //         var params = querystring.parse(postData);
    //         console.log(params)
    //         test.findOnly(params)
    //             .then(result => {
    //                 if (result == '') {
    //                     console.log('登录失败')
    //                     res.end('登录失败');
    //                 } else {
    //                     console.log('登录成功')
    //                     res.end('登录成功');
    //                 }
    //             })
    //     }
    // });
    base.findOnly(req.body)
        .then(result => {
            console.log(result)
            if (result == null) {
                console.log('登录失败')
                res.end('登录失败');
            } else {
                console.log('登录成功')
                res.end(result._id.toString());
            }
        })
})

router.post('/', function (req, res, next) {
    // var postData = '';
    // req.on('data', function (data) {
    //     postData += data;
    // }).on('end', function () {
    //     if (postData !== '') {
    //         var params = querystring.parse(postData);
    //         test.createData(params)
    //                 .then(result => {
    //                     console.log(result)
    //                 })
    //     }
    // });
    base.findOnly(req.body)
        .then(result => {
            console.log(result)
            if (result == null) {
                console.log('可注册')
                base.createData(req.body)
                    .then(result => {
                        console.log(result)
                        res.end(result);
                    })
            } else {
                console.log('账号已存在')
                res.end('账号已存在');
            }
        })
    
})

module.exports = router;