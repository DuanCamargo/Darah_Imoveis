import React from 'react';
import {FormContainerGeral, FormContainer, FormIM2}  from './CadImovelStyle';
import {useEffect, useState} from 'react';

const CadImovel =({alt}) => {

    const initialCadastro2State = {
       casa: "",
       apartamento: "",
       quartoEresidência: "",
       residencia: "",
       solteiro: "",
       solteiroCsuite: "",
       casal: "",
       casalCsuite: "",
       metrosQuadrados: "",
       qntdCamas: "",
       detalhesQuarto: "",
       qntdBanheiros: "",
       qntdPessoas: "",
       valorAluguel: "",
       detalhesCasa: ""

    };

    const [input, setInput] = useState(initialCadastro2State)
   

    const handleInputChange = (event) =>{
        
        const target = event.target;
        const value= target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
            
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
                  <h5>Tipo de Residência</h5>
                    <div class name="form-check">
                         <inpute type="checkbox" className="form-check-input" onChange={handleInputChange}/>
                        <label calssName="form-check-label ms-2">Casa</label>


                    </div>
                </form>

            </FormContainer>

        </FormContainerGeral>

         </>

    )
}

export default CadImovel