<template>
  <div :class="`bg-${color_modal}-300 text-black`">
    <button @click="close_modal">
      <ion-icon name="close-outline"></ion-icon>
    </button>
    <div>{{text_content}}</div>
  </div>
</template>

<script>
export default {
  name: "ModalCard",

  props: ["color_modal", "text_content", "close_modal"],
};
</script>
