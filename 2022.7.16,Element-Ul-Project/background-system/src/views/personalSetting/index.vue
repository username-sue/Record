<template>
  <div class="app-container">
    <!-- 个人中心 -->
    <el-form
      :model="adminInfo"
      :rules="steRules"
      ref="ruleForm"
      label-width="100px"
      width="500px"
    >
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="adminInfo.name">
        </el-input>
      </el-form-item>

      <el-form-item label="旧密码" prop="oldLoginPwd">
        <el-input
          placeholder="请输入旧密码"
          v-model="adminInfo.oldLoginPwd"
          type="password"
        >
        </el-input>
      </el-form-item>

      <el-form-item label="新密码" prop="loginPwd">
        <el-input
          placeholder="请输入新密码"
          v-model="adminInfo.loginPwd"
          type="password"
        >
        </el-input>
      </el-form-item>

      <el-form-item label="新密码确认" prop="loginPwdConfirm">
        <el-input
          placeholder="请输入新密码"
          v-model="adminInfo.loginPwdConfirm"
          type="password"
        >
        </el-input>
      </el-form-item>
      <el-button type="primary" @click="modifyClickHandle">修改</el-button>
      <el-button type="danger" @click="backClickHandle">返回</el-button>
    </el-form>
  </div>
</template>

<script>
import { getInfo, setUser } from "@/api/user.js";
export default {
  data() {
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.adminInfo.loginPwd) {
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };
    return {
      adminInfo: {
        id: "",
        loginId: "",
        name: "",
        oldLoginPwd: "", //就密码
        loginPwd: "", //新密码
        loginPwdConfirm: "", //确认新密码
      },
      steRules: {
        oldLoginPwd: [
          //trigger什么时候触发
          { required: true, trigger: "blur", message: "请输入旧密码" },
        ],
        loginPwd: [
          { required: true, trigger: "blur", message: "请输入新密码" },
        ],
        loginPwdConfirm: [
          { required: true, trigger: "blur", message: "请确认新密码" },
          { validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getInfo().then((resp) => {
        this.adminInfo = resp.data;
      });
    },

    //修改
    modifyClickHandle() {
      if (
        this.adminInfo.name &&
        this.adminInfo.loginPwd &&
        this.adminInfo.oldLoginPwd
      ) {
        setUser(this.adminInfo).then((res) => {
          if (typeof res === "string") {
            const resp = JSON.parse(res);
            this.$message.error(resp.msg);
          } else {
            //说明修改成功
            this.$message.success("修改密码成功");
            this.$store.dispatch("user/logout").then(() => {
              // console.log("ninhujhij");
              this.$router.push(`/login?redirect=${this.$route.fullPath}`);
            });
          }
        });
      } else {
        this.$message.error("请填写所有的项目");
      }
    },

    //返回
    backClickHandle() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.app-container {
  width: 500px;
}
</style>