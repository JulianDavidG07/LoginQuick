<template>
  <div class="flex z-0">
    <div :class="`flex flex-col bg-${color_card}-400 w-16 h-24 text-black p-2`">
      <strong class="inline-block bg-purple-300">{{nombreMedal}}</strong>
      <div>
        <span class="inline-block">{{totalMedallas}}</span>
      </div>
      <strong class="inline-block">Medals</strong>
      <!-- <ButtonModal /> -->
    </div>
    <img
      :class="`border-4 border-${color_card}-400`"
      :src="require(`../assets/${image_src}.png`)"
      width="200px"
      height="200px"
    />
  </div>
</template>

<script>
// import ButtonModal from "../components/ButtonModal";
export default {
  name: "CardMedalla",
  props: ["image_src", "totalMedallas", "color_card", "nombreMedal"],
  // components: {
  //   ButtonModal,
  // },
};
</script>

<style>
</style>
