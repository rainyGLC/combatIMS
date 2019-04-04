<template>
  <layout>
    <div class="articleCreate-container">
      <router-link class="article-router" to="/admin/article">
        返回文章列表
      </router-link>
      <el-form class="form-article" ref="form" :model="article"
        label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="article.classify_id" placeholder="请选择活动区域">
            <el-option v-for="item in classify" :key="item.id"
              :value="item.id" :label="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容" >
          <template>
            <quill-editor
              v-model="article.comment"
              ref="myQuillEditor"
              :options="editorOption"
              @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
              @change="onEditorChange($event)">
            </quill-editor>
          </template>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="articleSave">新建</el-button>
         <!--  <el-button>取消</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </layout>
</template>
<script>

import classifyModel from '@/global/model/classifyModel';
import articleModel from '@/global/model/articleModel';

export default {
  name: 'Article_create',
  data() {
    return {
      article: {
        title: '',
        classify_id: null,
        comment: '',
      },
      classify: [],
      content: null,
      editorOption: {},
    };
  },
  created() {
    classifyModel.classifyShow().then((res) => {
      this.classify = res.data;
      console.log(this.classify);
    }).catch((err) => {
      console.log(err);
    });
  },
  methods: {
    onEditorBlur() {},
    onEditorFocus() {},
    onEditorChange() {},
    articleSave() {
      // eslint-disable-next-line
      let title = this.article.title;
      // eslint-disable-next-line
      let classify_id = this.article.classify_id;
      // eslint-disable-next-line
      let comment = this.article.comment;
      // eslint-disable-next-line
      if (!title || !classify_id || !comment) {
        this.$message.error('缺少必要参数');
        return;
      }
      articleModel.articleAdd({ title, classify_id, comment }).then(() => {
        this.$router.replace({ name: 'article' });
        this.$message.success('添加成功');
      }).catch(() => {
        this.$message.error('添加失败');
      });
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
