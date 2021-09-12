import { React, useEffect, useState } from 'react';
import * as R from './CadFotoStyle';
import { Button } from '../../SectionHome/SectionStyle';
import { PostCadFoto } from '../../../Service/PostCadFoto';
import ReactDOMServer from 'react-dom/server';
import { RiImageAddFill } from "react-icons/ri";
import { useHistory, useLocation, Link } from "react-router-dom";
import $ from 'jquery'

const ImageUpload = () => {
    const location = useLocation();
    var formData = new FormData();
    // var imagem = document.querySelector("#img");

    const init = {
        imovelDTO: {
        id_imovel: 0,
        },
        descricao_foto: "",
    };

    
       

    const [files, setFiles] = useState([]);
    const [input, setInput] = useState(init);

    const fileSelectedHandler = (e) => {
        var imagem = document.querySelector("#img");
        e.preventDefault();
        console.log(imagem.files);
        const file = e.target.img.files;

        formData.append("foto", file[0]);
        formData.append('id_imovel', input.imovelDTO.id_imovel);
        formData.append("descricao_foto", input.descricao_foto)
        
        // setFiles([...files,
        // {
        //     foto: file[0],
        //     // descricao_foto: e.target.descricao.value,
        // },
        // ]);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInput({...input,
            [name]: value,
            imovelDTO: { id_imovel: location.state },
        });
    };

    console.log("FormData: "+{formData});
    console.log(input)

    const sendFoto = () => {
        $.ajax({
            type: "POST",
            url: "http://localhost:8081/foto",
            enctype: 'multipart/form-data',
            data:formData,        
            processData: false,
            contentType: false,
            success: function (data){
                alert('Dados salvos com sucesso!')
            }
        });
    };

    const checkFoto = () => {
        alert("Adicione uma foto abaixo");
    };
    

    return (
        <>
            <R.ContainerGeral>
                <R.ContainerGeralInterno1>
                        <R.HeaderContainerFont><RiImageAddFill/> Upload images</R.HeaderContainerFont>
                        <R.HeaderContainerFont><R.DivSeparatorFormImovelX/></R.HeaderContainerFont>
                        <R.HeaderContainerFont>Etapa 5 de 5</R.HeaderContainerFont>
                    <form onSubmit={fileSelectedHandler}>
                        {/* <h3>Images</h3> */}
                        <div className="mt-4 d-flex"> 
                            <input type="file" className="ml-3" id="img" />
                            <R.InputDefaultFormImovel type="text" className="file ml-3" name="descricao_foto" id="descricao_foto" placeholder="Descrição da foto" onChange={handleInputChange}/>
                        </div>
                    </form>
                    <div className="mt-3">
                            <R.ButtonStyledFormImovelAddPhoto type="submit" className="btn btn-primary" onClick={checkFoto}>Adicionar Foto</R.ButtonStyledFormImovelAddPhoto>
                              
                        </div>
                    <div>
                        {files.map((file, i) => {
                            return (
                                <div key={i}>
                                    <img src={URL.createObjectURL(file.foto)} />
                                    <p>{file.descricao}</p>
                                </div>
                            );
                        })}
                    </div>
                <div className="d-flex align-items-center justify-content-between mt-4 ">
                    <div className="col text-center">
                        <R.ButtonStyledFormImovelPrevious to="/CadValores" type="submit" className="btn btn-danger ">Anterior</R.ButtonStyledFormImovelPrevious>
                    </div>
                        <R.DivSeparatorFormImovelX/>
                    <div className="col text-center">
                        <R.ButtonStyledFormImovelConcluir type="submit"  className="btn btn-primary" onClick={sendFoto}>Concluir</R.ButtonStyledFormImovelConcluir>
                    </div>
                </div>
                </R.ContainerGeralInterno1>
                
            </R.ContainerGeral>
        </>
    );
};
export default ImageUpload;
