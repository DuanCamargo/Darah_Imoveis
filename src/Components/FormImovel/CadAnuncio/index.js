import React, { useContext, useEffect } from "react";
import * as R from "./CadAnuncioStyle";
import { useState } from "react";
import { PostCadImovel } from "../../../Service/PostCadImovel";
import { useLocation, useHistory, Link } from "react-router-dom";
import { RiCommunityLine, RiQuestionLine } from "react-icons/ri";
import { UsuarioLogadoContext } from "../../../Context/UsuarioLogado";

const CadAnuncio = () => {
  const init = {
    tipo_compartilhamento: "",
    detalhes_residencia: "",
    regras_residencia: "",
    detalhes_regiao: "",
    detalhes_quarto: "",
    mapa_embed: "",

    imovelDTO: {
      id_imovel: 0,
    },
    usuarioDTO: {
      id_usuario: 0,
    },
  };

  const [usuarioLogado, setUsuarioLogado] = useContext(UsuarioLogadoContext)
  

  const location = useLocation();
  const [input, setInput] = useState(init);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
      data_publicacao: dataEHora,
      imovelDTO: {id_imovel: location.state},
      usuarioDTO: {id_usuario: usuarioLogado.id}
    });
  };

  let history = useHistory()

  const [ids, setIds] = useState()

  const SendResidencia = (e) => {
    e.preventDefault();
    PostCadImovel(input).then(response=>{
    setInput(input.imovelDTO.id_imovel = response)

    })
    history.push({
      pathname: "/CadValores",
      state: input.imovelDTO.id_imovel,
    })
    
  };
  console.log("Input: ")
  console.log(input);
  const dateTime = (data = new Date()) => {
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var hora = data.getHours();
    var minute = data.getMinutes();
    var second = data.getSeconds();

    if (dia.toString().length === 1) {
      dia = "0" + dia;
    }
    if (mes.toString().length === 1) {
      mes = "0" + mes;
    }
    if (hora.toString().length === 1) {
      hora = "0" + hora;
    }
    if (minute.toString().length === 1) {
      minute = "0" + minute;
    }
    if (second.toString().length === 1) {
      second = "0" + second;
    }

    return (
      ano + "-" + mes + "-" + dia + " " + hora + ":" + minute + ":" + second
    );
  };
  var dataEHora = dateTime();

  return (
    <>
      <R.ContainerGeral>
        <R.ContainerGeralInterno1 className="mt-5 mb-5" id="residencia">
        <R.HeaderContainerFont><RiCommunityLine/> Preencha os campos abaixo</R.HeaderContainerFont>
            <R.HeaderContainerFont><R.DivSeparatorFormImovelX/></R.HeaderContainerFont>
            <R.HeaderContainerFont>Etapa 3 de 5</R.HeaderContainerFont>
          <form className="d-flex justify-content-center " onSubmit={SendResidencia}>
            <R.ContainerGeralInterno2 className="">
              <div className="mt-4">
                <label htmlFor="tipo_compartilhamento">
                  Tipo de Compartilhamento:
                </label>
                <R.InputSelectDefaultFormImovel
                  id="tipo_compartilhamento"
                  name="tipo_compartilhamento"
                  onChange={handleInputChange}
                >
                  <option value={null}>Selecione uma opção abaixo</option>
                  <option value="quarto_residencia">Quarto e residência</option>
                  <option value="residencia">Residência</option>
                </R.InputSelectDefaultFormImovel>
              </div>

              <div className="mt-4">
                <label htmlFor="detalhes_residencia">
                  Detalhes da Residência:
                </label>
                <R.InputTextAreaFormImovel
                  className="form-control"
                  id="detalhes_residencia"
                  name="detalhes_residencia"
                  placeholder="ex: Ar-Condicionado, Sugar, "
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="regras_residencia">Regras da Residência:</label>
                <R.InputTextAreaFormImovel
                  className="form-control"
                  id="regras_residencia"
                  name="regras_residencia"
                  placeholder="Ex:  não pode festa, não pode pet, etc..."
                  onChange={handleInputChange}
                />
              </div>
          
            </R.ContainerGeralInterno2>

              <div  className="ml-auto mr-auto"> <R.DivSeparatorFormImovelY/> </div>

            <R.ContainerGeralInterno2 className="">

              {/* ########### MAPA ######### */}
              <div className="mt-4">
                <label htmlFor="mapa_embed">Mapa (EMBED):</label>
                <div className="d-flex justify-content-between">
                <R.InputFormImovelCampoMap
                  type="text"
                  className="form-control"
                  id="mapa_embed"
                  name="mapa_embed"
                  placeholder="Coloque seu mapa aqui"
                  onChange={handleInputChange}
                />
                <R.ButtonFormImovelCampoMap className="" onClick="">
                    <R.HeaderContainerFont><RiQuestionLine className="iconMap"/></R.HeaderContainerFont>
                  </R.ButtonFormImovelCampoMap>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="detalhes_regiao">Detalhes da Região:</label>
                <R.InputTextAreaFormImovel
                  className="form-control"
                  id="detalhes_regiao"
                  name="detalhes_regiao"
                  placeholder="ex: Supermercado, farmacia, etc... "
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="detalhes_quarto">Detalhes Quarto:</label>
                <R.InputTextAreaFormImovel
                  type="text"
                  className="form-control"
                  id="detalhes_quarto"
                  name="detalhes_quarto"
                  placeholder="ex: mobiliado, frigobar, ar-condicionado, etc"
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-4">
                <input
                  type="datetime"
                  defaultValue={dataEHora}
                  className="form-control"
                  id="data_publicacao"
                  name="data_publicacao"
                  hidden
                />
              </div>

            </R.ContainerGeralInterno2>
          </form>
          <div> 
              <div className="d-flex align-items-center justify-content-between mt-4 ">
                <div className="col text-center">
                  <R.ButtonStyledFormImovelPrevious to="/CadQuarto" type="submit" className="btn btn-danger ">
                    Anterior
                  </R.ButtonStyledFormImovelPrevious>
                </div>
                <R.DivSeparatorFormImovelX/>
                <div className="col text-center">
                  <R.ButtonStyledFormImovelNext type="submit" className="btn btn-primary ">
                    Próximo 
                  </R.ButtonStyledFormImovelNext>
                </div>
              </div>
            </div>
        </R.ContainerGeralInterno1>
      </R.ContainerGeral>
    </>
  );
};
export default CadAnuncio;
