<template>
    <div class="flex object-cover">
        <div class=" h-[12rem] md:h-[36rem] 1440p:h-[50rem] 2xl:h-[61rem] 2k:h-[84rem]
         w-full relative"   >
            <img src="@/assets/images/cover03.jpg"
                class="object-cover absolute 2xl:h-[60rem] 2k:h-[83rem] w-full
                " 
                v-motion-fade-visible-once
                :duration="600" />
                <div class="absolute top-0 drop-shadow-lg  m-[1rem] 2k:m-[3rem]
                    w-[10rem] md:w-[24rem] 1440p:w-[36rem] 2xl:w-[48rem] 2k:w-[64rem]
                    text-[.8rem] md:text-[1.5rem] 1440p:text-[2.5rem] 2xl:text-[3rem] 2k:text-[4.5rem]">
                    <img
                        src="@/assets/images/logo dermscan asia_new.png"
                        class="h-auto"
                        v-motion
                        :initial="{ opacity:0, y: 100 }"
                        :visibleOnce="{ opacity: 1, y: 0 }"
                        :delay="200"
                        :duration="1800"/>
                    <div class="flex absolute
                    gap-2 md:gap-[3rem] 1440p:gap-[3.5rem] 2xl:gap-[6rem] 2k:gap-[6rem]">
                        <p class=""
                        v-motion
                        :initial="{ opacity:0, y: 100 }"
                        :visibleOnce="{ opacity: 1, y: 0 }"
                        :delay="1200"
                        :duration="1200">
                        Expertise          
                        </p>
                        <p class=""
                        v-motion
                        :initial="{ opacity:0, y: 100 }"
                        :visibleOnce="{ opacity: 1, y: 0 }"
                        :delay="1400"
                        :duration="1400">
                        Standard 
                        </p>
                        <p class=""
                        v-motion
                        :initial="{ opacity:0, y: 100 }"
                        :visibleOnce="{ opacity: 1, y: 0 }"
                        :delay="1600"
                        :duration="1600">
                        Reliable 
                        </p>
                    </div>
                </div>
        </div>
    </div>
</template>
