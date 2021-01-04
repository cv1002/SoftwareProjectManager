<template>
  <div class="div1">
    <div v-if="!isOK">
      <div class="div3">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="项目名" style="width:296px;margin-bottom: 30px">
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
          <el-form-item label="项目时间" style="margin-bottom: 30px">
            <el-col :span="11">
              <el-date-picker
                  v-model="form.value"
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
            <el-button @click="cancel">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div v-if="isOK">
      <SubjectInfo :groupname="form.groupname" :subject="form.subject"></SubjectInfo>
    </div>
  </div>
</template>

<script>
import SubjectInfo from './SubjectInfo';

export default {
  components: { SubjectInfo },
  created() {
    this.fetchProject();
  },
  data() {
    return {
      isOK: false,
      form: {
        groupname: '',
        subject: '', //题目
        type: '',
        value: ''
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
      }
    };
  },
  methods: {
    fetchProject() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      this.$axios({
        url: '/get/project',
        method: 'POST',
        data: formData
      }).then(response => {
        if (response.data['resultInfo'] === '该用户不属于任何项目！！') {
          this.isOK = false;
        } else {
          this.isOK = true;
          console.log(response.data);
          this.form.groupname = response.data['ProjectName'];
          this.form.subject = response.data['ProjectDescription'];
        }
      });
    },
    cancel() {
      this.form = {
        groupname: '',
        subject: '', //题目
        type: '',
        desc: '',
        value: ''
      };
    },
    onSubmit() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      formData.append('TeamID', this.$cookie.get('TeamID'));
      formData.append('DeadLine', this.form.value[1]);
      formData.append('ProjectName', this.form.groupname);
      formData.append('Description', this.form.subject + this.form.type);
      this.$axios({
        url: '/buildAndAssign/projectAssignment',
        method: 'POST',
        data: formData
      }).then(response => {
        if (response.data['resultInfo'] === '成功！！') {
          this.$message.success(response.data['resultInfo']);
        } else {
          this.$message.error(response.data['resultInfo']);
        }
      });
    },
    getChange(item) {
      console.log(item);
      this.subjectVisible = item === '其他';
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