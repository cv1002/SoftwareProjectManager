<template>
  <div class="finish-wrap">
    <div style="width: 10%;float: left">
      &nbsp;
    </div>
    <div style="width: 60%;float: left;">
      <h1 class="h">审核</h1>
      <img src="../../statics/img/head.png" style="margin-left: 2%">
      <table class="table">
        <div class="label-margin">
          <el-row class="row_distance" style="margin-top: 30px">
            组长：{{leadername}}
          </el-row>
          <el-row class="row_distance">
            组名：{{groupname}}
          </el-row>
          <el-row class="row_distance">
            题目：{{subject}}
          </el-row>
          <el-row class="row_distance">
            类型：{{type}}
          </el-row>
          <el-row class="row_distance">
            时间：{{time}}
          </el-row>
          <el-row class="row_distance">
            小组成员名单：
          </el-row>
          <el-row class="row_distance" v-for="(item,index) in groupmember" :key="index">
            {{item.name}}
          </el-row>
          <el-row class="row_distance">
            <el-button type="primary">审核通过</el-button>
            <el-button>审核未通过</el-button>
          </el-row>
        </div>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leadername:this.$route.query.name,
      groupname:'group1',
      subject: '',   //题目
      type: '',
      desc: '',
      time: '',
      groupmember:[
        {
          name:'张学良',
        },
        {
          name:'蒋介石',
        },
        {
          name:'MID虎',
        },
      ]
    };
  },
  methods: {
    CheckPass(){
      console.log('通过');
    },
    CheckFail(){
      console.log('未通过');
    }
  }
};
</script>

<style scoped>
.table{
  margin-left: 13%;
  border: solid 1px;
  border-radius: 10px;
  width: 600px;
}
.row_distance{
  margin-bottom: 20px;
}
.label-margin{
  margin-left: 30px;
}
.finish-wrap{
  background-color:white;
  height:100%;
  position: fixed;
  width: 100%;
}
.h{
  position: absolute;
  margin-left: 25%;
  margin-top: 30px;
}
</style>