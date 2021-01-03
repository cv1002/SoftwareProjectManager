import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/teacherboard',
                    component: () => import('../components/teacherviews/DashboardOfTeachers'),
                    meta: { title: '老师首页' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: 'schart图表' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/entire',
                    component: () => import('../components/subviews/Entire'),
                    meta: { title: '项目整体进度' }
                },
                {
                    path: '/homework',
                    component: () => import('../components/subviews/Homework'),
                    meta: { title: '作业提交区域' }
                },
                {
                    path: '/pdfview',
                    component: () => import('../components/subviews/pdfView'),
                    meta: { title: 'PDF预览' }
                },
                {
                    path: '/individual',
                    component: () => import('../components/subviews/Individual'),
                    meta: { title: '项目个人进度' }
                },
                // {
                //     path: '/journal',
                //     component: () => import('../components/subviews/Journal'),
                //     meta: { title: '项目日志记录' }
                // },
                {
                    path: '/person',
                    component: () => import('../components/subviews/Person'),
                    meta: { title: '个人资料' }
                },
                {
                    path: '/vueeditor',
                    component: () => import('../components/subviews/VueEditor'),
                    meta: { title: '交流讨论区域' }
                },
                {
                    path: '/groupinfo',
                    component: () => import('../components/leaderviews/GroupInfo'),
                    meta: { title: '小组信息' }
                },
                {
                    path: '/groupsetup',
                    component: () => import('../components/leaderviews/GroupSetUp'),
                    meta: { title: '小组选题' }
                },
                {
                    path: '/missionset',
                    component: () => import('../components/leaderviews/MissionSet'),
                    meta: { title: '任务发布' }
                },
                {
                    path: '/progressset',
                    component: () => import('../components/subviews/Homework'),
                    meta: { title: '进度上传' }
                },
                {
                    path: '/groupprogress',
                    component: () => import('../components/teacherviews/GroupProgress'),
                    meta: { title: '项目各小组进度' }
                },
                {
                    path: '/ogp',
                    component: () => import('../components/teacherviews/OneGroupProgress'),
                    meta: { title: '项目单小组进度' }
                },
                {
                    path: '/fileview',
                    component: () => import('../components/teacherviews/FileView'),
                    meta: { title: '文件预览' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
