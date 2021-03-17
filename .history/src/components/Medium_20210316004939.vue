<template>
  <div>
  <h1 class="text-xl font-bold mb-2 mt-8 text-center">Medium: Tablet Portrait</h1>
  <div class="max-w-3xl mx-auto">
    <h2 class="text-sm font-bold mb-2 mt-8 text-center">Medium - 6 Columns: Padding 16px - <span class="text-red-600">{{ sixColMd }}</span></h2>
    <div class="flex items-center">
      <div class="w-1/6 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ sixColMd }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ sixColMd }}</span>
      </div>
      <div class="w-1/6 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ sixColMd }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ sixColMd }}</span>
      </div>
      <div class="w-1/6 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ sixColMd }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ sixColMd }}</span>
      </div>
    </div>
  </div>

  <div class="max-w-3xl mx-auto">
    <h2 class="text-sm font-bold mb-2 mt-8 text-center">Medium - 3 Columns: Padding 16px - <span class="text-red-600">{{ threeColMd }}</span></h2>
    <div class="flex items-center">
      <div class="w-1/3 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ threeColMd }}</span>
      </div>
      <div class="w-1/3 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ threeColMd }}</span>
      </div>
      <div class="w-1/3 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ threeColMd }}</span>
      </div>
    </div>
  </div>

  <div class="max-w-3xl mx-auto">
    <h2 class="text-sm font-bold mb-2 mt-8 text-center">Large - 2 Columns: Padding 16px - <span class="text-red-600">{{ twoColMd }}</span></h2>
    <div class="flex items-center">
      <div class="w-1/2 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ twoColMd }}</span>
      </div>
      <div class="w-1/2 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ twoColMd }}</span>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      sixColMd: "96px",
      threeColMd: "224px",
      twoColMd: "352px", 
    };
  },
}
</script>