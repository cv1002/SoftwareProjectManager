<template>

  <!-- <q-page class="q-pa-sm"> -->
  <div class="app-wrap">
    <div class="title">
      <!-- <h1>甘特图</h1> -->
    </div>
    <gantt-elastic :options="options" :tasks="tasks" @tasks-changed="tasksUpdate" @options-changed="optionsUpdate"
                   @dynamic-style-changed="styleUpdate">
      <gantt-header slot="header"></gantt-header>
    </gantt-elastic>
  </div>
  <!-- <div class="q-mt-md" />
    <q-btn @click="addTask" icon="mdi-plus" label="Add task" />
  </q-page> -->
</template>

<style></style>

<script>
<<<<<<< HEAD
import GanttElastic from 'gantt-elastic';
import GanttHeader from 'gantt-elastic-header';
import dayjs from 'dayjs';
=======
import GanttElastic from "gantt-elastic";
import GanttHeader from "gantt-elastic-header";
import dayjs from "dayjs";
>>>>>>> pr/4

function getDate(hours) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const timeStamp = new Date(
      currentYear,
      currentMonth,
      currentDay,
      0,
      0,
      0
  ).getTime();
  return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
}

let tasks = [{
  id: 1,
<<<<<<< HEAD
  label: '确定项目',
  user: '<a href="" target="_blank" style="color:#0077c0;">项目负责人</a>',
  start: getDate(-24 * 5),
  duration: 24 * 60 * 60 * 1000,
  percent: 85,
  type: 'project'
  //collapsed: true,
},
  {
    id: 2,
    label: '编写需求说明书',
=======
  label: "确定项目",
  user: '<a href="" target="_blank" style="color:#0077c0;">项目负责人</a>',
  start: getDate(-24 * 5),
  duration: 24 * 60 * 60 * 1000,
  percent: 100,
  type: "project",
  collapsed: true,
  style: {
  base: {
  fill: "#00FFFF",
  stroke: "#7E349D",
  },
  },
},
  {
    id: 2,
    label: "编写需求说明书",
>>>>>>> pr/4
    user: '<a href=""" target=" _blank" style="color:#0077c0;">文档设计者</a>',
    start: getDate(-24 * 4),
    duration: 24 * 60 * 60 * 1000,
    percent: 50,
<<<<<<< HEAD
    type: 'milestone',
    collapsed: true,
    style: {
      base: {
        fill: '#1EBC61',
        stroke: '#0EAC51'
      }
    }
  },
  {
    id: 3,
    label: '数据库设计',
=======
    type: "milestone",
    collapsed: true,
    style: {
      base: {
        fill: "#1EBC61",
        stroke: "#0EAC51",
      },
    },
  },
  {
    id: 3,
    label: "数据库设计",
>>>>>>> pr/4
    user: '<a href="" target="_blank" style="color:#0077c0;">后端人员</a>',
    start: getDate(-24 * 3),
    duration: 2 * 24 * 60 * 60 * 1000,
    percent: 100,
<<<<<<< HEAD
    type: 'task'
  },
  {
    id: 4,
    label: '前端页面设计',
=======
    type: "task",
    style: {
    base: {
    fill: "#FF00FF",
    stroke: "#0EAC51",
    },
    },
  },
  {
    id: 4,
    label: "前端页面设计",
>>>>>>> pr/4
    user: '<a href="" target="_blank" style="color:#0077c0;">设计人员</a>',
    start: getDate(-24 * 2),
    duration: 2 * 24 * 60 * 60 * 1000,
    percent: 50,
<<<<<<< HEAD
    type: 'task'
=======
    type: "task",
>>>>>>> pr/4
    // dependentOn: [3],
  },
  {
    id: 5,
<<<<<<< HEAD
    label: '后端接口设计',
=======
    label: "后端接口设计",
>>>>>>> pr/4
    user: '<a href="" target="_blank" style="color:#0077c0;">后端人员</a>',
    start: getDate(0),
    duration: 2 * 24 * 60 * 60 * 1000,
    percent: 10,
<<<<<<< HEAD
    type: 'milestone',
    style: {
      base: {
        fill: '#0287D0',
        stroke: '#0077C0'
      }
    }
  },
  {
    id: 6,
    label: '前端页面实现',
=======
    type: "milestone",
    style: {
      base: {
        fill: "#336666",
        stroke: "#0077C0",
      },
    },
  },
  {
    id: 6,
    label: "前端页面实现",
>>>>>>> pr/4
    user: '<a href="" target="_blank" style="color:#0077c0;">前端设计者</a>',
    start: getDate(24),
    duration: 24 * 60 * 60 * 1000,
    percent: 50,
<<<<<<< HEAD
    type: 'task',
    collapsed: true,
    style: {
      base: {
        fill: '#8E44AD',
        stroke: '#7E349D'
      }
    }
  },
  {
    id: 7,
    label: '后端人员培训',
=======
    type: "task",
    collapsed: true,
    style: {
      base: {
        fill: "#8E44AD",
        stroke: "#7E349D",
      },
    },
  },
  {
    id: 7,
    label: "后端人员培训",
>>>>>>> pr/4
    user: '<a href="" target="_blank" style="color:#0077c0;">后端人员</a>',
    // dependentOn: [6],
    start: getDate(24 * 2),
    duration: 4 * 24 * 60 * 60 * 1000,
    percent: 20,
<<<<<<< HEAD
    type: 'task',
    collapsed: true
  },
  {
    id: 8,
    label: '后端接口开发',
=======
    type: "task",
    collapsed: true,
    style: {
    base: {
    fill: "#99FF66",
    stroke: "#7E349D",
    },
    },
  },
  {
    id: 8,
    label: "后端接口开发",
>>>>>>> pr/4
    user: '<a href="" target="_blank" style="color:#0077c0;">后端组长</a>',
    // dependentOn: [7],
    start: getDate(24 * 3),
    duration: 7 * 24 * 60 * 60 * 1000,
    percent: 0,
<<<<<<< HEAD
    type: 'task'
  },
  {
    id: 9,
    label: '软件测试',
=======
    type: "task",
    style: {
    base: {
    fill: "#FFFFCC",
    stroke: "#7E349D",
    },
    },
  },
  {
    id: 9,
    label: "软件测试",
>>>>>>> pr/4
    user: '<a href="" target=" _blank" style="color:#0077c0;">测试人员</a>',
    // parentId: 8,
    // dependentOn: [8, 7],
    start: getDate(24 * 4),
    duration: 3 * 24 * 60 * 60 * 1000,
    percent: 20,
<<<<<<< HEAD
    type: 'task',
    style: {
      base: {
        fill: '#8E44AD',
        stroke: '#7E349D'
      }
    }
  },
  {
    id: 10,
    label: '编写各种文档',
    user: '<a href="" target="_blank" style="color:#0077c0;">所有成员</a>',
    start: getDate(24 * 5),
    duration: 3 * 24 * 60 * 60 * 1000,
    percent: 0,
    type: 'task'
  }
];
let options = {
  taskMapping: {
    progress: 'percent'
  },
  maxRows: 100,
  maxHeight: 500,
  title: {
    label: '项目',
    html: false
  },
  row: {
    height: 24
  },
  calendar: {
    hour: {
      display: true
    }
  },
  chart: {
    progress: {
      bar: false
    },
    expander: {
      display: true
    }
  },
  taskList: {
    expander: {
      straight: false
    },
    columns: [{
      id: 1,
      label: '任务编号',
      value: 'id',
      width: 50
    },
      {
        id: 2,
        label: '具体描述',
        value: 'label',
=======
    type: "task",
    style: {
      base: {
        fill: "#FF0099",
        stroke: "#7E349D",
      },
    },
  },
  {
    id: 10,
    label: "编写各种文档",
    user: '<a href="" target="_blank" style="color:#0077c0;">所有成员</a>',
    start: getDate(24 * 5),
    duration: 3 * 24 * 60 * 60 * 1000,
    percent: 0,
    type: "task",
    style: {
    base: {
    fill: "#993366",
    stroke: "#7E349D",
    },
    },
  },
];
let options = {
  taskMapping: {
    progress: "percent",
  },
  maxRows: 100,
  maxHeight: 500,
  title: {
    label: "项目",
    html: false,
  },
  row: {
    height: 24,
  },
  calendar: {
    hour: {
      display: true,
    },
  },
  chart: {
    progress: {
      bar: false,
    },
    expander: {
      display: true,
    },
  },
  taskList: {
    expander: {
      straight: false,
    },
    columns: [{
      id: 1,
      label: "任务编号",
      value: "id",
      width: 50,
    },
      {
        id: 2,
        label: "具体描述",
        value: "label",
>>>>>>> pr/4
        width: 200,
        expander: true,
        html: true,
        events: {
          click({
                  data,
                  column
                }) {
<<<<<<< HEAD
            alert('description clicked!\n' + data.label);
          }
        }
      },
      {
        id: 3,
        label: '负责人',
        value: 'user',
        width: 80,
        html: true
      },
      {
        id: 3,
        label: '开始日期',
        value: (task) => dayjs(task.start).format('YYYY-MM-DD'),
        width: 78
      },
      {
        id: 4,
        label: '任务类型',
        value: 'type',
        width: 68
      },
      {
        id: 5,
        label: '完成度 /%',
        value: 'progress',
        width: 50,
        style: {
          'task-list-header-label': {
            'text-align': 'center',
            width: '100%'
          },
          'task-list-item-value-container': {
            'text-align': 'center',
            width: '100%'
          }
        }
      }
    ]
  },
  locale: {
    name: 'zh',
    Now: 'Now',
    weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    months: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月'
    ]
  }
};

export default {
  name: 'Gantt',
  components: {
    GanttElastic,
    GanttHeader
=======
            alert("description clicked!\n" + data.label);
          },
        },
      },
      {
        id: 3,
        label: "负责人",
        value: "user",
        width: 80,
        html: true,
      },
      {
        id: 3,
        label: "开始日期",
        value: (task) => dayjs(task.start).format("YYYY-MM-DD"),
        width: 78,
      },
      {
        id: 4,
        label: "任务类型",
        value: "type",
        width: 68,
      },
      {
        id: 5,
        label: "完成度 /%",
        value: "progress",
        width: 50,
        style: {
          "task-list-header-label": {
            "text-align": "center",
            width: "100%",
          },
          "task-list-item-value-container": {
            "text-align": "center",
            width: "100%",
          },
        },
      },
    ],
  },
  locale: {
    name: "zh",
    Now: "Now",
    weekdays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    months: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ],
  },
};

