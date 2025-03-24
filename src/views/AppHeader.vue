<template>
  <header
    class="flex fixed justify-between items-center top-0 left-0 w-full p-4 flex-wrap bg-black/30 backdrop-blur-sm z-50"
  >
    <!-- Logo -->
    <a class="ml-10 text-3xl text-white font-bold" href="#">
      <p class="text-white">RaC</p>
    </a>

    <!-- Search Input -->
    <textarea
      class="border-2 border-white focus:outline-none w-[35rem] max-w-full rounded-2xl content-around px-4 resize-none bg-white transition-colors duration-300 focus:border-black"
      placeholder="Search 🔍"
    ></textarea>

    <!-- Sign In Button -->
    <a
      class="mr-8 rounded-2xl border-2 bg-white hover:bg-black hover:text-white transition-colors duration-300 px-4 py-2"
      href="#"
    >
      Sign In
    </a>
  </header>
</template>
