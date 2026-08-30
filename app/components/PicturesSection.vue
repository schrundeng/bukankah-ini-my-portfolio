<template>
    <div id="pics" class="w-full overflow-hidden bg-secondary py-12 md:py-20">
        <div class="px-page flex flex-col gap-12">
            <h1 class="text-5xl text-secondary">Pics</h1>
        </div>

        <!-- picture slide -->
        <div class="flex gap-0 overflow-x-auto pl-page custom-scrollbar py-4 scroll-smooth">
            <div v-for="(picture, index) in pictures" :key="index"
                class="flex flex-col gap-3 shrink-0 w-[352px] md:w-[700px]">
                <!-- top line -->
                <div class="relative w-full h-4 flex items-center">
                    <div class="border-t-[1.5px] border-[#353535] absolute top-1/2 right-0"
                        :class="index === 0 ? '-left-[100vw]' : 'left-0'"></div> <span
                        class="w-px h-3 black-line absolute top-1/2 left-0"></span>
                    <span
                        class="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary px-2 text-xs text-secondary z-10">
                        [{{ String(index + 1).padStart(2, '0') }}]
                    </span>
                </div>
                <!-- picture frame -->
                <div class="w-[calc(100%-2rem)] mx-auto aspect-[4/3] overflow-hidden">
                    <img class="w-full h-full object-cover" :src="picture.image" :alt="picture.alt">
                </div>

                <!-- bottom line -->
                <div class="relative w-full h-4 flex items-center justify-center">
                    <div class="border-t-[1.5px] border-[#353535] absolute top-1/2 right-0"
                        :class="index === 0 ? '-left-[100vw]' : 'left-0'"></div>
                    <span class="w-px h-3 black-line absolute bottom-1/2 left-0"></span>
                    <p class="relative text-secondary z-10 bg-secondary px-3 text-xs whitespace-nowrap">
                        {{ picture.text }}
                    </p>
                </div>
            </div>

            <!-- more pics nav -->
            <NuxtLink to="/pics" class="flex flex-col gap-3 shrink-0 group cursor-pointer">
                <!-- top line -->
                <div class="relative w-full h-4 flex items-center">
                    <div class="border-t-[1.5px] border-[#353535] absolute top-1/2 right-0"
                        :class="index === 0 ? '-left-[100vw]' : 'left-0'"></div>
                    <span class="w-px h-3 black-line absolute top-1/2 left-0"></span>
                    <span
                        class="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary px-2 text-xs text-secondary z-10">
                        [More...]
                    </span>
                </div>
                <!-- picture frame -->
                <div
                    class="h-[240px] w-[180px] md:w-96 md:h-[501px] border-[1.5px] border-[#353535] mx-4 flex flex-col items-center justify-center gap-2 text-secondary group-hover:border-solid group-hover:bg-[#e8e8e8] transition-colors">
                    <p class="text-xl md:text-2xl">View Full Gallery</p>
                    <svg class="link-arrow -scale-y-100" width="66" height="13" viewBox="0 0 66 13" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.5 0.168213C54 7.16821 56.5936 9.20557 65.5 11.6682H0" stroke="#353535" />
                    </svg>
                </div>

                <!-- bottom line -->
                <div class="relative w-full h-4 flex items-center justify-center">
                    <div class="border-t-[1.5px] border-[#353535] absolute top-1/2 right-0"
                        :class="index === 0 ? '-left-[100vw]' : 'left-0'"></div>
                    <span class="w-px h-3 black-line absolute bottom-1/2 left-0"></span>
                    <p class="relative text-secondary z-10 bg-secondary px-3 text-xs whitespace-nowrap">
                        Explore Archive
                    </p>
                </div>
            </NuxtLink>

        </div>
    </div>
</template>

<script setup>
const pictures = [
    {
        image: '/img/fify.jpg',
        alt: 'Pantai Melasti',
        text: 'Pantai Melasti | Φ 07° 49′ 34.5″ (S) | λ 112° 33′ 26.6″ (E)'
    },
    {
        image: '/img/fify2.jpg',
        alt: 'Pantai Melasti',
        text: 'Pantai Melasti | Φ 07° 49′ 34.5″ (S) | λ 112° 33′ 26.6″ (E)'
    },
    {
        image: '/img/fify3.jpeg',
        alt: 'Pantai Melasti',
        text: 'Pantai Melasti | Φ 07° 49′ 34.5″ (S) | λ 112° 33′ 26.6″ (E)'
    },
]
</script>

<style scoped>
.link-arrow {
    @apply transition-transform duration-300 group-hover:translate-x-1
}
</style>