<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="mgb20" shadow="hover" style="height:240px;">
          <div class="user-info">
            <img alt class="user-avator" src="../../statics/img/g.jpg" />
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">
            本次登录时间：
            <span>{{ login.date }}</span>
          </div>
          <div class="user-info-list">
            本次登录地点：
            <span> {{ login.location }}</span>
          </div>
        </el-card>
        <el-card shadow="hover" style="height:270px;">
          <div slot="header" class="clearfix">
            <span>项目进展</span>
          </div>
          <el-table :data="groupProgressData" style="width:100%">
            <el-table-column label="进展阶段" prop="completion" />
            <el-table-column label="最新上传的文件" prop="upToDateFile" />
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
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card :body-style="{padding: '0px'}" shadow="hover">
              <router-link to="/groupinfo">
                <div class="grid-content grid-con-1">
                  <i class="el-icon-lx-people grid-con-icon"></i>
                  <div class="grid-cont-right">
                    <div class="grid-num">{{ numberofmembers }}</div>
                    <div>小组成员数</div>
                  </div>
                </div>
              </router-link>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card :body-style="{padding: '0px'}" shadow="hover">
              <div class="grid-content grid-con-2">
                <i class="el-icon-lx-notice grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">{{ finishedtask }}</div>
                  <div>已完成任务数</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card :body-style="{padding: '0px'}" shadow="hover">
              <div class="grid-content grid-con-3">
                <i class="el-icon-lx-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">{{ unfinishedtask }}</div>
                  <div>未完成任务数</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height:410px;">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="addTodoListItem">添加</el-button>
          </div>
          <el-table :data="todoList" :show-header="false" style="width:100%;">
            <el-table-column width="40">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row['FinishState'] === 0" @change="finishTodoListItem(scope.$index)" />
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <div :class="{'todo-item-del': scope.row['FinishState'] === 0}" class="todo-item">
                  {{ scope.row['TodoThings'] }}
                </div>
              </template>
            </el-table-column>
            <el-table-column width="80">
              <template slot-scope="scope">
                <el-button class="el-icon-edit" style="padding:2px;font-size:13px;"
                           type="primary" @click.native.prevent="updateTodoListItem(scope.$index)"></el-button>
                <el-button class="el-icon-delete" style="padding:2px;font-size:13px;"
                           type="danger" @click.native.prevent="deleteTodoListItem(scope.$index)"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Schart from 'vue-schart';

