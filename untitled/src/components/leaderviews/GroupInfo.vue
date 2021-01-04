<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-select v-model="query.class" class="handle-select mr10" placeholder="班级">
          <el-option key="1" label="软件81班" value="软件81班"></el-option>
          <el-option key="2" label="软件82班" value="软件82班"></el-option>
          <el-option key="3" label="软件83班" value="软件83班"></el-option>
          <el-option key="4" label="软件84班" value="软件84班"></el-option>
        </el-select>
        <el-input v-model="query.name" class="handle-input mr10" placeholder="用户名"></el-input>
        <el-button icon="el-icon-search" type="primary" @click="handleSearch">搜索</el-button>
      </div>
      <el-table
          ref="multipleTable"
          :data="tableData"
          align="center"
          border
          class="table"
          header-align="center"
          header-cell-class-name="table-header">
        <!-- prop对应tableData内属性名称 label是页面上显示的名称-->
        <el-table-column label="用户编号">
          <template slot-scope="scope">
            <span>{{ scope.row.UserID }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名">
          <template slot-scope="scope">
            <span>{{ scope.row['UserName'] }}</span>
          </template>
        </el-table-column>
        <el-table-column label="电话">
          <template slot-scope="scope">
            <span>{{ scope.row['Tel'] }}</span>
          </template>
        </el-table-column>
        <el-table-column label="电子邮箱">
          <template slot-scope="scope">
            <span>{{ scope.row['EMail'] }}</span>
          </template>
        </el-table-column>
        <el-table-column label="职务">
          <template slot-scope="scope">
            <span>{{ scope.row['Job'] }}</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
            :current-page="query.pageIndex"
            :page-size="query.pageSize"
            :total="pageTotal"
            background
            layout="total, prev, pager, next"
            @current-change="handlePageChange" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      UserID: this.$cookie.get('UserID'),
      UserName: this.$cookie.get('UserName'),
      RoleName: this.$cookie.get('RoleName'),
      Class: this.$cookie.get('Class'),
      studentID: this.$cookie.get('studentID'),
      tableData: [],
      query: {
        class: '',
        name: '',
        pageIndex: 1,
        pageSize: 10
      },
      editVisible: false,
      pageTotal: 0,
      form: {},
      idx: -1,
      id: -1
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    getData() {
      this.$axios({
        method: 'get',
        url: '/table.json'
      }).then((response) => {
        console.log(response.data);
        this.tableData = response.data.list;
      }, response => {
        console.log('error');
      });
    },
    // 触发搜索按钮
    handleSearch() {
      this.$set(this.query, 'pageIndex', 1);
      this.getData();
    },
    // 分页导航
    handlePageChange(val) {
      this.$set(this.query, 'pageIndex', val);
      this.getData();
    },
    fetchUser() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserName', this.$cookie.get('UserName'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      formData.append('TeamID', this.$cookie.get('TeamID'));
      console.log(formData);
      this.$axios({
        url: '/get/TeamMemberList',
        method: 'POST',
        data: formData
      }).then(response => {
        if (response.data['resultInfo'] !== '无权访问！！') {
          console.log(response.data);
          this.tableData = response.data;
        } else {
          this.$message.error(response.data['resultInfo']);
        }
      });
    }
  }
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}

.table {
  /* width: 500px; */
  font-size: 14px;
}

.red {
  color: #ff0000;
}

.mr10 {
  margin-right: 10px;
}

.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>