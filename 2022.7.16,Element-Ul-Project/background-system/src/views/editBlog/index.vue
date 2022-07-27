<template>
  <div class="app-container">
    <!-- 编辑修改文章 -->
    <EditArticle mode="edit" />
  </div>
</template>

<script>
import EditArticle from "@/components/EditArticle.vue";
export default {
  components: {
    EditArticle,
  },
};
</script>

<style>
</style>