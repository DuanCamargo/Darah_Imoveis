import {React, useState} from 'react';
import { FormContainerGeral, FormContainer} from './CadQuartoStyle';
import { Button } from '../../SectionHome/SectionStyle';
import { PostCadQuarto } from '../../../Service/PostCadQuarto';

const CadQuarto = () => {

    const init = {
        //Quartto
        tipo_quarto: "",
        metragem_quarto: ""
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
                            <label htmlFor="tipo_quarto">Tipo de Quarto</label>
                            <select id="tipo_quarto" name="tipo_quarto" onChange={handleInputChange}>
                                <option value={null}>Selecione uma opção abaixo</option>
                                <option value="solteiro">Solteiro</option>
                                <option value="solteiroSuite">Solteiro Suite</option>
                                <option value="casal">Casal</option>
                                <option value="casaSuite">Casal Suite</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="metragem_quarto">Metragem do Quarto</label>
                            <input type="text" className="form-control" id="metragem_quarto" name="metragem_quarto" placeholder="M²" onChange={handleInputChange} />
                        </div>
                        <div className="col text-center">
                            <Button type="submit" className="btn btn-primary ">Próximo</Button>
                        </div>
                        <div className="col text-center">
                            <Button type="submit" className="btn btn-danger ">Voltar</Button>
                        </div>
                    </form>
                </FormContainer>
            </FormContainerGeral>
        </>
    )
}
export default CadQuarto

