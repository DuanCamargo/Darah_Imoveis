import {React, useState, useEffect} from 'react';
import * as R from './CadQuartoStyle';
import { Button } from '../../SectionHome/SectionStyle';
import { PostCadQuarto } from '../../../Service/PostCadQuarto';
import { useLocation } from 'react-router';
import {useHistory, Link} from 'react-router-dom'
import { RiCommunityLine } from "react-icons/ri";

const CadQuarto = () => {

    const location = useLocation()

    const init = {
        tipo_quarto: "",
        metragem_quarto: "",
        id_imovel: 0,
    }

    const [input, setInput] = useState(init)

    useEffect(() => {
        // console.log(location.state)
        setInput(input.id_imovel = location.state)
        // console.log("ID IMOVEL: "+idImovel)
    }, []); 

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
            setInput({ ...input, [name]: value });
    }

    console.log(input)
    let history = useHistory()

    const SendQuarto = (e) => {
        e.preventDefault();
        PostCadQuarto(input)
        history.push({
            pathname:"/CadAnuncio",
            state: input.id_imovel,
        })
    }

    return (
        <>
            <R.FormContainerGeral>
                <R.FormContainer id="quarto">
                    {/* #################### TELA QUARTO!!! ##################*/}
                    <form onSubmit={SendQuarto}>
                    <R.FormIM> <RiCommunityLine/> Faça o seu Anúncio</R.FormIM>
                    <R.DivSeparator/>
                    <R.FormIM> Etapa 2/5</R.FormIM>
                        
                        <div className="form-container mt-4">
                            <label htmlFor="tipo_quarto">Tipo de Quarto:</label>
                            <R.SelectInputFilter id="tipo_quarto" name="tipo_quarto" onChange={handleInputChange}>
                                <option value={null}>Selecione uma opção abaixo</option>
                                <option value="solteiro">Solteiro</option>
                                <option value="solteiroSuite">Solteiro Suite</option>
                                <option value="casal">Casal</option>
                                <option value="casaSuite">Casal Suite</option>
                            </R.SelectInputFilter>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="metragem_quarto">Metragem do Quarto:</label>
                            <R.InputDefaultFilter type="text" className="form-control" id="metragem_quarto" name="metragem_quarto" placeholder="M²" onChange={handleInputChange} />
                        </div>
                        <container className="d-flex align-items-center justify-content-between mt-4">
                            <div className="ml-5">
                            <R.ButtonStyledPrevious>
                                <a href="/imovel">
                                Anterior
                                </a>
                            </R.ButtonStyledPrevious>
                            </div>
                            <R.DivSeparator/>
                            <div className="mr-5">
                                <R.ButtonStyledNext type="submit" className="btn btn-primary ">Próximo</R.ButtonStyledNext>
                            </div>
                        </container>
                        
                    </form>
                </R.FormContainer>
            </R.FormContainerGeral>
        </>
    )
}
export default CadQuarto

