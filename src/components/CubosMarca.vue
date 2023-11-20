<template>
  <div>
    <h1>Cubos VUE</h1>
    <div
      class="row row-cols-1 row-cols-md-3 g-4"
      style="width: 90%; margin: 0 auto"
    >
    <div class="col" v-for="cubo of cubos" :key="cubo">
        <div class="card h-100">
          <img :src="cubo.imagen" class="card-img-top" style="height: 170px" />
          <!-- <div class="card-img-top"
                    style="height: 18vw; background-image:url('{{cubo.imagen}}');background-size: cover"></div> -->
          <div class="card-body">
            <h5 class="card-title">{{ cubo.modelo }}</h5>
            <h6 class="card-text">Marca: {{ cubo.marca }}</h6>
            <p class="card-text">Color: {{ cubo.color }}</p>
            <p class="card-text">Precio: {{ cubo.precio }} €</p>
          </div>
          <div class="card-footer">
            <routerLink
              :to="'/comentarios/' + cubo.idCubo"
              class="btn btn-outline-success"
              >Comentarios</routerLink
            >
            <!-- <button class="btn btn-outline-info">Comprar</button> -->
            <!-- <small class="text-body-secondary">ID: {{cubo.idCubo}}</small> -->
          </div>
          <div v-if="logueado">
            <button @click="comprar(cubo.idCubo)" class="btn btn-outline-info">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
const service = new ServiceCubos();
import Global from "../Global";

export default {
  name: "CubosMarca",
  data() {
    return {
      cubos: [],
      logueado: false,
    };
  },
  methods: {
    getCubosMarca() {
      var marca = this.$route.params.marca;
      service.getCubosMarca(marca).then((result) => {
        this.cubos = result;
      });
    },
    comprar(idCubo) {
      service.comprarCubo(idCubo).then((response) => {
        console.log(response.data);
        this.$router.push("/compras");
      });
    },
    comprobarLogin() {
      if (Global.key == null) {
        this.logueado = false;
      } else {
        this.logueado = true;
      }
    },
  },
  mounted() {
    this.getCubosMarca();
    this.comprobarLogin();
  },
  watch: {
    "$route.params.marca"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.getCubosMarca();
        this.comprobarLogin();
      }
    },
  },
};
</script>

<style>
</style>