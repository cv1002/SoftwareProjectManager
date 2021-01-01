<template>
  <div>
    <div>
      <el-table
          :data="tableData"
          :default-sort="{prop: 'date', order: 'descending'}"
          border
          height="400"
          style="width: 100%">
        <el-table-column
            label="开始日期"
            prop="starttime"
            width="250">
        </el-table-column>
        <el-table-column
            label="完成日期"
            prop="endtime"
            width="250">
        </el-table-column>
        <el-table-column
            label="姓名"
            prop="name"
            width="180">
        </el-table-column>
        <el-table-column
            label="任务"
            prop="comment">
        </el-table-column>
      </el-table>
    </div>
    <div class="block" style="float: left; margin-left: 30px">
      <span class="fontstyle">选择成员完成任务的时间：</span>
      <el-date-picker
          v-model="value2"
          :picker-options="pickerOptions"
          align="right"
          end-placeholder="结束日期"
          format="yyyy 年 MM 月 dd 日"
          range-separator="至"
          start-placeholder="开始日期"
          type="daterange"
          unlink-panels
          value-format="yyyy-MM-dd">
      </el-date-picker>
    </div>
    <div style="float: left; margin-left: 100px">
      <span class="fontstyle">指定完成任务的成员：</span>
      <el-select v-model="value" placeholder="指定成员">
        <el-option
            v-for="item in options"
            :key="item.value"
            :value="item.label"
        >
        </el-option>
      </el-select>
    </div>
    <div class="container">
      <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" class="areasize"></quill-editor>
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
  data: function () {
    return {
      tableData: [
        {
          starttime: '2020-12-25',
          endtime: '2020-12-26',
          name: '张三',
          comment: '完成任务1'
        },
        {
          starttime: '2020-12-25',
          endtime: '2020-12-26',
          name: '张三',
          comment: '完成任务2'
        }
      ],
      content: '',
      editorOption: {
        placeholder: '任务内容'
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      options: [{
        value: '选项1',
        label: '张三'
      }, {
        value: '选项2',
        label: '李四'
      }, {
        value: '选项3',
        label: '王五'
      }, {
        value: '选项4',
        label: '朱锐'
      }, {
        value: '选项5',
        label: '晏礼鹏'
      }],
      value: '',
      value2: ''
    };
  },
  components: {
    quillEditor
  },
  methods: {
    submit() {
      let textcontent = this.content.replace(/<[^>]+>/g, '');  //消除标签
      if(this.value===''){
        this.$message.warning('请指定成员');
      }else if(this.value2[0]===''||this.value2[1]===''){
        this.$message.warning('请指定成员完成任务的时间');
      }else if(textcontent===''){
        this.$message.warning('请输入指定的任务');
      }else {
        let starttime = this.value2[0];
        let endtime = this.value2[1];
        let name = this.value;
        this.tableData.push({ starttime: starttime, endtime: endtime, name: name, comment: textcontent });
        console.log(this.content);
        console.log(textcontent);
        this.$message.success('发布成功！');
      }
    }
  }
};
</script>
<style scoped>
.editor-btn {
  margin-top: 230px;
}

.areasize {
  height: 230px;
}
.fontstyle{
  opacity: 0.7;
  color: gray;
}
</style>