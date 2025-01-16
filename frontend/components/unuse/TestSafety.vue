<template>

    <a href="/safetytest">
    <div class="@container">
        <div class="shadow-md rounded-md overflow-hidden bg-white text-ellipsis
        @xl:flex h-full"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="2200"
                :duration="1400">
            <img src="@/assets/images/test.jpeg"
                class="bg-cover w-auto h-[300px] bg-center">
            </img>
            <h4 class="font-semibold text-primary pt-3 px-2.5 md:text-lg">Safety Test</h4>
            <p class="text-xs px-2.5 pt-2 md:text-base">การทดสอบความปลอดภัยของผลิตภัณฑ์เครื่องสำอาง...</p>
            <div class="relative flex p-2.5 h-auto">
                <BaseLink :to="`/safetytest`" class="absolute p-2.5 right-[10px]">ข้อมูลเพิ่มเติม</BaseLink>
            </div>
        </div>
    </div>
    </a>

</template>