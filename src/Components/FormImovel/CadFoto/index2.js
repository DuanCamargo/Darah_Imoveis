import {React, useState} from 'react';
import { FormContainerGeral, FormContainer, FormContainerFotoG, FormContainerFoto } from './CadFotoStyle';
import { Button } from '../../SectionHome/SectionStyle';
import {PostCadFoto} from '../../../Service/PostCadFoto';
import ReactDOMServer from 'react-dom/server';

const CadFoto = () => {

    const init = {
        fotos: ""
    }

    const imgImov = evt => {
        let parent = evt.target.parentNode
        const [file] = evt.target.files
        if (file) {
             
            console.log (parent.img)
            console.log (parent.blah)
            parent.blah.src = URL.createObjectURL(file)
        }
    }

    const addPhotos = () => {
      
        let photo = (
            <>
                <form runat="server">
                    <input accept="image/*" type='file' id="imgImov" onChange={ (e) => imgImov(e)} />
                    <img id="blah" src="#" alt="" />
                    <input type="text" className="form-control" id="file" name="file" placeholder="Descrição"/>
                </form>
            </>
        )
        console.log (ReactDOMServer.renderToStaticMarkup(photo))
        document.getElementById('file').innerHTML += ReactDOMServer.renderToStaticMarkup(photo)
    }

    const [input, setInput] = useState(init)
   

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
            setInput({ ...input, [name]: value });
    }

    const SendFotos = (e) => {
        e.preventDefault();
        PostCadFoto(input);
    }

    return (
        <>
            <FormContainerGeral>
                {/* #################### TELA FOTOS!!! ##################*/}
                <FormContainer id="fotos">
                    <FormContainerFotoG>
                        <form onSubmit={SendFotos}>
                            <FormContainerFoto>
                            <div className="page">
                               <div className="container">
                                   <h1 className="heading">adicionar imagem</h1>
                                   <div className="img-holder">
                                       <img src="" alt="" id="img" className="img"/>
                                   </div>
                                   <input type="file" className="img" id="foto" name="foto" onChange={handleInputChange} required/>
                                </div>
                            </div>

                            </FormContainerFoto>

                            <div className="col text-center">
                                <Button type="submit" className="btn btn-primary" onClick={addPhotos}>Add Foto</Button>
                            </div>

                            <div className="col text-center">
                                <Button type="submit" className="btn btn-primary ">Finalizar</Button>
                            </div>
                        </form>
                    </FormContainerFotoG>
                </FormContainer>
            </FormContainerGeral>
        </>
    )
}
export default CadFoto
