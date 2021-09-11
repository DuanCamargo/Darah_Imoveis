import React, { useEffect } from "react";
import * as R from "./CadAnuncioStyle";
import { useState } from "react";
//import { Button } from "../../SectionHome/SectionStyle";
import { PostCadImovel } from "../../../Service/PostCadImovel";
import { useLocation, useHistory } from "react-router";
import { RiCommunityLine, RiQuestionLine } from "react-icons/ri";
import { Link } from "react-router-dom";


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
  };

  const location = useLocation();
  const [input, setInput] = useState(init);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
      data_publicacao: dataEHora,
      imovelDTO: { id_imovel: location.state },
    });
  };

  console.log(input);
  let history = useHistory()

  const SendResidencia = (e) => {
    e.preventDefault();
    PostCadImovel(input);
    history.push({
      pathname: "/CadValores",
      state: input.imovelDTO.id_imovel,
    })
  };

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
      <R.FormContainerGeral>
        <R.FormContainer className="mt-5 mb-5" id="residencia">
          <form onSubmit={SendResidencia}>
            <R.FormIM2><RiCommunityLine/> Preencha os campos abaixo</R.FormIM2>
            <R.FormIM2><R.DivSeparator/></R.FormIM2>
            <R.FormIM2>Etapa 3</R.FormIM2>
            <div className="mt-4">
              <label htmlFor="tipo_compartilhamento">
                Tipo de Compartilhamento:
              </label>
              <R.SelectInputFilter
                id="tipo_compartilhamento"
                name="tipo_compartilhamento"
                onChange={handleInputChange}
              >
                <option value={null}>Selecione uma opção abaixo</option>
                <option value="quarto_residencia">Quarto e residência</option>
                <option value="residencia">Residência</option>
              </R.SelectInputFilter>
            </div>

            <div className="mt-4">
              <label htmlFor="detalhes_residencia">
                Detalhes da Residência:
              </label>
              <R.InputTextAreaFilter
                className="form-control"
                id="detalhes_residencia"
                name="detalhes_residencia"
                placeholder="ex: Ar-Condicionado, Sugar, "
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="regras_residencia">Regras da Residência:</label>
              <R.InputTextAreaFilter
                className="form-control"
                id="regras_residencia"
                name="regras_residencia"
                placeholder="Ex:  não pode festa, não pode pet, etc..."
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="detalhes_regiao">Detalhes da Região:</label>
              <R.InputTextAreaFilter
                className="form-control"
                id="detalhes_regiao"
                name="detalhes_regiao"
                placeholder="ex: Supermercado, farmacia, etc... "
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="detalhes_quarto">Detalhes Quarto:</label>
              <R.InputTextAreaFilter
                type="text"
                className="form-control"
                id="detalhes_quarto"
                name="detalhes_quarto"
                placeholder="ex: mobiliado, frigobar, ar-condicionado, etc"
                onChange={handleInputChange}
              />
            </div>

            {/* ########### MAPA ######### */}
            <div className="mt-4">
              <label htmlFor="mapa_embed">Mapa (EMBED):</label>
              <R.InputDefaultFilter
                type="text"
                className="form-control"
                id="mapa_embed"
                name="mapa_embed"
                placeholder="Coloque seu mapa aqui"
                onChange={handleInputChange}
              >
              </R.InputDefaultFilter>
              <RiQuestionLine type="button" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right" />

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
            <container className="d-flex align-items-center justify-content-between mt-4 ">
              <div className="col text-center">
                <Link to="/CadQuarto" type="submit" className="btn btn-danger ">
                  Anterior
                </Link>
              </div>
              <R.DivSeparator/>
              <div className="col text-center">
                <R.ButtonStyledNext type="submit" className="btn btn-primary ">
                  Próximo
                </R.ButtonStyledNext>
              </div>
            </container>
          </form>
        </R.FormContainer>
      </R.FormContainerGeral>
    </>
  );
};
export default CadAnuncio;
