<template>
  <div>
    <div style="width: 20%;float: left">
      <p>文件列表:</p>
      <div v-for="(item,index) in pdfurl" style="text-decoration: underline" @click="pdfchange(index)">{{ item.name }}
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
      url: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
      pdfurl: [
        {
          name: 'PDF1',
          url: require('@/statics/pdf/需求管理系统.pdf')
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
      this.url = this.pdfurl[index].url,
      console.log(this.url);
    }
  }
};
</script>

<style scoped>

</style>