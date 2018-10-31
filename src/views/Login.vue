<template>
    <div class="login">
       <div class="container">
           <div class="avter">
               <img src="../assets/images/316514.jpg" alt="">
           </div>
            <el-form  label-width="80px" :model="loginform" :rules="rules" ref="ruleForm">
            <el-form-item label="用户名:" prop="username">
                <el-input v-model="loginform.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
                <el-input v-model="loginform.password" placeholder="输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="loginBtn" @click="submitlogin('ruleForm')">立即登录</el-button>
            </el-form-item>
        </el-form>
       </div>

    </div>
</template>

<script>
import {getLogin} from '@/api'
export default {
  data () {
    return {
      loginform: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入正确的用户名', trigger: 'blur'},
          {min: 3, max: 8, message: '输入5-8个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 16, message: '不少于6个字符,不多于16个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitlogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          getLogin(this.loginform)
            .then(res => {
              console.log(res)
              if (res.meta.status === 200) {
                this.$message(res.meta.msg)
                // 将返回来的token存到本地
                localStorage.setItem('mytoken', res.data.token)
                // 将用户名存到本地
                localStorage.setItem('username', res.data.username)
                this.$router.push({name: 'home'})
              }
            })
        } else {
          this.$message({
            message: '请重新输入用户名和密码',
            type: 'error'
          })
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.login {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: beige;
    .container {
       width: 400px;
       position: absolute;
       top: 200px;
       left: 50%;
       transform: translateX(-50%);
       background-color: #fff;
       text-align: center;
       padding: 0 40px;
       border-radius: 5px;
       box-shadow: 0 1px 5px #dee1e6;
        .avter {
            width: 80px;
            height: 80px;
            padding: 10px;
            border-radius: 50%;
            border: 1px solid #ccc;
            background-color: #fff;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            top: -40px;
            box-shadow: 1px 1px 5px  #ccc;
            img {
                width: 80px;
                height: 80px;
                 border-radius: 50%;
            }
        }
        .loginBtn {
            display: block;
            margin: 0 auto;
            width: 200px;
        }
    }
}
</style>
