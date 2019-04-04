const UserModel = require('./../models/user.js');
const User = new UserModel;

const userController = {
  insert:async function(req,res,next){
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    console.log(name,phone,password);
    if(!name || !phone || !password){
      res.json({code:0,message:'参数不正确!'});
      return
    } 
    try{
      const users = await User.insert({name,phone,password});
      console.log(users);
      res.json({code:200,data:users})
    }catch(e){
      res.json({code:0,data:e})
    }
  },
  show:async function(req,res,next){
    try{
      const users = await User.all();
      res.json({code:200,data:users})
    }catch(e){
      res.locals.error = e;
      res.render('error',res.locals);
    }
  },
  update:async function(req,res,next){
    let id = req.params.id;
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    if(!name || !phone || !password){
      res.json({code:0,message:'参数不正确'});
      return
    }
    console.log(id,name,phone,password)
    try{
      const users = await User.update(id,{name,phone,password});
      res.json({code:200,data:users})
    }catch(e){
      console.log(e)
      res.json({code:0,data:e})
    }
  },
  delete:async function(req,res,next) {
    let id = req.params.id;
    console.log(id)
    try{
      await User.delete(id);
      res.json({code:200,message:'删除成功'});
    }catch(e){
      console.log(e);
      res.json({code:0,data:e})
    }
  }
}
module.exports = userController;