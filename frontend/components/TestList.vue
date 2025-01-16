<template>
    <section class="w-full">
            <h1 class="text-gold font-medium text-center target mb-16 mt-16" 
                v-motion
                :initial="{ opacity:0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="200"
                :duration="1200">Our services</h1>
            <div class="">
                <Testcard />
            </div>
    </section>
</template>