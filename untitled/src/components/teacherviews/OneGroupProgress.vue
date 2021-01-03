<template>
  <div>
    <el-row :gutter="8">
    <el-col :span='6'>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>小组1成员</span>
        </div>
        <div v-for="item in group[groupnumber].group" :key="item" class="text item">
          {{ item.membername }}
        </div>
      </el-card>
    </el-col>
    <el-col :span='6'>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>提交文件</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
        <router-link :to="{path:'/fileview',query:{url:'https://vue.warmnight.site/pmbook.pdf'}}" class="font1"
          style="color: darkblue">
            {{'文件 ' + o }}           
        </router-link>
         </div>
      </el-card>
    </el-col>
    <el-col :span='6'>
        <el-card shadow="hover" class="box-card">
          <div slot="header" class="clearfix">
            <span>项目进展</span>
          </div>
          <el-table :data="groupProgressData">
            <el-table-column label="进展阶段" prop="completion" />
            <el-table-column label="最新上传的文件" prop="upToDateFile" />
          </el-table>
          <el-table :data="taskCompletion">
            <el-table-column label="发布任务完成情况">
              <template slot-scope="scope">
                <div>完成度: {{ scope.row['percentage'] }}%</div>
              </template>
            </el-table-column>
            <el-table-column label="总任务数">
              <template slot-scope="scope">
                <div>{{ scope.row['tasklength'] }}</div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
    </el-col>
    <el-col :span='6'>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          最终评分
          <el-button style="float: right; padding: 3px 0" type="text" @click="centerDialogVisible = true">修改</el-button>
          <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
            <el-input v-model="score0" placeholder="请输入得分（0~100）"></el-input>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false;quitScore()">取 消</el-button>
              <el-button @click="isScore">test</el-button>
              <el-button type="primary" @click="centerDialogVisible = false;submitScore()">
                  确 定
                </el-button>
            </span>
          </el-dialog>
        </div>
        <div class="grade">
          {{score}}
        </div>
      </el-card>
    </el-col>
    </el-row>
    <div>
      <el-card class="box-card1">
        <div slot="header" class="clearfix">
          <span>评语</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="centerDialogVisible1 = true">修改</el-button>
          <el-dialog title="提示" :visible.sync="centerDialogVisible1" width="30%" center>
            <el-input v-model="comment0" placeholder="请输入评论"></el-input>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible1 = false;quitCommit()">取 消</el-button>
              <el-button type="primary" @click="centerDialogVisible1 = false;submitComment()">
                确 定
              </el-button>
            </span>
          </el-dialog>
        </div>
        <div class="text item">
          {{comment}}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score0:'',
      score:'80',
      centerDialogVisible: false,
      centerDialogVisible1: false,
      comment:'很好',
      comment0:'',
      groupnumber: this.$route.query.groupnumber,
      groupname: this.$route.query.groupname,
      group: [
        {
          group: [
            { membername: 'zhang' },
            { membername: 'wang' },
            { membername: 'li' },
            { membername: 'zhu' },
            { membername: 'wu' },
            { membername: 'shan' }
          ]
        },
        {
          group: [
            { membername: 'zhang' },
            { membername: 'wang' },
            { membername: 'li' },
            { membername: 'zhu' },
            { membername: 'wu' },
            { membername: 'shan' }
          ]
        }
      ],
      taskCompletion: [{
      percentage: 0,
      tasklength: 0
      }],
      groupProgressData: [{
      completion: '收尾阶段',
      upToDateFile: '项目总结报告.pdf'
      }]
    };
  },
  methods:{ 
    isScore() {
      const Regex = /^([0-9]{1,2}|100)$/
      let numRe = new RegExp(Regex)
      let result = numRe.test(80)
      if(!result) {
        console.log('123');
      }
    },
    submitScore(){
      this.score = this.score0;
      this.score0 = '';
    },
    submitComment() {
      this.comment = this.comment0;
      this.comment0 = '';
    },
    quitScore() {
      this.score0 = '';
    },
    quitCommit() {
    this.comment0 = '';
    }
  }
};
</script>

<style scoped>
  .text {
  font-size: 16px;
  }

  .item {
  margin-bottom: 18px;
  text-align: center;
  color:grey;
  }
  .clearfix {
    text-align: center;
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
    margin: 10px;
  }

  .box-card1 {
    height: 180px;
    margin: 10px;
  }

  .grade {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 200px;
    color: firebrick;
  }

  .el-card {
    background-color:ivory;
  }
</style>