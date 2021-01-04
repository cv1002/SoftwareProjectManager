<template>
  <div class="finish-wrap">
    <div style="width: 30%;margin-top: 20px;float: left">
    </div>
    <div style="float: left;margin-left: 8%;margin-top: 15%">
      <el-card style="width: 300px">
        <div class="duv-gap">
          <span class="font-style">恭喜！小组选题完成！</span>
        </div>
        <div class="duv-gap">
          <span class="font-style">项目名:{{ groupname }}</span>
        </div>
        <div class="duv-gap">
          <span class="font-style">题目:{{ subject }}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubjectInfo',
  props: {
    groupname: String,
    subject: String //题目
  }
};
</script>

<style scoped>
.finish-wrap {
  background-image: url("../../statics/img/check.jpg");
  background-position: -550px 700px;
  background-size: 170%;
  height: 100%;
  position: fixed;
  width: 100%;
}

.duv-gap {
  margin-bottom: 20px;
}

.font-style {
  font-size: 20px;
}
</style>