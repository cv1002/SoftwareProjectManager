<template>
  <div>
    <el-form>
      <el-input v-model="title" type="text"></el-input>
      <el-button @click.native="submit">按钮</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    };
  },
  methods: {
    submit() {
      var now = new Date();
      var textcontent = this.title.replace(/<[^>]+>/g, '');
      var timenow = now.toLocaleString();
      this.$cookie.set('messagetime', timenow, 1);
      this.$cookie.set('message', textcontent, 1);
      console.log(timenow);
      console.log(textcontent);
      this.$message.success('发布成功！');
    }
  }
};
</script>

<style scoped>

</style>