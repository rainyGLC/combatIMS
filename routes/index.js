var express = require('express');
var router = express.Router();
var indexController = require('./../controllers/index.js');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/article',indexController.indexRender);
router.get('/article/:id',indexController.detailsRender);

module.exports = router;
