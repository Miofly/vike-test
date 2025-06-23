<template>
  <h1>{{ msg }}</h1>
  <p>The count is preserved when switching between "Home" and "About".</p>
</template>

<script lang="ts" setup>
const msg = "About";
</script>

<style scoped>
h1 {
  color: red;
}
</style>
