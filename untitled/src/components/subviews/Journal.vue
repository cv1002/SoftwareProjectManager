<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8" v-for="items in tableData">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="user-info-list">
            日期：
            <span>{{items.date}}</span>
          </div>
          <div class="user-info-list">
            姓名：
            <span>{{items.name}}</span>
          </div>
          <div class="user-info-list">
            作业：
            <span>{{items.address}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '提交作业1'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '提交作业2'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '提交作业3'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '提交作业4'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    };
  }
};
</script>

<style scoped>
  .text {
  font-size: 14px;
  }

  .item {
  margin-bottom: 4px;
  }

  .clearfix:before,
  .clearfix:after {
  display: table;
  content: "";
  }
  .clearfix:after {
  clear: both
  }

  .box-card {
  height: 300px;
  }
</style>