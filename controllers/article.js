const ArticleModel = require('./../models/article.js');
const Article = new ArticleModel;

const articleController = {
  insert:async function(req,res,next){
    let title = req.body.title;
    let classify_id = req.body.classify_id;
    let comment = req.body.comment;
    if(!title || !classify_id || !comment){
      res.json({code:0,data:'参数输入不正确'});
      return
    }
    try{
      const article = await Article.insert({title,classify_id,comment});
      const id = article[0];
      res.json({code:200,data:{id}});
    }catch(e){
      console.log(e)
      res.json({code:0,data:e})
    }
  },
  show:async function(req,res,next){
    try{
      // let classify_id = req.body.classify_id;
      // console.log(classify_id);
      const article = await Article.joinClassify();
      res.json({code:200,data:article});
      // article.reverse();
    }catch(e){
      console.log(e);
      res.json({code:0,data:e})
    }
  },
  articleId:async function(req,res,next){
    try{
      const id = req.params.id;
      const article = await Article.select({id});
      const articles = article[0];
      res.json({code:200,data:articles})
    }catch(e){
      console.log(e);
      res.json({code:0,data:e})
    }
  },
  update:async function(req,res,next) {
    let id = req.params.id;
    let title = req.body.title;
    let classify_id = req.body.classify_id;
    let comment = req.body.comment;
    if(!title || !classify_id || !comment) {
      res.json({code:0,message:'缺少参数'})
      return
    }
    try{
      const article = await Article.update(id,{title,classify_id,comment});
      res.json({code:200,data:article});
    }catch(e){
      console.log(e);
      res.json({code:0,data:e})
    }
  },
  delete:async function(req,res,next) {
    let id = req.params.id;
    try{
      await Article.delete(id);
      res.json({code:200,message:'删除成功'});

    }catch(e){
      console.log(e);
      res.json({code:0,data:e})
    }
  }
}
module.exports = articleController;