import axios from '../http-common';

export const PostFormImov = (dataForm)=>{
  return axios.post(`http://localhost:8081/imovel`,  dataForm )
        .then(res => {
          alert("Endereço salvo com sucesso")
          // console.log("res.data: "+res.data);
          return res.data
        })
        .catch( e => {
            console.log(e);
        })
}

