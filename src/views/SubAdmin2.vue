<template>
  <div>
    <div class="flex justify-end m-8">
      <SignOut />
    </div>

    <div class="flex justify-center mb-5 border-b-4">
      <router-link class="px-2 pb-2" to="/subadmin1">Tabla</router-link>
      <router-link class="px-2 pb-2" to="/subadmin2">Categorias</router-link>
    </div>
  </div>
</template>

<script>
import SignOut from "../components/SignOut";

export default {
  name: 'SubAdmin"',

  components: {
    SignOut,
  },
};
</script>
