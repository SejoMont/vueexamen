import Global from "../Global";
import axios from "axios";

export default class ServiceCubos {
  getMarcas() {
    return new Promise(function (resolve) {
      var request = "api/cubos/marcas";
      var url = Global.apiCubos + request;
      var marcas = [];

      axios.get(url).then((response) => {
        marcas = response.data;
        resolve(marcas);
      });
    });
  }

  getAllCubos() {
    return new Promise(function (resolve) {
      var request = "api/cubos";
      var url = Global.apiCubos + request;
      var cubos = [];

      axios.get(url).then((response) => {
        cubos = response.data;

        console.log(cubos);
        resolve(cubos);
      });
    });
  }

  getCubosMarca(idMarca) {
    return new Promise(function (resolve) {
      var request = "/api/Cubos/CubosMarca/" + idMarca;
      var url = Global.apiCubos + request;
      var cubos = [];

      axios.get(url).then((response) => {
        cubos = response.data;

        console.log(cubos);
        resolve(cubos);
      });
    });
  }

  getComentariosCubo(idCubo) {
    return new Promise(function (resolve) {
      var request = "/api/ComentariosCubo/GetComentariosCubo/" + idCubo;
      var url = Global.apiCubos + request;
      var comentarios = [];

      axios.get(url).then((response) => {
        comentarios = response.data;

        console.log(comentarios);
        resolve(comentarios);
      });
    });
  }

  getCubo(idCubo) {
    return new Promise(function (resolve) {
      var request = "api/cubos/" + idCubo;
      var url = Global.apiCubos + request;
      var comentarios = [];

      axios.get(url).then((response) => {
        comentarios = response.data;

        console.log(comentarios);
        resolve(comentarios);
      });
    });
  }

  loginCubos(usuario) {
    return new Promise(function (resolve) {
      var request = "api/Manage/Login";
      var url = Global.apiCubos + request;
      axios.post(url, usuario).then((response) => {
        resolve(response);
      });
    });
  }

  registerCubos(usuario) {
    return new Promise(function (resolve) {
      var request = "/api/Manage/RegistroUsuario";
      var url = Global.apiCubos + request;
      axios.post(url, usuario).then((response) => {
        resolve(response);
      });
    });
  }

  getPerfil() {
    return new Promise(function (resolve) {
      console.log(Global.key);

      var request = "/api/Manage/PerfilUsuario";
      var url = Global.apiCubos + request;

      var token = Global.key;

      axios
        .get(url, { headers: { Authorization: "bearer " + token } })
        .then((response) => {
          resolve(response);
        });
    });
  }

  getCompras() {
    return new Promise(function (resolve) {
      console.log(Global.key);

      var request = "/api/Compra/ComprasUsuario";
      var url = Global.apiCubos + request;

      var token = Global.key;

      axios
        .get(url, { headers: { Authorization: "bearer " + token } })
        .then((response) => {
          resolve(response);
        });
    });
  }

  comprarCubo(idCubo) {
    return new Promise(function (resolve) {
      var request = "/api/Compra/InsertarPedido/" + idCubo;
      var url = Global.apiCubos + request;

      var token = Global.key;

      axios
        .post(url, {}, { headers: { Authorization: "bearer " + token } })
        .then((response) => {
          resolve(response);
        });
    });
  }
}
