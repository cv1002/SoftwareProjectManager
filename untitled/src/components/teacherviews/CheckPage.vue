<template>
  <div>
    <div style="width: 10%;height: 100%;float: left">
      &nbsp;
    </div>
    <div style="width: 70%;height: 400px;float: left">
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            label="主文件"
            prop="date"
            width="180">
        </el-table-column>
        <el-table-column
            label="文件名"
            prop="name"
            width="180">
        </el-table-column>
        <el-table-column align="center" label="状态">
          <template slot-scope="scope">
            <el-tag
                :type="scope.row.status==='审核通过'?'success':(scope.row.status==='未通过'?'danger':'')"
            >{{ scope.row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="120">
          <template slot-scope="scope">
            <el-button
                size="small"
                type="text"
                @click.native.prevent="check(scope.$index, tableData)">
              审核
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkpage',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        status: '审核通过'
      }, {
        date: '2016-05-04',
        name: '张学良',
        status: '待审核'
      }, {
        date: '2016-05-01',
        name: '蒋介石',
        status: '未通过'
      }, {
        date: '2016-05-03',
        name: '蔡徐坤',
        status: '未通过'
      }]
    };
  },
  methods: {
    check(index, rows) {
      this.$router.push({ path: '/checkpageplus', query: { name: rows[index].name } });
    }
  }
};
</script>

<style scoped>

</style>