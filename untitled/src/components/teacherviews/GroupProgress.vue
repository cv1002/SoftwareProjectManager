<template>
  <div style="margin-left: 50px;margin-top: 20px">
    <div style="float: left">
      <img alt="" class="img-style" src="../../statics/img/progress.png">
    </div>
    <div>
      <div style="height: 120px;margin-left: 700px;">
        <img alt="" class="img-style2" src="../../statics/img/progress2.png">
      </div>
      <br>
      <div style="height: 110px;margin-left: 700px;">
        <img alt="" class="img-style2" src="../../statics/img/advertiseme.png">
      </div>
    </div>
    <br>
    <el-row :gutter="20" style="margin-top: 20px">
      <div style="margin-left: 10px;color: #473C8B;font-size: 20px">
        小组数据
      </div>
      <br>
      <router-link v-for="(item,index) in group" :key="index"
                   :to="{path: '/ogp', query: {groupnumber:item.groupData.TeamID,groupname:item.groupData.TeamName}}">
        <el-col :span="8">
          <el-card class="box-card border-1px" shadow="always">
            <div slot="header" class="font" style="display: flex;justify-content: center;align-items: center">
              小组 {{ item.groupData.TeamName }}
            </div>
            <div class="font">小组描述：{{ item.groupData.TeamDescription }}</div>
          </el-card>
        </el-col>
      </router-link>
    </el-row>
  </div>
</template>

<script>
export default {
  created() {
    this.fetchGroup();
  },
  data() {
    return {
      group: []
    };
  },
  methods: {
    fetchGroup() {
      let formData = new FormData();
      formData.append('UserID', this.$cookie.get('UserID'));
      formData.append('UserPassword', this.$cookie.get('UserPassword'));
      this.$axios({
        url: '/get/TeamMemberLists',
        method: 'POST',
        data: formData
      }).then(response => {
        console.log(response.data);
        for (let key in response.data) {
          let teamIDReg = /(?<=TeamID=)\d+(?=,)/g;
          let teamNameReg = /(?<=TeamName=)(\S*)(?=,)/g;
          let teamDescriptionReg = /(?<=TeamDescription=)(\S*)(?=\))/g;
          let group = {
            groupData: {
              TeamID: key.match(teamIDReg)[0],
              TeamName: key.match(teamNameReg)[0],
              TeamDescription: key.match(teamDescriptionReg)[0]
            },
            memberData: response.data[key]
          };
          this.group.push(group);
        }
      });
    }
  }
};
</script>


<style scoped>
.font {
  font-family: "Cambria Math", "Kaiti", "楷体", "楷体", sans-serif;
}

.el-card {
  min-width: 380px;
  margin-right: 20px;
  transition: all .5s;
}

.el-card:hover {
  margin-top: -5px;
}

.img-style {
  width: 630px;
  height: 270px;
  border-radius: 5px;
}

.img-style2 {
  width: 300px;
  height: 130px;
  border-radius: 5px;
}
</style>