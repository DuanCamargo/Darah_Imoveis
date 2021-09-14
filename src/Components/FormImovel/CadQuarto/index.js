import {React, useState, useEffect, useContext} from 'react';
import * as R from './CadQuartoStyle';
import { Button } from '../../SectionHome/SectionStyle';
import { PostCadQuarto } from '../../../Service/PostCadQuarto';
import { useLocation } from 'react-router';
import {useHistory, Link} from 'react-router-dom'
import { RiCommunityLine } from "react-icons/ri";
import { UsuarioLogadoContext } from "../../../Context/UsuarioLogado";

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
            setInput({ ...input, [name]: value , id_imovel : location.state});
            
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
            <R.ContainerGeral>
                <R.ContainerGeralInterno1 id="quarto">
                    {/* #################### TELA QUARTO!!! ##################*/}
                    <form onSubmit={SendQuarto}>
                    <R.HeaderContainerFont> <RiCommunityLine/> Faça o seu Anúncio</R.HeaderContainerFont>
                    <R.DivSeparatorFormImovelY/>
                    <R.HeaderContainerFont> Etapa 2 de 5</R.HeaderContainerFont>
                        
                        <div className="form-container mt-4">
                            <label htmlFor="tipo_quarto">Tipo de Quarto:</label>
                            <R.InputSelectDefaultFormImovel id="tipo_quarto" name="tipo_quarto" onChange={handleInputChange}>
                                <option value={null}>Selecione uma opção abaixo</option>
                                <option value="solteiro">Solteiro</option>
                                <option value="solteiroSuite">Solteiro Suite</option>
                                <option value="casal">Casal</option>
                                <option value="casaSuite">Casal Suite</option>
                            </R.InputSelectDefaultFormImovel>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="metragem_quarto">Metragem do Quarto:</label>
                            <R.InputDefaultFormImovel type="text" className="form-control" id="metragem_quarto" name="metragem_quarto" placeholder="M²" onChange={handleInputChange} />
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                            <div className="ml-5">
                            <R.ButtonStyledFormImovelPrevious>
                                <a href="/imovel">
                                Anterior
                                </a>
                            </R.ButtonStyledFormImovelPrevious>
                            </div>
                            <R.DivSeparatorFormImovelY/>
                            <div className="mr-5">
                                <R.ButtonStyledFormImovelNext type="submit" className="btn btn-primary ">Próximo</R.ButtonStyledFormImovelNext>
                            </div>
                        </div>
                        
                    </form>
                </R.ContainerGeralInterno1>
            </R.ContainerGeral>
        </>
    )
}
export default CadQuarto

