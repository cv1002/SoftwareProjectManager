<template>
  <div class="div1" style="width: 100%">
    <div>
      <div class="div2" style="width: 180px">
        <el-image :src="require('@/statics/img/music-theme.png')"></el-image>
      </div>
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
          只能上传pdf文件，且不超过5M
        </el-button>
      </div>
    </div>
    <div class="div4">
      <div slot="tip" class="el-upload-list__item-name">文件拖到此处也可上传</div>
      <div slot="tip" class="el-upload-list__item-name">&nbsp;&nbsp;&nbsp;{{ fileName }}</div>
    </div>
    <div class="div5">
      <el-button class="button2" style="color: white" @click="submitUpload">
        <i class="el-icon-upload"></i>
        |&nbsp;确认上传
      </el-button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      fileName: ''
    };
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
      this.fileName = file.name;
      return false; // 返回false不会自动上传
    },
    submitUpload() {
      if (this.fileName === '') {
        this.$message.warning('请选择要上传的文件！');
        return false;
      }
      console.log('上传' + this.files.name);
    }
  }
};
</script>

<style scoped>
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
  background-image: url("../../statics/img/bg.png");
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


