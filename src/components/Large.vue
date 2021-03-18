<template>
  <div>

    <div class="flex justify-center my-12">
      <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>

    <div class="mx-auto" v-bind:class="selected" v-cloak>
      <div class="flex items-center">
        <div class="w-full bg-blue-100 mb-4 mt-0 py-4 px-4 text-center">
          <span class="bg-white w-full block" ref="boxWidth" id="divw">{{width}}px</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
      selected: 'Desktop container',
      options: [
        { text: 'Desktop', value: 'Desktop container' },
        { text: 'Tablet', value: 'Tablet max-w-3xl' },
      ]
    };
  },
  mounted() {
    this.width = document.getElementById("divw").offsetWidth;
  },
  created() {
    addEventListener("resize", this.resizeWidthEvent);
  },
  methods: {
    resizeWidthEvent(e) {
      this.width = this.$refs.boxWidth.offsetWidth;
    }
  }
}
</script>