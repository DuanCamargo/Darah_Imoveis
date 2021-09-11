import React from 'react';
import {FormContainer, FormContainerGeral, FormIM, FormContanier1} from './FormImovelStyle';
import { useState } from 'react';
import { PostFormImov} from '../../Service/PostImovelForm';
import { Link } from "react-router-dom";

const FormImovel = ()=>{

     const init = {
        cep: "",
        logradouro: "",
        numero: "",
        complemento:"",
        bairro:"",
        cidade:"",
        estado:"",
        tipo_imovel: "",
        metragem_imovel: "",
        qtd_num_pessoas: "",
        qtd_banheiro: "",
      };

    const [input, setInput] = useState(init)
   

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
            setInput({ ...input, [name]: value });
    }

    
    
    const SendForm = (e) =>{
        e.preventDefault();
        PostFormImov(input);
        
    }

    //AUTO PREENCHIMENTO CEP
    function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('logradouro').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
       
}


function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('logradouro').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.toString().replace(/\D/g, '');
    

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('logradouro').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";

            //Cria um elemento javascript.
            //var script = document.createElement('script');

            fetch('https://viacep.com.br/ws/' + cep +'/json/')
  .then(response => response.json())
  .then(data => {
    let endereço = {
        cep: cep,
        logradouro: data.logradouro,
        numero: "",
        complemento:"",
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
        tipo_imovel: "",
        metragem_imovel: "",
        qtd_num_pessoas: "",
        qtd_banheiro: "",
      };

      setInput (endereço)
       //Preenche os campos com "..." enquanto consulta webservice.
    
  });
            

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};


    return (
        <>
            <FormContainerGeral> 
                <FormContainer>
                    <FormIM>Faça o seu Anúncio</FormIM>
                    <form onSubmit={SendForm} >
                            <form onChange={meu_callback, pesquisacep}>
                        <div className="form-group">
                            <input type="number"  id="cep"  name="cep" placeholder="Cep" onChange={handleInputChange}  onBlur ={ (e) =>  {pesquisacep(e.target.value)}} required  />  
                        </div>

                        <div className="form-group">
                            <input type="text"  id="logradouro" name="logradouro" placeholder="Logradouro" onChange={handleInputChange} value={input.logradouro} required/>                  
                        </div>

                        <div className="form-group">
                            <input type="text" id="numero" name="numero" placeholder="Nº" onChange={handleInputChange} required/>
                        </div>
                       

                        <div className="form-group">
                            <input type="text"  id="complemento" name="complemento"  placeholder="Complemento" onChange={handleInputChange} required />        
                        </div>

                        <div className="form-group">
                            <input type="text"  id="bairro" name="bairro"  placeholder="bairro" onChange={handleInputChange} value={input.bairro}required />        
                        </div>

                        <div className="form-group">
                            <input type="text"  name="cidade" id="cidade" placeholder="Cidade" onChange={handleInputChange} value={input.cidade} required/>
                        </div>

                        <div className="form-group">
                                <select  id="uf" name="estado" onChange={handleInputChange} value={input.estado}>
                                    <options value={null}>Selecione o Estado</options>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </div>
                        </form>

                        <div  className="form-container">
                            <label htmlFor="tipo_imovel">Tipo de Residência</label>
                            <select id="tipo_imovel" name="tipo_imovel" onChange={handleInputChange}>
                                <option value={null}>Selecione uma opção abaixo</option>
                                <option value="casa">Casa</option>
                                <option value="apartamento">Apartamento</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="metragem_imovel">Metragem da Residencia</label>
                            <input type="number" min="0" className="form-control" id="metragem_imovel" name="metragem_imovel" placeholder="M²" onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="qtd_num_pessoas">Quantidade de Pessoas na Residencia</label>
                            <input type="number" min="0" className="form-control" id="qtd_num_pessoas" name="qtd_num_pessoas" placeholder="Quantidade de Pessoas na Residencia" onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="qtd_banheiro">Quantidade de Banheiro Social</label>
                            <input type="number" min="0" className="form-control num" id="qtd_banheiro" name="qtd_banheiro" placeholder="Quantidade de Banheiro Social" onChange={handleInputChange} />
                        </div>
                    
                        <div className="col text-center">
                        < Link to="/CadImovel"  type = "submit"  className = "btn btn-primary"> Próximo </Link>
                        </div>
                    </form>
                </FormContainer>
            </FormContainerGeral>  
        </>
    )
}

export default FormImovel