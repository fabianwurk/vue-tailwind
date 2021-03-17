<template>
  <div>

    <div class="container mx-auto">
      <h2 class="text-sm font-bold mb-2 mt-8 text-center">Large: 1 Col - Padding 16px</h2>
      <div class="flex items-center">
        <div class="w-full bg-gray-300 mb-4 mt-0 py-4 px-4 text-center">
          <span class="bg-white w-full block" ref="box">{{width}}px</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      width: null,
      observer: null
    };
  },

  mounted() {
    //get initial dimensions. Mutation observer will observe mutations only
    const box = this.$refs.box,
      boxSize = box.getBoundingClientRect();

    this.width = Math.trunc(boxSize.width) + "px";
    this.height = Math.trunc(boxSize.height) + "px";
    // initialize the observer on mount
    this.initObserver();
  },

  //disconnect the observer before destroy
  beforeDestroy() {
    if (this.observer) this.observer.disconnect();
  },

  methods: {
    initObserver() {
      const box = this.$refs.box,
        vm = this,
        config = {
          attributes: true
        };
      // create the observer
      const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          // check if the mutation is attributes and update the width and height data if it is.
          if (mutation.type === "attributes") {
            let { width, height } = box.style;

            vm.width = width;
            vm.height = height;
          }
        });
      });

      // observe element's specified mutations
      observer.observe(box, config);
      // add the observer to data so we can disconnect it later
      this.observer = observer;
    }
  }
}
</script>