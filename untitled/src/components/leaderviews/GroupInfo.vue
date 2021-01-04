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
          border
          align="center"
          header-align="center"
          class="table"
          header-cell-class-name="table-header"
          @selection-change="handleSelectionChange">
        <!-- prop对应tableData内属性名称 label是页面上显示的名称-->
        <el-table-column label="编号">
          <template slot-scope="scope">
            <span>{{scope.row.UserID}}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名">
          <template slot-scope="scope">
            <span>{{scope.row['UserName']}}</span>
          </template>
        </el-table-column>
        <el-table-column label="学号">
          <template slot-scope="scope">
            <span>{{scope.row['studentID']}}</span>
          </template>
        </el-table-column>
        <el-table-column label="班级">
          <template slot-scope="scope">
            <span>{{scope.row['Class']}}</span>
          </template>
        </el-table-column>
        <el-table-column label="职务">
          <template slot-scope="scope">
            <span>{{scope.row['RoleName']}}</span>
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
            @current-change="handlePageChange"
        ></el-pagination>
      </div>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog :visible.sync="editVisible" title="编辑" width="30%">
      <el-form ref="form" :model="form" label-width="70px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="身份">
          <el-input v-model="form.identity"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
    </el-dialog>
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
    formData.append('RoleName', this.$cookie.get('RoleName'));
    formData.append('Class', this.$cookie.get('Class'));
    formData.append('studentID', this.$cookie.get('studentID'));
    console.log(formData);
    this.$axios({
    url: '/get/allCommunication',
    method: 'POST',
    data: formData
    }).then(response => {
    if (response.data['resultInfo'] !== '无权访问！！') {
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