<template>
    <a href="/efficacytest">
    <div class="shadow-md rounded-md overflow-hidden h-[445px] bg-white"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="2400"
                :duration="1600">
        <img src="@/assets/images/efficacy.jpg"
            class="bg-cover w-auto h-[300px] bg-center"
        >
        </img>
        <h4 class="font-semibold text-primary pt-3 px-2.5 md:text-lg">Efficacy Test</h4>
        <p class="text-xs px-2.5 pt-2 md:text-base">การประเมินประสิทธิภาพของผลิตภัณฑ์เครื่องสำอาง...</p>
        <div class="relative flex p-2.5 h-auto">
            <BaseLink :to="`/efficacytest`" class="absolute p-2.5 right-[10px]">ข้อมูลเพิ่มเติม</BaseLink>
        </div>
    </div>
    </a>
</template>