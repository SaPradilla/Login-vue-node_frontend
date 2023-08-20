import {createStore} from 'vuex'
export default createStore({
  state: {
    token: null
  },
  // Modifica el state
  mutations: {
    setToken(state, payload) {
      state.token = payload
    }
  },
  //Captura los datos del formulario 
  actions: {
    async register({ commit },usuario){
      try{
        
        //Realiza la consulta http a la url de backend en el server
        const res = await fetch('https://api-auth-lvnj.onrender.com/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Convierte el objecto usuario a json para enviarlo al body 
          body: JSON.stringify(usuario)
        })
        // Respuesta del backend
        const usuarioDB = await res.json()
        console.log(usuarioDB)
        
      }catch(error){
        console.log('error: ', error)
      }
    },
    async login({ commit }, usuario) {
      try {
        //Realiza la consulta http a la url de backend en el server
        const res = await fetch('https://api-auth-lvnj.onrender.com/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Convierte el objecto usuario a json para enviarlo al body 
          body: JSON.stringify(usuario)
        })
        // Respuesta del backend
        const usuarioDB = await res.json()
        console.log(usuarioDB.data.token)
        // Llama  a la mutación y asigna el token
        commit('setToken', usuarioDB.data.token)
        // Guarda el token en el localstorage
        localStorage.setItem('token', usuarioDB.data.token)
      } catch (error) {
        console.log('error: ', error)
      }
    },
    obtenerToken({ commit }) {
      // Obtiene el token de localstorage y si es existe
      if (localStorage.getItem('token')) {
        // Guarda el token en setToken y lo asigna a state
        commit('setToken', localStorage.getItem('token'))
      } else {
        // Sino lo asigna a null
        commit('setToken', null)
      }
    },
    cerrarSesion({ commit }) {
      // asigna token a null 
      commit('setToken', null)
      // Borra del localstorage
      localStorage.removeItem('token2')
  }
  }
})