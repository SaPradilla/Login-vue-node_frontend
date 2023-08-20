<script>
import {mapActions,mapState} from 'vuex'
export default {
  methods:{
    ...mapActions(['obtenerToken','cerrarSesion'])
  },
  // Trae el token del state
  computed: {
    ...mapState(['token'])
  },
  //Ciclo de vida vue
  // Es lo que hará por primera vez al cargar la pagina
  created(){
    this.obtenerToken()
  }
}
</script>
<template>
  <header class="h-16 bg-gray-300 ">
    <nav class="p-5 space-x-5 flex flex-row">
      <router-link class="  text-2xl" to="/">Home</router-link> |
      <router-link class="  text-2xl" to="/about">About</router-link>
      <router-link v-if="!token" class="text-2xl" to="/register">Sing Up</router-link>
      <button v-if="token" class=" bg-green-500 hover:bg-green-700 h-8 w-32  rounded-sm text-xl " @click="cerrarSesion">Cerrar Sesión</button>
    
    </nav>
  </header>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
