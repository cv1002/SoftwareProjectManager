<template>
  <div>
    <div style="float: left; width:30%">
      提交文件
    </div>
    <div style="float: left;width:40%">
      <h2 style="margin-top: 150px;margin-left: 10%;">提交需要交给老师的文件</h2>
      <div class="div3">
        <el-upload
            ref="upload"
            :before-upload="beforeUpload"
            :limit="1"
            action="doUpload"
            class="crop-input">
        </el-upload>
        <el-button class="button1" @click="">
          点击上传
          <br>
          只能上传pdf文件，且不超过50M
        </el-button>
      </div>
    </div>
    <div style="float: left;width:30%">
      <div class='time'>
        <div class='text-content'>
          <h2 class='text-center'>上传文件时间轴</h2>
          <div class='time-line'>
            <div v-for='item in testList' class='time-line-div'>
              <p>{{ item.time }}</p>
              <p ref='circular'></p>
              <p>{{ item.text }}</p>
            </div>
            <div ref='dotted' class='img-dotted'></div>
          </div>
          <div style='margin-top:20px;'>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testList: [
        { key: '1', time: '2001-01-01 01:00:00', text: '上传小组名单' },
        { key: '2', time: '2002-02-02 02:00:00', text: '上传需求规格说明书' },
        { key: '3', time: '2003-03-03 03:00:00', text: '上传' },
        { key: '4', time: '2004-04-04 04:00:00', text: '上传' },
        { key: '5', time: '2005-05-05 05:00:00', text: '上传' }
      ]
    };
  },
  mounted() {
    this.$refs.dotted.style.left = this.$refs.circular[0].offsetLeft - 12 + 'px';
  },
  methods: {
    beforeUpload(file) {
      console.log(file, '文件');
      this.files = file;
      const limit = 50;
      const extension = file.name.split('.')[1] === 'pdf';
      const isLessThanLimit = file.size / 1024 / 1024 < limit;
      if (!extension) {
        this.$message.warning('上传文件只能是pdf格式!');
        return false;
      }
      if (!isLessThanLimit) {
        this.$message.warning('上传文件大小不能超过 50MB!');
        return false;
      }
      return false; // 返回false不会自动上传
    },
    submitUpload() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      formData.append('files', this.files);

      if (this.files.name === '') {
        this.$message.warning('请选择要上传的文件！');
        return false;
      }

      this.$axios({
        url: '/file',
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(
          resolve => {
            if (resolve.data['resultInfo'] !== undefined) {
              this.$message.success(resolve.data['resultInfo']);
            }
          },
          reject => {
            this.$message.error(reject);
          }
      ).catch(result => {
        this.$message(result);
      });
      if (this.$DEVTYPE === 'DEV') {
        console.log('上传了' + this.files.name);
      }
    }
  }
};
</script>

<style>
.text-center {
  text-align: center;
}

.time h2 {
  color: #FF6600;
  margin: 20px auto 30px auto;
}

.time-line {
  position: relative;
  width: 300px;
  margin: 0 auto;
}

.time-line-div {
  position: relative;
  min-height: 85px;
}

.time-line-div > p:nth-child(1) {
  position: absolute;
  left: 0;
  width: 100px;
}

.time-line-div > p:nth-child(2) {
  position: absolute;
  left: 100px;
  width: 15px;
  height: 15px;
  top: 10px;
  background: #5CB85C;
  border-radius: 50%;
  z-index: 10
}

.time-line-div > p:nth-child(3) {
  position: absolute;
  left: 130px;
  padding: 10px;
  background: #317EF3;
  font-size: .8rem;
  color: #fff;
  border-radius: 10px;
}

.img-dotted {
  position: absolute;
  width: 20px;
  height: 100%;
  top: 0;
  z-index: 1;
  background: url('../../statics/img/dotted.png');
}

.button1 {
  height: 70px;
  width: 20%;
  margin-left: 39%;
  margin-top: 20px;
  border-radius: 45px;
  background-color: lightskyblue;
  color: white;
}

.div1 {
  background-image: url("../../statics/img/bg_homework.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
  width: 100%;
  position: absolute;
}

.div2 {
  z-index: 1;
  position: absolute;
  margin-left: 34%;
  margin-top: -40px;
}

.div3 {
  z-index: 0;
  margin-top: 135px;
  margin-left: 40px;
}

.div4 {
  margin-left: 44%;
  margin-top: 50px;
}

.div5 {
  margin-left: 44%;
  margin-top: 80px;
}

.button2 {
  background-color: hotpink;
  height: 60px;
  width: 180px;
  border-radius: 45px;
  font-size: 20px;
}

.crop-input {
  position: absolute;
  margin-left: 450px;
  margin-top: 140px;
  width: 10%;
  height: 20px;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}

</style>