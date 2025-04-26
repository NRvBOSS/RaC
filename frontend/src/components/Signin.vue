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
            class="bg-red-100 text-red-700 p-3 rounded-lg"
          >
            {{ errorMessage }}
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700"
              >Name</label
            >
            <input
              type="text"
              class="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="John Doe"
              v-model="name"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700"
              >Phone Number</label
            >
            <input
              type="tel"
              class="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="+994 77 123 45 67"
              v-model="phone"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              type="email"
              class="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="your@email.com"
              v-model="email"
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
              v-model="password"
            />
          </div>

          <div class="flex justify-between items-center text-sm pt-2">
            <p class="text-gray-600">Already have an account?</p>
            <router-link
              to="/login"
              class="text-amber-600 hover:text-amber-700 font-medium"
            >
              Sign In
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
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Signin",
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async register() {
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
          console.log("User added successfully", response.data);
          this.$router.push("/cars/account");
        }

        this.name = "";
        this.phone = "";
        this.email = "";
        this.password = "";
        this.errorMessage = "";
      } catch (error) {
        console.error("Error registering user:", error);

        if (error.response && error.response.status === 409) {
          this.errorMessage =
            "An account already exists with this email. Please sign in.";
        } else {
          this.errorMessage =
            "An error occurred during registration. Please check again.";
        }
      }
    },
  },
};
</script>
