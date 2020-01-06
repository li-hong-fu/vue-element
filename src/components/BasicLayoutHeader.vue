<template>
  <div class="header-section">
    <div class="header-hd">
      <Breadcrumb />
    </div>
    <div class="header-bd"></div>
    <div class="header-ft">
      <div class="bar-info-container">
        <i class="el-icon-question"></i>
      </div>
      <el-dropdown style="height: 100%;" @command="handleCommand">
        <div class="bar-info-container">
          <i class="el-icon-user-solid userInfo-avatar"></i>
          <span class="userInfo-name">{{userInfo.name}}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="Logout" icon="el-icon-video-pause">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/BasicBreadcrumb.vue'
import userService from '@/global/service/userService.js'

export default {
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    userService.userInfo().then(userInfo => {
      this.userInfo = userInfo
    })
  },
  methods: {
    handleCommand (command) {
      const handleName = `handle${command}`
      this[handleName]()
    },
    handleLogout () {
      userService.accountLogout()
    }
  },
  components: {
    Breadcrumb
  }
}
</script>

<style lang="less" scoped>
.header-section {
  position: relative;
  padding: 0 16px;
  height: 64px;
  display: flex;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  .header-bd {
    flex: 1;
  }
}

.header-hd,
.header-bd,
.header-ft {
  display: flex;
  align-items: center;
}

.bar-info-container {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: #ecf5ff;
  }
  .userInfo-name {
    font-size: 14px;
    vertical-align: middle;
  }
  .userInfo-avatar {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-color: #ccc;
    border-radius: 50%;
    outline: none;
    margin: 0 10px;
  }
}
</style>
