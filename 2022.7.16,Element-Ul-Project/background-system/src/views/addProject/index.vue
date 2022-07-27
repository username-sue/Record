<template>
  <div class="app-container">
    <!-- 项目名称 -->
    <div class="block">项目名称</div>
    <div style="margin-bottom: 15px">
      <el-input v-model="form.name" placeholder="请输入项目名称"></el-input>
    </div>

    <!-- 项目描述 -->
    <div class="block">项目描述 (每一项请以英文逗号分隔)</div>
    <div style="margin-bottom: 15px">
      <el-input
        v-model="form.description"
        placeholder="请输入项目描述,(每一项请以英文逗号分隔)"
      ></el-input>
    </div>

    <!-- 项目链接 -->
    <div class="block">项目链接</div>
    <div style="margin-bottom: 15px">
      <el-input v-model="form.url" placeholder="请输入项目链接"></el-input>
    </div>

    <!-- github -->
    <div class="block">github 地址</div>
    <div style="margin-bottom: 15px">
      <el-input
        v-model="form.github"
        placeholder="请输入 github 地址"
      ></el-input>
    </div>

    <!-- 图片预览 -->
    <div style="margin-bottom: 15px">
      <Upload UploadTitle="项目预览图" v-model="form.thumb" />
    </div>

    <!-- 项目等级 -->
    <div class="block">项目等级</div>
    <div style="margin-bottom: 15px">
      <el-select v-model="form.region" placeholder="分类等级">
        <el-option label="1" value="1"></el-option>
        <el-option label="2" value="2"></el-option>
        <el-option label="3" value="3"></el-option>
        <el-option label="4" value="4"></el-option>
        <el-option label="5" value="5"></el-option>
      </el-select>
    </div>

    <!-- 发布按钮 -->
    <div>
      <el-button
        type="primary"
        style="margin-top: 15px"
        @click="addProjectHandle"
        >确认发布</el-button
      >
    </div>
  </div>
</template>

<script>
import Upload from "@/components/Upload.vue";
import { addProject } from "@/api/project.js";
export default {
  components: {
    Upload,
  },
  data() {
    return {
      form: {
        id: "",
        name: "",
        github: "",
        thumb: "",
        url: "",
        order: 1,
        description: "",
      },
    };
  },
  methods: {
    //确认发布
    addProjectHandle() {
      let obj = { ...this.form };
      //把用户填的项目描述信息,以逗号转换为一个数组
      obj.description = this.form.description.split(",");
      obj.order = parseInt(this.form.order);
      //调用远程数据接口
      addProject(obj).then(() => {
        this.$router.push("/projectList");
        this.$message.success("添加项目成功");
      });
    },
  },
};
</script>

<style>
.block {
  margin: 15px 0;
  font-weight: 100;
}
</style>