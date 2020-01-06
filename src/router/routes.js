import RoutesCommon from './routesCommon.js'
import RoutesPermission from './routesPermission.js'
import userService from '@/global/service/userService.js'

const matchAllRouter = [
  {
    path: '*',
    redirect: { name: 'Error404' }
  }
]

// 权限路由过滤
const filterPermissionRoutes = (routes, permissions) => {
  const filterRoutes = []
  routes.forEach(data => {
    const route = { ...data }
    const notPermission = !route.permission
    const hasPermission = permissions.includes(route.permission)
    const passPermission = notPermission || hasPermission
    let hasPath = true
    if (route.children) {
      route.children = filterPermissionRoutes(data.children, permissions)
      if (route.children.length === 0) {
        hasPath = false
      }
    }
    if (passPermission && hasPath) {
      filterRoutes.push(route)
    }
  })
  return filterRoutes
}

// 返回过滤后的权限路由
export const fetchFilterPermissionRoutes = async () => {
  const userInfo = await userService.userInfo()
  const { permissions } = userInfo
  const routes = RoutesPermission
  console.log(permissions)
  return filterPermissionRoutes(routes, permissions).concat(matchAllRouter)
}
export const commonRoutes = RoutesCommon

export default RoutesPermission.concat(RoutesCommon)
