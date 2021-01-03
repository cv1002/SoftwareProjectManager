<template>
  <div>
    <div style="width: 20%;float: left">
      &nbsp;
    </div>
    <div style="width: 60%;float: left;">
      <table class="table">
        <el-row class="row_distance" style="margin-top: 30px">
          组长：{{ leadername }}
        </el-row>
        <el-row class="row_distance">
          组名：{{ groupname }}
        </el-row>
        <el-row class="row_distance">
          题目：{{ subject }}
        </el-row>
        <el-row class="row_distance">
          类型：{{ type }}
        </el-row>
        <el-row class="row_distance">
          时间：{{ time }}
        </el-row>
        <el-row class="row_distance">
          小组成员名单：
        </el-row>
        <el-row v-for="item in groupmember" :key="item" class="row_distance">
          {{ item.name }}
        </el-row>
        <el-row class="row_distance">
          <el-button class="btn" @click="dialogVisible = true">审核</el-button>
          <el-dialog :before-close="handleClose" :visible.sync="dialogVisible" title="提示" width="30%">
            <span>是否通过审核</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">不通过审核</el-button>
              <el-button type="primary" @click="dialogVisible = false">通过审核</el-button>
            </span>
          </el-dialog>
        </el-row>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      leadername: this.$route.query.name,
      groupname: 'group1',
      subject: '',   //题目
      type: '',
      desc: '',
      time: '',
      groupmember: [
        {
          name: '张学良'
        },
        {
          name: '蒋介石'
        },
        {
          name: '孙中山'
        }
      ]
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    }
  }
};
</script>

<style scoped>
.table {
  margin: auto;
  margin-top: 40px;
  border: solid 1px;
  border-radius: 10px;
  width: 600px;
}

.row_distance {
  margin-bottom: 20px;
}

.btn {
  color: darkslateblue;
}
</style>