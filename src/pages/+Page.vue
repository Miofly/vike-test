<template>
  <div class="app-container">
    <nav class="navigation">
      <router-link to="/" class="nav-link">首页</router-link> |
      <router-link to="/about" class="nav-link">关于</router-link>
    </nav>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <Suspense>
          <component :is="Component" />
        </Suspense>
      </router-view>
    </main>

    <div class="counter-section">
      <button @click="state.count++" class="counter-button">
        计数器 {{ state.count }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/styles/main.css";
import { reactive } from "vue";

const state = reactive({ count: 0 });
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navigation {
  padding: 1rem;
  background-color: var(--primary-color);
  text-align: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.counter-section {
  padding: 1rem;
  text-align: center;
  background-color: #f5f5f5;
}

.counter-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.counter-button:hover {
  background-color: #369870;
}
</style>
