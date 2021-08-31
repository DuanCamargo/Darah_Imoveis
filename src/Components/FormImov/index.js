import React from 'react'
import { FormContainer, FormIM } from './FormImovStyle'
//import { useState } from 'react'
//import { FaSistrix } from 'react-icons/fa';
import { Formik, Field } from 'formik'; //Formik cria um provider do react para compartilhar um state com vários componentes
//Field é um componente que se conecta ao contexct e api do Formik
const FormImov = () => {

    /*const initialAnuncioState = {
        buscaCep: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
    };*/

    /*const [input, setInput] = useState(initialAnuncioState)

    const handleInputChange = (event) => {

        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    }*/

    function onBlurCep(event, setFieldValue) {
        const { value } = event.target;

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
        }
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => console.log(data));
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('uf', data.uf);
    }

    return (
        <>
            <FormIM>Faça o seu Anúncio</FormIM>
            <FormContainer>
                <Formik
                    initialAnuncioState={{
                        buscaCep: "",
                        logradouro: "",
                        numero: "",
                        complemento: "",
                        bairro: "",
                        cidade: "",
                        estado: "",
                    }}
                    render={({setFieldValue }) => (

                        <form>
                            <div className="form-control-group">
                                <Field type="text" onBlur={(event) => onBlurCep(event, setFieldValue)} className="form-control" id="cep" name="cep" placeholder="Cep" required />
                            
                            </div>

                            <div className="form-group">
                                <Field type="text" className="form-control" id="logradouro" name="logradouro" placeholder="Logradouro" required />
                            </div>


                            <div className="form-group">
                                <Field type="text" className="form-control" id="numero" name="numero" placeholder="Nº" required />
                            </div>

                            <div className="form-group">
                                <Field type="text" className="form-control" id="complemento" name="complemento" placeholder="Complemento" required />
                            </div>


                            <div className="form-group">
                                <Field type="text" className="form-control" id="bairro" name="bairro" placeholder="Bairro" required />
                            </div>

                            <div className="form-group">
                                <Field type="text" className="form-control" id="cidade" name="cidade" placeholder="Cidade" required />
                            </div>

                            <div className="form-group">
                                <Field component="select" className="form-control" id="estado" name="estado" placeholder="Estado" required>
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
                                </Field>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Próximo
                            </button>
                        </form>
                    )}
                />
            </FormContainer>
        </>
    )
}

export default FormImov