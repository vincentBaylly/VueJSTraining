<template>
  <!-- Footer -->
  <footer class="page-footer font-small pt-4">
    <!-- Copyright -->
    <div class="footer-copyright text-center">
      <p class="text-align-center">
        Copyright &copy; {{ getYearDate }} - ComputHand - All Rights Reserved
      </p>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>
<script>
export default {
  computed: {
    getYearDate: function() {
      const date = new Date();
      return date.getFullYear();
    },
  },
};
</script>
<style scoped>
.page-footer {
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  text-align: center;
}

.page-footer a,
.page-footer a:link,
.page-footer a:visited,
.page-footer a:active {
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
}

.page-footer a:hover {
  color: rgba(255, 255, 255, 0.75);
  border-color: rgba(255, 255, 255, 0.15);
  text-decoration: underline;
  cursor: pointer;
}

.page-footer {
  color: rgba(255, 255, 255, 0.4);
  background: #26262a;
}
</style>
