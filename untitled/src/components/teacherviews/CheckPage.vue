<template>
  <div>
    <div style="width: 10%;height: 100%;float: left">
      1
    </div>
    <div style="width: 70%;height: 400px;float: left">
      2
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            label="主文件"
            prop="date"
            width="180">
        </el-table-column>
        <el-table-column
            label="文件名"
            prop="name"
            width="180">
        </el-table-column>
        <el-table-column align="center" label="状态">
          <template slot-scope="scope">
            <el-tag
                :type="scope.row.status==='成功'?'success':(scope.row.status==='失败'?'danger':'')"
            >{{ scope.row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="120">
          <template slot-scope="scope">
            <el-button
                size="small"
                type="text"
                @click.native.prevent="deleteRow(scope.$index, tableData)">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <hr>
      <p>审理人意见</p>
      <el-button type="primary">审核通过</el-button>
      <el-button>审核不通过</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkpage',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        status: '成功'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        status: '失败'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        status: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        status: '上海市普陀区金沙江路 1516 弄'
      }]
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>

<style scoped>

</style>