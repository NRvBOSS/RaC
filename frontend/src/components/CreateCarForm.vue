<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <form
      @submit.prevent="addCar"
      method="post"
      class="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg transform transition-all hover:shadow-2xl"
    >
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-3xl font-bold text-orange-600">Add New Car</h2>
        <i class="fas fa-car text-orange-500 text-2xl"></i>
      </div>

      <!-- Sahib məlumatları bölməsi -->
      <div
        class="mb-6 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500"
      >
        <h3 class="font-bold text-orange-700 mb-2 flex items-center">
          <i class="fas fa-user-circle mr-2"></i> Owner Information
        </h3>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-600">Name</p>
            <p class="font-medium">{{ ownerInfo.name || "Loading..." }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Phone</p>
            <p class="font-medium">{{ ownerInfo.phone || "Loading..." }}</p>
          </div>
        </div>
      </div>

      <!-- Form Fields -->
      <div class="space-y-5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label class="flex items-center text-gray-700 mb-1 font-medium">
              <i class="fas fa-car mr-2 text-orange-500"></i> Name
            </label>
            <input
              v-model="carData.name"
              type="text"
              required
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition"
            />
          </div>

          <div>
            <label class="flex items-center text-gray-700 mb-1 font-medium">
              <i class="fas fa-calendar-alt mr-2 text-orange-500"></i> Year
            </label>
            <input
              v-model="carData.year"
              type="number"
              min="1900"
              :max="new Date().getFullYear()"
              required
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>
        </div>

        <div>
          <label class="flex items-center text-gray-700 mb-1 font-medium">
            <i class="fas fa-car-side mr-2 text-orange-500"></i> Body Type
          </label>
          <select
            v-model="carData.ban"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            <option value="" disabled selected>Select body type</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Coupe">Coupe</option>
            <option value="Convertible">Convertible</option>
          </select>
        </div>

        <div>
          <label class="flex items-center text-gray-700 mb-1 font-medium">
            <i class="fas fa-palette mr-2 text-orange-500"></i> Color
          </label>
          <input
            v-model="carData.color"
            type="text"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        <div>
          <label class="flex items-center text-gray-700 mb-1 font-medium">
            <i class="fas fa-tachometer-alt mr-2 text-orange-500"></i> Mileage
            (km)
          </label>
          <input
            v-model="carData.mileage"
            type="number"
            min="0"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center bg-gray-50 p-3 rounded-lg">
            <input
              v-model="carData.sale"
              type="checkbox"
              class="h-5 w-5 text-orange-600 focus:ring-orange-400 rounded"
            />
            <label class="ml-2 flex items-center text-gray-700 font-medium">
              <i class="fas fa-tag mr-2 text-orange-500"></i> For Sale
            </label>
          </div>

          <div class="flex items-center bg-gray-50 p-3 rounded-lg">
            <input
              v-model="carData.rent"
              type="checkbox"
              class="h-5 w-5 text-orange-600 focus:ring-orange-400 rounded"
            />
            <label class="ml-2 flex items-center text-gray-700 font-medium">
              <i class="fas fa-key mr-2 text-orange-500"></i> For Rent
            </label>
          </div>
        </div>

        <div>
          <label class="flex items-center text-gray-700 mb-1 font-medium">
            <i class="fas fa-users mr-2 text-orange-500"></i> Passengers
          </label>
          <input
            v-model="carData.people"
            type="number"
            min="1"
            max="10"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label class="flex items-center text-gray-700 mb-1 font-medium">
              <i class="fas fa-cog mr-2 text-orange-500"></i> Engine (L)
            </label>
            <input
              v-model="carData.engine"
              type="text"
              required
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div>
            <label class="flex items-center text-gray-700 mb-1 font-medium">
              <i class="fas fa-cogs mr-2 text-orange-500"></i> Gearbox
            </label>
            <select
              v-model="carData.gearbox"
              required
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="" disabled selected>Select gearbox</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-automatic">Semi-automatic</option>
            </select>
          </div>
        </div>

        <div>
          <label class="flex items-center text-gray-700 mb-1 font-medium">
            <i class="fas fa-exchange-alt mr-2 text-orange-500"></i> Drive Type
          </label>
          <select
            v-model="carData.gear"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            <option value="" disabled selected>Select drive type</option>
            <option value="Front-wheel drive">Front-wheel drive</option>
            <option value="Rear-wheel drive">Rear-wheel drive</option>
            <option value="All-wheel drive">All-wheel drive</option>
          </select>
        </div>

        <div>
          <label class="flex items-center text-gray-700 mb-1 font-medium">
            <i class="fas fa-image mr-2 text-orange-500"></i> Image URL
          </label>
          <input
            v-model="carData.image"
            type="url"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        <div>
          <label class="flex items-center text-gray-700 mb-1 font-medium">
            <i class="fas fa-dollar-sign mr-2 text-orange-500"></i> Price ($)
          </label>
          <input
            v-model="carData.price"
            type="number"
            min="0"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        <div>
          <label class="flex items-center text-gray-700 mb-1 font-medium">
            <i class="fas fa-city mr-2 text-orange-500"></i> City
          </label>
          <input
            v-model="carData.city"
            type="text"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>
      </div>

      <!-- Uğur mesajı (yalnız success olduqda görünəcək) -->
      <div
        v-if="success"
        class="mb-4 p-4 bg-green-100 text-green-700 rounded-lg"
      >
        <i class="fas fa-check-circle mr-2"></i>
        Maşın uğurla əlavə edildi! Sizi avtomobillər səhifəsinə yönləndiririk...
      </div>

      <button
        type="submit"
        class="w-full mt-6 py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
        :disabled="isLoading"
      >
        <i class="fas fa-plus-circle mr-2"></i>
        {{ isLoading ? "Adding..." : "Add Car" }}
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  data() {
    return {
      carData: {
        name: "",
        year: "",
        ban: "",
        color: "",
        mileage: "",
        sale: false,
        rent: false,
        people: "",
        engine: "",
        gearbox: "",
        gear: "",
        image: "",
        price: "",
        owner: "",
        city: "",
        router: null,
      },
      ownerInfo: {
        name: "",
        phone: "",
      },
      isLoading: false,
      success: false,
    };
  },
  async created() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      toast.error("Please log in to access this page");
      this.$router.push("/login");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:4000/api/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      this.ownerInfo = {
        name: response.data.name,
        phone: response.data.phone,
      };

      this.carData.owner = userId;
    } catch (error) {
      console.error("Error fetching user info:", error);
      toast.error("Failed to load user information");
    }
  },
  methods: {
    async addCar() {
      this.isLoading = true;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "http://localhost:4000/api/cars/",
          {
            ...this.carData,
            ownerName: this.ownerInfo.name,
            ownerPhone: this.ownerInfo.phone,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 201) {
          toast.success("Car added successfully!");
          this.success = true;
          setTimeout(() => {
            this.router.push("/cars/account").catch((err) => {
              console.error("Navigation error:", err);
            });
          }, 2000);
          this.clearForm();
          // Burada birbaşa yönləndir
        }
      } catch (error) {
        console.error(
          "Error adding car:",
          error.response?.data || error.message
        );
        toast.error(
          error.response?.data?.message ||
            "Failed to add car. Please try again."
        );
      } finally {
        this.isLoading = false;
      }
    },
    clearForm() {
      this.carData = {
        ...this.carData,
        name: "",
        year: "",
        ban: "",
        color: "",
        mileage: "",
        sale: false,
        rent: false,
        people: "",
        engine: "",
        gearbox: "",
        gear: "",
        image: "",
        price: "",
        city: "",
      };
    },
  },
};
</script>
