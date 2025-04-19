<template>
  <header
    class="flex fixed justify-between items-center top-0 left-0 w-full p-4 flex-wrap bg-black/30 backdrop-blur-sm z-50"
  >
    <!-- Logo -->
    <router-link class="ml-10 text-3xl text-white font-bold" to="/">
      <p class="text-white">RaC</p>
    </router-link>

    <!-- Search Input -->
    <input
      class="border-2 border-white focus:outline-none h-[3rem] max-h-full w-[35rem] max-w-full rounded-2xl content-around px-4 resize-none bg-white transition-colors duration-300 focus:border-black"
      placeholder="Search 🔍"
    ></input>

    <!-- Sign In Button -->
    <router-link
      to=""
      class="duration-300 mr-8 hover:bg-white rounded-full"
      href="#"
    >
      <img
        class="w-12 h-12"
        src="https://cdn-icons-png.flaticon.com/512/3276/3276535.png"
        alt=""
      />
    </router-link>
  </header>
</template>
