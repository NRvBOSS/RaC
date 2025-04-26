<template>
  <RouterView />
  <AppFooter />
</template>

<script>
import AppFooter from "./views/AppFooter.vue";

export default {
  components: {
    AppFooter,
  },
  data() {
    return {
      isAuthenticated: false,
    };
  },
  mounted() {
    this.checkAuth();
    window.addEventListener("auth-change", this.checkAuth);
  },
  beforeUnmount() {
    window.removeEventListener("auth-change", this.checkAuth);
  },
  methods: {
    checkAuth() {
      const token = localStorage.getItem("token");
      this.isAuthenticated = !!token;
    },
  },
  provide() {
    return {
      isAuthenticated: this.isAuthenticated,
    };
  },
};
</script>
