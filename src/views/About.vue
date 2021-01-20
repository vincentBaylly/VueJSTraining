<template>
  <div>
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showThisModal"></div>
    </transition>
    <transition name="slide" appear>
      <div class="title">
        <h1 class="h1">A Propos</h1>
      </div>
      <div class="content img">
        <img
          class="resize"
          src="https://images.freeimages.com/images/large-previews/ede/snow-covered-trees-1383826.jpg"
        />
      </div>
      <div class="normalize content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    update(showModal) {
      this.showModal = showModal;
    },
  },
  components: {
    modal: modal,
  },
};
</script>
