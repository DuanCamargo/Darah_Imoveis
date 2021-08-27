import React from 'react'
import {FormContainer, FormIM} from './FormImovStyle'
import Navbar from '../Navbar/index'
import {useState} from 'react'
import {AiOutlineArrowRight} from 'react-icons/bs'

const FormImov = () => {

    const initialAnuncioState = {
        buscaCep: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
    };

    const [input, setInput] = useState(initialAnuncioState)

    const handleInputChange = (event) =>{
        
        const {name, value} = event.target;
           setInput({ ...input, [name]: value });
    }

return (
    <>
    <Navbar/>
    <FormIM>Faça o seu Anúncio</FormIM>
    <FormContainer>
        <form>
           <div className="form-group">
               <input type="text" calssName="form-control" id="txtCep" name="cep" placeholder="Cep" onChange={handleInputChange} required />
               <button className="btnBuscar">
                   <a href = "#" class="btn btn-info btn-lg">
                  <span class = "glyphicon glyphicon-search"></span>
                  </a>
               </button>
           </div>

           <div className="form-group">
               <input type="text" className="form-control" id="logradouro" name="logradouro" placeholder="Logradouro" onChange={handleInputChange} required />
           </div>

           <div class="form-row">
              <div className="form-group">
              <input type="text" className="form-control" id="numero" name="numero" placeholder="Nº" onChange={handleInputChange} required />
              </div>

              <div className="form-group">
              <input type="text" className="form-control" id="complemento" name="complemento" placeholder="Complemento" onChange={handleInputChange} required />
              </div>
           </div>

           <div className="form-group">
               <input type="text" className="form-control" id="bairro" name="bairro" placeholder="Bairro" onChange={handleInputChange} required />
           </div>

           <div className="form-group">
               <input type="text" className="form-control" id="cidade" name="cidade" placeholder="Cidade" onChange={handleInputChange} required />
           </div>

           <div className="form-group">
               <input type="text" className="form-control" id="estado" name="estado" placeholder="Estado" onChange={handleInputChange} required />
           </div>

           <button type="submit" className="btn btn-primary">
                Próximo
           </button>

        </form>
    </FormContainer>
   </>
  )
}

export default FormImov