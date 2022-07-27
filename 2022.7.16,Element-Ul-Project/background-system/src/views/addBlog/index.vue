<template>
  <div class="app-container">
    <!-- 添加文章 -->
    <EditArticle mode="add" />
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