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
                    label="日期"
                    prop="date"
                    width="250">
                </el-table-column>
                <el-table-column
                    label="姓名"
                    prop="name"
                    width="180">
                </el-table-column>
                <el-table-column
                    label="评论"
                    prop="comment">
                </el-table-column>
            </el-table>
        </div>
        <div class="container">
            <div>
                <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"
                              class="areasize"></quill-editor>
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
import { quillEditor } from 'vue-quill-editor';

export default {
    data: function() {
        return {
            username: localStorage.getItem('ms_username'),
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
            }, {
                date: '2016-05-07',
                name: '王小虎',
                comment: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                comment: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                comment: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                comment: '上海市普陀区金沙江路 1518 弄'
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
        submit() {
            var now = new Date();
            var textcontent = this.content.replace(/<[^>]+>/g, '');  //消除标签
            var timenow = now.toLocaleString();
            this.tableData.push({ date: timenow, name: this.username, comment: textcontent });
            console.log(now.toLocaleString());
            console.log(this.content);
            console.log(textcontent);
            this.$message.success('提交成功！');
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

</style>
