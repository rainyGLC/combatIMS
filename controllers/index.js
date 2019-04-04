const ArticleModel = require('./../models/article.js');
const Article = new ArticleModel;
const ClassifyModel = require('./../models/classify.js');
const Classify = new ClassifyModel;

const indexController = {
  indexRender:async function(req,res,next){
    try{
      const classifys = await Classify.all();
      res.locals.classifys =classifys;
      let classify_id = req.query.classify_id;
      let params = {};
      if(classify_id){
        params.classify_id = classify_id
      }
      const articles = await Article.joinClassifyShow(params);
      res.locals.articles = articles;
      res.render('index');
    }catch(e){
      console.log(e);
      res.json({code:0,data:e})
    }
  },
  detailsRender:async function(req,res,next) {
    try{
      let id = req.params.id;
      const articles = await Article.select({id});
      res.locals.articles = articles[0];
      const classifys = await Classify.all();
      res.locals.classifys=classifys;
      res.locals.classify_id = req.query.classify_id;
      res.render('details');
    }catch(e){
      console.log(e);
      res.json({code:0,data:e})
    }
  }
}
module.exports = indexController;