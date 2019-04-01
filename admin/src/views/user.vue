<template>
  <layout>
    <div class="user-content">
      <div class="user-container">
        <div class="user-create">
          <!-- <el-button type="primary">添加人员</el-button> -->
          <div class="new-user">
            <h2>新建用户</h2>
            <div class="demo-input-size" id="new-input">
              <el-input class="input-item" placeholder="请输入名字" suffix-icon="el-icon-date">
              </el-input>
              <el-input class="input-item" placeholder="请输入电话" suffix-icon="el-icon-date">
              </el-input>
              <el-input class="input-item" placeholder="请输入密码" suffix-icon="el-icon-date">
              </el-input>
              <el-button type="primary">添加人员</el-button>
            </div>
          </div>
        </div>
        <div class="user-list">
          <template>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="id" label="id" width="200">
              </el-table-column>
              <el-table-column prop="name" label="名字" width="200">
              </el-table-column>
              <el-table-column prop="phone" label="电话" width="200">
              </el-table-column>
              <el-table-column prop="operation" label="操作">
              </el-table-column>
            </el-table>
          </template>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      tableData: [
        {
          id: '1',
          name: 'koko',
          phone: '1234XXX',
          operation: '编辑',
        },
      ],
    };
  },
};
</script>

<style lang="less">
.new-user{
  #new-input{
    margin-top:20px;
    display: flex;
    justify-content: space-between;
    .input-item{
      width:300px;
    }
  }
}
.user-list{
  margin-top:30px;
}
</style>
