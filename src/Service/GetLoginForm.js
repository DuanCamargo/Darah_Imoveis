import axios from "../http-common";

export const GetForm = (email, senha) => {
  var foto = {
    method: 'POST',
    url: '/usuario/foto',
    headers: {
      
      'Content-Type': 'multipart/form-data',
      'foto': foto
    }
  };

  return axios(login)
  .then(function (response){
    console.log("GetLoginForm: "+response.data);
   
  })
  .catch(e => {
    console.log(e)
  })
}

