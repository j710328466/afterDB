var OSS = require('ali-oss').Wrapper;

var client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAIoPzqDe9H1mYx',
  accessKeySecret: '88888888',
  bucket: 'jzxer'
});

client.list().then(function (result) {
  console.log(result.objects);
}).catch(function (err) {
  console.error(err);
});

module.exports = client