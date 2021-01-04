<template>
  <div>
    <div style="width: 20%;float: left">
      <el-table :data="pdfurl">
        <el-table-column label="文件名" prop="FileRealName" width="170" />
        <el-table-column label="切换">
          <template slot-scope="scope">
            <el-button size="mini"
                       type="primary" @click.native.prevent="pdfchangeByFileID(scope.row['FileID'])">
              <i class="el-icon-arrow-right el-icon--right" />
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <PdfView :url="url"></PdfView>
    </div>
  </div>
</template>

<script>
import PdfView from '../../components/subviews/pdfView';
import decodeUTF8 from '../../utils/decodeUTF8';

export default {
  name: 'FileView',
  components: { PdfView },
  mounted() {
    let teamID = this.$route.query.teamID;
    let formData = new FormData();
    formData.append('UserID', this.$cookie.get('UserID'));
    formData.append('UserPassword', this.$cookie.get('UserPassword'));
    formData.append('TeamID', teamID);
    this.$axios({
      url: '/get/files',
      method: 'POST',
      data: formData
    }).then((response) => {
      this.pdfurl = response.data['files'];
      this.pdfchange(0);
    });
  },
  data() {
    return {
      teamID: this.$route.query.teamID,
      url: '',
      pdfurl: []
    };
  },
  methods: {
    pdfchange(index) {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      let fileID = this.pdfurl[index]['FileID'];
      this.$axios({
        url: `get/file/${fileID}`,
        method: 'POST',
        data: formData,
        responseType: 'blob'
      }).then(response => {
        let fileName = response.headers['content-disposition'].match(/filename=(.*)/)[1];
        fileName = decodeUTF8(fileName);
        let fileBack = new File([(response.data)], fileName, { type: 'application/pdf;charset=UTF-8' });
        this.url = window.URL.createObjectURL(fileBack);
      });
    },
    pdfchangeByFileID(fileID) {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      this.$axios({
        url: `get/file/${fileID}`,
        method: 'POST',
        data: formData,
        responseType: 'blob'
      }).then(response => {
        let fileName = response.headers['content-disposition'].match(/filename=(.*)/)[1];
        fileName = decodeUTF8(fileName);
        let fileBack = new File([(response.data)], fileName, { type: 'application/pdf;charset=UTF-8' });
        this.url = window.URL.createObjectURL(fileBack);
      });
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