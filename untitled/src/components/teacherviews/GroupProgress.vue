<template>
  <div>
    <div>
      <el-row :gutter="20" class="div0">
        <el-col v-for="item in group" :key="item.no" :span="8">

          <el-card>
            <router-link :to="{path: '/ogp', query: {groupnumber:item.no}}" class="font1"
                         style="color: darkblue">
              <div class="text">小组{{ item.no }}</div>
            </router-link>
<!--            <el-progress :color="colors1" :percentage="item.value" :stroke-width="3" type="dashboard"></el-progress>-->
<!--            <div class="text">评价完成进度：</div>-->
<!--            <div class="text">-->
<!--              <el-button-group>-->
<!--                <el-button icon="el-icon-minus" @click="decrease(item)"></el-button>-->
<!--                <el-button icon="el-icon-plus" @click="increase(item)"></el-button>-->
<!--              </el-button-group>-->
<!--            </div>-->
<!--            <div class="text">评语：{{ item.comment }} <br>-->
<!--              <el-button plain type="primary" @click="centerDialogVisible = true">添加/修改</el-button>-->
<!--              <el-dialog :visible.sync="centerDialogVisible" center title="提示" width="30%">-->
<!--                <el-input v-model="item.comment" placeholder="请输入评语"></el-input>-->
<!--                <span slot="footer" class="dialog-footer">-->
<!--              <el-button @click="centerDialogVisible = false">取 消</el-button>-->
<!--              <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>-->
<!--            </span>-->
<!--              </el-dialog>-->
<!--            </div>-->
<!--            <span class="text">评分：</span>-->
<!--            <el-rate v-model="item.value" show-text>-->
<!--            </el-rate>-->
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      colors1: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ],
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      group: [
        {
          no: '1',
          value: 0,
          comment: ''
        },
        {
          no: '2',
          value: 0,
          comment: ''
        },
        {
          no: '3',
          value: 0,
          comment: ''
        },
        {
          no: '4',
          value: 0,
          comment: ''
        },
        {
          no: '5',
          value: 0,
          comment: ''
        },
        {
          no: '6',
          value: 0,
          comment: ''
        }
      ]
    };
  },
  methods: {
    increase(item) {
      item.value += 10;
      if (item.value > 100) {
        item.value = 100;
      }
    },
    decrease(item) {
      item.value -= 10;
      if (item.value < 0) {
        item.value = 0;
      }
    }
  }
};
</script>


<style scoped>
.font1 {
  font-size: 15px;
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
  background-color: navajowhite;
}

.el-card:hover {
  margin-top: -0.1px;
}

.text {
  font-size: 18px;
  text-align: center;
  margin: 8px;
}

.el-progress {
  text-align: center;
  margin: 8px;
}
</style>