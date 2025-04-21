<script setup>
import { ref, computed } from "vue";
import Dashboard from "@/components/Dashboard.vue";
import Messages from "@/components/Messages.vue";
import Settings from "@/components/Settings.vue";

const currentTab = ref("dashboard");

const currentViewComponent = computed(() => {
  switch (currentTab.value) {
    case "dashboard":
      return Dashboard;
    case "messages":
      return Messages;
    case "settings":
      return Settings;
    default:
      return Dashboard;
  }
});
</script>

<template>
  <div class="flex">
    <!-- Sidebar -->
    <div
      class="sticky top-0 h-screen w-60 bg-black text-white p-6 flex flex-col justify-between"
    >
      <div>
        <router-link class="text-3xl font-bold mb-10 block text-center" to="/"
          >RaC</router-link
        >
        <div class="border-t border-gray-400 my-4"></div>
        <div class="flex flex-col gap-4">
          <button
            @click="currentTab = 'dashboard'"
            class="hover:bg-gray-700 duration-300 p-4 rounded-xl text-left"
          >
            Dashboard
          </button>
          <button
            @click="currentTab = 'messages'"
            class="hover:bg-gray-700 duration-300 p-4 rounded-xl text-left"
          >
            Messages
          </button>
          <button
            @click="currentTab = 'settings'"
            class="hover:bg-gray-700 duration-300 p-4 rounded-xl text-left"
          >
            Settings
          </button>
        </div>
      </div>
      <button
        @click="currentTab = 'logout'"
        class="hover:bg-red-600 bg-red-500 p-4 rounded-xl text-left"
      >
        Log out
      </button>
    </div>

    <!-- Main Content -->
    <div class="flex-1 min-h-screen bg-white">
      <component :is="currentViewComponent" />
    </div>
  </div>
</template>
