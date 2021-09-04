import React from 'react';
import {FormContainerGeral, FormContainer, FormIM2}  from './CadImovelStyle';
import {useEffect, useState} from 'react';
import { Button } from '../../SectionHome/SectionStyle';

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

    const [input] = useState(init)
   

    const handleInputChange = (event) =>{
          
             
    }

    const SendForm = (e) =>{
        e.preventDefault();
    }

    return (
        <>
            <FormContainerGeral>
                <FormContainer>
                    <form onSubmit={SendForm}>
                        <FormIM2>Preencha os campos abaixo</FormIM2>
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
                            <input type="number" min="0" className="form-control num" id="qtdBaheiroSocial" name="qtdBaheiroSocial" placeholder="Quantidade de Banheiro Social" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="regrasResidencia">Regras Residência</label>
                            <textarea className="form-control" id="regrasResidencia" name="regrasResidencia" placeholder="Ex:  não pode festa, não pode pet, etc..." onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="detalhesResidencia">Detalhes Residência</label>
                            <textarea className="form-control" id="detalhesResidencia" name="detalhesResidencia" placeholder="ex: Ar-Condicionado, Sugar, " onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="detalhesRegiao">Detalhes Residência</label>
                            <textarea className="form-control" id="detalhesRegiao" name="detalhesRegiao" placeholder="ex: Supermercado, farmacia, etc... " onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="mapa">Mapa (EMBED)</label>
                            <input type="text" className="form-control" id="mapa" name="mapa" placeholder="Embed seu mapa aqui" onChange={handleInputChange} />
                        </div>
                        <div className="col text-center">
                            <Button type="submit" className="btn btn-primary ">Próximo</Button> 
                        </div>
                    </form>
                    
                    {/* #################### TELA VALORES!!! ##################*/}
                    <form onSubmit={SendForm}>
                        <div>
                            <label htmlFor="valorAluguel">Valor Aluguel</label>
                            <input type="text" className="form-control" id="valorAluguel" name="valorAluguel" placeholder="Valor Aluguel" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorIPTU">Valor IPTU</label>
                            <input type="text" className="form-control" id="valorIPTU" name="valorIPTU" placeholder="Valor IPTU" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorCondominio">Valor Condominio</label>
                            <input type="text" className="form-control" id="valorCondominio" name="valorCondominio" placeholder="Valor Condominio" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorInternet">Valor Internet</label>
                            <input type="text" className="form-control" id="valorInternet" name="valorInternet" placeholder="Valor Internet" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorTvCabo">Valor Tv a Cabo</label>
                            <input type="text" className="form-control" id="valorTvCabo" name="valorTvCabo" placeholder="Valor Tv a Cabo" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorAgua">Valor Água</label>
                            <input type="text" className="form-control" id="valorAgua" name="valorAgua" placeholder="Valor Água" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorEnergia">Valor Energia</label>
                            <input type="text" className="form-control" id="valorEnergia" name="valorEnergia" placeholder="Valor Energia" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="valorGas">Valor Gás</label>
                            <input type="text" className="form-control" id="valorGas" name="valorGas" placeholder="Valor Gás" onChange={handleInputChange} />
                        </div>
                        <div className="col text-center">
                            <Button type="submit" className="btn btn-primary ">Próximo</Button> 
                        </div>
                    </form>

                    {/* #################### TELA QUARTO!!! ##################*/}
                    <form onSubmit={SendForm}>
                        <div class name="form-container">
                            <label htmlFor="tipoQuarto">Tipo de Quarto</label>
                            <select id="tipoQuarto" name="tipoQuarto" onChange={handleInputChange}>
                                <option value={null}>Selecione uma opção abaixo</option>
                                <option value="solteiro">Casa</option>
                                <option value="solteiroSuite">Apartamento</option>
                                <option value="casal">Casa</option>
                                <option value="casaSuite">Apartamento</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="metragemQuarto">Metragem do Quarto</label>
                            <input type="text" className="form-control" id="metragemQuarto" name="metragemQuarto" placeholder="M²" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="qtdCamaQaurto">Quantidade de Cama no Quarto</label>
                            <input type="number" min="0" className="form-control num" id="qtdCamaQaurto" name="qtdCamaQaurto" placeholder="Quantidade de Cama no Quarto" onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="detalhesQuarto">Detalhes Quarto</label>
                            <input type="text" className="form-control" id="detalhesQuarto" name="detalhesQuarto" placeholder="detalhesQuarto" onChange={handleInputChange} />
                        </div>
                        <div className="col text-center">
                            <Button type="submit" className="btn btn-primary ">Próximo</Button> 
                        </div>
                    </form>
                    {/* #################### TELA FOTOS!!! ##################*/}
                    <form onSubmit={SendForm}>
                        <div>
                            <label htmlFor="fotos">Detalhes Quarto</label>
                            <input type="file" className="form-control" id="fotos" name="fotos" placeholder="detalhesQuarto" onChange={handleInputChange} />
                        </div>
                        <div className="col text-center">
                            <Button type="submit" className="btn btn-primary ">Add Foto</Button> 
                        </div>
                        
                        <div className="col text-center">
                            <Button type="submit" className="btn btn-primary ">Finalizar</Button> 
                        </div>
                    </form>
                </FormContainer>
            </FormContainerGeral>
        </>
    )
}
export default CadImovel