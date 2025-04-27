<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "Signin",
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      password: "",
      showPassword: false,
      errorMessage: "",
      isLoading: false,
    };
  },
  methods: {
    async register() {
      this.isLoading = true;
      const userData = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        password: this.password,
      };

      try {
        const response = await axios.post(
          "http://localhost:4000/api/user/register",
          userData
        );

        if (response.status === 201) {
          toast.success("Registration successful! Please login.");
          this.$router.push("/login");
        }
      } catch (error) {
        console.error("Error registering user:", error);

        if (error.response && error.response.status === 409) {
          this.errorMessage =
            "An account already exists with this email. Please sign in.";
        } else {
          this.errorMessage =
            "An error occurred during registration. Please check again.";
        }
        toast.error(this.errorMessage);
      } finally {
        this.isLoading = false;
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<template>
  <div
    class="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex justify-center items-center z-50"
  >
    <div
      class="bg-white p-8 rounded-xl w-[90%] max-w-md shadow-xl border border-gray-200"
    >
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900">Create Account</h2>
        <p class="text-gray-600 mt-2">Join our premium vehicle service</p>
      </div>

      <form method="post" @submit.prevent="register">
        <div class="space-y-5">
          <!-- Error Message -->
          <div
            v-if="errorMessage"
            class="bg-red-50 text-red-700 p-3 rounded-lg text-center"
          >
            {{ errorMessage }}
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700"
              >Name</label
            >
            <input
              type="text"
              class="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
              placeholder="John Doe"
              v-model="name"
              required
            />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700"
              >Phone Number</label
            >
            <input
              type="tel"
              class="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
              placeholder="+994 77 123 45 67"
              v-model="phone"
              required
            />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              type="email"
              class="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
              placeholder="your@email.com"
              v-model="email"
              required
            />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700"
              >Password</label
            >
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                class="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition pr-10"
                placeholder="••••••••"
                v-model="password"
                required
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

          <div class="flex justify-between items-center text-sm pt-2">
            <p class="text-gray-600">Already have an account?</p>
            <router-link
              to="/login"
              class="text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              Sign In
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
              <span v-if="!isLoading">Create Account</span>
              <span v-else
                ><i class="fas fa-spinner fa-spin mr-2"></i> Creating...</span
              >
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
