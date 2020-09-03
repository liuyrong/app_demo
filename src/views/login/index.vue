<template>
  <div class="login-container">
    <div class="login-form">
      <h2>积云会员管理系统</h2>
      <!-- 表单开始 -->
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="账户" prop="name">
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="form.pass" placeholder="请输入账号"></el-input>
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
        name: "",
        pass: ""
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
      //   console.log(formName);
      this.$refs[formName].validate(valid => {
        // console.log(valid);
        if (valid) {
          console.log(1);
          // 安全接口
          loginApi
            .login(this.form.name, this.form.pass)
            .then(res => {
              //   console.log(res.data.code);
              console.log(res);
              const code = res.data.code;
              if (code == 200) {
                //   登录信息  //
                // loginApi.getUserInfo().then(res=>{
                //     console.log(res)
                // })
                const token = res.data.data.token;
                console.log(token);
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

<style scoped>
.login-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("http://mengxuegu.com:9999/img/login.b665435f.jpg");
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
