<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      errorMessage: "",
      isLoading: false,
    };
  },

  methods: {
    async login() {
      this.isLoading = true;
      const userData = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await axios.post(
          "http://localhost:4000/api/user/login",
          userData
        );

        // Token storage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("phone", response.data.phone);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("userId", response.data.id);

        // Check response status is 200 (OK)
        if (response.status === 200) {
          toast.success("Login successful!");
          this.errorMessage = "";
          this.$router.push("/cars/account");
        }
      } catch (error) {
        console.error("Error logging in:", error);

        if (error.response && error.response.status === 404) {
          this.errorMessage = "Account not found. Please sign up.";
        } else if (error.response && error.response.status === 401) {
          this.errorMessage = "Incorrect password.";
        } else {
          this.errorMessage =
            "An error occurred during login. Please try again.";
        }
        toast.error(this.errorMessage);
      } finally {
        this.isLoading = false;
        this.password = "";
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<template>
  <form method="post" @submit.prevent="login">
    <div
      class="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div
        class="bg-white p-8 rounded-xl w-[90%] max-w-md shadow-xl border border-gray-200"
      >
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900">
            Login to Your Account
          </h2>
          <p class="text-gray-600 mt-2">
            Access your vehicle management dashboard
          </p>
        </div>

        <!-- Show error message -->
        <div
          v-if="errorMessage"
          class="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-center font-medium"
        >
          {{ errorMessage }}
        </div>

        <div class="space-y-5">
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              type="email"
              v-model="email"
              required
              class="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700"
              >Password</label
            >
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                required
                class="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                @click="togglePasswordVisibility"
                class="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
              >
                <i
                  :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                ></i>
              </button>
            </div>
          </div>

          <div class="flex justify-between items-center text-sm">
            <p class="text-gray-600">You don't have an account?</p>
            <router-link
              to="/signin"
              class="text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              Create account
            </router-link>
          </div>

          <div class="flex gap-4 pt-4">
            <router-link
              to="/cars"
              class="flex-1 px-4 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-center"
            >
              Cancel
            </router-link>
            <button
              type="submit"
              :disabled="isLoading"
              class="flex-1 px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span v-if="!isLoading">Sign In</span>
              <span v-else
                ><i class="fas fa-spinner fa-spin mr-2"></i> Signing In...</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
