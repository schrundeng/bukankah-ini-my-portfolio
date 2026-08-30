<template>
    <div class="w-full px-page py-12 flex flex-col">
        <div class="w-full flex justify-center py-24">
            <img class="w-full object-contain" src="/img/render.jpg" alt="Nurture Diorama Render">
        </div>

        <div id="contact" class="scroll-mt-24 flex flex-col gap-10 py-12">
            <h1 class="text-5xl">Contact</h1>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 text-xl md:text-2xl">
                <p>Email: <a class="link-underline"
                        href="mailto:muhnaufalramadhan27@gmail.com">muhnaufalramadhan27[at]gmail.com</a></p>
                <p>Instagram: <a class="link-underline" href="https://instagram.com/schrundeng" target="_blank"
                        rel="noopener noreferrer">@schrundeng</a></p>
                <p>GitHub: <a class="link-underline" href="https://github.com/schrundeng" target="_blank"
                        rel="noopener noreferrer">schrundeng</a>
                </p>
                <p>LinkedIn: <a class="link-underline" href="https://linkedin.com/in/muhammad-naufal-ramadhan-132b69263"
                        target="_blank" rel="noopener noreferrer">Muhammad Naufal Ramadhan</a></p>
            </div>
        </div>

        <div class="flex flex-col gap-10 py-12">
            <h1 class="text-5xl">Colophon</h1>
            <div class="flex flex-col gap-6 text-xl md:text-2xl">
                <div v-for="item in colophon" :key="item.label" class="flex flex-col md:flex-row md:gap-16">
                    <p class="opacity-60 md:opacity-100 w-auto md:w-72 shrink-0">{{ item.label }}</p>

                    <p>{{ item.val }}</p>
                </div>
            </div>

        </div>

        <div class="pt-24 pb-8 flex flex-col items-center gap-3 text-center text-md">
            <p>"And I watched the water unfold, it's a feeling I want you to
                know."</p>
            <p>Handcrafted without vibe coding, kurnikov, 2026</p>
        </div>


    </div>
</template>

<style scoped>
.link-underline {
    @apply relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#B7B7B7] after:transition-all after:duration-300 hover:after:w-full;
}
</style>

<script setup>
const colophon = [
    { label: 'Design Inspiration', val: 'Porter Robinson - Nurture (2021)' },
    { label: 'Art Direction Reference', val: 'Samuel Burgess-Johnson' },
    { label: 'Typography', val: 'Libertinus Serif' },
    { label: 'Built With', val: 'Nuxt, Tailwind CSS' },
    { label: 'Hosted On', val: 'My Proxmox Node, Caddy, Cloudflare' }
]
</script>