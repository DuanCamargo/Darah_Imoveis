import React from 'react';
import { FormContainerGeral, FormContainer, FormContainerFotoG, FormContainerFoto } from './CadFotoStyle';
import { Button } from '../../SectionHome/SectionStyle';

const CadFoto = ({ alt }) => {

    const init = {
        fotos: ""
    }

    const [input, setInput] = useState(initialCadastroState)
   

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
            setInput({ ...input, [name]: value });
    }

    const SendFotos = (e) => {
        e.preventDefault();
        PostCadFoto(input);
    }

    return (
        <>
            <FormContainerGeral>
                {/* #################### TELA FOTOS!!! ##################*/}
                <FormContainer id="fotos">
                    <FormContainerFotoG>
                        <form onSubmit={SendFotos}>
                            <FormContainerFoto>
                            <div className="page">
                               <div className="container">
                                   <h1 className="heading">adicionar imagem</h1>
                                   <div className="img-holder">
                                       <img src="" alt="" id="img" className="img"/>
                                   </div>
                                   <input type="file" className="img" id="img" name="foto" placeholder="adcione sua imagem" onChange={handleInputChange} required/>
                                </div>
                            </div>

                            </FormContainerFoto>

                            <div className="col text-center">
                                <Button type="submit" className="btn btn-primary " onClick={addPhotos}>Add Foto</Button>
                            </div>

                            <div className="col text-center">
                                <Button type="submit" className="btn btn-primary ">Finalizar</Button>
                            </div>
                        </form>
                    </FormContainerFotoG>
                </FormContainer>
            </FormContainerGeral>
        </>
    )
}
export default CadFoto
