<template>
    <div class="py-10">
        <div class="text-gold font-medium text-2xl md:text-center md:text-5xl target" 
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="2000"
                :duration="1200">Our services</div>
        <div class="flex justify-center">
            <div class="flex target"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="2200"
                :duration="1400">
                    <serviceSafety />
            </div>
            <div class="flex target px-[250px]"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="2400"
                :duration="1600">
                    <serviceEfficacy />
            </div>
            <div class="flex target"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="2600"
                :duration="1800">
                    <serviceSolar />
            </div>
        </div>
    </div>  
</template>