<template>
  <layout>
    <div class="classify-container">
      <router-link class="article-router" to="/admin/article_create">
        新建文章
      </router-link>
      <div class="article-list">
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="id" width="300">
            </el-table-column>
            <el-table-column prop="title" label="标题" width="300">
            </el-table-column>
            <el-table-column prop="classify" label="分类名称" width="300">
            </el-table-column>
            <el-table-column prop="operation" label="操作">
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
  </layout>
</template>
<script>
export default {
  name: 'article',
  data() {
    return {
      tableData: [
        {
          id: '1',
          title: '标题',
          classify: '技术动态',
          operation: '编辑',
        },
      ],
    };
  },
};
</script>

<style lang="less">
  .article-router{
    color:#333;
    font-size: 18px;
  }
  .article-list{
    margin-top:30px;
  }
</style>
