<template>
  <div>
    <div class="tools">
<<<<<<< HEAD
      <el-button :theme="'default'" :title="'基础按钮'" class="mr10" type="submit" @click.stop="prePage"> 上一页
      </el-button>
      <el-button :theme="'default'" :title="'基础按钮'" class="mr10" type="submit" @click.stop="nextPage"> 下一页
      </el-button>
      <div class="page">{{ pageNum }}/{{ pageTotalNum }}</div>
      <el-button :theme="'default'" :title="'基础按钮'" class="mr10" type="submit" @click.stop="clock"> 顺时针
      </el-button>
      <el-button :theme="'default'" :title="'基础按钮'" class="mr10" type="submit" @click.stop="counterClock"> 逆时针
      </el-button>
=======
      <bk-button :theme="'default'" :title="'基础按钮'" class="mr10" type="submit" @click.stop="prePage"> 上一页
      </bk-button>
      <bk-button :theme="'default'" :title="'基础按钮'" class="mr10" type="submit" @click.stop="nextPage"> 下一页
      </bk-button>
      <div class="page">{{ pageNum }}/{{ pageTotalNum }}</div>
      <bk-button :theme="'default'" :title="'基础按钮'" class="mr10" type="submit" @click.stop="clock"> 顺时针
      </bk-button>
      <bk-button :theme="'default'" :title="'基础按钮'" class="mr10" type="submit" @click.stop="counterClock"> 逆时针
      </bk-button>
>>>>>>> pr/4
    </div>
    <pdf ref="pdf" :page="pageNum" :rotate="pageRotate" :src="url" @error="pdfError($event)"
         @progress="loadedRatio = $event" @page-loaded="pageLoaded($event)" @num-pages="pageTotalNum=$event"
         @link-clicked="page = $event">
    </pdf>
  </div>
</template>

<script>
<<<<<<< HEAD
import pdf from 'vue-pdf';
=======
import pdf from 'vue-pdf'
>>>>>>> pr/4

export default {
  name: 'Home',
  components: {
    pdf
  },
  data() {
    return {
<<<<<<< HEAD
      url: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
=======
      url: "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
>>>>>>> pr/4
      pageNum: 1,
      pageTotalNum: 1,
      pageRotate: 0,
      // 加载进度
      loadedRatio: 0,
<<<<<<< HEAD
      curPageNum: 0
    };
  },
  mounted: function () {
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
    }
  }
};
=======
      curPageNum: 0,
    }
  },
  mounted: function () {
  },
  methods: {
    // 上一页函数，
    prePage() {
      var page = this.pageNum
      page = page > 1 ? page - 1 : this.pageTotalNum
      this.pageNum = page
    },
    // 下一页函数
    nextPage() {
      var page = this.pageNum
      page = page < this.pageTotalNum ? page + 1 : 1
      this.pageNum = page
    },
    // 页面顺时针翻转90度。
    clock() {
      this.pageRotate += 90
    },
    // 页面逆时针翻转90度。
    counterClock() {
      this.pageRotate -= 90
    },
    // 页面加载回调函数，其中e为当前页数
    pageLoaded(e) {
      this.curPageNum = e
    },
    // 其他的一些回调函数。
    pdfError(error) {
      console.error(error)
    },
  }
}
>>>>>>> pr/4
</script>

<style scoped>

</style>