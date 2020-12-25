<template>
  <div>
    <el-row>
      <el-col :span="8">
        <p>group1</p>
        <el-progress type="circle" :percentage="0"></el-progress>
        <br>
        评分:
        <el-rate v-model="value1"></el-rate>
      </el-col>
      <el-col :span="8">
        <p>group2</p>
        <el-progress type="circle" :percentage="25"></el-progress>
        <br>
        评分:
        <el-rate v-model="value2"></el-rate>
      </el-col>
      <el-col :span="8">
        <p>group3</p>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <br>
        评分:
        <el-rate v-model="value3"></el-rate>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <p>group4</p>
        <el-progress type="circle" :percentage="70" status="warning"></el-progress>
        <br>
        评分:
        <el-rate v-model="value4"></el-rate>
      </el-col>
      <el-col :span="8">
        <p>group5</p>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
        <br>
        评分:
        <el-rate v-model="value5"></el-rate>
      </el-col>
      <el-col :span="8">
        <p>group6</p>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
        <br>
        评分:
        <el-rate v-model="value6"></el-rate>
      </el-col>
    </el-row>
    <div>
      <button @click="test">测试</button>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: null,
    }
  },
  methods:{
    test:function (){
      console.log(this.value1);
    }
  }
}
</script>

<style scoped>

</style>