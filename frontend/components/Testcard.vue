<template>
    <div class="space-y-12 flex justify-center">
    <div class="grid gap-16 sm:grid-cols-3">
        <div class="@container transform transition duration-300 hover:scale-[120%]">
            <div class="mx-auto max-w-[23rem] overflow-hidden rounded-xl bg-white shadow-md relative h-[21rem]"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="200"
                :duration="1400">
                <div class="@xl:shrink-0">
                    <img
                    src="@/assets/images/test.jpg"
                    class="h-40 w-full object-cover @2k:h-full @2k:w-40"/>
                </div>
                <div class="p-5">
                    <div class="text-sm font-semibold tracking-wide text-primary">
                        <h4>Safety Test</h4>  
                        <p class="mt-2 text-black">การทดสอบความปลอดภัยของผลิตภัณฑ์เครื่องสำอาง...</p>
                        <BaseLink :to="`/safetytest`" class="absolute bottom-0 right-0 mx-3 my-3">ข้อมูลเพิ่มเติม</BaseLink>                
                    </div>
                </div>
            </div>
        </div>
        <div class="@container transform transition duration-300 hover:scale-[120%]">
            <div class="mx-auto max-w-[23rem] overflow-hidden rounded-xl bg-white shadow-md relative h-[21rem]"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="400"
                :duration="1600">
                <div class="@xl:shrink-0">
                    <img
                    src="@/assets/images/efficacy.jpg"
                    class="h-40 w-full object-cover @xl:h-full @xl:w-40"/>
                </div>
                <div class="p-5">
                    <div class="text-sm font-semibold tracking-wide text-primary">
                        <h4>Efficacy Test</h4>  
                        <p class="mt-2 text-black">การประเมินประสิทธิภาพของผลิตภัณฑ์เครื่องสำอาง...</p>
                        <BaseLink :to="`/efficacytest`" class="absolute bottom-0 right-0 mx-3 my-3">ข้อมูลเพิ่มเติม</BaseLink>                
                    </div>
                </div>
            </div>
        </div>
        <div class="@container transform transition duration-300 hover:scale-[120%]">
            <div class="mx-auto max-w-[23rem] overflow-hidden rounded-xl bg-white shadow-md relative h-[21rem]"
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="600"
                :duration="1800">
                <div class="@xl:shrink-0">
                    <img
                    src="@/assets/images/solar.jpg"
                    class="h-40 w-full object-cover @xl:h-full @xl:w-40"/>
                </div>
                <div class="p-5">
                    <div class="text-sm font-semibold tracking-wide text-red">
                        <h4>Solar Test (ยกเลิกบริการ)</h4>  
                        <p class="mt-2 text-black">การประเมินประสิทธิภาพในการป้องกันแสงแดดของผลิตภัณฑ์...</p>
                        <BaseLink :to="`/solartest`" class="absolute bottom-0 right-0 mx-3 my-3">ข้อมูลเพิ่มเติม</BaseLink>                
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>