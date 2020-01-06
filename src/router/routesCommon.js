const AccountLogin = () =>
  import(/* webpackChunkName: 'account' */ '@/views/AccountLogin.vue')
const Error404 = () =>
  import(/* webpackChunkName: 'errorp' */ '@/views/Error404.vue')

export default [
  {
    path: '/login',
    component: AccountLogin,
    name: 'AccountLogin'
  },
  {
    path: '/404',
    name: 'Error404',
    component: Error404
  }
  // {
  //   path: '*',
  //   redirect: { name: 'Error404' }
  // }
]
