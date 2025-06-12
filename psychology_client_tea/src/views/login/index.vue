<template>
  <div class="login-container">
    <div class="form-container">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
               label-position="left"
      >
        <div class="title-container">
          <h3 class="title">健康管理平台-教师端</h3>
        </div>
        <el-form-item prop="username">

          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="请输入账号"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
        </el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;"
                   @click.native.prevent="handleLogin"
        >登录
        </el-button>
      </el-form>
      <div style="float: right;margin-right: 40px">
        <el-button type="text" @click="registerTea">老师注册</el-button>
      </div>
    </div>

    <el-dialog title="老师注册"
               :visible.sync="addOrUpdateDialogVisible"
               width="40%"

    >
      <el-form :model="formData"
               :rules="rules"
               ref="formData"
               label-width="120px"
      >
        <el-form-item label="姓名"
                      prop="teaName"
        >
          <el-input v-model="formData.teaName"></el-input>
        </el-form-item>
        <el-form-item label="年龄"
                      prop="teaAge"
        >
          <el-input-number v-model="formData.teaAge" :max="1000000"></el-input-number>
        </el-form-item>
        <el-form-item label="性别"
                      prop="teaSex"
        >
          <el-radio-group v-model="formData.teaSex">
            <el-radio :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="头像"
                      prop="teaImg"
        >
          <uploadImg v-model="formData.teaImg"></uploadImg>
        </el-form-item>
        <el-form-item label="简介"
                      prop="teaInfo"
        >
          <el-input v-model="formData.teaInfo" type="textarea" :autosize="{ minRows: 8, maxRows: 8}"></el-input>
        </el-form-item>
        <el-form-item label="联系方式"
                      prop="teaTel"
        >
          <el-input v-model="formData.teaTel"></el-input>
        </el-form-item>
        <el-form-item label="账号"
                      prop="username"
        >
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password"
        >
          <el-input v-model="formData.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="再次输入密码"
                      prop="againPwd"
        >
          <el-input v-model="formData.againPwd" show-password></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer"
            class="dialog-footer"
      >
        <el-button @click="addOrUpdateDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitForm('formData')"
        >确 定</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
import { insert } from '@/api/Teachers/index'
import uploadImg from '@/components/ImageUpload/index.vue'
import { Message } from 'element-ui'

export default {
  name: 'Login',
  components: { uploadImg },
  data() {
    return {
      formData: {},
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        againPwd: [
          { required: true, message: '请再次输入密码', trigger: 'blur' }
        ],
        teaName: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        teaAge: [
          { required: true, message: '请输入年龄', trigger: 'blur' }
        ],
        teaSex: [
          { required: true, message: '请输入性别', trigger: 'blur' }
        ],
        teaInfo: [
          { required: true, message: '请输入简介', trigger: 'blur' }
        ],
        teaTel: [
          { required: true, message: '请输入联系方式', trigger: 'blur' }
        ],
        teaImg: [
          { required: true, message: '请上传头像', trigger: 'change' }
        ]
      },
      addOrUpdateDialogVisible: false,
      loginForm: {
        username: 'tea',
        password: 'tea'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    registerTea() {
      this.addOrUpdateDialogVisible = true
    },
    submitForm(formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.formData.password != this.formData.againPwd) {
            Message.warning('两次密码输入不一致')
            return
          }
          this.formData.status = 0
          insert(this.formData).then(res => {
            Message.success('注册成功')
            this.formData = {}
            this.addOrUpdateDialogVisible = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push('/')
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #000;

.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background: url("../../assets/bg.png");
  background-size: 100%;

  .form-container {
    height: 450px;
    width: 400px;
    background-color: white;
    position: absolute;
    top: 50%;
    margin-top: -225px;
    left: 50%;
    margin-left: -200px;
    border-radius: 20px;
  }

  .login-form {
    position: relative;
    max-width: 100%;
    padding: 100px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
