<template>
  <div>
    <div>
      <div v-on:click="addNode()">
        <div class="btn btn btn-sm btn-brand m-btn m-btn--icon m-btn--pill m-btn--wide" data-repeater-create=""
             style="text-align: center">
            <span>
                <span> 添加 </span>
            </span>
        </div>
      </div>
    </div>
    <div v-for="(v,i) in list">
      <el-col :span="8">
        <el-card class="mgb20" shadow="hover" style="height:240px;">
          <div class="user-info">
            <img alt class="user-avator" src="../../statics/img/g.jpg" />
            <div class="user-info-cont">
              <div class="user-info-name">{{ v.mission }}</div>
              <div>{{ v.person }}</div>
            </div>
          </div>
          <div class="user-info-list">
            任务内容：
            <span>{{ v.content }}</span>
          </div>
          <div class="user-info-list">
            截止时间：
            <span>{{ v.time }}</span>
          </div>
          <div>
            <div class="button1" data-repeater-delete="" v-on:click="deleteNode(i)">
              <span> 删除 </span>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          mission: '任务1',
          person: '开发者1',
          content: '完成任务1',
          time: '2020-12-31'
        },
        {
          mission: '任务2',
          person: '开发者2',
          content: '完成任务2',
          time: '2021-1-1'
        },
        {
          mission: '任务3',
          person: '开发者3',
          content: '完成任务3',
          time: '2021-1-2'
        }
      ]
    };
  },
  //初始化方法
  mounted: function() {

  },
  methods: {

    //添加标本div
    addNode: function() {
      this.list.push({
        mission: '任务4',
        person: '开发者4',
        content: '完成任务4',
        time: '2021-1-3'
      });
    },
    //删除样本div
    deleteNode: function(i) {
      this.list.splice(i, 1);  //删除index为i,位置的数组元素
    }
  }
};
</script>

<style scoped>
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

.button1 {
  position: absolute;
  margin-top: -230px;
  margin-left: 27%;
}
</style>
