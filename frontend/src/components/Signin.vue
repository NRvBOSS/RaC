<template>
  <div
    class="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50"
  >
    <div class="bg-white p-8 rounded-3xl w-[90%] max-w-md shadow-lg">
      <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">
        Create Account
      </h2>

      <div class="mb-4">
        <label class="block mb-1 text-gray-700">Name and Surname</label>
        <input
          type="text"
          class="w-full border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div class="mb-4">
        <label class="block mb-1 text-gray-700">Phone Number</label>
        <input
          type="number"
          class="w-full border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div class="mb-4">
        <label class="block mb-1 text-gray-700">Email</label>
        <input
          type="email"
          class="w-full border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div class="mb-6">
        <label class="block mb-1 text-gray-700">Password</label>
        <input
          type="password"
          class="w-full border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div class="flex justify-between items-center text-sm text-gray-600 mb-4">
        <p>Are you have an account?</p>
        <router-link
          to="/login"
          class="text-green-600 hover:underline font-semibold"
        >
          Login
        </router-link>
      </div>

      <div class="flex justify-end gap-4">
        <button class="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400">
          Cancel
        </button>
        <button
          class="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>
