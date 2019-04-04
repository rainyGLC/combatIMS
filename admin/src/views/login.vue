<template>
  <div class="login-wapper">
    <div class="form-section">
      <div class="form-images">
        <img class="logo-image" src="./../assets/image/jike_logo.png">
      </div>
      <div class="form-title">极客信息发布管理</div>
      <el-form :model="ruleForm" status-icon :rules="rules"
        ref="ruleForm" class="demo-ruleForm">
        <el-form-item class="form-item"  prop="phone">
          <el-input id="form-phone" placeholder="手机号码" type="menber"
          v-model="ruleForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item  class="form-item" prop="password">
          <el-input id="form-pass" placeholder="密码" type="password"
          v-model="ruleForm.password" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="form-buttom" type="primary"
          @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import userModel from '@/global/model/userModel';

export default {
  name: 'Login',
  data() {
    // const validatePhone = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入电话号码'));
    //   }else{
    //     callback();
    //   }
    // };
    // const validatePass = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入密码'));
    //   }else{
    //     callback();
    //   }
    // };
    return {
      ruleForm: {
        phone: '',
        password: '',
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    submitForm(ruleForm) {
      console.log(ruleForm);
      console.log(this.$refs[ruleForm]);
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          console.log(valid);
          userModel.register({
            phone: this.ruleForm.phone,
            password: this.ruleForm.password,
          }).then((res) => {
            if (res.code === 200) {
              localStorage.setItem('token', res.data.token);
              this.$router.replace({ name: 'article' });
            }
          }).catch((err) => {
            console.log(err);
          });
        } else {
          this.$message.error('登录失败，账号密码错误');
        }
      });
    },
  },
};
</script>

<style lang="less">
*{
  margin:0;
  padding:0;
}
.login-wapper{
  background-color:#fff;
  .form-section{
    margin:100px auto;
    padding:40px;
    width: 450px;
    border:1px solid #e5e5e5;
    border-radius: 4px;
    box-shadow: 2px 2px 56px rgba(0,0,0,.13);
    .form-images{
      display: block;
      margin-bottom: 20px;
      width: 170px;
      height: 60px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .form-title{
      color: #333;
      font-size:32px;
      font-weight:600;
      text-align: center;
      margin-bottom:60px;
    }
    .form-item{
      height: 60px;
      line-height: 60px;
      #form-phone, #form-pass{
        height: 60px;
        line-height: 60px;
      }
    }
    .form-buttom{
      width:100%;
      height: 60px;
      text-align: center;
      font-size: 24px;
    }
  }
}
</style>
