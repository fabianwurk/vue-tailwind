<template>
  <div>

    <div class="container mx-auto">
      <h2 class="text-sm font-bold mb-2 mt-8 text-center">
        <span class="block md:hidden lg:hidden text-center text-blue-600 text-xl">Mobile</span>
        <span class="hidden md:block lg:hidden text-center text-blue-600 text-xl">Tablet</span>
        <span class="hidden md:hidden lg:block text-center text-blue-600 text-xl my-3">Desktop</span>
        1 Col - Padding 16px [Tailwind: p-4]
      </h2>
      <div class="flex items-center">
        <div class="w-full bg-gray-300 mb-4 mt-0 py-4 px-4 text-center">
          <span class="bg-white w-full block" ref="boxWidth">{{width}}px</span>
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
    };
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
      this.width = this.$refs.boxWidth.clientWidth;
    }
  }
}
</script>