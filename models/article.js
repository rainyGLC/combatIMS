const Knex = require('./knex.js');
const Base = require('./base.js');
class Article extends Base{
  constructor(props='article') {
    super(props);
  }
  joinClassify(params) {
    return Knex('article')
      .leftJoin('classify','article.classify_id', '=','classify.id')
      .select('article.id', 'article.title', 
      {classify_name:'classify.name'},'article.comment')
  }
  joinClassifyShow(params){
    return Knex('article')
    .leftJoin('classify','article.classify_id','=','classify.id')
    .select('article.id','article.title',{classify_name:'classify.name'},'article.comment')
    .where(params)
  }
}
module.exports = Article;