<script>
//Acede a las actions de store/index.js
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      usuario: {
        name:'',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['register'])
  }
}
</script>

<template>
  <div class="home w-screen flex items-center justify-center">
    <div class="p-10 bg-gray-400 w-auto mb-10">
      <form  class="flex flex-col w-auto " @submit.prevent="register(usuario)">
        <label class=" text-white mb-2 text-left uppercase font-bold ">Name</label>
        <input class=" mb-5 p-2 border-2 placeholder-gray-700 h-10 w-80 rounded-md" type="text" placeholder="Ingrese email" v-model="usuario.name">
        <label class=" text-white mb-2 text-left uppercase font-bold ">Email</label>
        <input class=" mb-5 p-2 border-2 placeholder-gray-700 h-10 w-80 rounded-md" type="text" placeholder="Ingrese email" v-model="usuario.email">
        <label class=" text-white mb-2 text-left uppercase font-bold ">Password</label>
        <input class=" mb-5 p-2 border-2 placeholder-gray-700 h-10 w-80 rounded-md" type="password" placeholder="Ingrese contraseña" v-model="usuario.password">
        
        <button class=" bg-green-500 p-3 text-white uppercase font-bold transition-colors hover:bg-green-100 rounded-md" type="submit">Acceder</button>
      </form>
    </div>
  </div>
</template>


