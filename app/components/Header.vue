<template>
  <header class="items-stretch">

    <div class="w-full px-page flex items-stretch gap-12 self-stretch justify-between">
      <!-- left side, name -->
      <div class="text-2xl flex tracking-[0.2rem]">
        <a class="pr-5 self-stretch flex items-center nav-shrink" :class="isScrolled ? 'py-4' : 'pt-12 pb-6'" href="/">
          MUHAMMAD</a>
        <span class="w-px self-stretch bg-[#B7B7B7]"></span>
        <a class="pl-5 nav-shrink" :class="isScrolled ? 'py-4' : 'pt-12 pb-6'" href="/"> NAUFAL RAMADHAN</a>
      </div>

      <!-- right side, nav -->
      <nav class="text-2xl nav-shrink hidden lg:block" :class="isScrolled ? 'py-4' : 'pt-12 pb-6'">
        |
        <a href="#home" class="nav-link"> home</a>
        |
        <a href="#about" class="nav-link"> about</a>
        |
        <a href="#cv" class="nav-link"> cv</a>
        |
        <a href="#projects" class="nav-link"> projects</a>
        |
        <a href="#contact" class="nav-link"> contact</a>
        |
      </nav>
      <!-- hamburgir for less than 1024px displays -->
      <button class="flex lg:hidden nav-shrink items-center" :class="isScrolled ? 'py-4' : 'pt-12 pb-6'"
        @click="isOpen = !isOpen">
        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.5H17.5M0 6.5H17.5M0 12.5H17.5" stroke="#B7B7B7" />
        </svg>

      </button>
      <Teleport to="body">
        <Transition enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in" enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4">
          <div v-if="isOpen" class="fixed lg:hidden nav-shrink inset-x-0 py-12 z-49 backdrop-blur-md bg-[#0E0E0E]/80"
            :class="isScrolled ? 'top-[65px]' : 'top-[105px]'">
            <div class="flex flex-col items-center gap-8 text-2xl">
              <a href="#home" @click="isOpen = false" class="nav-link stagger-item"
                style="animation-delay: 100ms">home</a>
              <a href="#about" @click="isOpen = false" class="nav-link stagger-item"
                style="animation-delay: 150ms">about</a>
              <a href="#projects" @click="isOpen = false" class="nav-link stagger-item"
                style="animation-delay: 200ms">projects</a>
              <a href="#contact" @click="isOpen = false" class="nav-link stagger-item"
                style="animation-delay: 250ms">contact</a>

            </div>

          </div>
        </Transition>
      </Teleport>
    </div>

    <!-- horizontal gradient line -->
    <div class="h-px w-3/4 bg-gradient-to-r from-[#B7B7B7] to-transparent"></div>

  </header>
</template>

<style scoped>
.nav-link {
  @apply relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#B7B7B7] after:transition-all after:duration-300 hover:after:w-full;
}

.nav-shrink {
  @apply transition-all duration-300 ease-in-out
}

@keyframes staggerIn {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stagger-item {
  opacity: 0;
  animation: staggerIn 0.3s ease-out forwards;
}
</style>

<!-- shrink navbar after 40px scroll down -->

<script setup>
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})

// save state for burgir

const isOpen = ref(false);
</script>