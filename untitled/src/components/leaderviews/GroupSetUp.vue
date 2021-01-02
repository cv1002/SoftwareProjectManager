<template>
  <div class="div1">
    <div class="div2">
      <div class="block">
        <el-timeline>
          <el-timeline-item
              v-for="(activity, index) in activities"
              :color="activity.color"
              :key="index"
              :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
    <div class="div3">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="组名" style="width: 37%">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="选题">
          <el-select v-model="form.region" placeholder="请选择题目" style="width: 30%">
            <el-option label="题一" value="shanghai"></el-option>
            <el-option label="其他" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目时间">
          <el-col :span="11">
            <el-date-picker
                v-model="value2"
                :picker-options="pickerOptions"
                end-placeholder="结束日期"
                format="yyyy 年 MM 月 dd 日"
                range-separator="至"
                start-placeholder="开始日期"
                type="daterange"
                unlink-panels
                value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="项目类型">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="微信小程序" name="type"></el-checkbox>
            <el-checkbox label="网页" name="type"></el-checkbox>
            <el-checkbox label="游戏" name="type"></el-checkbox>
            <el-checkbox label="其他" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="自拟题目" style="width: 80%">
          <el-input v-model="form.desc" type="textarea" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value2: '',
      activities: [{
        content: '小组审题',
        timestamp: '2018-04-11',
        color:'red',
      }, {
        content: '审核中',
        timestamp: '2018-04-13',
        color: 'blue',
      }, {
        content: '创建成功',
        timestamp: '2018-04-15',
        color: 'yellow'
      }]
    };
  },
  methods: {
    onSubmit() {
      this.$cookie.set('groupsetenable', false);
      this.$router.push('/groupinfo');
      this.$router.go(0);
      console.log('submit!');
    },
  }
};
</script>

<style scoped>
.div1 {
  /*background-image: url("../../statics/img/bg_person.jpg");*/
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
}

.div2 {
  width: 20%;
  margin-top: 5%;
  float: left;
}

.div3 {
  width: 60%;
  margin-top: 5%;
  float: left;
}
</style>