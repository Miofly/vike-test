import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('video', () => {
  const test = ref('11');

  return {
    test
  };
});
