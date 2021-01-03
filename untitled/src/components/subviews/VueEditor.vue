<template>
  <div>
    <div>
      <el-row :gutter="20">
        <el-table :data="tableData" :show-header="false" style="width:100%;">
          <el-table-column>
            <template slot-scope="scope">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <div>交流讨论[{{ scope.row['CommunicationID'] }}]</div>
                  <div>UserID：{{ scope.row['UserID'] }}</div>
                </div>
                <div class="user-info-list">
                  <span v-html="scope.row['Context']" />
                </div>
              </el-card>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </div>
    <div slot="header" class="clearfix">
      <el-tag><span class="tag">编辑器</span></el-tag>
    </div>
    <div class="container">
      <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
      <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import {quillEditor} from 'vue-quill-editor';

export default {
  name: 'editor',
  data() {
    return {
      username: this.$cookie.get('UserName'),
      rolename: this.$cookie.get('RoleName'),
      tableData: [],
      content: '',
      editorOption: {
        placeholder: 'Hello World'
      }
    }
  },
  created() {
    this.fetchCommunications();
  },
  components: {
    quillEditor
  },
  methods: {
    fetchCommunications() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      formData.append('TeamID', this.$cookie.get('TeamID'));
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
    },
    submit() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      formData.append('TeamID', this.$cookie.get('TeamID'));
      formData.append('Context', this.content);
      this.$axios({
        url: '/communication',
        method: 'POST',
        data: formData
      }).then(response => {
        console.log(response);
        if (response.data['resultInfo'] !== '无权访问！！') {
          this.$message.success(response.data['resultInfo']);
          this.fetchCommunications();
        } else {
          this.$message.error(response.data['resultInfo']);
        }
      });
    }
  }
}
</script>

<style>
.quill-editor {
  width: 100%;
  height: 700px;
}
</style>

<style scoped>
.editor-btn {
  margin-top: 230px;
}
.areasize{
  height: 230px;
}

</style>