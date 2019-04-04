const UserModel = require('./../models/user.js');
const User = new UserModel();
const authCodeFunc = require('./../utils/authCode.js');

const authControllers={
  login:async function(req,res,next){
    let phone=req.body.phone;
    let password=req.body.password;
    if(!phone || !password){
      res.json({code:0,data:'params empty!'});
      return
    }
    console.log(phone,password);
    try{
      const users = await User.select({phone,password});
      const user=users[0];
      if(user){
        let auth_Code=phone+'\t'+password+'\t'+user.id;
        auth_Code=authCodeFunc(auth_Code,'ENCODE');
        res.cookie('ac',auth_Code,{maxAge:24*60*60*1000,httpOnly:true});
        res.cookie('user_name',user.name,{maxAge:24*60*60*1000,httpOnly:true})
        res.json({code:200,data:{token:auth_Code}, message:'登录成功'});
      }else{
        res.json({code:0,data:{msg:'登录失败，没有此用户'}})
      }
    }catch(e){
      res.json({code:0,data:e})
    }
  }
}
module.exports = authControllers;