<template>
  <div class="login">
    <div class="from">
      <div class="img">
        <img src="@/assets/images/logo_index.png" alt />
      </div>
      <el-form label-width="80px" :model="formLabelAlign" status-icon :rules="rules" ref="ruleForm">
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="formLabelAlign.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="formLabelAlign.code" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component({
  name: 'Login'
})
export default class Login extends Vue {
  public formLabelAlign = {
    mobile: '13911111111',
    code: '246810'
  }

  public rules = {
    mobile: [{ required: true, validator: this.checkMobile, trigger: 'blur' }],
    code: [
      { required: true, message: '请输入验证码', trigger: 'blur' },
      { len: 6, message: '长度6位', trigger: 'blur' }
    ]
  }

  public checkMobile (rule, value, callback) {
    if (!value) {
      return callback(new Error('手机号不能为空'))
    }
    setTimeout(() => {
      if (!/^1(3|4|5|7|8)\d{9}$/.test(value)) {
        callback(new Error('请输入正确手机号'))
      } else {
        callback()
      }
    }, 1000)
  }

  public submitForm (formName) {
    this.$refs.ruleForm.validate(async valid => {
      if (valid) {
        // 验证成功
        const { data } = await axios.post(
          'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
          this.formLabelAlign
        )
        if (data.message === 'OK') {
          sessionStorage.setItem('holle-wo', JSON.stringify(data.data))
          this.$router.push('/')
        }
      } else {
        // 验证失败
        return false
      }
    })
  }

  // public submit() {}
}
</script>

<style lang="less">
.login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../../assets/images/login_bg.jpg') no-repeat;
  background-size: 100% 100%;
  .from {
    padding: 20px;
    box-sizing: border-box;
    .img {
      height: 60px;
      text-align: center;
      img {
        padding: 10px 0px;
      }
    }
    .el-form {
      margin-top: 20px;
    }
    width: 480px;
    height: 480px;
    position: fixed;
    top: 50%;
    left: 50%;
    background: #fff;
    transform: translate(-50%, -50%);
  }
}
</style>
