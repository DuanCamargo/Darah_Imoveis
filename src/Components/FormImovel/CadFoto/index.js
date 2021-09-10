import { React, useEffect, useState } from "react";
import { FormContainer, FormContainerFoto } from "./CadFotoStyle";
import { Button } from "../../SectionHome/SectionStyle";
import { PostCadFoto } from "../../../Service/PostCadFoto";
import ReactDOMServer from "react-dom/server";
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
        e.preventDefault();
        console.log(imagem.files);
        const file = e.target.img.files;

        formData.append("foto", file);
        console.log(file);

        setFiles([...files,
        {
            foto: file,
            descricao_foto: e.target.descricao_foto.value,
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
            <FormContainerFoto>
                <FormContainer>
                    <form onSubmit={fileSelectedHandler}>
                        <div>
                            <h2>Upload images</h2>
                        </div>
                
                        <input type="file" id="img" />
                        <input
                            type="text"
                            className="file"
                            name="descricao_foto"
                            id="descricao_foto"
                            placeholder="descrição"
                            onChange={handleInputChange}
                        />
                        <div className="col text-center">
                            <Button type="submit" className="btn btn-primary">
                                Add Foto
                            </Button>
                        </div>
                    </form>
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
                    <div className="col text-center">
                        <Button
                            type="button"
                            className="btn btn-primary"
                            onClick={sendFoto}
                        >
                            Salvar Foto
                        </Button>
                    </div>
                </FormContainer>
            </FormContainerFoto>
        </>
    );
};
export default ImageUpload;
