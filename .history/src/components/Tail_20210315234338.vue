<template>
  <div>

  <div class="container mx-auto">
    <h2 class="text-sm font-bold my-4">6 Columns with padding 16px (tailwind p-4) {{ threeCol }}</h2>
    <div class="flex items-center">
      <div class="w-1/6 bg-gray-200 {{ rowSep }} px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 {{ rowSep }} px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-200 {{ rowSep }} px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 {{ rowSep }} px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-200 {{ rowSep }} px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
      <div class="w-1/6 bg-gray-300 {{ rowSep }} px-4">
        <span class="bg-white w-full block">{{ sixCol }}</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <h2 class="text-sm font-bold my-4">3 Columns with padding 16px (tailwind p-4) {{ threeCol }}</h2>
    <div class="flex items-center">
      <div class="w-1/3 bg-gray-200 {{ rowSep }} px-4">
        <span class="bg-white w-full block">{{ threeCol }}</span>
      </div>
      <div class="w-1/3 bg-gray-300 {{ rowSep }} px-4">
        <span class="bg-white w-full block">{{ threeCol }}</span>
      </div>
      <div class="w-1/3 bg-gray-200 {{ rowSep }} px-4">
        <span class="bg-white w-full block">{{ threeCol }}</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <h2 class="text-sm font-bold my-4">2 Columns with padding 16px (tailwind p-4) {{ twoCol }}</h2>
    <div class="flex items-center">
      <div class="w-1/2 bg-gray-300 {{ rowSep }} px-4">
        <span class="bg-white w-full block">{{ twoCol }}</span>
      </div>
      <div class="w-1/2 bg-gray-200 {{ rowSep }} px-4">
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
      rowSep: "mb-4 mt-12 py-8 px-4",   
    };
  },
}
</script>