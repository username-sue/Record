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
      <el-table-column prop="date" label="序号" width="60" align="center">
        <template slot-scope="scope">{{
          scope.$index + (currentPage - 1) * eathPage + 1
        }}</template>
      </el-table-column>

      <!-- 图片预览 -->
      <el-table-column prop="title" label="头像" width="80" align="center">
        <template slot-scope="scope">
          <el-avatar
            shape="square"
            size="small"
            :src="scope.row.avatar"
          ></el-avatar>
        </template>
      </el-table-column>

      <el-table-column prop="title" label="昵称" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.nickname }}</template>
      </el-table-column>

      <el-table-column prop="title" label="评论文章" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.blog.title }}</template>
      </el-table-column>

      <el-table-column prop="title" label="评论内容" align="center">
        <template slot-scope="scope">{{ scope.row.content }}</template>
      </el-table-column>

      <el-table-column prop="title" label="评论日期" width="230" align="center">
        <template slot-scope="scope">{{
          formatDate(scope.row.createDate)
        }}</template>
      </el-table-column>

      <el-table-column prop="description" label="操作" align="center">
        <template slot-scope="scope">
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
              @click="delCommentHandle(scope.row)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页组件 -->
    <el-pagination
      style="margin-top: 30px"
      background
      :page-size="eathPage"
      :page-sizes="[5, 10, 20]"
      layout="prev, pager, next,total,->,sizes,jumper"
      :total="count"
      :current-page.sync="pagerCurrentPage"
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      @prev-click="prevClickHandle"
      @next-click="nextClickHandle"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getComment, delComment } from "@/api/comment.js";
import { formatDate } from "@/utils/tools.js";
import { server_URL } from "@/urlConfig.js";
export default {
  data() {
    return {
      listLoading: false,
      data: [], //存储数据详情
      eathPage: 5, //每一页显示的条数
      currentPage: 1, //当前显示的页码，默认为1
      totalPage: 0, //总页数
      count: 0, //数据总条数
      pagerCurrentPage: 1, //分页栏当前页码
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    //时间戳转换函数
    formatDate,

    //远程获取数据
    fetchData() {
      this.listLoading = true;
      getComment(this.currentPage, this.eathPage).then(({ data }) => {
        this.listLoading = false;
        // console.log(data);
        this.data = data.rows;
        for (const item of this.data) {
          item.avatar = server_URL + item.avatar;
        }
        //总条数
        this.count = data.total;
        //总页数 = 总条数 / 每一条显示的页数
        this.totalPage = Math.ceil(this.count / this.eathPage);
        //此if可能会在删除文章时触发
        if (this.currentPage > this.totalPage) {
          this.currentPage = this.totalPage;
          this.fetchData();
        }
      });
    },

    //删除
    delCommentHandle(bolgInfo) {
      this.$confirm("是否删除此评论信息?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delComment(bolgInfo.id).then(() => {
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

    //分页相关事件
    //每页显示多少条
    sizeChangeHandle(pageNum) {
      this.eathPage = parseInt(pageNum);
      this.pagerCurrentPage = 1;
      this.currentPage = 1;
      this.fetchData();
    },
    //点击页码
    currentChangeHandle(pageNum) {
      this.currentPage = parseInt(pageNum);
      this.fetchData();
    },
    //点击上一页
    prevClickHandle() {
      this.currentPage -= 1;
    },
    //点击下一页
    nextClickHandle() {
      this.currentPage += 1;
    },
  },
};
</script>

<style>
</style>