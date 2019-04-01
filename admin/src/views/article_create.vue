<template>
  <layout>
    <div class="articleCreate-container">
      <router-link class="article-router" to="/admin/article">
        返回文章列表
      </router-link>
      <el-form class="form-article" ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="分类">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="内容">
          <el-input type="textarea" v-model="form.desc">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </layout>
</template>

<script>
export default {
  name: 'article_create',
  data() {
    return {
      form: {
        name: '',
        region: '',
        desc: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  },
};
</script>

<style lang="less">
  .article-router{
    color:#333;
  }
  .form-article{
    margin-top:30px;
    padding-right: 200px;
  }
</style>
