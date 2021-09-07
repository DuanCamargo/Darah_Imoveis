import React from 'react';
import { FormContainerGeral, FormContainer, FormIM2, FormContainerFotoG, FormContainerFoto } from './CadImovelStyle';
import { useEffect, useState, useRef} from 'react';
import { Button } from '../../SectionHome/SectionStyle';
import { PostCadImovel } from '../../../Service/PostCadImovel';

const CadImovel = () => {

    const init = {
        //Update
        

        //Insert Into
        tipoCompartilhamento: "",
        detalhesResidencia: "",
        regrasResidencia: "",
        detalhesRegiao: "",

        //Insert Into
        mapa: "",
    }

    const [input, setInput] = useState(init)

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
            setInput({ ...input, [name]: value });
    }

    console.log(input)

    const SendResidencia = (e) => {
        e.preventDefault();
        PostCadImovel(input);
    }

    return (
        <>
            <FormContainerGeral>
                <FormContainer id="residencia">
                    <form onSubmit={SendResidencia}>
                        <FormIM2>Preencha os campos abaixo</FormIM2>
                        <div>
                            <label htmlFor="tipoCompartilhamento">Tipo de Compartilhamento</label>
                            <select id="tipoCompartilhamento" name="tipoCompartilhamento" onChange={handleInputChange}>
                                <option value={null}>Selecione uma opção abaixo</option>
                                <option value="quarto_residencia">Quarto e residência</option>
                                <option value="residencia">Residência</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="regrasResidencia">Regras Residência</label>
                            <textarea className="form-control" id="regrasResidencia" name="regrasResidencia" placeholder="Ex:  não pode festa, não pode pet, etc..." onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="detalhesResidencia">Detalhes Residência</label>
                            <textarea className="form-control" id="detalhesResidencia" name="detalhesResidencia" placeholder="ex: Ar-Condicionado, Sugar, " onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="detalhesRegiao">Detalhes Residência</label>
                            <textarea className="form-control" id="detalhesRegiao" name="detalhesRegiao" placeholder="ex: Supermercado, farmacia, etc... " onChange={handleInputChange} />
                        </div>

                        {/* ########### MAPA ######### */}
                        <div>
                            <label htmlFor="mapa">Mapa (EMBED)</label>
                            <input type="text" className="form-control" id="mapa" name="mapa" placeholder="Embed seu mapa aqui" onChange={handleInputChange} />
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
export default CadImovel

