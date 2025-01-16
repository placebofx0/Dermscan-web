<template>
    <header 
        class=" px-6 py-3 bg-gradient-to-r from-white from-20% 
        via-secondary via-50% 
        to-primary to-80% 
        flex space-x-3.5 
        justify-between 
        flex-col 
        text-white
        shadow-[0_6px_6px_-6px_rgba(0,0,0,0.3)]
        w-full
        text-[.75rem] md:text-[1rem] 1440p:text-[1.25rem] 2xl:text-[1.5rem] 2k:text-[1.75rem]" >
        <div class="flex justify-between items-center">
            <div>
                <a href="https://www.dermscanasia.com/">
                    <img
                        src="@/assets/images/logo dermscan asia_new.png"
                        class="rectangle-full
                        w-[3rem] md:w-[6rem] 1440p:w-[8rem] 2xl:w-[10rem] 2k:w-[10rem]
                        h-auto"
                    />
                </a>
            </div>
            <div>
                <nav class="flex gap-5">
                    <a href="#about" class="hover:underline">About Us</a>
                    <a href="#services" class="hover:underline">Services</a>
                    <a href="#contact" class="hover:underline">Contact</a>
                </nav>
            </div>
        </div>
    </header>
</template>