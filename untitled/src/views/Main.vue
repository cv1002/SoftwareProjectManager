<template>
  <div>
    <div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        aria-setsize=""
        active-text-color="#ffd04b">
        <el-col :span="16">
          <el-menu-item index="1" class="div3">
            <i class="el-icon-s-fold"></i>
            <font class="font1">项目管理系统
            </font>
          </el-menu-item>
        </el-col>
        <el-col :span="8">
          <el-menu-item index="2">
            <a href="/login" target="_self" class="distence_to_border">
              <el-avatar :size="40" :src="circleUrl">
              </el-avatar>
            </a>
            {{ word }} &nbsp;
            <a href="/main" v-on:click="logout" class="atype">退出</a>
          </el-menu-item>
        </el-col>
      </el-menu>
    </div>
    <div class="div1">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <router-link to="/entire" class="router-link-active" style="color: white">
          <el-menu-item index="1" class="menu1">
            <i class="el-icon-ice-cream-round"></i>
            <span slot="title">
                  项目整体进展</span>
          </el-menu-item>
        </router-link>
        <router-link to="/individual" class="router-link-active" style="color: white">
          <el-menu-item index="2" class="menu1">
            <i class="el-icon-lollipop"></i>
            <span slot="title">
                  项目个人进展</span>
          </el-menu-item>
        </router-link>
        <router-link to="/homework" class="router-link-active" style="color: white">
          <el-menu-item index="3" class="menu1">
            <i class="el-icon-s-order"></i>
            <span slot="title">
                  作业提交区域</span>
          </el-menu-item>
        </router-link>
        <router-link to="/individual" class="router-link-active" style="color: white">
          <el-menu-item index="4" class="menu1">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">绘制图表区域</span>
          </el-menu-item>
        </router-link>
        <router-link to="/vueeditor" class="router-link-active" style="color: white">
          <el-menu-item index="5" class="menu1">
            <i class="el-icon-chat-line-round"></i>
            <span slot="title">交流讨论区域</span>
          </el-menu-item>
        </router-link>
        <router-link to="/tabs" class="router-link-active" style="color: white">
          <el-menu-item index="6" class="menu1">
            <i class="el-icon-chat-dot-square"></i>
            <span slot="title">教师反馈区域</span>
          </el-menu-item>
        </router-link>
        <el-menu-item index="7" class="menu1" disabled>
          <i class="el-icon-setting"></i>
          <span slot="title">权限管理</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="div2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: this.$cookie.get('name'),
      activeIndex: '1',
      activeIndex2: '1',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logout: function () {
      this.$cookie.delete('name');
    }
  }
}
</script>

<style>
.distence_to_border {
  margin-left: 340px;
}

.menu1 {
  height: 80px;
}

.div1 {
  width: 20%;
  height: 650px;
  background-color: #545c64;
  float: left;
}

.div2 {
  width: 80%;
  height: 650px;
  float: left;
}

.router-link-active {
  text-decoration: none;
}

.atype {
  text-decoration: none;
  color: white;
}

.font1 {
  font-size: 30px;
}

.div3 {
  height: 80px;
}


</style>



