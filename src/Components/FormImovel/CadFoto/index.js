import { React, useState } from 'react';
import * as R from './CadFotoStyle';
import { Button } from '../../SectionHome/SectionStyle';
import { PostCadFoto } from '../../../Service/PostCadFoto';
import ReactDOMServer from 'react-dom/server';
import { RiImageAddFill } from "react-icons/ri";

const ImageUpload = () => {

    const [files, setFiles] = useState([]);

    const fileSelectedHandler = (e) => {
        e.preventDefault();
       
       console.log (...e.target.img.files)
       const [file] =  e.target.img.files
        setFiles(  [...files,{
            foto:file,
            descricao:e.target.descricao.value
        
        }])     
        }

    // const imgImov = evt => {
    //     let parent = evt.target.parentNode
    //     const [file] = evt.target.files
    //     if (file) {
             
    //         console.log (parent.img)
    //         console.log (parent.blah)
    //         parent.blah.src = URL.createObjectURL(file)
    //     }
    // }
    


    
    

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
                            <input type="file" class="ml-3" id='img' />
                            <R.InputFile type="text" className="file ml-3" name="file" id="descricao" placeholder="Descrição da foto" />
                        </div>
                        <div className="mt-3">
                                <R.ButtonAddPhoto type="submit" className="btn btn-primary">Adicionar Foto</R.ButtonAddPhoto>
                        </div>
                    </form>
                    <div>
                        {
                            files.map((file) => {
                                return(
                                  <div>
                                   <img src={URL.createObjectURL(file.foto)}/>
                                   <p>{file.descricao}</p>
                                   </div>
                                   
                                )
                            })
                        }
                    </div>
                    <div className="mt-3">
                        <R.ButtonAddPhoto type="submit" className="btn btn-primary">Adicionar foto</R.ButtonAddPhoto>
                    </div>

                    <div className="mt-3 d-flex justify-content-end">
                        <R.ButtonConcluir type="submit" className="btn btn-primary">Concluir</R.ButtonConcluir>
                    </div>
                </R.FormContainer>
                
            </R.FormContainerFoto>
        </>
    )
}
export default ImageUpload