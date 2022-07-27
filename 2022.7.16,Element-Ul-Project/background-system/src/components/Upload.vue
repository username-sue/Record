<template>
  <div class="app-container">
    <div class="title">{{ UploadTitle }}</div>
    <el-upload
      class="avatar-uploader"
      action="/api/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :headers="headers"
    >
      <img v-if="value" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import { server_URL } from "@/urlConfig.js";
export default {
  //图片标题和链接，希望父组件传递
  props: ["UploadTitle", "value"],
  computed: {
    imageUrl() {
      if (this.value) {
        return server_URL + this.value;
      }
    },
    //设置请求头
    headers() {
      return {
        Authorization: "Bearer " + localStorage.getItem("token"), //从本地获取token,添加到headers里面
      };
    },
  },
  methods: {
    //图片上传成功的回调
    handleAvatarSuccess(resp) {
      if (!resp.code && resp.data) {
        //说明上传成功，服务器返回了上传后的地址
        this.$emit("input", resp.data);
      }
      //   console.log("成功", resp);
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  margin: 15px 0;
  font-weight: 100;
}
.avatar-uploader .el-upload {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>