<template>
  <div>
  <button @click="calculateWidth()">Calculate Height</button>
  <h1 class="text-xl font-bold mb-2 mt-8 text-center">Large: Desktop 1200px max</h1>
  <div class="container mx-auto">
    <h2 class="text-sm font-bold mb-2 mt-8 text-center">Large: 6 Col - Padding 16px</h2>
    <div class="flex items-center">
      <div class="w-1/6 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block" ref="app6">{{width6}}px</span>
      </div>
      <div class="w-1/6 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block" ref="app6">{{width6}}px</span>
      </div>
      <div class="w-1/6 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block" ref="app6">{{width6}}px</span>
      </div>
      <div class="w-1/6 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block" ref="app6">{{width6}}px</span>
      </div>
      <div class="w-1/6 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block" ref="app6">{{width6}}px</span>
      </div>
      <div class="w-1/6 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block" ref="app6">{{width6}}px</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <h2 class="text-sm font-bold mb-2 mt-8 text-center">Large: 3 Col - Padding 16px</h2>
    <div class="flex items-center">
      <div class="w-1/3 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block" ref="app3">{{width3}}px</span>
      </div>
      <div class="w-1/3 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block" ref="app3">{{width3}}px</span>
      </div>
      <div class="w-1/3 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block" ref="app3">{{width3}}px</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <h2 class="text-sm font-bold mb-2 mt-8 text-center">Large - 2 Columns: Padding 16px - <span class="text-red-600">{{ twoCol }}</span></h2>
    <div class="flex items-center">
      <div class="w-1/2 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block" ref="app2">{{width2}}px</span>
      </div>
      <div class="w-1/2 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block" ref="app2">{{width2}}px</span>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      width6: 0,
      width3: 0,
      width2: 0,
    };
  },
  methods: {
    calculateWidth() {
      this.width6 = this.$refs.app6.clientWidth;
      this.width3 = this.$refs.app3.clientWidth;
      this.width2 = this.$refs.app2.clientWidth;
    }
  }
}
</script>