<template>
    <div id="home" class="w-full px-page flex flex-1 overflow-hidden">

        <div class="flex">
            <div class="flex items-end h-full pb-8">
                <!-- arrow div -->
                <div class="flex flex-col items-center pl-[70.5px] pr-8 h-2/3">
                    <!-- arrow stem -->
                    <div class="w-px flex-1 bg-gradient-to-t from-[#B7B7B7] to-transparent"></div>
                    <!-- arrow tip -->
                    <svg class="-mt-9" width="87" height="36" viewBox="0 0 87 36" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M87 0.500061C66.5 0.500061 48.1059 15.5412 43.5 35.5001C39 16.0001 20.5 0.5 0 0.5"
                            stroke="url(#paint0_linear_14_11)" />
                        <defs>
                            <linearGradient id="paint0_linear_14_11" x1="43.5001" y1="-543" x2="43.5001" y2="35.5002"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0E0E0E" />
                                <stop offset="0.801835" stop-color="#B7B7B7" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <!-- crosshair line gradient thing -->
            <span class="w-px self-stretch bg-gradient-to-b from-[#B7B7B7] to-transparent"></span>
            <p class="pl-6 mt-60 text-2xl [writing-mode:vertical-rl] tracking-[0.08em]">jack of all trades, master
                of...
                some.
            </p>
        </div>

        <div class="flex-1 h-full pl-6 pt-20 relative">
            <img class="w-full h-full object-cover object-center" src="/img/cover.jpg"
                alt="Lush green rolling farm hills of Bukit Jengkoang with a weathered concrete lookout shelter under a clear blue sky in Bumiaji, Batu">

            <p class="absolute bottom-3 right-4 text-sm text-[#E5E5E5] select-none left-10 text-right truncate">
                SS: 1/1996s | Aperture: ƒ 2.4 | ISO: 40 | Φ 07° 49′ 34.5″ (S) | λ 112° 33′ 26.6″ (E)
            </p>
        </div>

    </div>
</template>