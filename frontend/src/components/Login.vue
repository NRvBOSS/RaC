<script setup lang="ts">
import router from '@/router';

</script>

<template>
  <div
    class="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex justify-center items-center z-50"
  >
    <div
      class="bg-white p-8 rounded-xl w-[90%] max-w-md shadow-xl border border-gray-200"
    >
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900">Login to Your Account</h2>
        <p class="text-gray-600 mt-2">
          Access your vehicle management dashboard
        </p>
      </div>

      <div class="space-y-5">
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            class="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            class="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="••••••••"
          />
        </div>

        <div class="flex justify-between items-center text-sm">
          <router-link
            to="/signin"
            class="text-amber-600 hover:underline font-medium"
          >
            Create account
          </router-link>
        </div>

        <div class="flex gap-4 pt-4 text-center">
          <router-link to="/cars"
            class="flex-1 px-4 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancel
          </router-link>
          <router-link to="/cars/account"
            class="flex-1 px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
          >
            Sign In
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
