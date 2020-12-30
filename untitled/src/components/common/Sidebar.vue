<template>
    <div class="sidebar">
        <el-menu
            :collapse="collapse"
            :default-active="onRoutes"
            active-text-color="#20a0ff"
            background-color="#324157"
            class="sidebar-el-menu"
            router
            text-color="#bfcbd9"
            unique-opened
        >
            <template v-for="item in items" v-if="username=='admin'">
                <template v-if="item.subs">
                    <el-submenu :key="item.index" :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :key="subItem.index"
                                :index="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :key="subItem.index"
                                :index="subItem.index"
                            >{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :key="item.index" :index="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
            <template v-for="i in items2" v-if="username=='tang'">
                <template>
                    <el-menu-item :key="i.index" :index="i.index">
                        <i :class="i.icon"></i>
                        <span slot="title">{{ i.title }}</span>
                    </el-menu-item>
                </template>
            </template>
            <template v-for="i in items3" v-if="username=='teacher'">
                <template>
                    <el-menu-item :key="i.index" :index="i.index">
                        <i :class="i.icon"></i>
                        <span slot="title">{{ i.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';

export default {
    data() {
        return {
            username: localStorage.getItem('ms_username'),
            collapse: false,
            items: [
                {
                    icon: 'el-icon-lx-home',
                    index: 'dashboard',
                    title: '系统首页'
                },
                {
                    icon: 'el-icon-lx-copy',
                    index: 'tabs',
                    title: '公告'
                },
                {
                    icon: 'el-icon-lx-warn',
                    index: '7',
                    title: '错误处理',
                    subs: [
                        {
                            index: 'permission',
                            title: '权限测试'
                        },
                        {
                            index: '404',
                            title: '404页面'
                        }
                    ]
                },
                {
                    icon: 'el-icon-ice-cream-round',
                    index: 'entire',
                    title: '项目进度'
                },
                {
                    icon: 'el-icon-lollipop',
                    index: 'individual',
                    title: '个人任务'
                },
                {
                    icon: 'el-icon-upload',
                    index: 'homework',
                    title: '作业提交'
                },
                {
                    icon: 'el-icon-pie-chart',
                    index: 'journal',
                    title: '项目日志'
                },
                {
                    icon: 'el-icon-chat-line-round',
                    index: 'vueeditor',
                    title: '交流讨论'
                }
            ],
            items2: [
                {
                    icon: 'el-icon-lx-home',
                    index: 'dashboard',
                    title: '系统首页'
                },
                {
                    icon: 'el-icon-lx-group',
                    index: 'groupinfo',
                    title: '小组信息'
                },
                {
                    icon: 'el-icon-document-checked',
                    index: 'groupsetup',
                    title: '小组选题'
                },
                {
                    icon: 'el-icon-lx-copy',
                    index: 'tabs',
                    title: '公告'
                },
                {
                    icon: 'el-icon-document',
                    index: 'missionset',
                    title: '任务发布'
                },
                {
                    icon: 'el-icon-upload2',
                    index: 'progressset',
                    title: '进度上传'
                },
                {
                    icon: 'el-icon-chat-line-round',
                    index: 'vueeditor',
                    title: '交流讨论'
                },
                {
                    icon: 'el-icon-pie-chart',
                    index: 'journal',
                    title: '项目日志'
                }
            ],
            items3:
                [
                    {
                        icon: 'el-icon-lx-home',
                        index: 'dashboard',
                        title: '系统首页'
                    },
                    {
                        icon: 'el-icon-s-custom',
                        index: 'groupprogress',
                        title: '项目各小组进度'
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: 'messagesend',
                        title: '公告发布'
                    }
                ]
        };
    }
    ,

    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    }
    ,
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
    width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}

.sidebar > ul {
    height: 100%;
}
</style>
