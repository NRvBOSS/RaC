<template>
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-10">
      <h1 class="text-3xl font-bold text-gray-900">Account Settings</h1>
      <p class="mt-2 text-gray-600">Manage your personal information</p>
    </div>

    <form @submit.prevent="updateAccount">
      <div class="bg-white rounded-xl shadow-md border border-gray-200 p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              v-model="phone"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              v-model="email"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        <div class="mt-10 pt-6 border-t border-gray-200 flex justify-end">
          <button
            type="submit"
            class="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition-colors duration-300 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Save Changes
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Reactive variables
const phone = ref("");
const email = ref("");

const userId = localStorage.getItem("userId");
if (!userId) {
  alert("Please log in to access this page");
  window.location.href = "/login";
}

// Functions
const updateAccount = async () => {
  try {
    const response = await axios.patch(
      `http://localhost:4000/api/user/${userId}`,
      {
        phone: phone.value,
        email: email.value,
      }
    );
    console.log("Account updated successfully", response.data);
  } catch (error) {
    console.error("Error updating account:", error);
  }
};

// onMounted to load initial data
onMounted(() => {
  const savedPhone = localStorage.getItem("phone");
  const savedEmail = localStorage.getItem("email");

  if (!savedPhone || !savedEmail) {
    alert("Please log in to access this page");
    window.location.href = "/login";
  } else {
    phone.value = savedPhone;
    email.value = savedEmail;
  }
});
</script>
