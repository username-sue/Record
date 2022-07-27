<template>
  <div class="app-container">
    <div class="block">关于我</div>
    <el-input placeholder="请输入内容" v-model="url" :disabled="isDisabled">
    </el-input>
    <el-button
      type="primary"
      style="margin-top: 15px"
      @click="aboutClickHandle"
      >{{ btnContent }}</el-button
    >
  </div>
</template>

<script>
import { getAbout, editAbout } from "@/api/about.js";
export default {
  data() {
    return {
      isDisabled: true,
      btnContent: "编辑",
      url: "",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    //获取远程数据
    fetchData() {
      getAbout().then((resp) => {
        this.url = resp.data;
      });
    },

    async aboutClickHandle() {
      if (this.btnContent === "编辑") {
        //进入此if表示，用户要编辑信息
        this.btnContent = "完成";
        this.isDisabled = !this.isDisabled;
      } else {
        //编辑完成了要更新（文本框内的url地址）内容
        if (this.url) {
          this.btnContent = "编辑";
          this.isDisabled = !this.isDisabled;
          await editAbout({ url: this.url });
          this.$message({
            message: "更改成功",
            type: "success",
          });
        } else {
          this.$message({
            message: "文本框不能为空",
            type: "warning",
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.block {
  margin: 15px 0;
  font-weight: 100;
}
</style>>
