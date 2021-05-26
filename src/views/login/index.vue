<template>
  <div class="login-container">
    <el-card class="login-box">
      <!-- <img src="@/assets/images/logo_index.png" alt="" /> -->
      <el-form :model="ruleForm" :rules="loginRules" ref="ruleForm">
        <el-form-item prop="mobile">
          <el-input
            type="text"
            v-model="ruleForm.mobile"
            placeholder="请输入手机号"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="verifycode">
          <el-input
            v-model="ruleForm.verifycode"
            placeholder="请输入验证码"
            style="width:220px"
          ></el-input>
          <el-button style="float:right">获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true"
            >我已阅读并同意用户协议和隐私条款</el-checkbox
          >
        </el-form-item>
        <el-form-item>
          <el-button class="loginBtn" type="primary" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// 在组件导入接口;
import service from "@/api/login.js";

export default {
  name: "",
  components: {},
  props: {},
  data() {
    // 校验手机号
    let checkMobile = (rule, value, callback) => {
      // 校验逻辑   把value拿出来进行手机号的格式校验
      let valueCheck = /^1[3-9]\d{9}$/.test(value);
      if (!valueCheck) {
        callback(new Error("手机号格式不正确"));
      }
    };
    return {
      loginData: {
        username: "",
        password: "",
        rememberpwd: false
      },
      ruleForm: {
        mobile: "13911111111",
        verifycode: "246810"
      },
      // 表单验证规则对象
      loginRules: {
        mobile: [
          { validate: checkMobile, trigger: "blur" },
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        verifycode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { len: 6, message: "请输入6位数字", trigger: "blur" }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    login() {
      // console.log("this.$refs.ruleForm.validate", this.$refs.ruleForm.validate);
      this.$refs.ruleForm.validate(valid => {
        if (!valid) return false;
        let data = {
          loginName: this.ruleForm.mobile,
          password: this.ruleForm.verifycode
        };
        service
          .login(data)
          .then(res => {
            console.log("登录接口测试", res);
          })
          .catch(err => {
            console.log(err);
          });
        this.$router.push("/Home");
      });
    }
  }
};
</script>

<style scoped lang="less">
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url("../../assets/images/login/loginBakg2.png") no-repeat
    center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-box {
    width: 400px;
    height: 330px;

    img {
      display: block; //img属于行内替换元素,如果需要设置宽高需转换为块级
      margin: 10px auto;
      width: 200px;
    }
    .loginBtn {
      width: 100%;
    }
  }
}
</style>
