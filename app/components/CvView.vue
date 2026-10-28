<template>
  <div
    @click.self="$emit('close')"
    class="fixed inset-0 z-50 flex items-center justify-center px-screen"
  >
    <div
      class="cv-card flex flex-col max-w-4xl w-fit max-h-[95dvh] bg-[#0E0E0E]/80 backdrop-blur-md border-[1.5px] border-[#B7B7B7] p-6 md:p-8 m-8 md:m-16"
    >
      <div class="flex flex-row items-center justify-between pb-4 md:pb-6">
        <!-- cv title -->
        <h2 class="text-xl md:text-2xl">Curriculum Vitae</h2>
        <div class="flex items-center gap-6 md:gap-8">
          <!-- cv download -->
          <a
            aria-label="Download CV"
            href="/Muhammad_Naufal_Ramadhan_Resume.pdf"
            download
            class="text-xl md:text-2xl link-underline"
          >
            <span class="hidden md:inline">Download</span>
            <svg
              class="md:hidden w-[20px] h-[20px]"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1.5 V11 M2.5 7L 8 11 L13.5 7 M1.5 14.5 H14.5"
                stroke="#B7B7B7"
              />
            </svg>
          </a>

          <!-- close button -->
          <button aria-label="Close modal" @click="$emit('close')">
            <svg
              class="w-[16px] h-[16px] md:w-[22px] md:h-[22px]"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.353516 0.353546L14.8535 14.8535M0.353516 14.8535L14.8535 0.353546"
                stroke="#B7B7B7"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- cv img -->
      <div
        class="flex-1 min-h-0 flex overflow-y-auto secondary-custom-scrollbar justify-center"
      >
        <img
          class="max-h-[80dvh] aspect-[2550/3300] w-auto max-w-full object-contain"
          src="/img/cv.webp"
          alt="Curriculum Vitae"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);

const handleKeyDown = (e) => {
  if (e.key === "Escape") emit("close");
};

onMounted(() => window.addEventListener("keydown", handleKeyDown));
onUnmounted(() => window.removeEventListener("keydown", handleKeyDown));
</script>

<style scoped>
.link-underline {
  @apply relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#B7B7B7] after:transition-all after:duration-300 hover:after:w-full;
}
</style>
