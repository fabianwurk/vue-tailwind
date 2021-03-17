<template>
  <div>

    <div class="container mx-auto">
      <h2 class="text-sm font-bold mb-2 mt-8 text-center">Large: 1 Col - Padding 16px</h2>
      <div class="flex items-center">
        <div class="w-full bg-gray-300 mb-4 mt-0 py-4 px-4 text-center">
          <span class="bg-white w-full block" ref="w1">{{width1}}px</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    data: {
        window: {
            width: 0,
            height: 0
        }
    },
  mounted() {
  	this.innerWidth()
  },
  created() {
  window.addEventListener("resize", this.resizeWidthEvent);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeWidthEvent);
  },
  methods: {
    resizeWidthEvent(e) {
      this.width1 = this.$refs.w1.clientWidth;
    }
  }
}
</script>