import axios from '../http-common';

export const GetAllAnuncios = ()=>{
    return axios.get(`http://localhost:8081/anuncio/findAll`)
        .then(res => {
          return res.data
        })
        .catch( e => {
            console.log(e);
        })
}