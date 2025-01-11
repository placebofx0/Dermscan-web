<script setup>
import { useMotion } from '@vueuse/motion';
import { ref } from 'vue';
const targetEl = ref()

useMotion(targetEl, {
    initial: { opacity:0, y: 100 },
    visibleOnce: { opacity: 1, y: 0 },
})
</script>
<template>
    <Theheader />
        <div>
            <div class="relative target:" 
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
               
                :duration="1200">
                <img src="@/assets/images/test.jpeg" />
                    <div class="absolute bg-gradient-to-tr from-white to-transparent w-full h-full mix-blend-normal" >
                        <img
                            src="@/assets/images/logo dermscan asia_new.png"
                            class="rectangle-full w-60 h-36"
                        />
                        <div>
                            Expertise Standard Reliable
                        </div>
                    </div>
            </div>
        </div class="py-20">
            <service />
    <Thefooter />
</template>