<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

const cars = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchUserCars = async () => {
  try {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      window.location.href = "/login";
      return;
    }

    const response = await axios.get(
      `http://localhost:4000/api/cars/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    cars.value = response.data;
    loading.value = false;
  } catch (err) {
    error.value = err.response?.data?.message || "Failed to fetch cars";
    loading.value = false;

    if (err.response?.status === 404) {
      error.value = "No cars found for this user";
    }
  }
};

const deleteCar = async (carId) => {
  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the vehicle!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#f59e0b",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      const token = localStorage.getItem("token");

      // Optimistic update
      const carToDelete = cars.value.find((car) => car._id === carId);
      cars.value = cars.value.filter((car) => car._id !== carId);

      await axios.delete(`http://localhost:4000/api/cars/${carId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await Swal.fire({
        title: "Deleted!",
        text: "Your vehicle has been deleted.",
        icon: "success",
        confirmButtonColor: "#f59e0b",
      });
    }
  } catch (err) {
    console.error("Delete error:", err);

    // If have an error, back before position
    if (carToDelete) {
      cars.value.push(carToDelete);
      cars.value.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    await Swal.fire({
      title: "Error!",
      text: err.response?.data?.message || "Failed to delete vehicle",
      icon: "error",
      confirmButtonColor: "#f59e0b",
    });
  }
};

onMounted(() => {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  if (!token) {
    alert("Please log in to access this page");
    window.location.href = "/login";
  } else {
    document.querySelector("h1").innerText = `Welcome, ${name} 👋`;
    fetchUserCars();
  }
});
</script>

<template>
  <div class="flex flex-col w-full min-h-screen text-gray-800 bg-gray-50">
    <!-- Header -->
    <div class="flex justify-between items-center p-6">
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900"></h1>
        <p class="text-lg text-gray-600 mt-1">Your listed vehicles:</p>
      </div>
    </div>

    <div class="border-t border-gray-300 my-6 mx-10"></div>

    <!-- Add Car Button -->
    <div class="flex justify-end px-10">
      <router-link
        to="/add-car"
        class="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add Vehicle
      </router-link>
    </div>

    <!-- Vehicle Grid -->
    <div class="px-10 py-6">
      <h2 class="text-2xl font-bold text-center my-6 text-gray-900">
        Your Vehicles
      </h2>

      <!-- Loading state -->
      <div v-if="loading" class="text-center py-10">
        <div
          class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-amber-600"
        ></div>
        <p class="mt-2 text-gray-600">Loading your vehicles...</p>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="text-center py-10 text-red-500">
        {{ error }}
      </div>

      <!-- Empty state -->
      <div v-else-if="cars.length === 0" class="text-center py-10">
        <p class="text-gray-600">You haven't added any vehicles yet.</p>
        <router-link
          to="/add-car"
          class="mt-4 inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg duration-200"
        >
          Add Your First Vehicle
        </router-link>
      </div>

      <!-- Cars grid -->
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div
          v-for="car in cars"
          :key="car._id"
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border border-gray-200 relative"
        >
          <!-- Badge - Fixed position -->
          <div class="absolute top-3 left-3 z-10">
            <span
              class="px-3 py-1 rounded-full text-sm font-semibold"
              :class="
                car.sale
                  ? 'bg-green-100 text-green-800'
                  : 'bg-blue-100 text-blue-800'
              "
            >
              {{ car.sale ? "FOR SALE" : "FOR RENT" }}
            </span>
          </div>

          <!-- Car Image -->
          <div class="relative h-56 overflow-hidden group">
            <img
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              :src="
                car.image ||
                'https://via.placeholder.com/400x250?text=Vehicle+Image'
              "
              :alt="car.name"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            ></div>
          </div>

          <!-- Car Info -->
          <div class="p-5 flex-grow">
            <div class="mb-4">
              <h3 class="text-xl font-bold text-gray-900 mb-1">
                {{ car.name }}
              </h3>
              <div class="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {{ car.city || "Location not specified" }}
              </div>
            </div>

            <!-- Specifications -->
            <div class="grid grid-cols-2 gap-4 text-sm mb-6">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>{{ car.engine }}</span>
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span>{{ car.people }} seats</span>
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2 text-amber-600"
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
                <span>{{ car.gearbox }}</span>
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
                <span>{{ car.gear }}</span>
              </div>
            </div>
          </div>

          <!-- Price and CTA -->
          <div class="border-t border-gray-200 mx-5"></div>
          <div class="p-5 flex justify-between items-center">
            <div>
              <p class="text-xs text-gray-500">STARTING FROM</p>
              <p class="text-xl font-bold text-gray-900">
                ${{ car.price.toLocaleString() }}
              </p>
            </div>
            <router-link
              :to="`/cars/${car._id}`"
              class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center"
            >
              <span>Details</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
            <button
              @click="deleteCar(car._id)"
              class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.delete-btn {
  transition: all 0.3s ease;
}
.delete-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
