<template>
  <div>
    <!-- 文章标题 -->
    <div class="block">文章标题</div>
    <div style="margin-bottom: 15px">
      <el-input v-model="form.title" placeholder="请输入文章标题"></el-input>
    </div>

    <!-- 文章编辑 -->
    <div class="block">文章编辑</div>
    <Editor
      :initialValue="form.editorText"
      height="600px"
      ref="toastuiEditor"
      :options="editorOptions"
    />

    <!-- 文章描述 -->
    <div class="block">文章描述</div>
    <el-input
      type="textarea"
      :rows="6"
      placeholder="请输入内容"
      v-model="form.description"
    >
    </el-input>

    <!-- 文章头图 -->
    <Upload UploadTitle="文章头图" v-model="form.thumb" />

    <!-- 选择分类 -->
    <div class="block">选择分类</div>
    <el-select
      v-model="form.select"
      placeholder="请选择文章分类"
      @change="changeHandle"
    >
      <el-option
        v-for="item in blogType"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      ></el-option>
    </el-select>

    <!-- 发布按钮 -->
    <div>
      <el-button
        type="primary"
        style="margin-top: 15px"
        @click="addArticleHandle"
        >{{ btnContent }}</el-button
      >
    </div>
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor"; //导入markdown编辑器
import Upload from "@/components/Upload.vue"; //导入添加图片的组件
import { getBlogType } from "@/api/blogType.js"; //导入获取文章分类的远程接口
import { addBlog, editBlog, findOneBlog } from "@/api/blog.js";
import "@toast-ui/editor/dist/i18n/zh-cn";
export default {
  props: ["mode"],
  components: {
    Editor,
    Upload,
    Upload,
  },
  data() {
    return {
      form: {
        title: "", //文章标题
        editorText: "", //用户编辑内容
        description: "", //文章描述
        thumb: "", //文章头图
        select: "", //类型选中样式
      },
      blogType: [], //博客文章分类
      editorOptions: {
        language: "zh-CN",
      },
      btnContent: "发布文章",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    //获取分类远程数据
    fetchData() {
      getBlogType().then((resp) => {
        this.blogType = resp.data;
      });
      if (this.mode === "edit") {
        //一进来的时候，就拿到传递过来的id 根据这个id获取到博客文章内容，回填到表单
        this.id = this.$route.params.id;
        findOneBlog(this.id).then(({ data }) => {
          this.form = data;
          this.form.select = data.category === null ? "" : data.category.id;
          this.$refs.toastuiEditor.invoke("setHTML", data.htmlContent);
        });
        this.changeHandle();
        this.btnContent = "确认修改";
      }
    },
    //发布文章
    addArticleHandle() {
      //1,获取表单内容 2，发送请求
      let html = this.$refs.toastuiEditor.invoke("getHTML");
      let markdown = this.$refs.toastuiEditor.invoke("getMarkdown");

      //接下来组装要传递给服务器的对象
      let obj = {
        title: this.form.title,
        description: this.form.description,
        createDate: new Date().getTime(),
        categoryId: this.form.select,
        //toc 传递一个空数组过去，之后在服务器根据 markdown 的内容来生成toc目录
        toc: [],
        htmlContent: html,
        thumb: this.form.thumb,
        markdownContent: markdown,
      };
      // console.log(obj)
      //接下来把组装好的，对象发送给服务器
      if (obj.title && obj.description && obj.htmlContent && obj.categoryId) {
        if (this.mode === "add") {
          //说明是要新增
          addBlog(obj).then(() => {
            this.$router.push("/blogList");
          });
        } else {
          //说明要修改编辑文章
          editBlog({ id: this.form.id, data: obj }).then(() => {
            this.$router.push("/blogList");
            this.$message.success("修改成功");
          });
        }
      } else {
        this.$message.error("文章内容不能为空，请填写文章内容");
      }
    },
    //文章分类处理
    changeHandle() {
      this.$forceUpdate();
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
