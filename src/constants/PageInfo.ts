
import { PageInfoInterface } from '@/interface'
export const PAGEINFO : PageInfoInterface[] = [
  {
    path: '/',
    icon: 'home',
    label: '社区',
    twoToneColor: '#52c41a',
    key: 'home',
    SubMenu: false,
  },
  {
    path: 'myCat',
    icon: 'heart',
    label: '我的喵',
    twoToneColor: '#096dd9',
    key: 'myCat',
    SubMenu: false,
  },
  {
    path: 'adopt',
    icon: 'heart',
    label: '领养',
    twoToneColor: '#40a9ff',
    key: 'adopt',
    SubMenu: false,
  },
  {
    path: 'board',
    icon: 'heart',
    label: '寄宿',
    twoToneColor: '#faad14',
    key: 'board',
    SubMenu: false,
  },
  {
    path: 'extend',
    icon: 'heart',
    label: '扩展',
    twoToneColor: '#ffff00',
    key: 'extend',
    SubMenu: true,
    children: [
      {
      path: 'extend',
      icon: 'smile',
      label: '品类介绍',
      twoToneColor: '#52c41a',
      key: 'extend:1',
      SubMenu: false,
    },
    {
      path: 'extend',
      icon: 'datasources',
      label: '必备知识',
      twoToneColor: '#52c41a',
      key: 'extend:2',
      SubMenu: false,
    },
    {
      path: 'extend',
      icon: 'datasources',
      label: '产品推荐 ',
      twoToneColor: '#52c41a',
      key: 'extend:3',
      SubMenu: false,
    },
    ]
  },
  {
    path: 'activity',
    icon: 'heart',
    label: '活动',
    twoToneColor: '#ffa500',
    key: 'activity',
    SubMenu: true,
    children: [
      {
      path: 'activity',
      icon: 'smile',
      label: '榜单',
      twoToneColor: '#52c41a',
      key: 'activity:1',
      SubMenu: false,
    },
    {
      path: 'activity',
      icon: 'datasources',
      label: '投票',
      twoToneColor: '#52c41a',
      key: 'activity:2',
      SubMenu: false,
    },
    {
      path: 'activity',
      icon: 'datasources',
      label: '奖励 ',
      twoToneColor: '#52c41a',
      key: 'activity:3',
      SubMenu: false,
    },
    ]
  },
  // {
  //   path: 'inform',
  //   icon: 'message',
  //   label: '消息 ',
  //   twoToneColor: '#52c41a',
  //   key: 'inform',
  //   SubMenu: false,
  // },
]