<template>
    <div class="px-[7rem] relative flex w-[100%] object-cover">
        <div class=" h-[50rem] w-[145rem] target relative"  >
            <img src="@/assets/images/cover03.jpg"
                class="absolute object-cover h-[50rem] w-[300rem]
                target shadow-3xl rounded-[8px]" 
                v-motion-fade-visible-once
                :duration="600" />
            <img
                src="@/assets/images/logo.png"
                class="flex h-[23rem] absolute top-[50px] left-[27px] py-10 px-10 target 
                drop-shadow-xl"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="200"
                :duration="1800"/>
            <div class="absolute flex w-[1120px] justify-around bottom-[100px] left-0 md:text-6xl">
                <div class="text-darkBlue drop-shadow-xl"
                    v-motion
                    :initial="{ opacity:0, y: 100 }"
                    :visibleOnce="{ opacity: 1, y: 0 }"
                    :delay="1200"
                    :duration="1200">
                    Expertise          
                </div>
                <div class="text-blue drop-shadow-xl"
                    v-motion
                    :initial="{ opacity:0, y: 100 }"
                    :visibleOnce="{ opacity: 1, y: 0 }"
                    :delay="1400"
                    :duration="1400">
                    Standard 
                </div>
                <div class="text-primary drop-shadow-xl"
                    v-motion
                    :initial="{ opacity:0, y: 100 }"
                    :visibleOnce="{ opacity: 1, y: 0 }"
                    :delay="1600"
                    :duration="1600">
                    Reliable 
                </div>
            </div>
        </div>
    </div>
</template>
