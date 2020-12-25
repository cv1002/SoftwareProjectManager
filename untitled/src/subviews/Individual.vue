<template>
  <div>
    <div>
    <el-table
        :data="tableData"
        height="400"
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
    <el-progress :percentage="progress" v-if="visible"></el-progress>
    <el-progress :percentage="100" :format="format" v-if="!visible"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="100" status="warning"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>
    <button v-on:click="changepercent">加</button>
    <button v-on:click="reset">reset</button>

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
      }],
      progress:0,
      visible:true,
    }
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`;
    },
    changepercent:function () {
      this.progress = this.progress+10;
      if(this.progress == 100){
        this.visible = false;
      }
    },
    reset:function (){
      this.progress = 0;
      this.visible = true;
    },
    handleDel(index) {
      this.tableData.splice(index, 1);
      this.progress = this.progress+10;
      if(this.progress == 100){
        this.visible = false;
      }
    }
  }
};
</script>

<style scoped>

</style>
