<template>
  <div id="pics" class="w-full overflow-hidden bg-secondary py-12 md:py-20">
    <div class="px-page flex flex-col gap-12">
      <h2 class="text-5xl text-secondary">Pics</h2>
    </div>

    <!-- picture slide -->
    <div
      class="flex gap-0 overflow-x-auto pl-page custom-scrollbar py-4 scroll-smooth"
    >
      <div
        v-for="(picture, index) in pictures"
        :key="index"
        class="flex flex-col gap-3 shrink-0"
        :class="
          picture.aspect === '3/4'
            ? 'w-[254px] md:w-[443px]'
            : 'w-[427px] md:w-[762.5px]'
        "
      >
        <!-- top line -->
        <div class="relative w-full h-4 flex items-center">
          <div
            class="border-t-[1.5px] border-[#353535] absolute top-1/2 right-0"
            :class="index === 0 ? '-left-[100vw]' : 'left-0'"
          ></div>
          <span class="w-px h-3 black-line absolute top-1/2 left-0"></span>
          <span
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary px-2 text-s text-secondary z-10"
          >
            [{{ String(index + 1).padStart(2, "0") }}]
          </span>
        </div>
        <!-- picture frame -->
        <div
          class="w-[calc(100%-2rem)] mx-auto overflow-hidden"
          :class="picture.aspect === '3/4' ? 'aspect-[3/4]' : 'aspect-[4/3]'"
        >
          <img
            class="w-full h-full object-cover"
            :src="picture.image"
            :alt="picture.alt"
          />
        </div>

        <!-- bottom line -->
        <div class="relative w-full h-4 flex items-center justify-center">
          <div
            class="border-t-[1.5px] border-[#353535] absolute top-1/2 right-0"
            :class="index === 0 ? '-left-[100vw]' : 'left-0'"
          ></div>
          <span class="w-px h-3 black-line absolute bottom-1/2 left-0"></span>
          <p
            class="relative text-secondary z-10 bg-secondary px-3 text-s whitespace-nowrap"
          >
            <span class="md:hidden">{{ picture.alt }}</span>
            <span class="hidden md:inline">{{ picture.text }}</span>
          </p>
        </div>
      </div>

      <!-- more pics nav -->
      <NuxtLink
        to="/pics"
        class="flex flex-col gap-3 shrink-0 group cursor-pointer"
      >
        <!-- top line -->
        <div class="relative w-full h-4 flex items-center">
          <div
            class="border-t-[1.5px] border-[#353535] absolute top-1/2 right-0"
            :class="index === 0 ? '-left-[100vw]' : 'left-0'"
          ></div>
          <span class="w-px h-3 black-line absolute top-1/2 left-0"></span>
          <span
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary px-2 text-s text-secondary z-10"
          >
            [More...]
          </span>
        </div>
        <!-- picture frame -->
        <div
          class="h-[296px] w-[222px] md:w-96 md:h-[548px] border-[1.5px] border-[#353535] mx-4 flex flex-col items-center justify-center gap-2 text-secondary group-hover:border-solid group-hover:bg-[#e8e8e8] transition-colors"
        >
          <p class="text-xl text-center md:text-2xl">
            View Full Gallery (Soon)
          </p>
          <svg
            class="link-arrow -scale-y-100"
            width="66"
            height="13"
            viewBox="0 0 66 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.5 0.168213C54 7.16821 56.5936 9.20557 65.5 11.6682H0"
              stroke="#353535"
            />
          </svg>
        </div>

        <!-- bottom line -->
        <div class="relative w-full h-4 flex items-center justify-center">
          <div
            class="border-t-[1.5px] border-[#353535] absolute top-1/2 right-0"
            :class="index === 0 ? '-left-[100vw]' : 'left-0'"
          ></div>
          <span class="w-px h-3 black-line absolute bottom-1/2 left-0"></span>
          <p
            class="relative text-secondary z-10 bg-secondary px-3 text-s whitespace-nowrap"
          >
            Explore Archive
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// warm up the imgs in cache before viewport
onMounted(() => {
  const warmPics = () => {
    pictures.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(warmPics);
  } else {
    setTimeout(warmPics, 2000);
  }
});

const pictures = [
  {
    image: "/img/pics/selok_gendong.webp",
    alt: "Pantai Selok",
    text: "Pantai Selok | Φ 08° 23′ 49.4″ (S) λ 112° 30′ 50.9″ (E)",
    aspect: "3/4",
  },
  {
    image: "/img/pics/panglipuran_roof.webp",
    alt: "Desa Panglipuran",
    text: "Desa Penglipuran | Φ 08° 25′ 20.4″ (S) λ 115° 21′ 33.5″ (E)",
  },
  {
    image: "/img/pics/ulun_danu_baratan.webp",
    alt: "Candi Ulun Danu Baratan",
    text: "Cd. Ulun Danu Baratan | Φ 08° 16′ 32.2″ (S) λ 115° 09′ 59.4″ (E)",

    aspect: "3/4",
  },
  {
    image: "/img/pics/warung_brakseng.webp",
    alt: "Warung Brakseng",
    text: "Warung Brakseng | Φ 07° 45′ 24.1″ (S) λ 112° 32′ 31.6″ (E)",
  },
  {
    image: "/img/pics/brakseng.webp",
    alt: "Bukit Brakseng",
    text: "Bukit Brakseng | Φ 07° 45′ 23.2″ (S) λ 112° 32′ 31.1″ (E)",

    aspect: "3/4",
  },
];
</script>

<style scoped>
.link-arrow {
  @apply transition-transform duration-300 group-hover:translate-x-1;
}
</style>
