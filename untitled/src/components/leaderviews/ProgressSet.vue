<template>
  <div>
    <el-progress v-if="visible" :percentage="progress" type="circle"></el-progress>
    <el-progress v-if="!visible" :percentage="100" status="success" type="circle"></el-progress>
    <button v-on:click="changepercent">加</button>
    <button v-on:click="reset">reset</button>
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
      progress: 0,
      visible: true
    }
  },
  methods: {
    changepercent: function () {
      this.progress = this.progress + 10;
      if (this.progress >= 100) {
        this.visible = false;
      }
    },
    reset: function () {
      this.progress = 0;
      this.visible = true;
    }
  }
}
</script>

<style scoped>

</style>