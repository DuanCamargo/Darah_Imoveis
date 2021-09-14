import axios from '../http-common';

export const GetAnunciosById = (id_imovel)=>{
    return axios.get(`http://localhost:8081/anuncio/findById/?id=${id_imovel}`)
        .then(res => {
          console.log(res)
          return(res.data)
        })
        .catch( e => {
            console.log(e);
        })
}