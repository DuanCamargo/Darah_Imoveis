import { React, useState, useEffect, useContext } from "react";
import * as R from "./CadValoresStyle";
import { Button } from "../../SectionHome/SectionStyle";
import { PostCadValores } from "../../../Service/PostCadValores";
import { useLocation, useHistory, Link } from "react-router-dom";

import { RiCommunityLine } from "react-icons/ri"

const CadValores = () => {
  const location = useLocation();

 

  const init = {
    aluguel: 0,
    iptu: 0,
    condominio: 0,
    internet: 0,
    tv_cabo: 0,
    agua: 0,
    energia: 0,
    gas: 0,
    
    id_imovel: 0,
  };

  const [input, setInput] = useState(init);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value, id_imovel:  location.state
     
    });
    // setInput(input.id_imovel =  location.state)
    console.log( input)
  };
 
  
  let history = useHistory()

  const SendValores = (e) => {
    e.preventDefault();
    PostCadValores(input);
    history.push({
      pathname: "/CadFoto",
      state: input.id_imovel,
    })
    
  };

  return (
    <>
      <R.ContainerGeral>
        <R.ContainerGeralInterno1 id="valores">
          {/* #################### TELA VALORES!!! ##################*/}
            <R.HeaderContainerFont><RiCommunityLine/> Preencha os campos abaixo</R.HeaderContainerFont>
            <R.HeaderContainerFont><R.DivSeparatorFormImovelX/></R.HeaderContainerFont>
            <R.HeaderContainerFont>Etapa 4 de 5</R.HeaderContainerFont>
          <form className="d-flex justify-content-center" >

          <div className="mr-5"> 
            <div className="mt-4">
              <label htmlFor="aluguel">Valor Aluguel</label>
              <R.InputDefaultFormImovel
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
              <R.InputDefaultFormImovel
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
              <R.InputDefaultFormImovel
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
              <R.InputDefaultFormImovel
                type="number"
                className="form-control"
                id="internet"
                name="internet"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
          </div> 

          <div><R.DivSeparatorFormImovelY/></div> 
          
          <div className="ml-5"> 
            <div className="mt-4">
              <label htmlFor="tv_cabo">Valor Tv a Cabo</label>
              <R.InputDefaultFormImovel
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
              <R.InputDefaultFormImovel
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
              <R.InputDefaultFormImovel
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
              <R.InputDefaultFormImovel
                type="number"
                className="form-control"
                id="gas"
                name="gas"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
          </div>
          </form>
          <div className="d-flex align-items-center justify-content-between mt-4 "> 
            <div className="col text-center">
              <R.ButtonStyledFormImovelPrevious to="/CadAnuncio" type="submit" className="btn btn-danger ">
                  Anterior
              </R.ButtonStyledFormImovelPrevious>
            </div>  
              <R.DivSeparatorFormImovelX/>
            <div className="col text-center">
              <R.ButtonStyledFormImovelNext type="button" className="btn btn-primary " onClick={SendValores}>
                  Próximo
              </R.ButtonStyledFormImovelNext>
            </div>
          </div>          
        </R.ContainerGeralInterno1>
      </R.ContainerGeral>
    </>
  );
};
export default CadValores;
