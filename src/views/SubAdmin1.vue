<template>
  <div>
    <div class="flex justify-between">
      <img class="ml-3 mt-4" src="../assets/super.png" width="100px" />
      <div class="self-center m-5">
        <SignOut />
      </div>
    </div>
    <div class="flex justify-center mb-5 border-b-4 text-white">
      <router-link class="px-2 pb-2 hover:bg-white hover:text-black" to="/subadmin1">Tabla</router-link>
      <router-link class="px-2 pb-2 hover:bg-white hover:text-black" to="/subadmin2">Categorias</router-link>
    </div>

    <div>
      <table class="table-auto text-white">
        <thead>
          <tr>
            <th class="px-4 py-2">Atleta</th>
            <th class="px-4 py-2">Edad</th>
            <th class="px-4 py-2">País</th>
            <th class="px-4 py-2">Año</th>
            <th class="px-4 py-2">Fecha</th>
            <th class="px-4 py-2">Deporte</th>
            <th class="px-4 py-2">Oro</th>
            <th class="px-4 py-2">Plata</th>
            <th class="px-4 py-2">Bronce</th>
            <th class="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody class="ml-2">
          <tr v-for="(x, key) of dataArray" :key="key">
            <td class="border px-4 py-2">{{ x.athlete}}</td>
            <td class="border px-4 py-2">{{ x.age }}</td>
            <td class="border px-4 py-2">{{ x.country }}</td>
            <td class="border px-4 py-2">{{ x.year }}</td>
            <td class="border px-4 py-2">{{ x.date }}</td>
            <td class="border px-4 py-2">{{ x.sport }}</td>
            <td class="border px-4 py-2">
              <span class="bg-yellow-300 rounded-full px-2 text-black">{{ x.gold }}</span>
            </td>
            <td class="border px-4 py-2">
              <span class="bg-gray-300 rounded-full px-2 text-black">{{ x.silver }}</span>
            </td>
            <td class="border px-4 py-2">
              <span class="bg-orange-400 rounded-full px-2 text-black">{{ x.bronze }}</span>
            </td>
            <td class="border px-4 py-2">
              <span class="bg-green-400 rounded-full px-2 text-black">{{ x.total }}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Mensaje de error por si falla el GET -->
      <div v-if="error !== ''" class="bg-red-600 text-white p-5">{{error}}</div>
    </div>
  </div>
</template>

<script>
import SignOut from "../components/SignOut";
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: "Administrador",

  components: {
    SignOut,
  },

  computed: {
    ...mapState(['dataArray']) 
  },

  methods: {
  ...mapMutations(["pushData", "filterData"]),
  ...mapActions(["getData"]),
  },

  mounted() {
    this.getData();
  }
}
</script>

<style>
.router-link-active {
  background-color: rgb(234, 241, 241);
  color: rgb(20, 20, 20);
}
</style>
