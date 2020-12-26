<template>
  <div>
    <div>
    <el-table
        :data="tableData"
        height="600"
        border
        style="width: 100%">
      <el-table-column
          prop="date"
          label="规定完成日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="规定任务">
      </el-table-column>
      <el-table-column width="120" label="状态">
        <template slot-scope="scope">
          <el-button type="info" @click="handleDel(scope.$index)">未完成</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  </div>
</template>


<script>
export default {
  data(){
    return{
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      visible:true,
    }
  },
  methods: {
    handleDel(index) {
      this.tableData.splice(index, 1);
      this.$message.success('已完成！请再接再厉');
    }
  }
};
</script>

<style scoped>

</style>
