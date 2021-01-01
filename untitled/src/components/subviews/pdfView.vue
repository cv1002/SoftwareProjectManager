<template>
  <div>
    <div class="tools">
      <el-button :theme="'default'" :title="'基础按钮'" class="mr10" type="submit" @click.stop="clock"> 顺时针
      </el-button>
      <el-button :theme="'default'" :title="'基础按钮'" class="mr10" type="submit" @click.stop="counterClock"> 逆时针
      </el-button>
      <i class="el-icon-zoom-in i-style" @click="handlein"></i>
      <i class="el-icon-zoom-out i-style" @click="handleout"></i>
    </div>
    <div class="pdf-style" :style="{width:pdfsize+'%'}">
      <pdf ref="pdf" :page="pageNum" :rotate="pageRotate" :src="url" @error="pdfError($event)"
           @progress="loadedRatio = $event" @page-loaded="pageLoaded($event)" @num-pages="pageTotalNum=$event"
           @link-clicked="page = $event">
      </pdf>
    </div>
    <div class="div1">
      <div class="page">
        <el-button :theme="'default'" :title="'基础按钮'" class="mr10" type="submit" @click.stop="prePage"> 上一页
        </el-button>
      </div>
      <div class="page page2">{{ pageNum }}/{{ pageTotalNum }}</div>
      <div class="page">
        <el-button :theme="'default'" :title="'基础按钮'" class="mr10" type="submit" @click.stop="nextPage"> 下一页
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf';

export default {
  name: 'Home',
  components: {
    pdf
  },
  data() {
    return {
      url: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
      pageNum: 1,
      pageTotalNum: 1,
      pageRotate: 0,
      // 加载进度
      loadedRatio: 0,
      curPageNum: 0,
      pdfsize:70
    };
  },
  mounted: function() {
  },
  methods: {
    // 上一页函数，
    prePage() {
      let page = this.pageNum;
      page = page > 1 ? page - 1 : this.pageTotalNum;
      this.pageNum = page;
    },
    // 下一页函数
    nextPage() {
      let page = this.pageNum;
      page = page < this.pageTotalNum ? page + 1 : 1;
      this.pageNum = page;
    },
    // 页面顺时针翻转90度。
    clock() {
      this.pageRotate += 90;
    },
    // 页面逆时针翻转90度。
    counterClock() {
      this.pageRotate -= 90;
    },
    // 页面加载回调函数，其中e为当前页数
    pageLoaded(e) {
      this.curPageNum = e;
    },
    // 其他的一些回调函数。
    pdfError(error) {
      console.error(error);
    },
    handlein(){
      this.pdfsize=this.pdfsize+10;
    },
    handleout(){
      this.pdfsize=this.pdfsize-10;
    }
  }
};
</script>

<style scoped>
.pdf-style{
  margin: auto;
}
.div1{
  margin-left: 40%;
  margin-top: 20px;
}
.page{
  float: left;
}
.page2{
  margin-top: 8px;
}
.i-style{
  font-size: 25px;
  color: gray;
}
.tools{
  letter-spacing: 10px;
}
</style>