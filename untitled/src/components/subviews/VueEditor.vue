<template>
  <div>
    <div>
      <div>
        <el-row :gutter="20">
          <el-col v-for="(items,i) in tableData" :span="8">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>交流讨论</span>
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
      <div class="ql-container container ql-snow">
        <div><quill-editor ref="myTextEditor" v-model="content" :options="editorOption" class="areasize quill-editor"></quill-editor></div>
        <div><el-button class="editor-btn" type="primary" @click="submit">提交</el-button></div>
      </div>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import {quillEditor} from 'vue-quill-editor';

export default {
  data: function () {
    return {
      username:this.$cookie.get('UserName'),
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        comment: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        comment: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        comment: '上海市普陀区金沙江路 1518 弄'
      }],
      content: '',
      editorOption: {
        placeholder: 'Hello World'
      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
    submit() {
      var now = new Date();
      var textcontent = this.content.replace(/<[^>]+>/g, "");  //消除标签
      var timenow = now.toLocaleString();
      this.tableData.push({date:timenow,name:this.username,comment:textcontent});
      console.log(now.toLocaleString());
      console.log(this.content);
      console.log(textcontent)
      this.$message.success('提交成功！');
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