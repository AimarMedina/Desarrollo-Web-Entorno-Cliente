<script setup>
  import { useUsersStore } from '@/stores/users';
  import { ref } from 'vue';

  let users = useUsersStore()
  let dni = ref('')
  let passwd = ref('')
  let emit = defineEmits(['iniciarSesion'])

  function validarCampos(){
    try{
      let usuario = users.usuarios.find(usuario => usuario.dni == dni.value) ?? ''
      if(!usuario){
        throw new Error("Usuario no encontrado");
      }
      if(usuario.passwd !== passwd.value){
        throw new Error("Contraseña incorrecta");
      }

      emit('iniciarSesion', usuario)
    }catch(e){
      alert(e)
    }
  }

</script>

<template>
    <h2>Acceso a banca online</h2>
    <div class="form">
        <div class="dni">
            <label for="id">Identificador</label>
            <input type="text" id="id" name="dni" placeholder="DNI" v-model="dni">
        </div>
        <div class="passwd">
            <label for="passwd">Contraseña</label>
            <input type="password" id="passwd" name="passwd" placeholder="********" v-model="passwd">
        </div>
        <button @click="validarCampos">Iniciar Sesión</button>
    </div>
</template>

<style scoped>
/* Título */
h2 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 25px;
}

/* Contenedor del .formulario */
.form {
  max-width: 400px;
  margin: 0 auto;
  padding: 25px 30px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Grupos del .formulario */
.form div {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

/* Labels */
.form label {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: #444;
}

/* Inputs */
.form input {
  padding: 12px 15px;
  border: 1.5px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s, box-shadow 0.3s;
}



/* Hover & focus */
.form input:focus {
  border-color: #0077ff;
  box-shadow: 0 0 6px rgba(0, 119, 255, 0.3);
}

button {
  width: 100%;
  padding: 12px 0;
  margin-top: 10px;

  background: #0077ff;
  color: white;
  border: none;
  border-radius: 10px;

  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  transition: background 0.3s ease, transform 0.2s ease;
}

/* Hover */
button:hover {
  background: #005fcc;
  transform: translateY(-2px);
}

/* Active (cuando se hace clic) */
button:active {
  transform: scale(0.97);
}

/* Responsive */
@media (max-width: 480px) {
  button {
    padding: 10px 0;
    font-size: 0.95rem;
  }
}


/* Responsive */
@media (max-width: 480px) {
  .form {
    padding: 20px;
  }
}

</style>
