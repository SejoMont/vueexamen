<template>
  <div>
    <h1>Login</h1>
    <form
      class="text-start"
      v-on:submit.prevent="login()"
      style="width: 60%; margin: 0 auto"
    >
      <label class="form-label">Email</label>
      <input type="text" class="form-control" v-model="name" />
      <label class="form-label">Password</label>
      <input type="text" class="form-control" v-model="passwd" />
      <div class="text-end">
        <button class="btn btn-outline-success">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
import Global from "../Global";
const service = new ServiceCubos();

export default {
  name: "LoginComponent",
  data() {
    return {
      name: "",
      passwd: "",
      usuario: { email: "", password: "" },
    };
  },
  methods: {
    login() {
      this.usuario = { email: this.name, password: this.passwd };
      console.log(this.usuario);
      service.loginCubos(this.usuario).then((response) => {
        Global.key = response.data.response;
        console.log(response.data.response);
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
</style>