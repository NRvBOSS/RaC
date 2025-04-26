<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },

  methods: {
    async login() {
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
          console.log("Login successful", response.data);

          // Error message cleaned
          this.errorMessage = "";

          //Routing page to account
          this.$router.push("/cars/account");
        }
      } catch (error) {
        console.error("Error logging in:", error);

        // If the server returns a 404 or other error, we output a message
        if (error.response && error.response.status === 404) {
          this.errorMessage = "Account not found. Please sign up.";
        } else if (error.response && error.response.status === 401) {
          this.errorMessage = "Incorrect password.";
        } else {
          this.errorMessage =
            "An error occurred during login. Please try again.";
        }
      } finally {
        // Clean form fields
        this.email = "";
        this.password = "";
      }
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
          class="mb-4 text-center text-red-600 font-medium"
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
              v-model="password"
              required
              class="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <div class="flex justify-between items-center text-sm">
            <p class="text-gray-600">You don't have an account?</p>
            <router-link
              to="/signin"
              class="text-amber-600 hover:underline font-medium"
            >
              Create account
            </router-link>
          </div>

          <div class="flex gap-4 pt-4 text-center">
            <router-link
              to="/cars"
              class="flex-1 px-4 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </router-link>
            <button
              type="submit"
              class="flex-1 px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
