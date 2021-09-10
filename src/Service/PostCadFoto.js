import axios from "../http-common";

export const PostCadFoto = (foto, descricao) => {
  var fotos = {
    method: "POST",
    url: "http://localhost:8081/foto",
    headers: {
      "content-type": "multipart/form-data",
      "foto": foto,
    },
    data: {
      descricao,
    },
  };

  return axios(fotos)
    .then(function (response) {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
};
