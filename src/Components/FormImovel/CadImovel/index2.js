import React from 'react';
import {FormContainerGeral, FormContainer, FormIM2}  from './CadImovelStyle';
import {useEffect, useState} from 'react';

const CadImovel =({alt}) => {

    const init = {
        tipoResidencia: "",
        tipoCompartilhamento: "",
        metragemResidencia: "",
        qtdPessoaResidencia: "",
        qtdBaheiroSocial: "",
        detalhesResidencia:"",
        regrasResidencia:"",
        
        valorAluguel:"",
        valorIPTU:"",
        valorCondominio:"",
        valorInternet:"",
        valorTvCabo:"",
        valorAgua:"",
        valorEnergia:"",
        valorGas:"",

        tipoQuarto: "",
        metragemQuarto: "",
        qtdCamaQaurto: "",
        detalhesQuarto:"",

        detalhesRegiao:"",

        mapa:"",

        fotos:""
    }

    const [input] = useState(initialCadastro2State)
   

    const handleInputChange = (event) =>{
          
             
    }

    class EssayForm extends
    React.Component {
        constructor(props){
            super(props);
            this.state  = {
                value
            };
            this.handleChange = 
            this.handleChange.bind
        }
    }

    const SendForm = (e) =>{
        e.preventDefault();
    }

    return (
         <>

        <FormContainerGeral>

            <FormContainer>
             
             <FormIM2>Preencha os campos abaixo</FormIM2>
             
                <form onSubmit={SendForm}>
                    <div class name="form-container">
                        <label htmlFor="tipoResidencia">Tipo de Residência</label>
                        <select id="tipoResidencia" name="tipoResidencia" onChange={handleInputChange}>
                            <option value={null}>Selecione uma opção abaixo</option>
                            <option value="casa">Casa</option>
                            <option value="apto">Apartamento</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="tipoCompartilhamento">Tipo de Compartilhamento</label>
                        <select id="tipoCompartilhamento" name="tipoCompartilhamento" onChange={handleInputChange}>
                            <option value={null}>Selecione uma opção abaixo</option>
                            <option value="quarto_residencia">Quarto e residência</option>
                            <option value="residencia">Residência</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="metragemResidencia">Metragem da Residencia</label>
                        <input type="text" className="form-control" id="metragemResidencia" name="metragemResidencia" placeholder="M²" onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="qtdPessoaResidencia">Quantidade de Pessoas na Residencia</label>
                        <input type="text" className="form-control" id="qtdPessoaResidencia" name="qtdPessoaResidencia" placeholder="Quantidade de Pessoas na Residencia" onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="qtdBaheiroSocial">Quantidade de Banheiro Social</label>
                        <input type="text" className="form-control" id="qtdBaheiroSocial" name="qtdBaheiroSocial" placeholder="Quantidade de Banheiro Social" onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="detalhesResidencia">Detalhes Residência</label>
                        <textarea className="form-control" id="detalhesResidencia" name="detalhesResidencia" placeholder="ex: Ar-Condicionado, Sugar, " onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="regrasResidencia">Regras Residência</label>
                        <textarea className="form-control" id="regrasResidencia" name="regrasResidencia" placeholder="Ex:  não pode festa, não pode pet, etc..." onChange={handleInputChange} />
                    </div>



                    {/* <div>
                        <label htmlFor="kind">Tipo do quarto.............</label>
                        <select id="kind" name="kind" onChange={handleInputChange}>
                            <option value={null}>Selecione uma opção abaixo</option>
                            <option value="solteiro">Solteiro</option>
                            <option value="casal">Casal</option>
                            <option value="suite">Solteiro com suíte</option>
                            <option value="suite1">Casal com suíte</option>
                        </select>
                    </div> */}
                </form>

                    
                    {/* <form onSubmit={SendForm}>
                        <div>
                            <h4>Detalhes do quarto</h4>
                            <input type="text" className="form-control" id="metrosQuadrados" name="metrosQuadrados" placeholder="M²" onChange={handleInputChange} />
                        </div>

                        <div>
                            <input type="text" className="form-control" id="qtdCama" name="qtdCama" placeholder="Quantidade de Cama" onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="quarto">Mais detalhes do quarto</label>
                            
                        </div>
                    </form> */}

                    
                

            </FormContainer>

        </FormContainerGeral>

         </>

    )
}

export default CadImovel