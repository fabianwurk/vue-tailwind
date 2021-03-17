<template>
  <div>

  <div class="container mx-auto">
    <h2 class="text-xl font-bold my-4">6 Columns</h2>
    <div class="flex items-center">
      <div class="w-1/6 bg-gray-200 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-200 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-200 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 py-8 px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <h2 class="text-xl font-bold my-4">3 Columns</h2>
    <div class="flex items-center">
      <div class="w-1/3 bg-gray-200 py-8 px-4">
        <span class="bg-white w-full block">{{ threeCol }}</span>
      </div>
      <div class="w-1/3 bg-gray-300 py-8 px-4">
        <span class="bg-white w-full block">{{ threeCol }}</span>
      </div>
      <div class="w-1/3 bg-gray-200 py-8 px-4">
        <span class="bg-white w-full block">{{ threeCol }}</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <h2 class="text-xl font-bold my-4">2 Columns</h2>
    <div class="flex items-center">
      <div class="w-1/2 bg-gray-300 py-8 px-4">
        <span class="bg-white w-full block">568px</span>
      </div>
      <div class="w-1/2 bg-gray-200 py-8 px-4">
        <span class="bg-white w-full block">568px</span>
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
    };
  },
}
</script>