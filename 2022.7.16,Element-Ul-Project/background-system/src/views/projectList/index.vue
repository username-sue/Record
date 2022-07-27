<template>
  <div class="app-container">
    <!-- 数据表格 -->
    <el-table
      :data="data"
      border
      v-loading="listLoading"
      element-loading-text="数据加载中"
      highlight-current-row
      fit
    >
      <!-- 序号 -->
      <el-table-column label="序号" width="60" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>

      <!-- 项目名称 -->
      <el-table-column label="项目名称" width="150" align="center">
        <template slot-scope="scope">
          <a :href="scope.row.url" target="_blank" class="proName">{{
            scope.row.name
          }}</a>
        </template>
      </el-table-column>

      <!-- 项目描述 -->
      <el-table-column label="项目描述">
        <template slot-scope="scope">{{
          scope.row.description.toString()
        }}</template>
      </el-table-column>

      <!-- 图片预览 -->
      <el-table-column label="图片预览" align="center" width="230px">
        <template slot-scope="scope"
          ><el-image
            style="width: 120px"
            :src="scope.row.thumb2"
            fit="fill"
            :preview-src-list="srcList"
          ></el-image
        ></template>
      </el-table-column>

      <!-- 操作 编辑 删除 -->
      <el-table-column label="操作" align="center" width="150px">
        <template slot-scope="scope">
          <!-- github -->
          <el-tooltip
            class="item"
            effect="dark"
            content="github"
            placement="top"
            :hide-after="2000"
          >
            <el-button
              type="primary"
              icon="iconfont icon-github"
              class="icon"
              circle
              size="mini"
              @click="githubProjectHandle(scope.row)"
            >
            </el-button>
          </el-tooltip>

          <!-- 编辑 -->
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
              @click="editprojectHandle(scope.row)"
            >
            </el-button>
          </el-tooltip>

          <!-- 删除 -->
          <el-tooltip
            class="item"
            effect="dark"
            content="删除"
            placement="top"
            :hide-after="2000"
          >
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              size="mini"
              @click="deleteProjectHandle(scope.row)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑对话框 -->
    <el-dialog
      title="请编辑该项目"
      :visible.sync="dialogFormVisible"
      fullscreen
    >
      <!-- 项目名称 -->
      <el-form :model="form">
        <el-form-item label="项目名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <!-- 项目描述 -->
        <el-form-item label="项目描述(每一项描述请已英文逗号分隔)">
          <el-input v-model="form.description"></el-input>
        </el-form-item>

        <!-- 项目链接 -->
        <el-form-item label="项目链接">
          <el-input v-model="form.url"></el-input>
        </el-form-item>

        <!-- github -->
        <el-form-item label="github">
          <el-input v-model="form.github"></el-input>
        </el-form-item>

        <!-- 图片预览 -->
        <el-form-item label="预览图">
          <Upload v-model="form.thumb" />
        </el-form-item>

        <!-- 项目等级 -->
        <el-form-item label="排序等级">
          <el-select v-model="form.region" placeholder="分类等级">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
          </el-select>
        </el-form-item>

        <!-- 确认 取消按钮 -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmEditProjectHandle"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getProject, setProject, delProject } from "@/api/project.js";
import { server_URL } from "@/urlConfig.js";
import Upload from "@/components/Upload.vue";
export default {
  components: {
    Upload,
  },
  data() {
    return {
      data: [], //远程数据存储
      listLoading: false,
      srcList: [],
      dialogFormVisible: false,
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
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getProject().then(({ data }) => {
        this.listLoading = false;
        this.data = data;
        console.log(data);
        for (const item of this.data) {
          item.thumb2 = server_URL + item.thumb;
          this.srcList.push(item.thumb2);
        }
      });
    },

    //github
    githubProjectHandle(projectInfo) {
      window.open(projectInfo.github);
    },

    //编辑
    editprojectHandle(projectInfo) {
      //拿到数据回填至表单
      this.dialogFormVisible = true;
      this.form = {
        ...projectInfo,
        description: projectInfo.description.toString(),
      };
    },

    //确认修改按钮
    confirmEditProjectHandle() {
      let obj = { ...this.form };
      //把用户填的项目描述信息,以逗号转换为一个数组
      obj.description = this.form.description.split(",");
      obj.order = parseInt(this.form.order);
      //调用远程数据接口
      setProject(obj.id, obj).then(() => {
        this.dialogFormVisible = false;
        this.fetchData();
        this.$message.success("修改成功");
      });
    },

    //删除
    deleteProjectHandle(projectInfo) {
      this.$confirm("确定要删除此项目吗？", "是否继续", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delProject(projectInfo.id).then(() => {
            this.fetchData();
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style>
.proName:hover {
  color: rgb(163, 163, 163);
}
.icon {
  background: rgb(163, 163, 163);
  border: 1px solid rgb(163, 163, 163);
}
</style>