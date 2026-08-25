<template>
  <header class="items-stretch">

    <div class="w-full px-page flex items-center gap-12 self-stretch justify-between">
      <!-- left side, name -->
      <div class="text-2xl flex tracking-[0.2rem]">
        <a class="pt-12 pb-6 pr-5 self-stretch flex items-center" href="/"> MUHAMMAD</a>
        <span class="w-px self-stretch bg-[#B7B7B7]"></span>
        <a class="pt-12 pb-6 pl-5" href="/"> NAUFAL RAMADHAN</a>
      </div>

      <!-- right side, nav -->
      <nav class="pt-12 pb-6 text-2xl">
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
    </div>

    <!-- horizontal gradient line -->
    <div class="h-px w-3/4 bg-gradient-to-r from-[#B7B7B7] to-transparent"></div>

  </header>
</template>

<style scoped>
.nav-link {
  @apply relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#B7B7B7] after:transition-all after:duration-300 hover:after:w-full;
}
</style>