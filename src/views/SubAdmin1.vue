<template>
  <div>
    <div class="flex justify-end m-8">
      <SignOut />
    </div>
    <div class="flex justify-center mb-5 border-b-4">
      <router-link class="px-2 pb-2" to="/subadmin1">Tabla</router-link>
      <router-link class="px-2 pb-2" to="/subadmin2">Categorias</router-link>
    </div>
    <div>
      <table class="table-auto">
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
        <tbody>
          <tr v-for="(x, key) of dataAdmin" :key="key">
            <td class="border px-4 py-2">{{ x.athlete}}</td>
            <td class="border px-4 py-2">{{ x.age }}</td>
            <td class="border px-4 py-2">{{ x.country }}</td>
            <td class="border px-4 py-2">{{ x.year }}</td>
            <td class="border px-4 py-2">{{ x.date }}</td>
            <td class="border px-4 py-2">{{ x.sport }}</td>
            <td class="border px-4 py-2">{{ x.gold }}</td>
            <td class="border px-4 py-2">{{ x.silver }}</td>
            <td class="border px-4 py-2">{{ x.bronze }}</td>
            <td class="border px-4 py-2">{{ x.total }}</td>
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
import axios from "axios";
export default {
  name: "Administrador",
  data() {
    return {
      dataAdmin: [],
      error: "",
    };
  },

  components: {
    SignOut,
  },

  async mounted() {
    try {
      this.dataAdmin = await axios
        .get(
          "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json"
        )
        .then((res) => res.data);
      this.error = null;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>
