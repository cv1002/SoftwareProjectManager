<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="组名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="选题">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="题一" value="shanghai"></el-option>
                    <el-option label="其他" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="11">
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
                </el-col>
            </el-form-item>

            <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="自选题目">
                <el-input v-model="form.desc" type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
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
            value2: ''
        };
    },
    methods: {
        onSubmit() {
            this.$cookie.set('groupsetenable', false);
            this.$router.push('/groupinfo');
            this.$router.go(0);
            console.log('submit!');
        },
        methods: {
            onSubmit() {
                this.$cookie.set('groupsetenable', false);
                this.$router.push('/groupinfo');
                this.$router.go(0);
                console.log('submit!');
            }

        }
    }
};
</script>

<style scoped>

</style>