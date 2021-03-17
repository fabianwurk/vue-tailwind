<template>
  <div>

  <div class="container mx-auto">
    <h2 class="text-sm font-bold mb-2 mt-8">6 Columns with padding 16px (tailwind p-4) <span class="text-red-600">{{ sixCol }}</span></h2>
    <div class="flex items-center">
      <div class="w-1/6 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <h2 class="text-sm font-bold mb-2 mt-8">3 Columns with padding 16px (tailwind p-4) <span class="text-red-600">{{ threeCol }}</span></h2>
    <div class="flex items-center">
      <div class="w-1/3 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ threeCol }}</span>
      </div>
      <div class="w-1/3 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ threeCol }}</span>
      </div>
      <div class="w-1/3 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ threeCol }}</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <h2 class="text-sm font-bold mb-2 mt-8">2 Columns with padding 16px (tailwind p-4) <span class="text-red-600">{{ twoCol }}</span></h2>
    <div class="flex items-center">
      <div class="w-1/2 bg-gray-300 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ twoCol }}</span>
      </div>
      <div class="w-1/2 bg-gray-200 mb-4 mt-0 py-8 px-4">
        <span class="bg-white w-full block">{{ twoCol }}</span>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      sixCol: "168px",
      threeCol: "368px",
      twoCol: "568px", 
    };
  },
}
</script>