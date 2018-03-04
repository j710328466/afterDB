var co = require('co');
var OSS = require('ali-oss')


var client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAIW9ECTbKoOWZg',
  accessKeySecret: 'WMhCZADpbgciDAcnyC0rRsaRfQ3OCz',
  bucket: 'jzxer'
});

co(function* () {
  var result = yield client.put('classLesson/app', 'app.js');
  console.log(result);
}).catch(function (err) {
  console.log(err);
});

module.exports = client