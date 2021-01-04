<template>
  <div>
    <el-row :gutter="8">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>第 {{ groupnumber }} 小组成员</span>
          </div>
          <div v-for="(item, i) in group" :key="i" class="text item">
            {{ item['UserName'] }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>提交文件</span>
          </div>
          <div v-for="(file, i) in files" :key="i" class="text item">

            <router-link :to="{path:'/fileview',query:{url: file['FileID'], teamID: file['TeamID']}}" class="font1"
                         style="color: darkblue">
              {{ file['FileRealName'] }}
            </router-link>

          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>项目进展</span>
          </div>
          <ProjectProgress :teamID="groupnumber"></ProjectProgress>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            最终评分
            <el-button style="float: right; padding: 3px 0" type="text" @click="scoreDialogVisible = true">
              修 改
            </el-button>
            <el-dialog :visible.sync="scoreDialogVisible" center title="提示" width="30%">
              <el-input v-model="scoreCopy" placeholder="请输入得分（0~100）" @change="isScore" />
              <span v-if="numberOutOfBoundsWarning" class="warning">警告: 您输入的数字不在0~100范围内</span>
              <span slot="footer" class="dialog-footer">
              <el-button @click="quitScore()">取 消</el-button>
              <el-button type="primary" @click="submitScore()">
                  确 定
              </el-button>
            </span>
            </el-dialog>
          </div>
          <div class="grade">
            {{ score }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div>
      <el-card class="box-card1">
        <div slot="header" class="clearfix">
          <span>评语</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="commentDialogVisible = true">修改
          </el-button>
          <el-dialog :visible.sync="commentDialogVisible" center title="提示" width="30%">
            <el-input v-model="commentCopy" placeholder="请输入评论"></el-input>
            <span slot="footer" class="dialog-footer">
              <el-button @click="quitCommit()">取 消</el-button>
              <el-button type="primary" @click="submitComment()">
                确 定
              </el-button>
            </span>
          </el-dialog>
        </div>
        <div class="text item">
          {{ comment }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import ProjectProgress from '../subviews/ProjectProgress';

export default {
  created() {
    this.fetchGroupNumber() || this.fetchFiles();
  },
  data() {
    return {
      numberOutOfBoundsWarning: false,
      scoreCopy: '',
      score: '80',
      scoreDialogVisible: false,
      commentDialogVisible: false,
      comment: '很好',
      commentCopy: '',
      groupnumber: this.$route.query.groupnumber,
      groupname: this.$route.query.groupname,
      group: [],
      files: []
    };
  },
  methods: {
    fetchGroupNumber() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      formData.append('TeamID', this.groupnumber);
      this.$axios({
        url: 'get/TeamMemberList',
        method: 'POST',
        data: formData
      }).then((response) => {
        this.group = response.data;
      });
    },
    fetchFiles() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      formData.append('TeamID', this.groupnumber);
      this.$axios({
        url: 'get/files',
        method: 'POST',
        data: formData
      }).then((response) => {
        this.files = response.data['files'];
      });
    },
    isScore() {
      const Regex = /^([0-9]{1,2}|100)$/;
      let regExp = new RegExp(Regex);
      let result = regExp.test(this.scoreCopy);
      this.numberOutOfBoundsWarning = !result;
    },
    submitScore() {
      this.scoreDialogVisible = false;
      this.score = this.scoreCopy;
      this.scoreCopy = '';
    },
    submitComment() {
      this.scoreDialogVisible = false;
      this.comment = this.commentCopy;
      this.commentCopy = '';
    },
    quitScore() {
      this.scoreDialogVisible = false;
      this.scoreCopy = '';
    },
    quitCommit() {
      this.commentDialogVisible = false;
      this.commentCopy = '';
    }
  },
  components: { ProjectProgress }
};
</script>


<style scoped>
.text {
  font-size: 16px;
}

.item {
  margin-bottom: 18px;
  text-align: center;
  color: grey;
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
  height: 390px;
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

.warning {
  color: red;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.el-card {
  background-color: ivory;
}
</style>