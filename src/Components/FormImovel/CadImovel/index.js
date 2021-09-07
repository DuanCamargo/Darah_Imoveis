import React from 'react';
import { FormContainerGeral, FormContainer, FormIM2, FormContainerFotoG, FormContainerFoto } from './CadImovelStyle';
import { useState} from 'react';
import { Button } from '../../SectionHome/SectionStyle';
import { PostCadImovel } from '../../../Service/PostCadImovel';

const CadImovel = () => {

    const init = {
        tipo_compartilhamento: "",
        detalhes_residencia: "",
        regras_residencia: "",
        detalhes_regiao: "",
        detalhes_quarto: "",
        mapa: "",
    }

    const [input, setInput] = useState(init)

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setInput({ ...input, [name]: value});
    }

    console.log(input)

    const SendResidencia = (e) => {
        e.preventDefault();
        setInput({input, data_publicacao: dataEHora})
        alert(input)
        PostCadImovel(input);
    }

    const dateTime = (data = new Date()) =>{
        var dia = data.getDate();
        var mes = data.getMonth()+1;
        var ano = data.getFullYear(); 
        var hora = data.getHours();
        var minute = data.getMinutes();
        var second = data.getSeconds()
 
        if(dia.toString().length ===1){dia = '0'+dia}
        if(mes.toString().length ===1){mes = '0'+mes}
        if(hora.toString().length ===1){hora = '0'+hora}
        if(minute.toString().length ===1){minute = '0'+minute}
        if(second.toString().length ===1){second = '0'+second}
    
        return ano+'-'+mes+'-'+dia+' '+hora+':'+minute+':'+second;
    }
    var dataEHora =  dateTime()

    return (
        <>
            <FormContainerGeral>
                <FormContainer id="residencia">
                    <form onSubmit={SendResidencia}>
                        <FormIM2>Preencha os campos abaixo</FormIM2>
                        <div>
                            <label htmlFor="tipo_compartilhamento">Tipo de Compartilhamento</label>
                            <select id="tipo_compartilhamento" name="tipo_compartilhamento" onChange={handleInputChange}>
                                <option value={null}>Selecione uma opção abaixo</option>
                                <option value="quarto_residencia">Quarto e residência</option>
                                <option value="residencia">Residência</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="detalhes_residencia">Detalhes da Residência</label>
                            <textarea className="form-control" id="detalhes_residencia" name="detalhes_residencia" placeholder="ex: Ar-Condicionado, Sugar, " onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="regras_residencia">Regras da Residência</label>
                            <textarea className="form-control" id="regras_residencia" name="regras_residencia" placeholder="Ex:  não pode festa, não pode pet, etc..." onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="detalhes_regiao">Detalhes da Região</label>
                            <textarea className="form-control" id="detalhes_regiao" name="detalhes_regiao" placeholder="ex: Supermercado, farmacia, etc... " onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="_q">Detalhes Quarto</label>
                            <textarea type="text" className="form-control" id="_q" name="_q" placeholder="ex: mobiliado, frigobar, ar-condicionado, etc" onChange={handleInputChange} />
                        </div>

                        {/* ########### MAPA ######### */}
                        <div>
                            <label htmlFor="mapa">Mapa (EMBED)</label>
                            <input type="text" className="form-control" id="mapa" name="mapa" placeholder="Embed seu mapa aqui" onChange={handleInputChange} />
                        </div>

                        <div>
                            <input type="datetime" defaultValue={dataEHora} className="form-control" id="data_publicacao" name="data_publicacao" hidden/>
                        </div>

                        <div className="col text-center">
                            <Button type="submit" className="btn btn-primary ">Próximo</Button>
                        </div>
                        <div className="col text-center">
                            <Button type="submit" className="btn btn-danger ">Voltar</Button>
                        </div>
                    </form>
                </FormContainer>
            </FormContainerGeral>
        </>
    )
}
export default CadImovel

