import  {React, useState} from 'react';
import * as R from './CadFotoStyle';
import { RiImageAddFill } from "react-icons/ri";
import {  useLocation, Link } from "react-router-dom";
import $ from 'jquery'

const ImageUpload = () => {
    const location = useLocation();
    

    var formData = new FormData();
    // var imagem = document.querySelector("#img");

    const init = {
        anuncioDTO: {
        id_anuncio: 0,
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
        formData.append('id_anuncio', input.anuncioDTO.id_anuncio);
        formData.append("descricao_foto", input.descricao_foto)
        
        setFiles(files,
        {
            foto: file[0],
           
        },
        );
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInput({...input,
            [name]: value,
            anuncioDTO: { id_anuncio: location.state },
        });
    };

    console.log("FormData: "+{formData});
    console.log(input)

    const sendFoto = () => {
        $.ajax
            ({
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
            <R.FormContainerFoto>
                <R.FormContainer>
                    <form onSubmit={fileSelectedHandler}>
                        <R.FormIM><RiImageAddFill/> Upload images</R.FormIM>
                        <R.FormIM><R.DivSeparator/></R.FormIM>
                        <R.FormIM>Etapa 5/5</R.FormIM>
                        {/* <h3>Images</h3> */}
                        <div className="mt-4"> 
                            <input type="file" className="ml-3" id="img" />
                            <R.InputFile type="text" className="file ml-3" name="descricao_foto" id="descricao_foto" placeholder="Descrição da foto" onChange={handleInputChange}/>
                        </div>
                        <div className="mt-3">
                            <R.ButtonAddPhoto type="submit" className="btn btn-primary" onClick={checkFoto}>Adicionar Foto</R.ButtonAddPhoto>
                              
                        </div>
                    </form>
                    <div>
                        {files.map((file, i) => {
                            return (
                                <div key={i}>
                                    {/* <img src={window.URL.createObjectURL(blob)} /> */}
                                    <p>{file.descricao}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-3 d-flex justify-content-end">
                    <Link to="/CadValores" type="submit" className="btn btn-danger ">
                       Anterior
                      </Link>

                        <R.ButtonConcluir type="submit"  className="btn btn-primary" onClick={sendFoto}>Concluir</R.ButtonConcluir>
                    </div>
                </R.FormContainer>
                
            </R.FormContainerFoto>
        </>
    );
};
export default ImageUpload;
