<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center justify-center px-screen"
  >
    <div
      class="flex flex-col max-h-[100dvh] bg-[#0E0E0E]/80 backdrop-blur-md border-[1.5px] border-[#B7B7B7] p-6 md:p-8 m-8 md:m-16"
    >
      <div class="flex flex-row items-center justify-between pb-4 md:pb-6">
        <!-- certificate title -->
        <h1 class="text-xl md:text-2xl">Certificate Of...</h1>
        <!-- close button -->
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
      </div>
      <!-- certificate img -->
      <div
        class="flex-1 min-h-0 flex items-center overflow-y-auto secondary-custom-scrollbar justify-center"
      >
        <img
          class="w-auto max-h-full max-w-full object-contain"
          src="/img/sertif.jpeg"
          alt="sert"
        />
      </div>
    </div>
  </div>
</template>
