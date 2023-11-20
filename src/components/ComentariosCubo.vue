<template>
  <div v-for="comentario of comentarios" :key="comentario">
    <div class="card" >
        <div class="card-header">
            {{comentario.idUsuario}}
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>{{comentario.comentario}}</p>
                <footer class="blockquote-footer">{{comentario.fechaComentario}} </footer>
            </blockquote>
        </div>
    </div>
    <br>
</div>
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "ComentariosCubo",
  data() {
    return {
      comentarios: [],
      cubo:[]
    };
  },
  methods: {
    getComentariosCubo() {
      var idCubo = this.$route.params.idcubo;
      service.getComentariosCubo(idCubo).then((result) => {
        this.comentarios = result;
      });
    },
    getCubo() {
      var idCubo = this.$route.params.idcubo;
      service.getCubo(idCubo).then((result) => {
        this.cubo = result;
      });
    },
  },
  mounted() {
    this.getComentariosCubo();
  },
};
</script>

<style>
</style>