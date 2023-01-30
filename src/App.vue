<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const navList = [
  { label: "首页", path: "/" },
  { label: "优化后", path: "/new" },
];
</script>

<template>
  <div class="app">
    <header>
      <h1>element-plus table 性能优化</h1>
      <nav>
        <router-link
          v-for="item in navList"
          :key="item.label"
          :to="item.path"
          :class="{ active: route.path === item.path }"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  margin: 20px;
}
.app h1 {
  font-size: 24px;
}

header {
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
}

header nav {
  margin-left: 30px;
}

a.active {
  color: #4154ff;
}
</style>
