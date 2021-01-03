<template>
  <div>
    <el-row class="div0">
      <div>
        <el-col :span="8">
          <el-card shadow="hover" style="height:270px;">
            <div slot="header" class="clearfix">
              <span>项目进展</span>
              <router-link :to="{path: '/ogp', query: {groupnumber:0,groupname:groupname1}}"
                           class="font1" style="color: darkblue;margin-left: 60%">{{ groupname1 }}
              </router-link>
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
        </el-col>
      </div>
      <div class="">
        <el-col :span="8">
          <el-card shadow="hover" style="height:270px;">
            <div slot="header" class="clearfix">
              <span>项目进展</span>
              <router-link :to="{path: '/ogp', query: {groupnumber:1,groupname:groupname2}}"
                           class="font1" style="color: darkblue;margin-left: 60%">{{ groupname2 }}
              </router-link>
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
        </el-col>
      </div>
      <div class="">
        <el-col :span="8">
          <p>group6</p>
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
      taskCompletion: [{
        percentage: 0,
        tasklength: 0
      }],
      groupProgressData: [{
        completion: '收尾阶段',
        upToDateFile: '项目总结报告.pdf'
      }]
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