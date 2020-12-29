<template>
    <div>
        <el-table
            :data="tableData"
            border
            height="600"
            style="width: 100%">
            <el-table-column
                label="日期"
                prop="date"
                width="180">
            </el-table-column>
            <el-table-column
                label="姓名"
                prop="name"
                width="180">
            </el-table-column>
            <el-table-column
                label="提交作业"
                prop="address">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '提交作业1'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '提交作业2'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '提交作业3'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '提交作业4'
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }]
        };
    }
};
</script>

<style scoped>

</style>