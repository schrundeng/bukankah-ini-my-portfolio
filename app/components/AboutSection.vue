<template>
  <div
    id="about"
    class="scroll-mt-24 w-full mt-32 px-page py-12 flex flex-col lg:flex-row justify-between items-start gap-12"
  >
    <!-- left side, about, desc, download cv -->
    <div class="max-w-3xl flex flex-col gap-10">
      <h2 class="text-5xl">About Me</h2>
      <!-- cv modal -->
      <Transition name="modal" :duration="500">
        <CvView v-if="isCvOpen" @close="isCvOpen = false" />
      </Transition>
      <!-- about paragraph -->
      <div class="text-xl md:text-2xl leading-snug space-y-8">
        <p>Frontend leaning developer with backend roots.</p>
        <p>
          I'm {{ age }}, based in Klagenfurt am Wörthersee, Austria, studying
          robotics and artificial intelligence.
        </p>
        <p>
          I handle both sides of the screen: designing interfaces, wiring
          backend logic, and managing the servers they run on (with occasional
          downtime).
        </p>
        <p>
          When I'm offline, I usually take photos or listen to an album front to
          back.
        </p>
      </div>
      <!-- download cv button -->
      <button
        class="w-full group md:w-[357px] py-4 border border-[#B7B7B7] text-xl md:text-2xl text-center"
        @click="openCv"
      >
        <span class="link-underline">Download CV</span>
      </button>
    </div>
    <!-- right side, my pic -->
    <div class="flex justify-end items-start">
      <img
        class="max-w-[357px] w-full md:w-auto object-cover object-top"
        src="/img/me.webp"
        alt="Muhammad Naufal Ramadhan portrait"
      />
    </div>
  </div>
</template>

<style scoped>
.link-underline {
  @apply relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#B7B7B7] after:transition-all after:duration-300 group-hover:after:w-full;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 150ms ease-out;
}

.modal-enter-active :deep(.cv-card) {
  transition:
    transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 100ms ease-out;
  transform-origin: center;
}

.modal-leave-active :deep(.cv-card) {
  transition:
    transform 200ms ease-in,
    opacity 200ms ease-in;
  transform-origin: center;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from :deep(.cv-card),
.modal-leave-to :deep(.cv-card) {
  opacity: 0;
  transform: scale(0.95);
}
</style>

<script setup>
const isCvOpen = useState("cv", () => false);

// silently load the cv
onMounted(() => {
  const img = new Image();
  img.src = "/img/cv.webp";
});

//only show the img after gpu decode i think
const openCv = async () => {
  const img = new Image();
  img.src = "/img/cv.webp";
  await img.decode().catch(() => {});
  isCvOpen.value = true;
};

const age = computed(() => {
  const birthDate = new Date(2006, 8, 27); //month 8 bcs it starts from 0???
  const today = new Date();
  let diff = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    diff--;
  }
  return diff;
});
</script>
