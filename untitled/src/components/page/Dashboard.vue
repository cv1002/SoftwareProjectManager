<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="mgb20" shadow="hover" style="height:240px;">
          <div class="user-info">
            <img alt class="user-avator" src="../../statics/img/g.jpg"/>
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录时间：
            <span>2020-12-31</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span>北京</span>
          </div>
        </el-card>
        <el-card shadow="hover" style="height:250px;">
          <div slot="header" class="clearfix">
            <span>项目进展</span>
          </div>
          时间
          <el-progress :percentage="71.3" color="#42b983"></el-progress>
          资金
          <el-progress :percentage="64.1" color="#f1e05a"></el-progress>
          人力成本
          <el-progress :percentage="73.7"></el-progress>
          预算
          <el-progress :percentage="65.9" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card :body-style="{padding: '0px'}" shadow="hover">
              <div class="grid-content grid-con-1">
                <i class="el-icon-lx-people grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">{{ numberofmembers }}</div>
                  <div>
                    <router-link to="/individual">小组成员数</router-link>
                  </div>
                </div>
              </div>
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
        <el-card shadow="hover" style="height:403px;">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="addTodoListItem">添加</el-button>
          </div>
          <el-table :data="todoList" :show-header="false" style="width:100%;">
            <el-table-column width="40">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row['FinishState'] === 0" @change="finishTodoListItem(scope.$index)"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <div :class="{'todo-item-del': scope.row['FinishState'] === 0}"
                     class="todo-item">
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
  </el-card>

</template>

<script>
import Schart from 'vue-schart';

export default {
  name: 'dashboard',
  data() {
    return {
      finishedtask: 12,
      unfinishedtask: 18,
      message: 'first',
      showHeader: false,
      numberofmembers: this.fetchNumberOfMembers(),
      todoList: this.fetchTodoListItems()
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
              this.$message.error(response.data['resultInfo']);
              this.numberofmembers = '无权访问';
            } else {
              this.numberofmembers = response.data['Count'];
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
            this.todoList.sort((lhs, rhs) => {
              return lhs['FinishState'] < rhs['FinishState'];
            })
          },
          reject => {
            this.$message.error(reject);
          }
      );
    },
    changeDate() {
      const now = new Date().getTime();
      this.data.forEach((item, index) => {
        const date = new Date(now - (6 - index) * 86400000);
        item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
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
        url:'/todoList',
        method:'PUT',
        data: formData
      }).then(
          resolve => {
            this.$message.success(resolve.data['resultInfo']);
            console.log(resolve.data)
          },
          reject => {
            this.todoList[index]['status'] = this.todoList[index].status !== true;
            this.todoList[index]['FinishState'] = this.todoList[index]['FinishState'] === 0 ? 0 : 1;
            this.$message.error(reject);
          }
      );
    },
    updateTodoListItem(index) {

    },
    addTodoListItem() {

    },
    deleteTodoListItem(index) {
      console.log(this.todoList)
      console.log(index)
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      formData.append('TodoListID', this.todoList[index]['TodoListID']);
      this.$axios({
        url:'/todoList',
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
            this.$message.error(reject)
          }
      )
    }
  }
}
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
