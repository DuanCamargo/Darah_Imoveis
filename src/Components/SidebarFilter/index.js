import React from 'react'
import * as S from './SidebarFilterStyle.js'
import { useState } from 'react'



const SidebarFilter = () => {

    const initialCadastroState = {
        minValue: "",
        maxValue: "",
        email: "",
        senha:"",
        telefone:""
     };

    const [input, setInput] = useState(initialCadastroState)

    const handleInputChange = (event) =>{
        
        const {name, value} = event.target;
            setInput({ ...input, [name]: value });
            
    }

    const SendForm = (e) =>{
        e.preventDefault();
        /* PostForm(input); */
        
    }
   

    return (
        <S.FormContainerGeral>
            <S.FilterContainer>
            <form onSubmit={SendForm} >

            <div className="form-group">

                <label htmlFor="minValue">Preço: </label>
                    <div className="d-flex align-items-center justify-content-between">
                        <S.InputValueFilter type="number" id="minValue"  name="minValue" placeholder="Valor Mín." onChange={handleInputChange} required /> -
                        <S.InputValueFilter type="number" id="maxValue"  name="maxValue" placeholder="Valor Máx." onChange={handleInputChange} required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Localidade:</label>
                    <S.InputDefaultFilter type="bairro" id="InputBairro" name="bairro" aria-describedby="bairroHelp" placeholder="Insira o Bairro" onChange={handleInputChange} required/>
                </div>

                <div className="form-group">
                <label htmlFor="moradia">Tipo de moradia</label>
                        <S.SelectInputFilter onChange={handleInputChange} required>
                        <option value="" hidden>
                        Clique para selecionar
                        </option>
                        <option value="1">Casa</option>
                        <option value="2">Apartamento</option>
                    </S.SelectInputFilter>
                </div>

                <div className="form-group">
                <label htmlFor="compartilhamento">Tipo de compartilhamento</label>
                        <S.SelectInputFilter onChange={handleInputChange} required>
                        <option value="" hidden>
                        Clique para selecionar
                        </option>
                        <option value="1">Quarto e residência</option>
                        <option value="2">Residência</option>
                    </S.SelectInputFilter>
                </div>

                <div className="col text-center">
                    <S.ButtonStyled primary type="submit">Filtrar</S.ButtonStyled>
                </div>
             
            </form>
            </S.FilterContainer>

            <S.ImovelContainer>
                
            </S.ImovelContainer>

        </S.FormContainerGeral>
    )


    
}



export default SidebarFilter