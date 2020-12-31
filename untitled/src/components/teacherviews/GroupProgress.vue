<template>
  <div>
    <el-row>
      <el-col :span="8">
        <router-link :to="{path: '/ogp', query: {groupnumber:0,groupname:groupname1}}"
                     class="font1" style="color: darkblue">{{ groupname1 }}
        </router-link>
        <br>
        <el-progress :percentage="0" type="circle"></el-progress>
        <br>
        评分:
        <el-rate v-model="value1"></el-rate>
      </el-col>
      <el-col :span="8">
        <router-link :to="{path: '/ogp', query: {groupnumber:1,groupname:groupname2}}"
                     class="font1" style="color: darkblue">{{ groupname2 }}
        </router-link>
        <br>
        <el-progress :percentage="25" type="circle"></el-progress>
        <br>
        评分:
        <el-rate v-model="value2"></el-rate>
      </el-col>
      <el-col :span="8">
        <p>group3</p>
        <el-progress :percentage="100" status="success" type="circle"></el-progress>
        <br>
        评分:
        <el-rate v-model="value3"></el-rate>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <p>group4</p>
        <el-progress :percentage="70" status="warning" type="circle"></el-progress>
        <br>
        评分:
        <el-rate v-model="value4"></el-rate>
      </el-col>
      <el-col :span="8">
        <p>group5</p>
        <el-progress :percentage="50" status="exception" type="circle"></el-progress>
        <br>
        评分:
        <el-rate v-model="value5"></el-rate>
      </el-col>
      <el-col :span="8">
        <p>group6</p>
        <el-progress :percentage="50" status="exception" type="circle"></el-progress>
        <br>
        评分:
        <el-rate v-model="value6"></el-rate>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groupname1: 'group1',
      groupname2: 'group2',
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: null
    };
  },
  methods: {
    test: function () {
      console.log(this.value1);
    },
    methods: {
      test: function () {
        console.log(this.value1);
      }
    }
  }
};
</script>

<style scoped>
.font1 {
  font-size: 20px;
  text-decoration: none;
}
</style>