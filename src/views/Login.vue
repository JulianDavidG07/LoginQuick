<template>
  <div>
    <!-- mensaje error de autenticacion -->
    <div v-if="errorUser !== ''" class="bg-red-600 p-3 text-red-200">{{errorUser}}</div>
    <div class="bg-yellow-400 p-3 md:mx-64 text-xs">
      <strong>Quieres Iniciar Sesión? aqui un correo y contraseña de ejemplo:</strong>
      <div class="bg-yellow-500 mb-1 p-1">
        <strong class="block">E-mail:</strong>
        <div>ejemplo@gmail.com</div>
      </div>
      <div class="bg-yellow-500 p-1">
        <strong class="block">Contraseña:</strong>
        <div>123456</div>
      </div>
    </div>

    <div class="flex h-screen justify-center content-center bg-black quick-image">
      <img class="absolute mt-3 md:mt-3" src="../assets/super.png" alt width="200px" />
      <form
        @submit.prevent="login"
        class="bg-gray-700 border-2 border-yellow-400 bg-opacity-75 shadow-md rounded px-8 w-64 md:w-1/4 my-auto altura"
      >
        <div class="mb-8 mt-32 md:mt-40">
          <label
            class="inline-block text-gray-900 text-sm font-bold mb-1 bg-white p-1 rounded-lg"
            for="username"
          >Correo</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="userMail"
            type="text"
            placeholder="E-mail"
          />
        </div>
        <div class="mb-6">
          <label
            class="inline-block text-gray-900 text-sm font-bold mb-1 bg-white p-1 rounded-lg"
            for="password"
          >Contraseña</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-model="userPassword"
            type="password"
            placeholder="******************"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-yellow-500 border-3 border-gray-900 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >Sign In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      userMail: "",
      userPassword: "",
      errorUser: "",
    };
  },

  methods: {
    login() {
      if (this.userMail && this.userPassword) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.userMail, this.userPassword)
          .then(() => {
            this.$router.push({ name: "SubAdmin1" });
          })
          .catch((e) => {
            this.errorUser = e.message;
          });
      } else {
        this.errorUser = "campos requeridos";
      }
    },
  },
};
</script>
