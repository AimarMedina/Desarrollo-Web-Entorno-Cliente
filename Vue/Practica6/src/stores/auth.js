import { defineStore } from 'pinia'
import { ref } from 'vue'

export const AuthStore = defineStore('auth', () => {
  const usuario = ref(
    JSON.parse(localStorage.getItem('usuario')) ?? null
  )

  function login(user) {
    usuario.value = user
    localStorage.setItem('usuario', JSON.stringify(user))
  }

  function logout() {
    usuario.value = null
    localStorage.removeItem('usuario')
  }

  return { usuario, login, logout }
})
