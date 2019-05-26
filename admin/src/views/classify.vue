<template>
  <layout>
    <div class="classify-container">
      <div class="classify-create">
        <el-button type="primary" @click="classifyAdd()">添加分类</el-button>
      </div>
      <div class="classify-list">
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="id" width="300">
            </el-table-column>
            <el-table-column prop="name" label="分类名称" width="300">
            </el-table-column>
            <el-table-column prop="operation" label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="classifyEdit(scope.row,scope.$index)">编辑</el-button>
                <el-button  size="mini" type="danger" @click="classifyDel(scope.row,scope.$index)">
                    删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>

      <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->
      <el-dialog :title="formTitle" :visible="dialogFormVisible">
        <el-form>
          <el-form-item label="分类" :label-width="formLabelWidth">
            <el-input v-model="inputDate.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="classifySave">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </layout>

</template>

<script>
import classifyModel from '@/global/model/classifyModel';

export default {
  name: 'Classify',
  data() {
    return {
      tableData: [],
      inputDate: {
        id: '',
        name: '',
      },
      dialogFormVisible: false,
      formLabelWidth: '50px',
      formTitle: '',
    };
  },
  created() {
    classifyModel.classifyShow().then((res) => {
      this.tableData = res.data;
    }).catch((err) => {
      console.log(err);
    });
  },
  methods: {
    classifyAdd() {
      this.dialogFormVisible = true;
      this.formTitle = '添加分类';
      this.inputDate.name = '';
      this.inputDate.id = '';
    },
    classifyEdit(row) {
      this.dialogFormVisible = true;
      this.formTitle = '编辑分类';
      this.inputDate.name = row.name;
      this.inputDate.id = row.id;
    },
    classifySave() {
      // eslint-disable-next-line
      const id = this.inputDate.id;
      // eslint-disable-next-line
      const name = this.inputDate.name;
      const params = { name };
      if (!name) {
        this.$message.error('缺少参数');
        return;
      }
      if (id) {
        classifyModel.classifyEdit(id, params).then(() => {
          this.tableData.name = name;
          this.dialogFormVisible = false;
          this.$message.success('修改成功');
        }).catch(() => {
          this.dialogFormVisible = false;
        });
      } else {
        classifyModel.classifyAdd(params).then((res) => {
          // const id = res.data.id;
          params.id = res.data.id;
          this.tableData.push(params);
          this.dialogFormVisible = false;
          this.$message.success('添加成功');
        }).catch(() => {
          this.dialogFormVisible = false;
        });
      }
    },
    classifyDel(row, index) {
      console.log(row);
      console.log(index);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => classifyModel.classifyDelete(row.id))
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

</style>
