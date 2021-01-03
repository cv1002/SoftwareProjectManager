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
            <span>{{ lastLogin.time }}</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span> {{ lastLogin.place }}</span>
          </div>
        </el-card>

      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <router-link to="/groupprogress" style="color: black">
              <el-card :body-style="{padding: '0px'}" shadow="hover">
                <div class="grid-content grid-con-1">
                  <i class="el-icon-lx-people grid-con-icon"></i>
                  <div class="grid-cont-right">
                    <div>
                      小组情况
                    </div>
                  </div>
                </div>
              </el-card>
            </router-link>
          </el-col>
          <el-col :span="8">
            <router-link to="/vueeditor">
              <el-card :body-style="{padding: '0px'}" shadow="hover">
                <div class="grid-content grid-con-2">
                  <i class="el-icon-connection grid-con-icon"></i>
                  <div class="grid-cont-right">
                    交流讨论
                  </div>
                </div>
              </el-card>
            </router-link>
          </el-col>
          <el-col :span="8">
            <router-link to="/fileview">
              <el-card :body-style="{padding: '0px'}" shadow="hover">
                <div class="grid-content grid-con-3">
                  <i class="el-icon-s-order grid-con-icon"></i>
                  <div class="grid-cont-right">
                    文件预览
                  </div>
                </div>
              </el-card>
            </router-link>
          </el-col>
        </el-row>
<!--        <el-card shadow="hover" style="height:403px;">-->
<!--          <div slot="header" class="clearfix">-->
<!--            <span>待办事项</span>-->
<!--            <el-button style="float: right; padding: 3px 0" type="text" @click="addTodoListItem">添加</el-button>-->
<!--          </div>-->
<!--          <el-table :data="todoList" :show-header="false" style="width:100%;">-->
<!--            <el-table-column width="40">-->
<!--              <template slot-scope="scope">-->
<!--                <el-checkbox v-model="scope.row['FinishState'] === 0" @change="finishTodoListItem(scope.$index)" />-->
<!--              </template>-->
<!--            </el-table-column>-->
<!--            <el-table-column>-->
<!--              <template slot-scope="scope">-->
<!--                <div :class="{'todo-item-del': scope.row['FinishState'] === 0}" class="todo-item">-->
<!--                  {{ scope.row['TodoThings'] }}-->
<!--                </div>-->
<!--              </template>-->
<!--            </el-table-column>-->
<!--            <el-table-column width="80">-->
<!--              <template slot-scope="scope">-->
<!--                <el-button class="el-icon-edit" style="padding:2px;font-size:13px;"-->
<!--                           type="primary" @click.native.prevent="updateTodoListItem(scope.$index)"></el-button>-->
<!--                <el-button class="el-icon-delete" style="padding:2px;font-size:13px;"-->
<!--                           type="danger" @click.native.prevent="deleteTodoListItem(scope.$index)"></el-button>-->
<!--              </template>-->
<!--            </el-table-column>-->
<!--          </el-table>-->
<!--        </el-card>-->
      </el-col>
    </el-row>
  </el-card>

</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      finishedtask: undefined,
      unfinishedtask: undefined,
      tasks: undefined,
      message: 'first',
      showHeader: false,
      lastLogin: {
        time: '2020-01-01',
        place: '西安'
      },
      numberofmembers: undefined,
      todoList: undefined,

    };
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
  }
}
</script>


<style scoped>

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

.schart-box {
  display: inline-block;
  margin: 20px;
}
.schart {
  width: 100%;
  height: 300px;
}
</style>
