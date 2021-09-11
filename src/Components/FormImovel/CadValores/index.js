import { React, useState, useEffect, useContext } from "react";
import * as R from "./CadValoresStyle";
import { Button } from "../../SectionHome/SectionStyle";
import { PostCadValores } from "../../../Service/PostCadValores";
import { useLocation, useHistory, Link } from "react-router-dom";
import { UsuarioLogadoContext } from "../../../Context/UsuarioLogado";
import { RiCommunityLine } from "react-icons/ri"

const CadValores = () => {
  const location = useLocation();

  const [usuarioLogado, setUsuarioLogado] = useContext(UsuarioLogadoContext)

  const init = {
    aluguel: 0,
    iptu: 0,
    condominio: 0,
    internet: 0,
    tv_cabo: 0,
    agua: 0,
    energia: 0,
    gas: 0,
    imovelDTO: {
      id_imovel: 0,
    },
    anuncioDTO: {
      id_anuncio: 0,
    }
  };

  const [input, setInput] = useState(init);
  console.log(usuarioLogado)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
      imovelDTO: { id_imovel: location.state },
    });
  };

  console.log(input);
  let history = useHistory()

  const SendValores = (e) => {
    e.preventDefault();
    PostCadValores(input);
    alert("Contas salvas com sucesso")
    history.push({
      pathname: "/CadFoto",
      state: input.anuncioDTO.id_anuncio,
    })
  };

  return (
    <>
      <R.FormContainerGeral>
        <R.FormContainer id="valores">
          {/* #################### TELA VALORES!!! ##################*/}
          <form onSubmit={SendValores}>
            <R.FormIM2><RiCommunityLine/> Preencha os campos abaixo</R.FormIM2>
            <R.FormIM2><R.DivSeparator/></R.FormIM2>
            <R.FormIM2>Etapa 4/5</R.FormIM2>
            <div className="mt-4">
              <label htmlFor="aluguel">Valor Aluguel</label>
              <R.InputDefaultFilter
                type="number"
                className="form-control"
                id="aluguel"
                name="aluguel"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="iptu">Valor IPTU</label>
              <R.InputDefaultFilter
                type="number"
                className="form-control"
                id="iptu"
                name="iptu"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="condominio">Valor Condominio</label>
              <R.InputDefaultFilter
                type="number"
                className="form-control"
                id="condominio"
                name="condominio"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="internet">Valor Internet</label>
              <R.InputDefaultFilter
                type="number"
                className="form-control"
                id="internet"
                name="internet"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="tv_cabo">Valor Tv a Cabo</label>
              <R.InputDefaultFilter
                type="number"
                className="form-control"
                id="tv_cabo"
                name="tv_cabo"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="agua">Valor Água</label>
              <R.InputDefaultFilter
                type="number"
                className="form-control"
                id="agua"
                name="agua"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="energia">Valor Energia</label>
              <R.InputDefaultFilter
                type="number"
                className="form-control"
                id="energia"
                name="energia"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="gas">Valor Gás</label>
              <R.InputDefaultFilter
                type="number"
                className="form-control"
                id="gas"
                name="gas"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div className="col text-center">
            <Link to="/CadAnuncio" type="submit" className="btn btn-danger ">
                  Anterior
                </Link>
              <Link to="/CadFoto"type="submit" className="btn btn-primary ">
                Próximo
              </Link>
            </div>
          </form>
        </R.FormContainer>
      </R.FormContainerGeral>
    </>
  );
};
export default CadValores;
