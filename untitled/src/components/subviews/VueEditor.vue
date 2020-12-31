<template>
  <div>
    <div>
<<<<<<< HEAD
      <el-table
          :align="'center'"
          :data="tableData"
          :default-sort="{prop: 'date', order: 'descending'}"
          height="200"
          style="width: 100%">
        <el-table-column
            label="评论"
            prop="comment"
            width="400">
        </el-table-column>
        <el-table-column label="姓名" prop="name" width="80">
        </el-table-column>
        <el-table-column label="日期" prop="date" width="100">
        </el-table-column>
      </el-table>
=======
      <el-row :gutter="20">
        <el-col :span="8" v-for="items in tableData">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div class="user-info-list">
              日期：
              <span>{{items.date}}</span>
            </div>
            <div class="user-info-list">
              姓名：
              <span>{{items.name}}</span>
            </div>
            <div class="user-info-list">
              作业：
              <span>{{items.comment}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
>>>>>>> pr/4
    </div>
    <div slot="header" class="clearfix">
      <el-tag><span class="tag">编辑器</span></el-tag>
    </div>
    <div class="container">
      <div>
        <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" class="areasize"></quill-editor>
      </div>
      <div>
        <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
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
      username: localStorage.getItem('ms_username'),
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
      }, {
        date: '2020-12-26',
        name: 'C',
        comment: '知道问题了'
      }],
      content: '',
      editorOption: {
        placeholder: '请输入互动内容'
      }
    };
  },
  components: {
    quillEditor
  },
  methods: {
    submit() {
      let now = new Date();
      let textcontent = this.content.replace(/<[^>]+>/g, '');  //消除标签
      let timenow = now.toLocaleString();
<<<<<<< HEAD
      this.tableData.push({ date: timenow, name: this.username, comment: textcontent });
=======
      this.tableData.push({date: timenow, name: this.username, comment: textcontent});
>>>>>>> pr/4
      console.log(now.toLocaleString());
      console.log(this.content);
      console.log(textcontent);
      this.$message.success('提交成功！');
    }
  }
}
</script>

<style scoped>
.editor-btn {
  margin-top: 230px;
}

.areasize {

  height: 230px;
}

.tag {
  font-size: 20px;
}

  .text {
  font-size: 14px;
  }

  .item {
  margin-bottom: 4px;
  }

  .clearfix:before,
  .clearfix:after {
  display: table;
  content: "";
  }
  .clearfix:after {
  clear: both
  }

  .box-card {
  height: 300px;
  }
</style>
