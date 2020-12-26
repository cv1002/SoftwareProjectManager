<template>
  <div>
    {{groupname}}
    <br>
    <el-row>
      <el-col :span="8">
        <p>{{group[groupnumber].group[0].membername}}</p>
        <el-progress :text-inside="true" :stroke-width="24"
                     :percentage='group[groupnumber].group[0].memberpercentage'></el-progress>
      </el-col>
      <el-col :span="8">
        <p>{{group[groupnumber].group[1].membername}}</p>
        <el-progress :text-inside="true" :stroke-width="24"
                     :percentage='group[groupnumber].group[1].memberpercentage'></el-progress>
      </el-col>
      <el-col :span="8">
        <p>{{group[groupnumber].group[2].membername}}</p>
        <el-progress :text-inside="true" :stroke-width="24"
                     :percentage='group[groupnumber].group[2].memberpercentage'></el-progress>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <p>{{group[groupnumber].group[3].membername}}</p>
        <el-progress :text-inside="true" :stroke-width="24"
                     :percentage='group[groupnumber].group[3].memberpercentage'></el-progress>
      </el-col>
      <el-col :span="8">
        <p>{{group[groupnumber].group[4].membername}}</p>
        <el-progress :text-inside="true" :stroke-width="24"
                     :percentage= 'group[groupnumber].group[4].memberpercentage'></el-progress>
      </el-col>
      <el-col :span="8">
        <p>{{group[groupnumber].group[5].membername}}</p>
        <el-progress :text-inside="true" :stroke-width="24"
                     :percentage='group[groupnumber].group[5].memberpercentage'></el-progress>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return{
      groupnumber: this.$route.query.groupnumber,
      groupname:this.$route.query.groupname,
      group:[
        {
          group: [
            {membername:'zhang',memberpercentage:10},
            {membername:'wang',memberpercentage:20},
            {membername:'li',memberpercentage:30},
            {membername:'zhu',memberpercentage:40},
            {membername:'wu',memberpercentage:50},
            {membername:'shan',memberpercentage:60}
            ]
        },
        {
          group:[
            {membername:'zhang',memberpercentage:60},
            {membername:'wang',memberpercentage:50},
            {membername:'li',memberpercentage:40},
            {membername:'zhu',memberpercentage:30},
            {membername:'wu',memberpercentage:20},
            {membername:'shan',memberpercentage:10}
          ]
        }
      ]

    }
  }
}
</script>

<style scoped>

</style>