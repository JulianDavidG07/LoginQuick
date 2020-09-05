<template>
  <button
    class="bg-yellow-400 hover:bg-yellow-200 p-3 border-2 border-black"
    @click="closeSesion"
  >Cerrar Sesión</button>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignOut",

  methods: {
    closeSesion() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
