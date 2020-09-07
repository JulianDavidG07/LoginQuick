<template>
  <div class="flex">
    <div class="bg-yellow-400 w-10 h-10"></div>
    <img
      class="border-4 border-yellow-400"
      :src="require(`../assets/${image_src}.png`)"
      width="200px"
      height="200px"
    />
  </div>
</template>

<script>
export default {
  name: "CardMedalla",
  props: ["image_src"],
};
</script>

<style>
</style>
