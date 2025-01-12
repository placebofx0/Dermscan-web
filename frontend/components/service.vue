<template>
    <div class="py-10">
        <div class="text-gold font-semibold text-2xl md:text-center md:text-2xl target" 
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="400"
                :duration="2000">บริการของเรา</div>
        <div class="flex justify-center">
            <div class="target"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="600"
                :duration="2400">
                    <safety />
            </div>
            <div class="target px-[250px]"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="800"
                :duration="2800">
                    <efficacy />
            </div>
            <div class="target"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="1000"
                :duration="3200">
                    <solar />
            </div>
        </div>
    </div>  
</template>