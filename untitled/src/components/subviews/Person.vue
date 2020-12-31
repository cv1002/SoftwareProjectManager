<template>
  <div class="div4">
    <div class="div5">
      <div class="crop-demo">
        <img :src="cropImg" class="pre-img" alt="这里是头像">
        <div class="crop-demo-btn">更换头像
          <input accept="image/*" class="crop-input" name="image" type="file" @change="setImage"/>
        </div>
      </div>
      <el-dialog :visible.sync="dialogVisible" title="裁剪图片" width="30%">
        <vue-cropper ref='cropper' :cropmove="cropImage" :ready="cropImage" :src="imgSrc" :zoom="cropImage"
                     style="width:100%;height:300px;"></vue-cropper>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancelCrop">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div class="div6">
      <div>
        <p>
          老师：{{ teacher }}
        </p>
        <p>所属小组：{{ group }}</p>
        <p>组长：{{ leader }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import VueCropper from 'vue-cropperjs';

export default {
  name: 'upload',
  data: function () {
    return {
      defaultSrc: require('../../statics/img/picture.jpg'),
      fileList: [],
      imgSrc: '',
      cropImg: '',
      dialogVisible: false,
      imageUrl: '',
      teacher: '老师',
      group: '小组',
      leader: '组长'
    };
  },
  components: {
    VueCropper
  },
  methods: {
    setImage(e) {
      const file = e.target.files[0];
      if (!file.type.includes('image/')) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        this.dialogVisible = true;
        this.imgSrc = event.target.result;
        this.$refs.cropper && this.$refs.cropper.replace(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    cropImage() {
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    cancelCrop() {
      this.dialogVisible = false;
      this.cropImg = this.defaultSrc;
    },
    imageuploaded(res) {
      console.log(res);
    },
    handleError() {
      this.$notify.error({
        title: '上传失败',
        message: '图片上传接口上传失败，可更改为自己的服务器接口'
      });
    }
  },
  created() {
    this.cropImg = this.defaultSrc;
  }
};

</script>

<style scoped>
.avatar-uploader :hover {
  border-color: #409EFF;
}

.div4 {
  float: left;
  height: 250px;
  width: 100%;
}

.div5 {
  float: left;
  height: 100%;
  width: 50%;
}

.div6 {
  float: left;
  height: 100%;
  width: 50%;
}

.pre-img {
  width: 150px;
  height: 150px;
  background: #f8f8f8;
  border: 1px solid #eee;
  border-radius: 100%;
}

.crop-demo {
  display: flex;
  align-items: flex-end;
}

.crop-demo-btn {
  position: relative;
  width: 100px;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  margin-left: 30px;
  background-color: #409eff;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  box-sizing: border-box;
}

.crop-input {
  position: absolute;
  width: 100px;
  height: 40px;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
</style>

