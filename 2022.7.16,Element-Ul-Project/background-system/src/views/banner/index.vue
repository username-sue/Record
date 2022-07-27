<template>
  <div class="app-container">
    <!-- 数据表格 -->
    <el-table :data="data" style="width: 100%" border>
      <el-table-column prop="date" label="序号" width="60" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column prop="description" label="描述">
        <template slot-scope="scope">{{ scope.row.description }}</template>
      </el-table-column>
      <el-table-column prop="description" label="中图预览" align="center">
        <template slot-scope="scope"
          ><el-image
            style="width: 100px"
            :src="scope.row.midImg2"
            fit="fill"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="大图预览" align="center">
        <template slot-scope="scope"
          ><el-image
            style="width: 100px"
            :src="scope.row.bigImg2"
            fit="fill"
          ></el-image
        ></template>
      </el-table-column>
      <el-table-column prop="description" label="操作" align="center">
        <template slot-scope="scope">
          <el-tooltip
            class="item"
            effect="dark"
            content="编辑"
            placement="top"
            :hide-after="2000"
          >
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              size="mini"
              @click="handleClick(scope.row)"
            >
            </el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <!-- 首页标语弹出框 -->
    <el-dialog title="请编辑信息" :visible.sync="dialogFormVisible" top="5vh">
      <el-form :model="form">
        <!-- 标题 -->
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>

        <!-- 描述 -->
        <el-form-item label="描述">
          <el-input v-model="form.description"></el-input>
        </el-form-item>

        <!-- 中图 -->
        <el-row>
          <el-col :span="12">
            <el-form-item label="首页中图">
              <Upload v-model="form.midImg" />
            </el-form-item>
          </el-col>

          <!-- 大图 -->
          <el-col :span="12">
            <el-form-item label="首页中图">
              <Upload v-model="form.bigImg" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editBannerConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getBanner, setBanner } from "@/api/banner.js";
import { server_URL } from "@/urlConfig.js";
// import { Upload } from "@/components/Upload.vue";
import Upload from "@/components/Upload.vue";
export default {
  components: {
    Upload,
  },
  data() {
    return {
      data: [],
      // dialogTableVisible: true,
      dialogFormVisible: false,
      form: {
        id: "",
        midImg: "",
        bigImg: "",
        title: "",
        description: "",
      },
      // formLabelWidth: "120px",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    //远程数据获取
    fetchData() {
      getBanner().then((resp) => {
        this.data = resp.data;
        for (const item of this.data) {
          item.midImg2 = server_URL + item.midImg;
          item.bigImg2 = server_URL + item.bigImg;
        }
      });
    },
    //点击事件，点击操作按钮后弹出操作框
    handleClick(bannerInfo) {
      //当点击操作按钮后，把事件参数加到form里面
      this.form = { ...bannerInfo };
      this.dialogFormVisible = true;
    },
    //点击确认按钮后，把数据上传给服务器
    editBannerConfirm() {
      //从表单里拿到用户修改的数据，发送给服务器
      //因为 API 文档要求三个首页标语同时发送
      let arr = [...this.data];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === this.form.id) {
          arr[i] = this.form;
        }
      }
      //调用远程数据接口
      setBanner(arr).then((resp) => {
        this.dialogFormVisible = false; //关闭对话框
        this.$message({
          message: "恭喜你，修改成功",
          type: "success",
        });
        this.fetchData();
      });
    },
  },
};
</script>

<style>
</style>