export default {
  name: 'dashboard',
  created() {
    this.fetchLocationAndDate() || this.fetchNumberOfMembers() || this.fetchTodoListItems() || this.fetchTasks();
  },
  data() {
    return {
      finishedtask: undefined,
      unfinishedtask: undefined,
      tasks: [],
      taskCompletion: [{
        percentage: 0,
        tasklength: 0
      }],
      login: {
        date: undefined,
        location: '西安'
      },
      numberofmembers: undefined,
      todoList: [],
      groupProgressData: [{
        completion: '收尾阶段',
        upToDateFile: '项目总结报告.pdf'
      }]
    };
  },
  components: {
    Schart
  },
  computed: {
    name() {
      return this.$cookie.get('UserName');
    },
    role() {
      if (this.$cookie.get('RoleName') === 'Teacher') {
        return '老师';
      } else if (this.$cookie.get('RoleName') === 'Leader') {
        return '组长';
      } else {
        return '普通用户';
      }
    }
  },
  methods: {
    fetchLocationAndDate() {
      this.login.date = new Date().toLocaleDateString();
      this.login.location = '西安';
    },
    fetchNumberOfMembers() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      this.$axios({
        url: '/get/TeamMemberCount',
        method: 'POST',
        data: formData
      }).then(
          response => {
            if (response.data['resultInfo'] !== undefined) {
              this.numberofmembers = response.data['resultInfo'];
            } else {
              this.numberofmembers = response.data['Count'];
            }
          }
      );
    },
    fetchTasks() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      this.$axios({
        url: '/get/task/ByHandlerID',
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
    },
    fetchTodoListItems() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      this.$axios({
        url: '/get/todoList',
        method: 'POST',
        data: formData
      }).then(
          resolve => {
            this.todoList = resolve.data;
            this.sortTodoListItems();
          },
          reject => {
            this.$message.error(reject);
          }
      );
    },
    sortTodoListItems() {
      this.todoList.sort((lhs, rhs) => {
        return rhs['FinishState'] - lhs['FinishState'];
      });
    },
    finishTodoListItem(index) {
      console.log(index);
      this.todoList[index]['FinishState'] = this.todoList[index]['FinishState'] === 0 ? 1 : 0;
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      formData.append('TodoThings', this.todoList[index]['TodoThings']);
      formData.append('TodoListID', this.todoList[index]['TodoListID']);
      formData.append('FinishState', this.todoList[index]['FinishState']);
      this.$axios({
        url: '/todoList',
        method: 'PUT',
        data: formData
      }).then(
          resolve => {
            this.$message.success(resolve.data['resultInfo']);
            console.log(resolve.data);
          },
          reject => {
            this.todoList[index]['status'] = this.todoList[index].status !== true;
            this.todoList[index]['FinishState'] = this.todoList[index]['FinishState'] === 0 ? 0 : 1;
            this.$message.error(reject);
          }
      );
      this.sortTodoListItems();
    },
    updateTodoListItem(index) {
      this.$prompt('请输入更新的待办事项描述：', '更新待办事项', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        let formData = new FormData();
        formData.append('UserID', this.$cookie.get('UserID'));
        formData.append('UserPassword', this.$cookie.get('UserPassword'));
        formData.append('TodoThings', value);
        formData.append('TodoListID', this.todoList[index]['TodoListID']);
        formData.append('FinishState', this.todoList[index]['FinishState']);
        this.$axios({
          url: '/todoList',
          method: 'PUT',
          data: formData
        }).then(
            resolve => {
              this.$message.success(resolve.data['resultInfo']);
              this.fetchTodoListItems();
            },
            reject => {
              this.$message.error(reject);
            }
        );
      }).catch(() => this.$message('取消输入'));
    },
    addTodoListItem() {
      this.$prompt('请输入新建的待办事项描述：', '增加待办事项', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        let formData = new FormData();
        formData.append('UserID', this.$cookie.get('UserID'));
        formData.append('UserPassword', this.$cookie.get('UserPassword'));
        formData.append('TodoThings', value);
        this.$axios({
          url: '/todoList',
          method: 'POST',
          data: formData
        }).then(
            resolve => {
              this.$message.success(resolve.data['resultInfo']);
              this.fetchTodoListItems();
            },
            reject => {
              this.$message.error(reject);
            }
        );
      }).catch(() => this.$message('取消输入'));
    },
    deleteTodoListItem(index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let formData = new FormData();
        formData.append('UserID', this.$cookie.get('UserID'));
        formData.append('UserPassword', this.$cookie.get('UserPassword'));
        formData.append('TodoListID', this.todoList[index]['TodoListID']);
        this.$axios({
          url: '/todoList',
          method: 'DELETE',
          data: formData
        }).then(
            resolve => {
              if (resolve.data['resultInfo'] === '成功！！') {
                this.todoList.splice(index, 1);
              } else {
                this.$message.error(resolve.data['resultInfo']);
              }
            },
            reject => {
              this.$message.error(reject);
            }
        );
        this.sortTodoListItems();
      }).catch(() => this.$message('已取消删除'));
    }
  },
  created() {
    this.fetchNumberOfMembers() || this.fetchTodoListItems() || this.fetchTasks()
  }
};
</script>


<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
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

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

.schart {
  width: 100%;
  height: 300px;
}

.message-title {
  cursor: pointer;
}

.handle-row {
  margin-top: 30px;
}
</style>
