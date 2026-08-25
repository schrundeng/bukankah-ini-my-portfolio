<template>
    <div id="certificates" class="w-full px-page py-12 pb-32 flex flex-col gap-12">
        <h1 class="text-5xl">Certificates</h1>
        <div class="flex flex-col gap-6 text-2xl">
            <div v-for="certificate in certificates" :key="certificate.title"
                class="w-full flex justify-between items-center gap-12">
                <p class="w-24">{{ certificate.year }}</p>
                <p class="w-[420px]">{{ certificate.title }}</p>
                <p class="w-[420px]">{{ certificate.issuer }}</p>
                <div class="w-24 text-right">
                    <a class="link-underline" :href="certificate.link">{{ certificate.action }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const certificates = [
    {
        year: '2025',
        title: 'Backend Developer Competency',
        issuer: 'DOT Indonesia',
        action: 'View',
        link: '#'
    },
    {
        year: '2024',
        title: 'Full Stack Web Development',
        issuer: 'SMK Telkom Malang',
        action: 'View',
        link: '#'
    },
    {
        year: '2024',
        title: 'Industry Internship (UPT PTIK)',
        issuer: 'Universitas Negeri Malang',
        action: 'View',
        link: '#'
    },
    {
        year: '2024',
        title: 'HTML5 Application Development',
        issuer: 'Certiport / Pearson VUE',
        action: 'Verify',
        link: '#'
    },
    {
        year: '2024',
        title: 'UI/UX Design Foundation',
        issuer: 'UKM LAOS Universitas Negeri Jember',
        action: 'View',
        link: '#'
    }
]
</script>

<style scoped>
.link-underline {
    @apply relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#B7B7B7] after:transition-all after:duration-300 hover:after:w-full;
}
</style>