<template>
  <div>

    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between px-4">
        <h1 class="text-xl font-bold mb-2 mt-8 text-center">Large: Desktop 1200px max</h1>
        <button class="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 mt-8 mb-2 rounded" @click="calculateWidth()">Calculate Current Widths</button>
      </div>
    </div>
    
    <div class="container mx-auto">
      <h2 class="text-sm font-bold mb-2 mt-8 text-center">Large: 6 Col - Padding 16px</h2>
      <div class="flex items-center">
        <div class="w-1/6 bg-gray-200 mb-4 mt-0 py-8 px-4">
          <span class="bg-white w-full block" ref="w6">{{width6}}px</span>
        </div>
        <div class="w-1/6 bg-gray-300 mb-4 mt-0 py-8 px-4">
          <span class="bg-white w-full block" ref="w6">{{width6}}px</span>
        </div>
        <div class="w-1/6 bg-gray-200 mb-4 mt-0 py-8 px-4">
          <span class="bg-white w-full block" ref="w6">{{width6}}px</span>
        </div>
        <div class="w-1/6 bg-gray-300 mb-4 mt-0 py-8 px-4">
          <span class="bg-white w-full block" ref="w6">{{width6}}px</span>
        </div>
        <div class="w-1/6 bg-gray-200 mb-4 mt-0 py-8 px-4">
          <span class="bg-white w-full block" ref="w6">{{width6}}px</span>
        </div>
        <div class="w-1/6 bg-gray-300 mb-4 mt-0 py-8 px-4">
          <span class="bg-white w-full block" ref="w6">{{width6}}px</span>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <h2 class="text-sm font-bold mb-2 mt-8 text-center">Large: 3 Col - Padding 16px</h2>
      <div class="flex items-center">
        <div class="w-1/3 bg-gray-200 mb-4 mt-0 py-8 px-4">
          <span class="bg-white w-full block" ref="w3">{{width3}}px</span>
        </div>
        <div class="w-1/3 bg-gray-300 mb-4 mt-0 py-8 px-4">
          <span class="bg-white w-full block" ref="w3">{{width3}}px</span>
        </div>
        <div class="w-1/3 bg-gray-200 mb-4 mt-0 py-8 px-4">
          <span class="bg-white w-full block" ref="w3">{{width3}}px</span>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <h2 class="text-sm font-bold mb-2 mt-8 text-center">Large: 2 Col - Padding 16px</h2>
      <div class="flex items-center">
        <div class="w-1/2 bg-gray-300 mb-4 mt-0 py-8 px-4">
          <span class="bg-white w-full block" ref="w2">{{width2}}px</span>
        </div>
        <div class="w-1/2 bg-gray-200 mb-4 mt-0 py-8 px-4">
          <span class="bg-white w-full block" ref="w2">{{width2}}px</span>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <h2 class="text-sm font-bold mb-2 mt-8 text-center">Large: 1 Col - Padding 16px</h2>
      <div class="flex items-center">
        <div class="w-full bg-gray-300 mb-4 mt-0 py-8 px-4">
          <span class="bg-white w-full block" ref="w1">{{width1}}px</span>
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
      width1: 0,
    };
  },
  methods: {
    calculateWidth() {
      this.width6 = this.$refs.w6.clientWidth;
      this.width3 = this.$refs.w3.clientWidth;
      this.width2 = this.$refs.w2.clientWidth;
      this.width1 = this.$refs.w1.clientWidth;
    }
  }
}
</script>