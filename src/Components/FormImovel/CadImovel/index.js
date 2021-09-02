import React from 'react';
import {FormContainerGeral, FormContainer, FormIM2}  from './CadImovelStyle';
import {useState} from 'react';

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
        
        const {name, value} = event.target;
            setInput({ ...input, [name]: value });
            
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
                    <div class name="form-group">
                        <label htmlFor="tipo de residencia">Tipo de residência</label>

                    </div>
                </form>

            </FormContainer>

        </FormContainerGeral>

         </>

    )
}

export default CadImovel