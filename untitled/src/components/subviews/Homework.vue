<template>
    <div class="div1">
        <div class="div2">
            <el-image :src="require('@/statics/img/music-theme.png')"></el-image>
        </div>
        <div class="div3">
            <el-button size="small" type="primary" class="button1" round
                       :before-upload="beforeUpload">点击上传
                <br> 只能上传pdf/doc/docx文件，且不超过5M
            </el-button>
        </div>
        <div class="div4">
            <span>拖拽到此处也可上传</span>
        </div>
        <div class="div5">
            <div slot="tip" class="el-upload-list__item-name">{{ fileName }}</div>
            <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitUpload()" class="button2">
            <icon class="el-icon-thumb"></icon> |&nbsp &nbsp确定</el-button>
        </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileName: ''
        };
    },
    methods: {
        beforeUpload(file) {
            console.log(file, '文件');
            this.files = file;
            const extension = file.name.split('.')[1] === 'pdf';
            const extension2 = file.name.split('.')[1] === 'doc';
            const extension3 = file.name.split('.')[1] === 'docx';
            const isLt2M = file.size / 1024 / 1024 < 5;
            if (!extension && !extension2 && !extension3) {
                this.$message.warning('上传文件只能是pdf、doc、docx格式!');
                return;
            }
            if (!isLt2M) {
                this.$message.warning('上传文件大小不能超过 5MB!');
                return;
            }
            this.fileName = file.name;
            return false; // 返回false不会自动上传
        },
        submitUpload() {
            if (this.fileName == '') {
                this.$message.warning('请选择要上传的文件！');
                return false;
            }
            console.log('上传' + this.files.name);
            let fileFormData = new FormData();
            fileFormData.append('file', this.files, this.fileName);//filename是键，file是值，就是要传的文件，test.zip是要传的文件名
            let requestConfig = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };
            this.$http.post('http://127.0.0.1:8080/homework?' + this.files.name, fileFormData, requestConfig).then((res) => {
                debugger
                if (data && data.code === 0) {
                    this.$message({
                        message: '操作成功',
                        type: 'success',
                        duration: 1500,
                        onClose: () => {
                            this.visible = false;
                            this.$emit('refreshDataList');
                        }
                    });
                } else {
                    this.$message.error(data.msg);
                }
            });
        }
    }
};
</script>

<style scoped>
.button1 {
    height: 70px;
    width: 280px;
    margin-left: 580px;
    margin-top: 20px;
    border-radius: 45px;
}

.div1 {
    background-image: url("../../statics/img/bg.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
    width: 100%;
    position: absolute;
}

.div2 {
    z-index: 1;
    position: absolute;
    margin-left: 404px;
    margin-top: 80px;
}

.div3 {
    z-index: 0;
    margin-top: 135px;
    margin-left: -80px;
}

.div4 {
    margin-left: 570px;
    margin-top: 50px;
}

.div5 {
    margin-left: 550px;
    margin-top: 80px;
}

.button2 {
    background-color: hotpink;
    height: 60px;
    width: 180px;
    border-radius: 45px;
    font-size: 20px;
}
</style>


