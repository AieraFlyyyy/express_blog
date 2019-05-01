// module.exports = function (app) {
//   app.get('/', function (req, res, next) {
//     console.log('new index')
//     res.render('index', { title: 'Express' });
//   })
// }

var IndexController = require('./controller/index')
module.exports = function (app) {
  app.get('/', IndexController.index)
}