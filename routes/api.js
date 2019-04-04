var express = require('express');
var router = express.Router();
var authController = require('./../controllers/auth.js');
var userController = require('./../controllers/user.js');
var classifyController = require('./../controllers/classify.js');
var articleController = require('./../controllers/article.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login',authController.login);

router.post('/user',userController.insert);
router.get('/user',userController.show);
router.put('/user/:id',userController.update);
router.delete('/user/:id' , userController.delete);

router.post('/classify',classifyController.insert);
router.get('/classify',classifyController.show);
router.put('/classify/:id',classifyController.update);
router.delete('/classify/:id',classifyController.delete);

router.post('/article',articleController.insert);
router.get('/article',articleController.show);//获取所有文章
router.put('/article/:id',articleController.update);
router.get('/article/:id',articleController.articleId);//获取文章id
// router.get('/article/:classify_id',articleController.classifyShow);//获取id为1的所有分类下的文章
router.delete('/article/:id',articleController.delete);

module.exports = router;
