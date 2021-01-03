<template>
  <div>
    <div>
      <el-row :gutter="20">
        <el-col v-for="(items,i) in tableData" :key="i" :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>交流讨论</span>
              <el-button v-if="rolename==='Teacher'" style="float: right; padding: 3px 0"
                         type="text" @click="cancel(i)">删除
              </el-button>
            </div>
            <div class="user-info-list">
              日期：
              <span>{{ items.date }}</span>
            </div>
            <div class="user-info-list">
              姓名：
              <span>{{ items.name }}</span>
            </div>
            <div class="user-info-list">
              评论：
              <span>{{ items.comment }}</span>
            </div>
          </el-card>
        </el-col>
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
import { quillEditor } from 'vue-quill-editor';

export default {
  name: 'editor',
  data: function() {
    return {
      username: this.$cookie.get('UserName'),
      rolename: this.$cookie.get('RoleName'),
      tableData: [{
        date: '2020-12-21',
        name: 'A',
        comment: '老师的评价如何'
      }, {
        date: '2020-12-22',
        name: 'B',
        comment: 'A表现不错'
      }, {
        date: '2020-12-24',
        name: '老师',
        comment: '页面布局还是有问题'
      }],
      content: '',
      editorOption: {
        placeholder: 'Hello World'
      }
    };
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorChange({ editor, html, text }) {
      this.content = html;
    },
    submit() {
      console.log(this.content);
      this.$message.success('提交成功！');
    },
    cancel(i) {
      this.tableData.splice(i, 1);
    }
  }
};
</script>
<style scoped>
.editor-btn {
  margin-top: 20px;
}
</style>
