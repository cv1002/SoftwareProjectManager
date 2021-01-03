<template>
  <div>
    <el-row :gutter="20" class="div0">
        <el-col v-for="item in group" :key="item.no" :span="8">
          <el-card>
          <!-- <router-link :to="{path: '/ogp', query: {groupnumber:0,groupname:groupname1}}"
                       class="font1" style="color: darkblue">{{ groupname1 }}
          </router-link> -->
          <div class='text'>小组{{item.no}}</div>
          <el-progress :percentage="item.percent" :status="item.status" type="circle"></el-progress>
          <div class='text'>评分:<el-rate v-model="item.grade"></el-rate></div>
          <div class='text'>评论：{{item.comment}}</div>
          </el-card>
        </el-col>
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
      status:'success',
      grade:'1',
      comment:'111'},
      {
      no: '2',
      percent: '20',
      status:'warning',
      grade:'2',
      comment:'111'},
      {
      no: '3',
      percent: '30',
      status:'exception',
      grade:'3',
      comment:'111'},
      {
      no: '4',
      percent: '40',
      status:'warning',
      grade:'4',
      comment:'111'},
      {
      no: '5',
      percent: '40',
      status:'warning',
      grade:'4',
      comment:'111'},
      {
      no: '6',
      percent: '40',
      status:'warning',
      grade:'4',
      comment:'111'}
      ]
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

.el-card {
margin: 20px;
transition: all .5s;
width: 300px;
display: flex;
justify-content: space-around;
}
.el-card:hover{
margin-top: -1px;
}

.text {
  font-size: 18px;
  text-align:center;
  margin: 8px;
}

el-progress {
  text-align:center;
  margin: 20px;
}
</style>