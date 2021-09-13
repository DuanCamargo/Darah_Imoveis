import axios from "../http-common";

export const PostCadFoto = (foto, descricao) => {
  var fotos = {
    method: "POST",
    url: "http://localhost:8081/foto",
    headers: {
      "content-type": "multipart/form-data",
    },
    params:{
      "foto":foto
    }
  };

//   const url = 'http://localhost:8081/foto';
//   const config = {
//     headers: {
//         'content-type': 'multipart/form-data'
//     }
// }

// return  post(url, foto, config)

  // fileUpload(file){
  //   const url = 'http://localhost:8081/foto';
  //   const formData = new FormData();
  //   formData.append('file',file)
  //   const config = {
  //       headers: {
  //           'content-type': 'multipart/form-data'
  //       }
  //   }
  //   return  post(url, formData,config)
  // }

  return axios(fotos)
    .then(function (response) {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
};
