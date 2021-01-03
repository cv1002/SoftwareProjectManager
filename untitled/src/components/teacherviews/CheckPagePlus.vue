<template>
  <div>
    <div style="width: 20%;float: left">
      &nbsp;
    </div>
    <div style="width: 60%;float: left;">
      <table class="table">
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
        <el-row class="row_distance" v-for="item in groupmember">
          {{item.name}}
        </el-row>
        <el-row class="row_distance">
          <el-button type="primary">审核通过</el-button>
          <el-button>审核未通过</el-button>
        </el-row>
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
          name:'孙中山',
        },
      ]
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
.table{
  margin: auto;
  margin-top: 40px;
  border: solid 1px;
  border-radius: 10px;
  width: 600px;
}
.row_distance{
  margin-bottom: 20px;
}
</style>