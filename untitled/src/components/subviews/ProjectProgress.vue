<template>
  <div>
    <el-table :data="groupProgressData" style="width:100%;">
      <el-table-column label="进展阶段">
        <template slot-scope="scope">
          <div>{{ scope.row['completion'] }}</div>
        </template>
      </el-table-column>
      <el-table-column label="最新上传的文件">
        <template slot-scope="scope">
          <div>{{ scope.row['upToDateFile'] }}</div>
        </template>
      </el-table-column>
    </el-table>
    <el-table :data="taskCompletion" style="width:100%">
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
  </div>
</template>

<script>
export default {
  name: 'ProjectProgress',
  created() {
    this.fetchNewestFile() || this.fetchTasks();
  },
  data() {
    return {
      files: [],
      groupProgressData: [{
        completion: '收尾阶段',
        upToDateFile: '项目总结报告.pdf'
      }],
      taskCompletion: [{
        percentage: 0,
        tasklength: 0
      }]
    };
  },
  props: ['teamID'],
  methods: {
    fetchNewestFile() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      formData.append('TeamID', this.teamID);
      this.$axios({
        url: 'get/files',
        method: 'POST',
        data: formData
      }).then(response => {
        if (response.data['files'].length !== undefined && response.data['files'].length !== 0) {
          this.files = response.data['files'];
          this.groupProgressData[0].upToDateFile = this.files.pop();
          this.files.push(this.groupProgressData.upToDateFile);
          this.groupProgressData[0].upToDateFile = this.groupProgressData[0].upToDateFile['FileRealName'];
        } else {
          this.groupProgressData[0].upToDateFile = '本组暂时未上传文件';
        }
      });
    },
    fetchTasks() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      formData.append('TeamID', this.teamID);
      this.$axios({
        url: '/get/tasks',
        method: 'POST',
        data: formData
      }).then(
          response => {
            if (response.data['resultInfo'] !== undefined) {
              this.unfinishedtask = response.data['resultInfo'];
              this.finishedtask = this.unfinishedtask;
            } else {
              this.tasks = response.data['Tasks'];
              let unfinishedCount = 0;
              for (let task of this.tasks) {
                if (task['TaskFinishType'] === 0) {
                  unfinishedCount++;
                }
              }
              this.finishedtask = this.tasks.length - unfinishedCount;
              this.unfinishedtask = unfinishedCount;
              this.taskCompletion[0].percentage = Math.floor(100 * this.finishedtask / this.tasks.length);
              this.taskCompletion[0].tasklength = this.tasks.length;
            }
          }
      );
    }
  }
};
</script>

<style scoped>

</style>