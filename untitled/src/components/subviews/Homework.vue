<template>
  <div>
    <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        class="upload-demo"
        drag
        multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
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
      const extension = file.name.split('.')[1] === 'pdf';
      const extension2 = file.name.split('.')[1] === 'doc';
      const extension3 = file.name.split('.')[1] === 'docx';
      const isLt2M = file.size / 1024 / 1024 < 5;
      if (!extension && !extension2 && !extension3) {
        this.$message.warning('上传文件只能是pdf、doc、docx格式!');
        return;
      }
      if (!isLt2M) {
        this.$message.warning('上传文件大小不能超过 5MB!');
        return;
      }
      this.fileName = file.name;
      return false; // 返回false不会自动上传
    },
    submitUpload() {
      if (this.fileName == '') {
        this.$message.warning('请选择要上传的文件！');
        return false;
      }
      console.log('上传' + this.files.name);
      let fileFormData = new FormData();
      fileFormData.append('file', this.files, this.fileName);//filename是键，file是值，就是要传的文件，test.zip是要传的文件名
      let requestConfig = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      this.$http.post('http://127.0.0.1:8080/homework?' + this.files.name, fileFormData, requestConfig).then((res) => {
        debugger
        if (data && data.code === 0) {
          this.$message({
            message: '操作成功',
            type: 'success',
            duration: 1500,
            onClose: () => {
              this.visible = false;
              this.$emit('refreshDataList');
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>

<style scoped>
.button1 {
  height: 70px;
  width: 280px;
  margin-left: 580px;
  margin-top: 20px;
  border-radius: 45px;
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
  margin-left: 404px;
  margin-top: 80px;
}

.div3 {
  z-index: 0;
  margin-top: 135px;
  margin-left: -80px;
}

.div4 {
  margin-left: 570px;
  margin-top: 50px;
}

.div5 {
  margin-left: 550px;
  margin-top: 80px;
}

.button2 {
  background-color: hotpink;
  height: 60px;
  width: 180px;
  border-radius: 45px;
  font-size: 20px;
}
</style>


