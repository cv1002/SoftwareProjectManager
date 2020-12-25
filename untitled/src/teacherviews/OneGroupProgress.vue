<template>
  <div>
    group{{groupnumber}}
    <br>
    <el-row>
      <el-col :span="8">
        <p>member1</p>
        <el-progress :text-inside="true" :stroke-width="24" :percentage="70"></el-progress>
      </el-col>
      <el-col :span="8">
        <p>member2</p>
        <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
      </el-col>
      <el-col :span="8">
        <p>member3</p>
        <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <p>member4</p>
        <el-progress :text-inside="true" :stroke-width="24" :percentage="80" status="warning"></el-progress>
      </el-col>
      <el-col :span="8">
        <p>member5</p>
        <el-progress :text-inside="true" :stroke-width="24" :percentage="80" status="warning"></el-progress>
      </el-col>
      <el-col :span="8">
        <p>member6</p>
        <el-progress :text-inside="true" :stroke-width="24" :percentage="50" status="exception"></el-progress>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return{
      groupnumber:1
    }
  }
}
</script>

<style scoped>

</style>