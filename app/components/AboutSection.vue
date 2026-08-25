<template>
    <div id="about" class="w-full mt-32 px-page py-12 flex justify-between items-start gap-12">
        <!-- left side, about, desc, download cv -->
        <div class="max-w-3xl flex flex-col gap-10">
            <h1 class="text-5xl">About Me</h1>
            <!-- about paragraph -->
            <div class="text-2xl leading-snug space-y-8">
                <p>Frontend leaning developer with backend roots.</p>
                <p>I'm 19, based in Indonesia and will be studying in Austria for robotics and machine learning.</p>
                <p>I handle both sides of the screen: designing interfaces, wiring backend logic, and managing the
                    servers they run on (with occasional downtime).</p>
                <p>When I'm offline, I usually take photos or listening to an album front to back.</p>
            </div>
            <!-- download cv button -->
            <button class="w-[357px] py-4 border border-[#B7B7B7] text-2xl text-center">Download CV</button>
        </div>
        <!-- right side, my pic -->
        <div class="flex justify-end items-start shrink-0">
            <img class="w-[357px] object-cover object-top aspect-square" src="/img/me.jpg"
                alt="Muhammad Naufal Ramadhan portrait">
        </div>
    </div>
</template>