<template>
    <div class="text-gold font-semibold text-2xl md:text-center md:text-2xl target" 
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="200"
                :duration="400">บริการของเรา</div>
        <div style="display: flex;
                justify-content: space-evenly;"
                >
                <div class="target"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="200"
                :duration="600">
                    <safety />
                </div>
                <div class="target"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="200"
                :duration="1200">
                    <efficacy />
                </div>
                <div class="target"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="200"
                :duration="1800">
                    <solar />
                </div>
        </div>  
</template>