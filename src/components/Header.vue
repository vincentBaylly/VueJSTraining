<template>
  <div>
    <div class="icon-bar">
      <router-link to="/home"><i class="fa fa-home"></i></router-link>
      <router-link class="nav-link" to="/login"
        ><i class="fa fa-sign-in"></i
      ></router-link>
      <router-link class="nav-link" to="/contact"
        ><i class="fa fa-envelope-square"></i
      ></router-link>
      <router-link class="nav-link" to="/register">
        <i class="fa fa-user"></i>
      </router-link>
      <router-link class="nav-link" to="/hook"
        ><i class="fa fa-info-circle"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
