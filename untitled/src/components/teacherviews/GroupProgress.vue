<template>
  <div>
    <div>
    <el-row :gutter="20" class="div0">
        <el-col v-for="item in group" :key="item.no" :span="8">
          <el-card>
          <!-- <router-link :to="{path: '/ogp', query: {groupnumber:0,groupname:groupname1}}"
                       class="font1" style="color: darkblue">{{ groupname1 }}
          </router-link> -->
          <div class='text'>小组{{item.no}}</div>
          <el-progress type="dashboard" :percentage="percentage" :color="colors1" stroke-width='3'></el-progress>
          <div class='text'>评价完成进度：</div>
          <div class='text'>
            <el-button-group>
              <el-button icon="el-icon-minus" @click="decrease"></el-button>
              <el-button icon="el-icon-plus" @click="increase"></el-button>
            </el-button-group>
          </div>
          <div class='text'>评语：{{comment}} <br>
          <el-button type="primary" plain @click="centerDialogVisible = true">添加/修改</el-button>
          <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
            <el-input v-model="comment" placeholder="请输入评语"></el-input>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
          </div>
          <span class="text">评分：</span><el-rate v-model="item.value" show-text>
          </el-rate>
          </el-card>
        </el-col>
    </el-row>
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
      centerDialogVisible: false,
      comment: '',
      percentage: 60,
      colors1: [
      {color: '#f56c6c', percentage: 20},
      {color: '#e6a23c', percentage: 40},
      {color: '#5cb87a', percentage: 60},
      {color: '#1989fa', percentage: 80},
      {color: '#6f7ad3', percentage: 100}
      ],
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      group: [{
      no: '1',
      value: null,
      comment:''},
      {
      no: '2',
      value: null,
      comment:''},
      {
      no: '3',
      value: null,
      comment:''},
      {
      no: '4',
      value: null,
      comment:''},
      {
      no: '5',
      value: null,
      comment:''},
      {
      no: '6',
      value: null,
      comment:''}
      ]
    };
  },
  methods: {
    increase() {
    this.percentage += 10;
    if (this.percentage > 100) {
    this.percentage = 100;
    }
    },
    decrease() {
    this.percentage -= 10;
    if (this.percentage < 0) { this.percentage=0; } }
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
transition: all 3s;
width: 300px;
display: flex;
justify-content: space-around;
background-color: navajowhite ;
}
.el-card:hover{
margin-top: -0.1px;
}

.text {
  font-size: 18px;
  text-align: center;
  margin: 8px;
}

.el-progress {
  text-align:center;
  margin: 8px;
}
</style>