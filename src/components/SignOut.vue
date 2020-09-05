<template>
  <button class="bg-red-300 p-2" @click="closeSesion">Cerrar Sesión</button>
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
