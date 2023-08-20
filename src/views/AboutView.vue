<script>
import {mapState} from 'vuex'
export default {
  // Cuando se ejecute esta vista realizará ruta
  created(){
    this.ruta()
  },
  // Trae el token del state
  computed: {
    ...mapState(['token'])
  },
  methods: {
    async ruta(){
      try {
        // Realiza la consulta GET a la ruta dashboard
        const res = await fetch('https://api-auth-lvnj.onrender.com/api/dashboard', {
          headers: {
            'Content-Type': 'application/json',
            // Envia en el header el token 
            'auth-token': this.token
          },
        })
        //Respuesta del backend en el server
        const resDB = await res.json()
        console.log(resDB)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<template>
  <div class="about">
    <h1>Ruta protegida</h1>
  </div>
</template>