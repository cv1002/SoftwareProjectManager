<template>
  <div>
    <el-row class="div0">
      <div>
        <el-col :span="8">
          <router-link :to="{path: '/ogp', query: {groupnumber:0,groupname:groupname1}}"
                       class="font1" style="color: darkblue">{{ groupname1 }}
          </router-link>
        </el-col>
      </div>
      <div class="">
        <el-col :span="8">
          <router-link :to="{path: '/ogp', query: {groupnumber:1,groupname:groupname2}}"
                       class="font1" style="color: darkblue">{{ groupname2 }}
          </router-link>
        </el-col>
      </div>
      <div class="">
        <el-col :span="8">
          <p>group3</p>
        </el-col>
      </div>
    </el-row>
    <el-row>
      <div class="">
        <el-col :span="8">
          <p>group4</p>
        </el-col>
      </div>
      <div class="">
        <el-col :span="8">
          <p>group5</p>
          <el-progress :percentage="50" status="exception" type="circle"></el-progress>
        </el-col>
      </div>
      <div class="">
        <el-col :span="8">
          <p>group6</p>
          <el-progress :percentage="50" status="exception" type="circle"></el-progress>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groupname1: 'group1',
      groupname2: 'group2',
      value1: 3,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: null
    };
  },
  methods: {

  }
};
</script>

<style scoped>
.font1 {
  font-size: 20px;
  text-decoration: none;
}
.div0 {
  margin-bottom: 50px;
}
</style>