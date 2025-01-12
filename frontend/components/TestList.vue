<template>
    <section class="mb-10 h-[700px]">
        <div class="text-gold font-medium text-2xl md:text-center md:text-5xl target mb-20 pt-16" 
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="2000"
                :duration="1200">Our services</div>
            <div class="flex justify-center gap-20">
                <div class="transform transition duration-300 hover:scale-[120%]">
                    <TestSafety />
                </div>
                <div class="transform transition duration-300 hover:scale-[120%]">
                    <TestEfficacy />
                </div>
                <div class="transform transition duration-300 hover:scale-[120%]">
                    <TestSolar />
                </div>
            </div>
    </section>
</template>