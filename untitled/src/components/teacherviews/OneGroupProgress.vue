<template>
  <div>
    <div>
      <h1>{{ groupname }}</h1>
    </div>
    <div>
      <div style="float: left; width:30%">
        提交文件
        <br>
        <div v-for="(item,index) in pdfurl" style="text-decoration: underline" @click="pdfchange(index)">{{ item.name }}
        </div>
      </div>
      <div style="float: left;width:40%">
        小组成员
        <p v-for="(item,index) in group[groupnumber].group" :key="index">{{item.membername}}</p>
      </div>
      <div style="float: left;width:30%">
        进度
        <el-card shadow="hover" style="height:270px;">
          <div slot="header" class="clearfix">
            <span>项目进展</span>
          </div>
          <el-table :data="groupProgressData" style="width:100%">
            <el-table-column label="进展阶段" prop="completion" />
            <el-table-column label="最新上传的文件" prop="upToDateFile" />
          </el-table>
          <el-table :data="taskCompletion" style="width:100%">
            <el-table-column label="发布任务完成情况">
              <template slot-scope="scope">
                <div>完成度: {{ scope.row['percentage'] }}%</div>
              </template>
            </el-table-column>
            <el-table-column label="总任务数">
              <template slot-scope="scope">
                <div>{{ scope.row['tasklength'] }}</div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    </div>
    <div style="text-align: center;width: 60%">
      <div>
        评语:
        <input></input>
      </div>
      <div style="text-align: center">最终得分</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      purl:'',
      groupnumber: this.$route.query.groupnumber,
      groupname: this.$route.query.groupname,
      group: [
        {
          group: [
            { membername: 'zhang'},
            { membername: 'wang' },
            { membername: 'li'},
            { membername: 'zhu' },
            { membername: 'wu' },
            { membername: 'shan'}
          ]
        },
        {
          group: [
            { membername: 'jdia'},
            { membername: 'dasd' },
            { membername: 'dasd' },
            { membername: 'zdsa' },
            { membername: 'daswa'},
            { membername: 'csd'}
          ]
        }
      ],
      taskCompletion: [{
        percentage: 0,
        tasklength: 0
      }],
      groupProgressData: [{
        completion: '收尾阶段',
        upToDateFile: '项目总结报告.pdf'
      }],
      pdfurl: [
        {
          name: 'PDF1',
          url: require('@/statics/pdf/需求管理系统.pdf')
        },
        {
          name: 'PDF2',
          url: require('@/statics/pdf/test.pdf')
        },
        {
          name: 'PDF3',
          url: require('@/statics/pdf/现代计算机组成原理实验讲义.pdf')
        }
      ]
    };
  },
  methods: {
    pdfchange(index) {
      this.purl = this.pdfurl[index].url;
      console.log(this.pdfurl[index].url);
    }
  }
};
</script>



<style scoped>

</style>