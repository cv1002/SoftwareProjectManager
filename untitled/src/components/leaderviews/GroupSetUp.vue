<template>
  <div class="div1">
    <div class="div2" style="margin-top: 5px">
    </div>
    <div class="div3">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="组名" style="width:296px;margin-bottom: 30px">
          <el-input v-model="form.groupname"></el-input>
        </el-form-item>
        <el-form-item label="选题" style="width: 800px;margin-bottom: 30px">
          <el-select v-model="form.subject" placeholder="请选择题目" style="width: 30%" @change="getChange(form.subject)">
            <el-option label="项目管理系统" value="项目管理系统"></el-option>
            <el-option label="游戏" value="游戏"></el-option>
            <el-option label="操作系统" value="操作系统"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="subjectVisible" label="自拟题目" style="width: 430px;margin-bottom: 30px">
          <el-input v-model="form.desc" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="项目时间" style="margin-bottom: 30px">
          <el-col :span="11">
            <el-date-picker
                v-model="form.value2"
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

        <el-form-item label="项目类型" style="margin-bottom: 30px">
          <el-radio-group v-model="form.type">
            <el-radio label="微信小程序" name="type"></el-radio>
            <el-radio label="网页" name="type"></el-radio>
            <el-radio label="游戏" name="type"></el-radio>
            <el-radio label="其他" name="type"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
      <div class="block" style="margin-left: 50px;margin-top: 50px">
        <el-timeline>
          <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :color="activity.color"
              :timestamp="activity.timestamp">
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subjectVisible: false,
      form: {
        groupname: '',
        subject: '', //题目
        type: '',
        desc: '',
        value2: ''
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
      activities: [{
        content: '小组选题',
        timestamp: '2018-04-11',
        color: 'lightskyblue'
      }, {
        content: '审核中',
        timestamp: '2018-04-13',
        color: 'white'
      }, {
        content: '创建成功',
        timestamp: '2018-04-15',
        color: 'white'
      }]
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form.groupname);
      console.log(this.form.value2[0]);
      console.log(this.form.value2[1]);
      console.log(this.form.type);
      if (this.form.subject !== '其他') {
        console.log(this.form.subject);
      } else {
        console.log(this.form.desc);
      }
      this.$cookie.set('groupsetenable', false);
      this.activities[0].color = 'white';
      this.activities[1].color = 'lightskyblue';
      console.log('submit!');
    },
    getChange(item) {
      console.log(item);
      if (item === '其他') {
        this.subjectVisible = true;
      } else {
        this.subjectVisible = false;
      }
    }
  }
};
</script>

<style scoped>
.div1 {
  background-image: url("../../statics/img/true.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
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