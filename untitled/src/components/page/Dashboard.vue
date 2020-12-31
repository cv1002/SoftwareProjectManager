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
                  <div>小组成员数</div>
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
            <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
          </div>
          <el-table :data="todoList" :show-header="false" style="width:100%;">
            <el-table-column width="40">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <div :class="{'todo-item-del': scope.row.status}" class="todo-item">{{ scope.row.title }}
                </div>
              </template>
            </el-table-column>
            <el-table-column width="80">
              <template>
                <el-button class="el-icon-edit" style="padding:2px;font-size:13px;" type="primary"></el-button>
                <el-button class="el-icon-delete" style="padding:2px;font-size:13px;" type="danger"></el-button>
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
      numberofmembers: 7,
      finishedtask: 12,
      unfinishedtask: 18,
      name: localStorage.getItem('ms_username'),
      message: 'first',
      showHeader: false,
      unread: [{
        date: '2018-04-19 20:00:00',
        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
      }, {
        date: '2018-04-19 21:00:00',
        title: '今晚12点整发大红包，先到先得'
      }],
      read: [{
        date: '2018-04-19 20:00:00',
        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
      }],
      recycle: [{
        date: '2018-04-19 20:00:00',
        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
      }],
      todoList: [
        {
          title: '同事A请假',
          status: false
        },
        {
          title: '领导B迟到',
          status: false
        },
        {
          title: '复习考试',
          status: false
        },
        {
          title: '修车',
          status: false
        },
        {
          title: '吃午饭',
          status: true
        },
        {
          title: '玩逃生',
          status: true
        }
      ],
      data: [
        {
          name: '2018/09/04',
          value: 1083
        },
        {
          name: '2018/09/05',
          value: 941
        },
        {
          name: '2018/09/06',
          value: 1139
        },
        {
          name: '2018/09/07',
          value: 816
        },
        {
          name: '2018/09/08',
          value: 327
        },
        {
          name: '2018/09/09',
          value: 228
        },
        {
          name: '2018/09/10',
          value: 1065
        }
      ]
    };
  },
  components: {
    Schart
  },
  computed: {
    role() {
      if (this.name === 'teacher') {
        return '老师';
      } else if (this.name === 'tang') {
        return '组长';
      } else {
        return '普通用户';
      }
    },
    unreadNum() {
      return this.unread.length;
    }
  },
  methods: {
    changeDate() {
      const now = new Date().getTime();
      this.data.forEach((item, index) => {
        const date = new Date(now - (6 - index) * 86400000);
        item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      });
    },
    handleRead(index) {
      const item = this.unread.splice(index, 1);
      console.log(item);
      this.read = item.concat(this.read);
    },
    handleDel(index) {
      const item = this.read.splice(index, 1);
      this.recycle = item.concat(this.recycle);
    },
    handleRestore(index) {
      const item = this.recycle.splice(index, 1);
      this.read = item.concat(this.read);
<<<<<<< HEAD
=======
    },
    // handleListener() {
    //     bus.$on('collapse', this.handleBus);
    //     // 调用renderChart方法对图表进行重新渲染
    //     window.addEventListener('resize', this.renderChart);
    // },
    // activated() {
    //     this.handleListener();
    // },
    // deactivated() {
    //     window.removeEventListener('resize', this.renderChart);
    //     bus.$off('collapse', this.handleBus);
    // },
    methods: {
      changeDate() {
        const now = new Date().getTime();
        this.data.forEach((item, index) => {
          const date = new Date(now - (6 - index) * 86400000);
          item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        });
      }
      // handleListener() {
      //     bus.$on('collapse', this.handleBus);
      //     // 调用renderChart方法对图表进行重新渲染
      //     window.addEventListener('resize', this.renderChart);
      // },
      // handleBus(msg) {
      //     setTimeout(() => {
      //         this.renderChart();
      //     }, 200);
      // },
      // renderChart() {
      //     this.$refs.bar.renderChart();
      //     this.$refs.line.renderChart();
      // }
>>>>>>> pr/4
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
