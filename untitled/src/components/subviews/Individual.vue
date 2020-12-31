<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="mgb20" shadow="hover" style="height:240px;">
          <div class="user-info">
            <img alt class="user-avator" src="../../statics/img/g.jpg"/>
            <div class="user-info-cont">
              <div class="user-info-name">任务1</div>
              <div>开发者1</div>
            </div>
          </div>
          <div class="user-info-list">
            任务内容：
            <span>完成任务1</span>
          </div>
          <div class="user-info-list">
            任务时间：
            <span>2020-12-31</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="mgb20" shadow="hover" style="height:240px;">
          <div class="user-info">
            <img alt class="user-avator" src="../../statics/img/g.jpg"/>
            <div class="user-info-cont">
              <div class="user-info-name">任务1</div>
              <div>开发者1</div>
            </div>
          </div>
          <div class="user-info-list">
            任务内容：
            <span>完成任务1</span>
          </div>
          <div class="user-info-list">
            任务时间：
            <span>2020-12-31</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="mgb20" shadow="hover" style="height:240px;">
          <div class="user-info">
            <img alt class="user-avator" src="../../statics/img/g.jpg"/>
            <div class="user-info-cont">
              <div class="user-info-name">任务1</div>
              <div>开发者1</div>
            </div>
          </div>
          <div class="user-info-list">
            任务内容：
            <span>完成任务1</span>
          </div>
          <div class="user-info-list">
            任务时间：
            <span>2020-12-31</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="mgb20" shadow="hover" style="height:240px;">
          <div class="user-info">
            <img alt class="user-avator" src="../../statics/img/g.jpg"/>
            <div class="user-info-cont">
              <div class="user-info-name">任务1</div>
              <div>开发者1</div>
            </div>
          </div>
          <div class="user-info-list">
            任务内容：
            <span>完成任务1</span>
          </div>
          <div class="user-info-list">
            任务时间：
            <span>2020-12-31</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-table
        :data="tableData"
        border
        height="600"
        style="width: 100%">
      <el-table-column
          label="规定完成日期"
          prop="date"
          width="180">
      </el-table-column>
      <el-table-column
          label="姓名"
          prop="name"
          width="180">
      </el-table-column>
      <el-table-column
          label="规定任务"
          prop="address">
      </el-table-column>
      <el-table-column label="状态" width="120">
        <template slot-scope="scope">
          <el-button type="info" @click="handleDel(scope.$index)">未完成</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  data() {
    return {
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
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      visible: true
    };
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
.el-row {
  margin-bottom: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}
</style>