export default {
  name: "Gantt",
  components: {
    GanttElastic,
    GanttHeader,
>>>>>>> pr/4
  },
  data() {
    return {
      tasks,
      options,
      dynamicStyle: {},
<<<<<<< HEAD
      lastId: 16
=======
      lastId: 16,
>>>>>>> pr/4
    };
  },
  methods: {
    addTask() {
      this.tasks.push({
        id: this.lastId++,
        label: '<a href="https://images.pexels.com/photos/423364/pexels-photo-423364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" target="_blank" style="color:#0077c0;">Yeaahh! you have added a task bro!</a>',
        user: '<a href="https://images.pexels.com/photos/423364/pexels-photo-423364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" target="_blank" style="color:#0077c0;">Awesome!</a>',
        start: getDate(24 * 3),
        duration: 24 * 60 * 60 * 1000,
        percent: 50,
<<<<<<< HEAD
        type: 'project'
=======
        type: "project",
>>>>>>> pr/4
      });
    },
    tasksUpdate(tasks) {
      this.tasks = tasks;
    },
    optionsUpdate(options) {
      this.options = options;
<<<<<<< HEAD
    },
    styleUpdate(style) {
      this.dynamicStyle = style;
    }
  }
=======
    },
    styleUpdate(style) {
      this.dynamicStyle = style;
    },
  },
>>>>>>> pr/4
};
</script>