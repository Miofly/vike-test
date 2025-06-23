<template>
  <h1>Home</h1>
  <p>This content is rendered to HTML.</p>
  <p>{{ test }}</p>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

const { test } = storeToRefs(useAppStore());

setTimeout(() => {
  test.value = '我改吧了';
}, 1500);
</script>

<style scoped>
h1 {
  color: green;
}

p {
  color: red;
}
</style>
