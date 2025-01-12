<script setup>
import { useMotion } from '@vueuse/motion';
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
    <div class="target" v-motion-roll-visible-right>1</div>
</template>

<style>
.target {
    width: 100px;
    height: 100px;
    margin: 300px auto 500px auto;
    display: flex;
    justify-content: center;
    background: #434343;
    border-radius: 10px;
    font-weight: bold;
}
</style>