<template>
  <div>

    <el-progress type="circle" :percentage="progress" v-if="visible"></el-progress>
    <el-progress type="circle" :percentage="100" status="success" v-if="!visible"></el-progress>
    <el-progress type="circle" :percentage="70" status="warning"></el-progress>
    <button v-on:click="changepercent">加</button>
    <button v-on:click="reset">reset</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      progress:0,
      visible:true
    }
  },
  methods:{
    changepercent:function () {
      this.progress = this.progress+10;
      if(this.progress == 100){
        this.visible = false;
      }
    },
    reset:function (){
      this.progress = 0;
      this.visible = true;
    }
  }
}

</script>

<style>


</style>
