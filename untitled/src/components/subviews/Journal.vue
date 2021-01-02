<template>
  <div>
    <div class="block">
      <el-timeline>
        <el-timeline-item v-for="item in tableData" :key="item" placement="top">
          <el-card>
            <h4>{{ item.content }}</h4>
            <p>{{ item.name }} 提交于 {{ item.date }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        content: '提交作业1'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        content: '提交作业2'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        content: '更新GitHub模板'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        content: '提交项目章程'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        content: '摸鱼'
      }
      ]
    };
  }
};
</script>

<style scoped>

</style>