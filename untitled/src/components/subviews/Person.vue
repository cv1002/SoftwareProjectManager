<template>
  <div class="div1">
    <div class="div2">
    </div>
    <div class="div3">
      <div class="crop-demo">
        <img :src="cropImg" alt="这里是头像" class="pre-img">
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
      <div class="spanstyle">
        <span>{{ username }}</span>
      </div>
      <div class="weather">
        <weather></weather>
      </div>
      <div class="div3-1">
        <div class="div3-1-1">
          <el-card class="box-card box-card-1">
            <span>未完成任务</span>
          </el-card>
        </div>
      </div>
      <div class="div3-2">
        <div class="div3-2-1">
          <el-card class="box-card box-card-2">
            <div>
              <router-link style="color: white" to="/vueeditor">评论</router-link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <router-link style="color: white" to="/journal">日志</router-link>
            </div>
          </el-card>
        </div>
        <div class="div3-2-2">
          <el-card class="box-card box-card-3">
            <div slot="header">
              个人档案
            </div>
            <div class="div-card">
              职务:
            </div>
            <div class="div-card">
              组长:
            </div>
            <div class="div-card">
              老师:
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div class="div4">

    </div>
  </div>
</template>
<script>
import VueCropper from 'vue-cropperjs';
import Weather from '@/components/subviews/Weather';

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
    Weather,
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
  },
  computed: {
    username() {
      let username = localStorage.getItem('ms_username');
      return username ? username : this.name;
    }
  }
};

</script>

<style scoped>
.avatar-uploader :hover {
  border-color: #409EFF;
}

.div1 {
  background-image: url("../../statics/img/bg_person.jpg");
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

.div4 {
  width: 20%;
  margin-top: 5%;
  float: left;
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
  width: 70%;
  float: left;
}

.weather {
  float: left;
  margin-top: 10px;
  width: 30%;
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

.spanstyle {
  position: absolute;
  margin-left: 14%;
  margin-top: 3%;
  font-size: 20px;
  color: #2d8cf0;
  opacity: 0.6;
}

.div3-1 {
  margin-top: 20px;
  float: right;
  width: 65%;
}

.div3-2 {
  margin-top: 20px;
  float: left;
  width: 30%;
}

.div3-2-2 {
  margin-top: 40px;
}

.box-card {
  background-color: #473C8B;
  color: white;
}

.box-card-1 {
  height: 392px;
}

.box-card-2 {
  height: 70px;
  text-align: center;
  font-size: 20px;
}

.box-card-3 {
  height: 280px;
  font-size: 20px;
}

.div-card {
  margin-bottom: 30px;
  font-size: 17px;
}
</style>

