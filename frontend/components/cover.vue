<!-- <template>
<div>
    <div class="h-full w-full relative target:" 
        v-motion
        :initial="{ opacity:0, y: 100 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :duration="1200">
        <img  src="@/assets/images/cover.png" />
            <div>
                <img
                    src="@/assets/images/logo.png"
                    class="h-20"
                />
                <div class="absolute">
                    Expertise Standard Reliable
                </div>
            </div>
    </div>
</div class="py-20">
</template> -->

<template>
    <div>
        <div class=" h-[80rem] w-full relative target"  >
            <img src="@/assets/images/cover.png"
                class="-z-50 py-50 absolute object-cover w-full h-full target" 
                v-motion-fade-visible-once
                :duration="600" />
                    <img
                        src="@/assets/images/logo.png"
                        class="h-[30rem] absolute top-0 right-0 px-20 py-20 target"
                        v-motion
                        :initial="{ opacity:0, y: 100 }"
                        :visibleOnce="{ opacity: 1, y: 0 }"
                        :delay="200"
                        :duration="1800"/>
                    <div class="absolute">
                        Expertise Standard Reliable
                    </div>
        </div>
    </div class="py-20">
    </template>
