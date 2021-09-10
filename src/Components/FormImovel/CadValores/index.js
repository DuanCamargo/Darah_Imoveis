import { React, useState, useEffect } from "react";
import { FormContainerGeral, FormContainer } from "./CadValoresStyle";
import { Button } from "../../SectionHome/SectionStyle";
import { PostCadValores } from "../../../Service/PostCadValores";
import { useLocation, useHistory } from "react-router";

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
    imovelDTO: {
      id_imovel: 0,
    },
  };

  const [input, setInput] = useState(init);

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
      state: input.imovelDTO.id_imovel,
    })
  };

  return (
    <>
      <FormContainerGeral>
        <FormContainer id="valores">
          {/* #################### TELA VALORES!!! ##################*/}
          <form onSubmit={SendValores}>
            <div>
              <label htmlFor="aluguel">Valor Aluguel</label>
              <input
                type="text"
                className="form-control"
                id="aluguel"
                name="aluguel"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="iptu">Valor IPTU</label>
              <input
                type="text"
                className="form-control"
                id="iptu"
                name="iptu"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="condominio">Valor Condominio</label>
              <input
                type="text"
                className="form-control"
                id="condominio"
                name="condominio"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="internet">Valor Internet</label>
              <input
                type="text"
                className="form-control"
                id="internet"
                name="internet"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="tv_cabo">Valor Tv a Cabo</label>
              <input
                type="text"
                className="form-control"
                id="tv_cabo"
                name="tv_cabo"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="agua">Valor Água</label>
              <input
                type="text"
                className="form-control"
                id="agua"
                name="agua"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="energia">Valor Energia</label>
              <input
                type="text"
                className="form-control"
                id="energia"
                name="energia"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="gas">Valor Gás</label>
              <input
                type="text"
                className="form-control"
                id="gas"
                name="gas"
                placeholder="R$ 00,00"
                onChange={handleInputChange}
              />
            </div>
            <div className="col text-center">
              <Button type="submit" className="btn btn-primary ">
                Próximo
              </Button>
            </div>
          </form>
        </FormContainer>
      </FormContainerGeral>
    </>
  );
};
export default CadValores;
