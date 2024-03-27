<template>
  <form @submit="handleSubmit">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12 m-10">
        <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Registrar Empleado</h1>


      </div>

      <div class=" pb-12">

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nombres</label>
            <div class="mt-2">
              <input type="text" name="first-name" v-model="nombre" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Apellidos</label>
            <div class="mt-2">
              <input type="text" name="last-name" v-model="apellido" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" v-model="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>


          <div class="sm:col-span-2 sm:col-start-1">
            <label for="edad" class="block text-sm font-medium leading-6 text-gray-900">Edad</label>
            <div class="mt-2">
              <input type="number" name="edad" id="edad" v-model="edad"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Cargo</label>
            <div class="mt-2">
              <input type="text" name="cargo" id="cargo" v-model="cargo" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input type="password" name="password" id="password" v-model="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="reset" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
    </div>
  </form>
</template>

<script>
import {useRouter} from "vue-router";
import {apiRestPost} from "@/auth/services";

export default {
  name: 'UserRegister',
  data() {
    return {
      nombre: '',
      edad: 1,
      apellido: '',
      cargo: '',
      email: '',
      password: '',
      estado: 'activo'
    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      const router = useRouter();
      const response = await apiRestPost('auth/user', {
        email: this.email,
        password: this.password,
        nombre: this.nombre,
        edad: this.edad,
        apellido: this.apellido,
        cargo: this.cargo,
        estado: this.estado
      })
      if (response?.id) {
        window.location.href = '/users'
      }
    }
  }
}

</script>

