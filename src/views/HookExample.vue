<template>
  <div ref="example-element" class="container">
    <h1>Hook Example</h1>
    <b>Property:</b> {{ propertyComputed }}
  </div>
</template>

<script>
export default {
  name: "HookExample",
  data() {
    return {
      property: "Example property.",
    };
  },

  computed: {
    propertyComputed() {
      return this.property;
    },
  },

  beforeCreate() {
    console.log("At this point, events and lifecycle have been initialized.");
  },

  created() {
    console.log(
      "At this point, this.property is now reactive and propertyComputed will update."
    );
    this.property = "Example property updated.";
  },

  beforeMount() {
    console.log(`At this point, vm.$el has not been created yet.`);
  },

  mounted() {
    console.log(
      `At this point, vm.$el has been created and el has been replaced.`
    );
    console.log(this.$el.textContent); // Example component.
  },

  unmounted() {
    console.log(
      `At this point, watchers, child components, and event listeners have been torn down.`
    );
    console.log(this);
  },
};
</script>
