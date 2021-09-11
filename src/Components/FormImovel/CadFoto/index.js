import { React, useEffect, useState } from 'react';
import * as R from './CadFotoStyle';
import { Button } from '../../SectionHome/SectionStyle';
import { PostCadFoto } from '../../../Service/PostCadFoto';
import ReactDOMServer from 'react-dom/server';
import { RiImageAddFill } from "react-icons/ri";
import { useHistory, useLocation } from "react-router";

const ImageUpload = () => {
    const location = useLocation();
    var formData = new FormData();
    var imagem = document.querySelector("#img");

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

        formData.append("foto", file);
        console.log(file);

        setFiles([...files,
        {
            foto: file,
            descricao_foto: e.target.descricao.value,
        },
        ]);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInput({...input,
            [name]: value,
            imovelDTO: { id_imovel: location.state },
        });
    };

    console.log(formData);

    const sendFoto = () => {
        PostCadFoto(formData, input);
        alert("Foto(s) salvas(s) com sucesso");
    };

    return (
        <>
            <R.FormContainerFoto>
                <R.FormContainer>
                    <form onSubmit={fileSelectedHandler}>
                        <R.FormIM><RiImageAddFill/> Upload images</R.FormIM>
                        <R.FormIM><R.DivSeparator/></R.FormIM>
                        <R.FormIM>Etapa Final</R.FormIM>
                        {/* <h3>Images</h3> */}
                        <div class="mt-4"> 
                            <input type="file" class="ml-3" id="img" />
                            <R.InputFile type="text" className="file ml-3" name="file" id="descricao" placeholder="Descrição da foto" />
                        </div>
                        <div className="mt-3">
                                <R.ButtonAddPhoto type="submit" className="btn btn-primary">Adicionar Foto</R.ButtonAddPhoto>

                        </div>
                    </form>
                    <div>
                        {files.map((file, i) => {
                            return (
                                <div key={i}>
                                    <img src={URL.createObjectURL(file.foto[0])} />
                                    <p>{file.descricao}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-3 d-flex justify-content-end">
                        <R.ButtonConcluir type="submit"  className="btn btn-primary">Concluir</R.ButtonConcluir>
                    </div>
                </R.FormContainer>
                
            </R.FormContainerFoto>
        </>
    );
};
export default ImageUpload;
