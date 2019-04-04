<template>
  <layout>
    <div class="classify-container">
      <router-link class="article-router" to="/article_create">
        新建文章
      </router-link>
      <div class="article-list">
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="id" width="300">
            </el-table-column>
            <el-table-column prop="title" label="标题" width="300">
            </el-table-column>
            <el-table-column prop="classify_name" label="分类名称" width="300">
            </el-table-column>
            <el-table-column prop="operation" label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="articleEdit(scope.row.id)">编辑</el-button>
                <el-button  size="mini" type="danger" @click="articleDel(scope.row,scope.$index)">
                    删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
  </layout>
</template>
<script>
import articleModel from '@/global/model/articleModel';

export default {
  name: 'Article',
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    articleModel.articleAddShow().then((res) => {
      console.log(res);
      this.tableData = res.data;
    });
  },
  methods: {
    articleEdit(id) {
      this.$router.push({ name: 'article_edit', params: { id } });
    },
    articleDel(row, index) {
      console.log(row);
      console.log(index);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => articleModel.articleDelete(row.id))
        .then(() => {
          this.tableData.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功！',
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
    },
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
