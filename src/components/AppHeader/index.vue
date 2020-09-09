<template>
  <div class="header">
    <div class="login">
      <router-link class="link" :to="{path :'/Logiou'}">
        <img src="http://mengxuegu.com:9999/img/logo.7156be27.png" alt />
        <span class="comm">积云会员管理系统</span>
      </router-link>
    </div>
    <div class="info">
    <el-dropdown @command="handle">
      <span class="el-dropdown-link">
        <!-- 下拉菜单 -->
        <!-- 张雨豪 -->
        {{name}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="changePass" >修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-fold"  command="checkout">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
      const info =JSON.parse(localStorage.getItem("jy_icon"));
    //   this.name=info.name !=="undefined"
 this.name = info.name !== "undefined" ? info.name : "";
    //   console.log(icon.name)
  },
  mounted() {},
  methods: {
      handle(command){
          console.log(command)
          switch(command){
              case"changePass":
              this.changePass();
              break;
            case"checkout":
            this.checkout();
            break;
          }
      },
changePass(){
    console.log("修改密码")
},
checkout(){
             //清除本地存储的token
          localStorage.removeItem("jy_token");
          //清除本地存储的信息
          localStorage.removeItem("jy_icon");

   this.$router.push("/login")
    console.log("退出登陆")
}
  },
  components:{
     
  }
};
</script>

<style scoped>
.header .login {
  padding-left: 40px;
  float: left;
}
.header .login img {
  width: 25px;
  height: 20px;
  vertical-align: middle;
}
.header .login .link {
  text-decoration: none;
  color: white;
}
.header .login .comm {
  margin-left: 30px;
}
.header .info{
    float: right;
    padding-right:40px ;
}
 .el-dropdown-link {
    cursor: pointer;
    color: white;
  }
</style>
