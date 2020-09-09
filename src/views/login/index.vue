<template>
  <div class="login-container">
    <div class="login-form">
      <h2>积云会员管理系统</h2>
      <!-- 表单开始 -->
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="账户" prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginApi from "../../api/login";
export default {
  data() {
    return {
      form: {
        mobile: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入你的账户", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入有效的密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      // console.log(formName);
      this.$refs[formName].validate(valid => {
        //console.log(valid);
        if (valid) {
          // 安全接口
          loginApi
            .wxLogin(this.form)
            .then(res => {
              // console.log(res.data.code);
              // console.log(res);
              const code = res.code;
              if (code == 200) {
                const token = res.data.remember_token;
                //     // 登录信息  //
                localStorage.setItem("yy_token", token);

                loginApi.wxLogin(this.form).then(res => {
                  console.log(res);

                  if (res.code == 200) {
                    //将获取到的用户信息保存到本地
                    localStorage.setItem("jy_info", JSON.stringify(res.data));
                    //跳转到首页
                    this.$router.push("/home");
                  } else {
                    this.$message({
                      message: "登录失败",
                      type: "warning"
                    });
                  }
                  //  console.log(res)
                });
              } else {
                // this.$message({
                //   message: "登录失败",
                //   type: "warning"
                // });
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

<style scoped>
.login-container {
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("http://mengxuegu.com:9999/img/login.b665435f.jpg");
  background-size: 100% 100%;
}
.login-form {
  padding: 30px 50px 30px 30px;
  width: 350px;
  margin: 160px auto;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
}
.login-form h2 {
  text-align: center;
  color: #303133;
}
</style>
