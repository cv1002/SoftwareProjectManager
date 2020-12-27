<template>
  <div>
    <el-progress type="circle" :percentage="progress" v-if="visible"></el-progress>
    <el-progress type="circle" :percentage="100" status="success" v-if="!visible"></el-progress>
    <button v-on:click="changepercent">加</button>
    <button v-on:click="reset">reset</button>
      <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
  </div>
</template>

<script>
export default {
  data(){
    return{
      progress:0,
      visible:true
    }
  },
  methods:{
    changepercent:function () {
      this.progress = this.progress+10;
      if(this.progress >= 100){
        this.visible = false;
      }
    },
    reset:function (){
      this.progress = 0;
      this.visible = true;
    }
  }
}
</script>

<style scoped>

</style>