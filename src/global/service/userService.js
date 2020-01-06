import request from '@/global/request/axios'
import API from '@/global/request/api'
import DataStore from '@/global/storage'

const authService = {
  phoneCode ({ phone }) {
    return request.post(API.phoneCode, { phone })
  },
  loginPassword ({ phone, password }) {
    return request.post(API.loginPassword, { password, phone }).then(res => {
      DataStore.setToken(res.token)
      return res
    })
  },
  loginSMS ({ phone, code }) {
    return request.post(API.loginSMS, { code, phone }).then(res => {
      DataStore.setToken(res.token)
      return res
    })
  },
  accountLogout () {
    DataStore.clear()
  },
  userInfo () {
    const mapData = DataStore.map.get('userInfo')
    if (mapData) {
      return Promise.resolve(mapData)
    }
    return request.get(API.userInfo).then(res => {
      DataStore.map.set('userInfo', res)
      return res
    })
  }
}

export default authService
