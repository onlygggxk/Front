import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/Types',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Types',
        component: () => import('@/views/Types/index'),
        meta: { title: '知识分类', icon: 'el-icon-notebook-1' }
      }
    ]
  }, {
    path: '/Knowledge',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Knowledge',
        component: () => import('@/views/Knowledge/index'),
        meta: { title: '科普知识', icon: 'el-icon-reading' }
      }
    ]
  },
  {
    path: '/Notice',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Notice',
        component: () => import('@/views/Notice/index'),
        meta: { title: '公告管理', icon: 'el-icon-files' }
      }
    ]
  },
  {
    path: '/Student',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Student',
        component: () => import('@/views/Student/index'),
        meta: { title: '学生管理', icon: 'el-icon-s-operation' }
      }
    ]
  }, {
    path: '/Healthy',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Healthy',
        component: () => import('@/views/Healthy/index'),
        meta: { title: '健康数据', icon: 'el-icon-s-operation' }
      }
    ]
  },{
    path: '/Teachers',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Teachers',
        component: () => import('@/views/Teachers/index'),
        meta: { title: '老师管理', icon: 'el-icon-mouse' }
      }
    ]
  }, {
    path: '/Manage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Manage',
        component: () => import('@/views/Manage/index'),
        meta: { title: '管理员管理', icon: 'el-icon-mobile' }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
