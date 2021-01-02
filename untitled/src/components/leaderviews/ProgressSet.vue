<template>
  <div>
    <div style="float: left; width:30%">
      提交文件
    </div>
    <div style="float: left;width:40%">
      <h2 style="margin-top: 150px;margin-left: 10%;">提交需要交给老师的文件</h2>
      <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          class="upload-demo"
          drag
          multiple
          >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
    </div>
    <div style="float: left;width:30%">
      <div class='time'>
        <div class='text-content'>
          <h2 class='text-center'>上传文件时间轴</h2>
          <div class='time-line'>
            <div v-for='item in testList' class='time-line-div'>
              <p>{{item.time}}</p>
              <p ref='circular'></p>
              <p>{{item.text}}</p>
            </div>
            <div class='img-dotted' ref='dotted'></div>
          </div>
          <div style='margin-top:20px;'>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testList:[
        {key:'1',time:'2001-01-01 01:00:00',text:'上传小组名单'},
        {key:'2',time:'2002-02-02 02:00:00',text:'上传需求规格说明书'},
        {key:'3',time:'2003-03-03 03:00:00',text:'上传'},
        {key:'4',time:'2004-04-04 04:00:00',text:'上传'},
        {key:'5',time:'2005-05-05 05:00:00',text:'上传'}
      ]
    }
  },
  mounted() {
    this.$refs.dotted.style.left = this.$refs.circular[0].offsetLeft - 12 + 'px'
  }
}
</script>

<style>
.text-center{
  text-align: center;
}
.time h2{
  color:#FF6600;
  margin: 20px auto 30px auto;
}
.time-line{
  position: relative;
  width:300px;
  margin:0 auto;
}
.time-line-div{
  position:relative;
  min-height:85px;
}
.time-line-div>p:nth-child(1){
  position: absolute;
  left:0;
  width:100px;
}
.time-line-div>p:nth-child(2){
  position:absolute;
  left: 100px;
  width:15px;
  height:15px;
  top:10px;
  background:#5CB85C;
  border-radius: 50%;
  z-index: 10
}
.time-line-div>p:nth-child(3){
  position:absolute;
  left: 130px;
  padding: 10px;
  background: #317EF3;
  font-size:.8rem;
  color:#fff;
  border-radius: 10px;
}
.img-dotted{
  position:absolute;
  width:20px;
  height:100%;
  top:0;
  z-index: 1;
  background:url('../../statics/img/dotted.png');
}
</style>