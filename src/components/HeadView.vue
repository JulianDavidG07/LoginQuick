<template>
  <div class="flex justify-between mb-6">
    <img class="ml-3 mt-4 self-center" src="../assets/super.png" width="50px" />
    <div class="self-center mr-2">
      <SignOut />
    </div>
  </div>
</template>

<script>
import SignOut from "../components/SignOut";
export default {
  name: "HeadView",
  components: {
    SignOut,
  },
};
</script>
