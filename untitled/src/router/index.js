import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from "../views/Main";
import Login from "../views/Login";
import Entire from "../subviews/Entire";
import Individual from "../subviews/Individual";
import Homework from "../subviews/Homework";
import Tabs from "../subviews/Tabs";
import VueEditor from "../subviews/VueEditor";
import Journal from "@/subviews/Journal";
import Person from "@/subviews/Person";
import GroupProgress from "@/teacherviews/GroupProgress";
import OneGroupProgress from "@/teacherviews/OneGroupProgress";

//安装路由
Vue.use(VueRouter);


//配置导出路由，别人可以使用
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      //路由路径
      path: '/main',
      name: 'main',
      props: true,
      //跳转的组件
      component: Main,
      redirect: '/entire',
      children: [
        {path: '/entire', component: Entire},
        {path: '/individual', component: Individual},
        {path: '/homework', component: Homework},
        {path: '/tabs', component: Tabs},
        {path: '/vueeditor', component: VueEditor},
        {path: '/journal',component: Journal},
        {path: '/person',component: Person},
        {path: '/groupprogress',component: GroupProgress},
        {path: '/ogp',component: OneGroupProgress}
      ]
    },
    {
      //路由路径
      path: '/login',
      name: 'login',
      //跳转的组件
      component: Login
    },

  ]
});
