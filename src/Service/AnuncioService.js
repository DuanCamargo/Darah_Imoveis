import http from '../http-common';

const getAll = () => {
    return http.get("/Anuncios");
};

const findByBairro = (bairro) => {
    return http.get(`/Anuncios?bairro=${bairro}`);
};

const findByCidade = (cidade) => {
    return http.get(`/Anuncios?cidade=${cidade}`);
};


export default {
    getAll,
    findByBairro,
    findByCidade,
};