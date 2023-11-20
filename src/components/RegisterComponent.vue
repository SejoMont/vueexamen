<template>
  <div>
    <h1>Register</h1>
    <form
      class="text-start"
      v-on:submit.prevent="register()"
      style="width: 60%; margin: 0 auto"
    >
    <label class="form-label">Nombre</label>
      <input type="text" class="form-control" v-model="name" />
      <label class="form-label">Email</label>
      <input type="text" class="form-control" v-model="email" />
      <label class="form-label">Password</label>
      <input type="text" class="form-control" v-model="passwd" />
      <div class="text-end">
        <button class="btn btn-outline-success">Registrar</button>
      </div>
    </form>
  </div>
</template>
  
  <script>
import ServiceCubos from "../services/ServiceCubos";
import Global from "../Global";
const service = new ServiceCubos();

export default {
  name: "RegisterComponent",
  data() {
    return {
      email: "",
      name: "",
      passwd: "",
      usuario: { id: 0, nombre: "", email: "", pass: "" },
    };
  },
  methods: {
    register() {
      this.usuario = { id: 0, nombre: this.name, email: this.email, pass: this.passwd };
      console.log(this.usuario);
      service.registerCubos(this.usuario).then((response) => {
        Global.key = response.data;
        console.log(response.data);
        this.$router.push("/login");
      });
    },
  },
};
</script>
  
  <style>
</style>