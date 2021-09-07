import {React, useState} from 'react';
import { FormContainerGeral, FormContainer} from './CadQuartoStyle';
import { Button } from '../../SectionHome/SectionStyle';
import { PostCadQuarto } from '../../../Service/PostCadQuarto';

const CadQuarto = () => {

    const init = {
        tipoQuarto: "",
        metragemQuarto: "",
        qtdCamaQaurto: "",
        detalhesQuarto: "",
    }

    const [input, setInput] = useState(init)

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
            setInput({ ...input, [name]: value });
    }

    console.log(input)

    const SendQuarto = (e) => {
        e.preventDefault();
        PostCadQuarto(input);
    }

    return (
        <>
            <FormContainerGeral>
                <FormContainer id="quarto">
                    {/* #################### TELA QUARTO!!! ##################*/}
                    <form onSubmit={SendQuarto}>
                        <div className="form-container">
                            <label htmlFor="tipoQuarto">Tipo de Quarto</label>
                            <select id="tipoQuarto" name="tipoQuarto" onChange={handleInputChange}>
                                <option value={null}>Selecione uma opção abaixo</option>
                                <option value="solteiro">Casa</option>
                                <option value="solteiroSuite">Apartamento</option>
                                <option value="casal">Casa</option>
                                <option value="casaSuite">Apartamento</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="metragemQuarto">Metragem do Quarto</label>
                            <input type="text" className="form-control" id="metragemQuarto" name="metragemQuarto" placeholder="M²" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="qtdCamaQaurto">Quantidade de Cama no Quarto</label>
                            <input type="number" min="0" className="form-control num" id="qtdCamaQaurto" name="qtdCamaQaurto" placeholder="Quantidade de Cama no Quarto" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="detalhesQuarto">Detalhes Quarto</label>
                            <textarea type="text" className="form-control" id="detalhesQuarto" name="detalhesQuarto" placeholder="ex: mobiliado, frigobar, ar-condicionado, etc" onChange={handleInputChange} />
                        </div>
                        <div className="col text-center">
                            <Button type="submit" className="btn btn-primary ">Próximo</Button>
                        </div>
                    </form>
                </FormContainer>
            </FormContainerGeral>
        </>
    )
}
export default CadQuarto

