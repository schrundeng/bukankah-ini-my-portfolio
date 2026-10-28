<template>
  <div id="projects" class="w-full scroll-mt-24 px-page py-12 flex flex-col">
    <h2 class="text-5xl">Projects</h2>
    <div
      class="flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-6 mt-16"
    >
      <!-- project cards -->
      <div
        v-for="project in projects"
        :key="project.title"
        class="w-full border-[1.5px] border-[#B7B7B7] flex flex-col justify-between overflow-hidden group"
      >
        <!-- card project img -->
        <div class="w-full aspect-[4/3] bg-[#1a1a1a] shrink-0 overflow-hidden">
          <img
            loading="lazy"
            class="w-full h-full object-cover"
            :src="project.image"
            :alt="project.title"
          />
        </div>
        <!-- card title and desc -->
        <div class="mb-12 md:mb-0 p-6 flex flex-col gap-2">
          <p class="text-2xl">{{ project.title }}</p>
          <p class="text-base">{{ project.desc }}</p>
        </div>
        <!-- view and arrow -->
        <div
          class="flex items-center cursor-pointer gap-3 p-3 mt-auto justify-end self-end"
        >
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="group/link flex items-center gap-3"
          >
            <span class="text-base link-underline">GitHub</span>
            <svg
              v-if="!project.link"
              class="link-arrow"
              width="66"
              height="13"
              viewBox="0 0 66 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.5 0.168213C54 7.16821 56.5936 9.20557 65.5 11.6682H0"
                stroke="#B7B7B7"
              />
            </svg>
          </a>

          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="group/link flex items-center gap-3"
          >
            <span class="text-base link-underline">View</span>
            <svg
              class="link-arrow"
              width="66"
              height="13"
              viewBox="0 0 66 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.5 0.168213C54 7.16821 56.5936 9.20557 65.5 11.6682H0"
                stroke="#B7B7B7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  // {
  //   title: "Tafe",
  //   desc: "Online table booking service",
  //   image: "/img/tafe.webp",
  //   link: "#",
  // },
  {
    title: "DPM Governance Suite",
    desc: "Legislative archive and budget management platform",
    image: "/img/dpm.webp",
    github: "https://github.com/schrundeng/dpm-governance-suite",
  },
  {
    title: "Crusts & Daisies",
    desc: "Pop-up bakery storefront and pre-order platform",
    image: "/img/crusts.webp",
    link: "https://crust.kurnikov.my.id/",
    github: "https://github.com/schrundeng/crust-fe-nuxt",
  },
  {
    title: "GreenEvent",
    desc: "GIS-based environmental event platform cooked in a frantic 2-week competition sprint",
    image: "/img/greenevent.webp",
    link: "https://greenevent.kurnikov.my.id/",
    github: "https://github.com/schrundeng/greenEvent",
  },
];
</script>

<style scoped>
.link-underline {
  @apply relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#B7B7B7] after:transition-all after:duration-300 group-hover/link:after:w-full;
}

.link-arrow {
  @apply transition-transform duration-300 group-hover:translate-x-1;
}
</style>
