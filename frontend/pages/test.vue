<script setup>
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'
const targetEl = ref()

useMotion(targetEl, {
  initial: {
    opacity: 0,
    y: 100,
  },
  visibleOnce: {
    opacity: 1,
    y: 0,
  },
})
</script>

<template>
  <div class="=target" ref="targetEl">
    1
  </div>
  <div class="=target" ref="targetEl">
    2
  </div>
  <div class="=target" ref="targetEl">
    3
  </div>
</template>