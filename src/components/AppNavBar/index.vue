<template>
  <div>
    <div class="navBar">
      <!-- 配置路由 -->
      <el-menu
        :router="true"
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="white"
        active-text-color="#ffd04b"
        @open="handleOpen"
      @close="handleClose"
      >
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/meber">
          <i class="el-icon-user-solid"></i>
          <span slot="title">会员管理</span>
        </el-menu-item>
        <el-menu-item index="/supplier">
          <i class="el-icon-s-cooperation"></i>
          <span slot="title">供应商管理</span>
        </el-menu-item>
        <el-menu-item index="/goods">
          <i class="el-icon-s-goods"></i>
          <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="/staff">
          <i class="el-icon-user"></i>
          <span slot="title">员工管理</span>
        </el-menu-item>
              <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location" ></i>
          <span slot="title" >导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/dao" >用户列表</el-menu-item>
          <el-menu-item index="/daohan">商户列表</el-menu-item>
           <el-menu-item index="/user">学生列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
          handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }

  }
};
</script>

<style scoped>
.navBar{
   width: 240px;
    position: absolute;
    left: 0;
    top: 50px;
    bottom: 0;
    background:#545c64;
}
</style>
