<template>
  <layout>
    <div class="classify-container">
      <div class="classify-create">
        <el-button type="primary">添加分类</el-button>
      </div>
      <div class="classify-list">
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="id" width="300">
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
  name: 'classify',
  data() {
    return {
      tableData: [
        {
          id: '1',
          classify: '技术动态',
          operation: '编辑',
        },
      ],
    };
  },
};
</script>

<style lang="less">

</style>
