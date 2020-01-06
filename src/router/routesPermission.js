import BasicLayout from '@/components/BasicLayout.vue'

const Dashboard = () =>
  import(/* webpackChunkName: 'Dashboard' */ '@/views/Dashboard.vue')
const ArticleIndex = () =>
  import(/* webpackChunkName: 'article' */ '@/views/ArticleIndex.vue')
const ArticleClassify = () =>
  import(/* webpackChunkName: 'article' */ '@/views/ArticleClassify.vue')
const ArticleCreate = () =>
  import(/* webpackChunkName: 'article' */ '@/views/ArticleCreate.vue')
const ArticleEdit = () =>
  import(/* webpackChunkName: 'article' */ '@/views/ArticleEdit.vue')
const ArticleShow = () =>
  import(/* webpackChunkName: 'article' */ '@/views/ArticleShow.vue')
const SettingCompany = () =>
  import(/* webpackChunkName: 'setting' */ '@/views/SettingCompany.vue')
const SettingManager = () =>
  import(/* webpackChunkName: 'setting' */ '@/views/SettingManager.vue')
const SettingManagerCreate = () =>
  import(/* webpackChunkName: 'setting' */ '@/views/SettingManagerCreate.vue')
const SettingManagerEdit = () =>
  import(/* webpackChunkName: 'setting' */ '@/views/SettingManagerEdit.vue')

export default [
  {
    path: '/',
    name: 'Root',
    component: BasicLayout,
    redirect: { name: 'Dashboard' },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          nav: {
            icon: 'el-icon-pie-chart',
            title: '概况'
          },
          breadcrumb: {
            title: '概况'
          }
        }
      },
      {
        path: '/article',
        name: 'ArticleRoot',
        // 文章管理权限
        permission: 'article-manage',
        component: { render: h => h('router-view') },
        meta: {
          nav: {
            icon: 'el-icon-tickets',
            title: '文章'
          },
          breadcrumb: {
            title: '文章'
          }
        },
        children: [
          {
            path: '/article/classify',
            name: 'ArticleClassify',
            component: ArticleClassify,
            meta: {
              nav: {
                icon: 'el-icon-pie-chart',
                title: '文章分类'
              },
              breadcrumb: {
                title: '分类'
              }
            }
          },
          {
            path: '/article',
            name: 'ArticleIndex',
            component: ArticleIndex,
            meta: {
              nav: {
                icon: 'el-icon-document-copy',
                title: '所有文章'
              },
              breadcrumb: {
                title: '所有'
              }
            }
          },
          {
            path: '/article/create',
            name: 'ArticleCreate',
            component: ArticleCreate,
            meta: {
              nav: {
                icon: 'el-icon-document-add',
                title: '新建文章'
              },
              breadcrumb: {
                title: '新建'
              }
            }
          },
          {
            path: '/article/:id',
            name: 'ArticleShow',
            component: ArticleShow,
            meta: {
              breadcrumb: {
                title: '详情'
              }
            }
          },
          {
            path: '/article/:id/edit',
            name: 'ArticleEdit',
            component: ArticleEdit,
            meta: {
              breadcrumb: {
                title: '编辑'
              }
            }
          }
        ]
      },

      {
        path: '/setting',
        name: 'settingRoot',
        component: { render: h => h('router-view') },
        meta: {
          nav: {
            icon: 'el-icon-setting',
            title: '设置'
          },
          breadcrumb: {
            title: '设置'
          }
        },
        children: [
          {
            path: '/setting/company',
            name: 'SettingCompany',
            component: SettingCompany,
            // 公司设置权限
            permission: 'setting-company',
            meta: {
              nav: {
                icon: 'el-icon-office-building',
                title: '公司设置'
              },
              breadcrumb: {
                title: '公司'
              }
            }
          },
          {
            path: '/setting/manager',
            name: 'SettingManagerRoot',
            component: { render: h => h('router-view') },
            redirect: { name: 'SettingManager' },
            // 公司人员设置权限
            permission: 'setting-manager',
            meta: {
              nav: {
                icon: 'el-icon-user',
                title: '管理员设置'
              },
              breadcrumb: {
                title: '管理员'
              }
            },
            children: [
              {
                path: '/setting/manager',
                name: 'SettingManager',
                component: SettingManager
              },
              {
                path: '/setting/manager/create',
                name: 'SettingManagerCreate',
                component: SettingManagerCreate,
                meta: {
                  breadcrumb: {
                    title: '创建'
                  }
                }
              },
              {
                path: '/setting/manager/:id/edit',
                name: 'SettingManagerEdit',
                component: SettingManagerEdit,
                meta: {
                  breadcrumb: {
                    title: '编辑'
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
]
