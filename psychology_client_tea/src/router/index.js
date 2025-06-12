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
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: {title: '首页', icon: 'dashboard'}
    }]
  },
 {
    path: '/Teachers',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Teachers',
        component: () => import('@/views/Teachers/index'),
        meta: {title: '个人信息', icon: 'el-icon-mouse'}
      }
    ]
  },
  {
    path: '/test',
    component: Layout,
    name: '心理健康',
    meta: {title: '心理健康', icon: 'el-icon-tickets'},
    children: [
      {
        path: 'TestPaper',
        name: 'TestPaper',
        component: () => import('@/views/TestPaper/index'),
        meta: {title: '试卷管理', icon: 'el-icon-coordinate'}
      },
      {
        path: 'TestQuestions',
        name: 'TestQuestions',
        component: () => import('@/views/TestQuestions/index'),
        meta: {title: '组装试卷', icon: 'el-icon-magic-stick'}
      },
      {
        path: 'TestRules',
        name: 'TestRules',
        component: () => import('@/views/TestRules/index'),
        meta: {title: '判断规则', icon: 'el-icon-reading'}
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
        meta: { title: '学生信息', icon: 'el-icon-s-operation' }
      }
    ]
  },
  {
    path: '/Records',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Records',
        component: () => import('@/views/Records/index'),
        meta: {title: '测试记录', icon: 'el-icon-brush'}
      }
    ]
  },{
    path: '/Questions',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Questions',
        component: () => import('@/views/Questions/index'),
        meta: {title: '心理试题', icon: 'el-icon-umbrella'}
      }
    ]
  },
  // 404 page must be placed at the end !!!
  {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
