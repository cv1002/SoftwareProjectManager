<template>
  <div class="div4">
    <div>
      <p>
        {{teacher}}
      </p>
      <p>{{group}}</p>
      <p>{{leader}}</p>
    </div>
    <div class="div5">
      <p>头像大图</p>
      <el-avatar
          style="height: 200px ; width: 200px"
          shape="square" :size="100" fit="fill"
          :src="require('@/statics/img/picture.jpg')"></el-avatar>
    </div>
    <div class="div6" >
      <p>头像上传</p>
      <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          style="width: 178px">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" >
        <i v-else class="el-icon-plus avatar-uploader-icon" ></i>
      </el-upload>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: '',
      teacher:"老师",
      group:"小组",
      leader:"组长",
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

<style scoped="scoped">
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader :hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  height: 178px;
  width: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.div4{
  float: left;
  height: 300px;
  width: 100%;
}
.div5{
  float: left;
  height: 100%;
  width: 50%;
}
.div6{
  float: left;
  height: 100%;
  width: 50%;
}
</style>

