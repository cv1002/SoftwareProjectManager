<template>
  <div>
    <div style="width: 20%;float: left">
      <p class="text">PDF文件列表:</p>
      <div v-for="(item,index) in pdfurl" class="text" style="text-decoration: underline" @click="pdfchange(index)">
        {{ item.name }}
      </div>
    </div>
    <div>
      <PdfView :url="url"></PdfView>
    </div>
  </div>
</template>

<script>
import PdfView from '@/components/subviews/pdfView';

export default {
  name: 'FileView',
  components: { PdfView },
  data() {
    return {
      url: this.$route.query.url,
      pdfurl: [
        {
          name: 'PDF1',
          url: 'https://vue.warmnight.site/pmbook.pdf'
        },
        {
          name: 'PDF2',
          url: require('@/statics/pdf/test.pdf')
        },
        {
          name: 'PDF3',
          url: require('@/statics/pdf/现代计算机组成原理实验讲义.pdf')
        }
      ]
    };
  },
  methods: {
    pdfchange(index) {
      this.url = this.pdfurl[index].url;
      console.log(this.url);
    }
  }
};
</script>

<style scoped>
.text {
  text-align: center;
  font-size: 20px;
}
</style>