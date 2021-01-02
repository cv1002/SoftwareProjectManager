<template>
  <div>
    <div>
      <h1>{{ groupname }}</h1>
    </div>
    <div>
      <div style="float: left; width:30%">
        提交文件
      </div>
      <div style="float: left;width:40%">
        小组成员
        <p v-for="item in group[groupnumber].group">{{ item.membername }}</p>
      </div>
      <div style="float: left;width:30%">
        进度
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groupnumber: this.$route.query.groupnumber,
      groupname: this.$route.query.groupname,
      group: [
        {
          group: [
            { membername: 'zhang' },
            { membername: 'wang' },
            { membername: 'li' },
            { membername: 'zhu' },
            { membername: 'wu' },
            { membername: 'shan' }
          ]
        },
        {
          group: [
            { membername: 'zhang' },
            { membername: 'wang' },
            { membername: 'li' },
            { membername: 'zhu' },
            { membername: 'wu' },
            { membername: 'shan' }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>