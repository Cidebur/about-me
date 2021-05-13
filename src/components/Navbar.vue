<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
    id="sideNav"
  >
    <router-link to="/" class="navbar-brand">
      <span class="d-block d-lg-none">MC</span>
      <span class="d-none d-lg-block"
        ><img
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="../assets/img/profile.jpg"
          alt="..."
      /></span>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item" v-bind:key="route.index" v-for="route in routes">
          <router-link :to="route.path" class="nav-link js-route-trigger">{{
            route.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { routes } from "../router";
export default {
  data() {
    return {
      routes,
    };
  },
};
</script>

<style scoped>
.nav-item a.router-link-exact-active {
  color: white;
}
</style>
