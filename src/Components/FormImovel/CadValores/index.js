import React from 'react';
import { FormContainerGeral, FormContainer} from './CadValoresStyle';
//import { Button } from '../../SectionHome/SectionStyle';
import { BrowserRouter, Route, Link } from "react-router-dom";

const CadValores = () => {

    const init = {
        valorAluguel: "",
        valorIPTU: "",
        valorCondominio: "",
        valorInternet: "",
        valorTvCabo: "",
        valorAgua: "",
        valorEnergia: "",
        valorGas: "",
    }

    const handleInputChange = (event) => {

    }

    const SendValores = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <FormContainerGeral>
                <FormContainer id="valores">
                    {/* #################### TELA VALORES!!! ##################*/}
                    <form onSubmit={SendValores}>
                        <div>
                            <label htmlFor="valorAluguel">Valor Aluguel</label>
                            <input type="text" className="form-control" id="valorAluguel" name="valorAluguel" placeholder="R$ 00,00" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorIPTU">Valor IPTU</label>
                            <input type="text" className="form-control" id="valorIPTU" name="valorIPTU" placeholder="R$ 00,00" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorCondominio">Valor Condominio</label>
                            <input type="text" className="form-control" id="valorCondominio" name="R$ 00,00" placeholder="Valor Condominio" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorInternet">Valor Internet</label>
                            <input type="text" className="form-control" id="valorInternet" name="valorInternet" placeholder="R$ 00,00" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorTvCabo">Valor Tv a Cabo</label>
                            <input type="text" className="form-control" id="valorTvCabo" name="valorTvCabo" placeholder="R$ 00,00" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorAgua">Valor Água</label>
                            <input type="text" className="form-control" id="valorAgua" name="valorAgua" placeholder="R$ 00,00" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorEnergia">Valor Energia</label>
                            <input type="text" className="form-control" id="valorEnergia" name="valorEnergia" placeholder="R$ 00,00" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorGas">Valor Gás</label>
                            <input type="text" className="form-control" id="valorGas" name="valorGas" placeholder="R$ 00,00" onChange={handleInputChange} />
                        </div>
                        <div className="col text-center">
                            <Link to="/CadFoto" type="submit" className="btn btn-primary ">Próximo</Link>
                        </div>
                        <div className="col text-center">
                            <Link to="/CadQuarto" type="submit" className="btn btn-danger ">Voltar</Link>
                        </div>
                    </form>
                </FormContainer>
            </FormContainerGeral>
        </>
    )
}
export default CadValores

