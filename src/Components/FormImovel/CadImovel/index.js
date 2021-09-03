import React from 'react';
import {FormContainerGeral, FormContainer, FormIM2}  from './CadImovelStyle';
import {useEffect, useState} from 'react';

const CadImovel =({alt}) => {

    const initialCadastro2State = {
       casa: "",
       apartamento: "",
       quartoEresidência: "",
       residencia: "",
       quartos:"",
       metrosQuadrados: "",
       qntdCamas: "",
       detalhesQuarto: "",
       qntdBanheiros: "",
       qntdPessoas: "",
       valorAluguel: "",
       detalhesCasa: ""

    };

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
                        <label htmlFor="residence">Tipo de Residência</label>
                        <select id="residence" name="residence" onChange={handleInputChange}>
                            <option value={null}>Selecione uma opção abaixo</option>
                            <option value="home">Casa</option>
                            <option value="apt">Apartamento</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="sharing">Tipo de Compartilhamento</label>
                        <select id="sharing" name="sharing" onChange={handleInputChange}>
                            <option value={null}>Selecione uma opção abaixo</option>
                            <option value="quarto">Quarto e residência</option>
                            <option value="quarto1">Residência</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="kind">Tipo do quarto.............</label>
                        <select id="kind" name="kind" onChange={handleInputChange}>
                            <option value={null}>Selecione uma opção abaixo</option>
                            <option value="solteiro">Solteiro</option>
                            <option value="casal">Casal</option>
                            <option value="suite">Solteiro com suíte</option>
                            <option value="suite1">Casal com suíte</option>
                        </select>
                      </div>
                    </form>

                    
                    <form onSubmit={SendForm}>
                        <div>
                            <h4>Detalhes do quarto</h4>
                            <input type="text" className="form-control" id="metrosQuadrados" name="metrosQuadrados" placeholder="M²" onChane={handleInputChange} requered/>
                        </div>

                        <div>
                            <input type="text" className="form-control" id="qtdCama" name="qtdCama" placeholder="Quantidade de Cama" onChane={handleInputChange} requered/>
                      </div>

                      <div>
                            <label htmlFor="quarto">Mais detalhes do quarto</label>
                            
                        </div>
                    </form>

                    
                

            </FormContainer>

        </FormContainerGeral>

         </>

    )
}

export default CadImovel