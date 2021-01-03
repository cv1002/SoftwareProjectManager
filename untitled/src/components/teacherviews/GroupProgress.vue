<template>
  <div>
    <el-row :gutter="20" class="div0">
      <el-col v-for="item in group" :key="item.no" :span="8">
        <el-card>
          <router-link :to="{path: '/ogp', query: {groupnumber:0,groupname:groupname1}}"
                       class="font1" style="color: darkblue">{{ groupname1 }}
          </router-link>
        </el-card>
      </el-col>
    </el-row>
    <div class="">
      <el-col :span="8">
        <router-link :to="{path: '/ogp', query: {groupnumber:1,groupname:groupname2}}"
                     class="font1" style="color: darkblue">{{ groupname }}
        </router-link>
      </el-col>
    </div>
    <div class="">
      <el-col :span="8">
        <p>group3</p>
      </el-col>
    </div>
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
      group: [{
        no: '1',
        percent: '10',
        status: 'success',
        grade: '1',
        comment: '111'
      },
        {
          no: '2',
          percent: '20',
          status: 'warning',
          grade: '2',
          comment: '111'
        },
        {
          no: '3',
          percent: '30',
          status: 'exception',
          grade: '3',
          comment: '111'
        },
        {
          no: '4',
          percent: '40',
          status: 'warning',
          grade: '4',
          comment: '111'
        },
        {
          no: '5',
          percent: '40',
          status: 'warning',
          grade: '4',
          comment: '111'
        },
        {
          no: '6',
          percent: '40',
          status: 'warning',
          grade: '4',
          comment: '111'
        }
      ]
    };
  },
  methods: {}
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

.el-card {
  margin: 20px;
  transition: all .5s;
  width: 300px;
  display: flex;
  justify-content: space-around;
}

.el-card:hover {
  margin-top: -1px;
}

.text {
  font-size: 18px;
  text-align: center;
  margin: 8px;
}

el-progress {
  text-align: center;
  margin: 20px;
}
</style>