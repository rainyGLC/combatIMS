<template>
  <layout>
    <div class="user-content">
      <div class="user-container">
        <div class="user-create">
          <!-- <el-button type="primary">添加人员</el-button> -->
          <div class="new-user">
            <h2>新建用户</h2>
            <div class="demo-input-jsize" id="new-input">
              <el-input class="input-item"
                placeholder="请输入名字" suffix-icon="el-icon-date"
                v-model="inputDate.name">
              </el-input>
              <el-input class="input-item"
                placeholder="请输入电话" suffix-icon="el-icon-date"
                v-model="inputDate.phone">
              </el-input>
              <el-input class="input-item" placeholder="请输入密码"
                suffix-icon="el-icon-date"
                v-model="inputDate.password">
              </el-input>
              <el-button type="primary" @click="userSave()">添加人员</el-button>
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
              <el-table-column prop="password" label="密码" width="200">
              </el-table-column>
              <el-table-column prop="operation" label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" @click="userEdit(scope.row,scope.$index)">编辑</el-button>
                  <el-button  size="mini" type="danger" @click="userDel(scope.row,scope.$index)">
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
          <!-- 弹窗 -->
          <el-dialog title="修改" :visible="dialogFormVisible" >
            <el-form>
              <el-form-item label="名字" :label-width="formLabelWidth">
                <el-input v-model="inputDate.name"></el-input>
              </el-form-item>
              <el-form-item label="电话" :label-width="formLabelWidth">
                <el-input v-model="inputDate.phone"></el-input>
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="inputDate.password"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="editCancel">取 消</el-button>
              <el-button type="primary" @click="editSave">保存</el-button>
            </div>
          </el-dialog>
      </div>
    </div>
  </layout>
</template>

<script>
import userModel from '@/global/model/userModel';

export default {
  name: 'User',
  data() {
    return {
      tableData: [],
      inputDate: {
        id: '',
        name: '',
        phone: '',
        password: '',
      },
      dataIndex: null,
      dialogFormVisible: false,
      formLabelWidth: '50px',
    };
  },
  created() {
    userModel.userShow().then((res) => {
      this.tableData = res.data;
    }).catch((err) => {
      console.log(err);
    });
  },
  methods: {
    userSave() {
      // const URL = '/api/user';
      // this.axios.post(URL, {
      //   name: this.name,
      //   phone: this.phone,
      //   password: this.password,
      // }).then((res) => {
      //   console.log(res);
      // }).catch((err) => {
      //   console.log(err);
      // });
      userModel.userAdd({
        name: this.inputDate.name,
        phone: this.inputDate.phone,
        password: this.inputDate.password,
      }).then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });
    },
    userEdit(row, index) {
      console.log(row);
      console.log(index);
      this.dataIndex = index;
      this.dialogFormVisible = true;
      this.inputDate.name = row.name;
      this.inputDate.phone = row.phone;
      this.inputDate.password = row.password;
      this.inputDate.id = row.id;
    },
    editCancel() {
      this.dialogFormVisible = false;
      this.inputDate.name = '';
      this.inputDate.phone = '';
      this.inputDate.password = '';
    },
    editSave() {
      let id = this.inputDate.id;
       // eslint-disable-next-line
      let name = this.inputDate.name;
      let phone = this.inputDate.phone;
      let password = this.inputDate.password;
      let params = { name, phone, password };
      userModel.userUpdate(id, params).then(() => {
        this.tableData.name = name;
        this.tableData.phone = phone;
        this.tableData.password = password;
        this.dialogFormVisible = false;
        this.$message.success('修改成功');
      }).catch((err) => {
        console.log(err);
        this.dialogFormVisible = false;
      });
    },
    userDel(row, index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        concelButtonText: '取消',
        type: 'warning',
      }).then(() => userModel.userDelete(row.id)).then(() => {
        this.tableData.splice(index, 1);
        this.$message({
          type: 'success',
          message: '删除成功!',
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
