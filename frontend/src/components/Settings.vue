<template>
  <div>
    <div class="p-10 text-center">
      <h1 class="text-3xl font-bold text-gray-800">Settings</h1>
      <p class="mt-2 text-gray-600">Update your account information</p>
    </div>

    <div class="flex flex-col gap-4 border border-gray-300 rounded-3xl w-[90%] max-w-xl mx-auto p-6 shadow-md">
      <div>
        <label class="block mb-1 font-medium text-gray-700">Name</label>
        <input type="text" class="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>

      <div>
        <label class="block mb-1 font-medium text-gray-700">Surname</label>
        <input type="text" class="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>

      <div>
        <label class="block mb-1 font-medium text-gray-700">Phone</label>
        <input type="number" class="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>

      <div>
        <label class="block mb-1 font-medium text-gray-700">Email</label>
        <input type="email" class="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>

      <div class="flex justify-end mt-6">
        <router-link to="/signin" class="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition duration-200">
          Update
        </router-link>
      </div>
    </div>
  </div>
</template>
