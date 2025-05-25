<script setup>
import { ref, computed } from "vue";
import Dashboard from "@/components/Dashboard.vue";
import Settings from "@/components/Settings.vue";
import Favorites from "@/components/Favorites.vue";

const currentTab = ref("dashboard");

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("phone");
  localStorage.removeItem("email");
  localStorage.removeItem("userId");

  window.dispatchEvent(new CustomEvent("auth-change"));
  alert("You have been logged out.");
  window.location.href = "/login";
};

const currentViewComponent = computed(() => {
  switch (currentTab.value) {
    case "dashboard":
      return Dashboard;
    case "favorites":
      return Favorites;
    case "settings":
      return Settings;
    default:
      return Dashboard;
  }
});
</script>

<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <div
      class="sticky top-0 h-screen w-64 bg-gray-900 text-white p-6 flex flex-col border-r border-gray-700"
    >
      <div>
        <router-link
          to="/cars"
          class="text-3xl font-bold mb-10 block text-center text-amber-500 hover:text-amber-400 transition-colors"
        >
          RENT<span class="text-white">A</span>CAR
        </router-link>

        <div class="border-t border-gray-700 my-6"></div>

        <div class="flex flex-col gap-2">
          <button
            @click="currentTab = 'dashboard'"
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-300"
            :class="
              currentTab === 'dashboard'
                ? 'bg-gray-800 text-amber-400'
                : 'hover:text-amber-400 text-gray-300'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            Dashboard
          </button>

          <!-- Favorites -->
          <button
            @click="currentTab = 'favorites'"
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-300"
            :class="
              currentTab === 'favorites'
                ? 'bg-gray-800 text-amber-400'
                : 'hover:text-amber-400 text-gray-300'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              :fill="currentTab === 'favorites' ? 'currentColor' : 'none'"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Favorites
          </button>

          <!-- Settings -->
          <button
            @click="currentTab = 'settings'"
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-300"
            :class="
              currentTab === 'settings'
                ? 'bg-gray-800 text-amber-400'
                : 'hover:text-amber-400 text-gray-300'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Settings
          </button>
        </div>
      </div>

      <button
        @click="logout"
        class="flex items-center gap-3 px-4 py-3 rounded-lg text-left mt-4 bg-red-600 hover:bg-red-700 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        Log Out
      </button>
    </div>

    <!-- Main Content -->
    <div class="flex-1 min-h-screen bg-gray-50 p-8">
      <component :is="currentViewComponent" />
    </div>
  </div>
</template>
