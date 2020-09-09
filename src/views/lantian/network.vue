<template>
  <div class="login_container">
    <div class="login_form">
      <img
        src="http://120.53.31.103:84/uploads/image/2020-05-27/zmkrHVxaa4fVI5jtcNZ3xGy6KPU0QjXzxPjX7trh.jpeg"
        alt
      />
      <p>欢迎使用后台管理系统</p>
      <el-form ref="ruleForm" :rules="rules" :model="ruleForm">
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-s-custom" placeholder="请输入账号" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-button type="primary" style="width:100%" @click="submitForm('ruleForm')">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import LoginApi from "../../api/admin";
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      //   console.log(formName);
      this.$refs[formName].validate(valid => {
        // console.log(valid);
        if (valid) {
          //   console.log(1);
          // 安全接口
          LoginApi.userLogin(this.ruleForm.username, this.ruleForm.password)
            .then(res => {
              //   console.log(res.data.code);
              //   console.log(res);
              const code = res.data.code;
              if (code == 200) {
                const token = res.data.data.token;
                // console.log(res.data.data.token);
                localStorage.setItem("nwetord_rms", token);
                // this.$message.warning("登陆成功");
                this.$router.push("/blue")
                //请求人员接口
                LoginApi.userInfo().then(res => {
                    // console.log(1)
                //   console.log(res);
                localStorage.setItem('netword_rms',JSON.stringify(res.data.data));
                });
              } else {
                this.$message({
                  message: "登录失败",
                  type: "warning"
                });
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  background: url(http://120.53.31.103:84/adminstyle/img/login_bg.1de8de0c.png);
  background-size: 100% 100%;
  padding-top: 50px;
  box-sizing: border-box;
  .login_form {
    width: 368px;
    margin: 0 auto;
    text-align: center;
    img {
      align-items: center;
      width: 220px;
    }
    p {
      margin-bottom: 20px;
      font-size: 20px;
      color: #2d8cf0;
    }
  }
}
</style>
