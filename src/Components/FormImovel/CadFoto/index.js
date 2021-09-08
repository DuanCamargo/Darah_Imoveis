import { React, useState } from 'react';
import { FormContainerGeral, FormContainer, FormContainerFotoG, FormContainerFoto } from './CadFotoStyle';
import { Button } from '../../SectionHome/SectionStyle';
import { PostCadFoto } from '../../../Service/PostCadFoto';
import ReactDOMServer from 'react-dom/server';

const ImageUpload = () => {

    const [files, setFiles] = useState([]);

    const fileSelectedHandler = (e) => {
        e.preventDefault();
       
   
       const [file] =  e.target.img.files
        setFiles(  [...files,{
            foto:file,
            descricao:e.target.descricao.value
        
        }])     
        
        var formData = new FormData()

        formData.append('foto',file)

        console.log (formData)
      
        }


      
      
    
    

    return (
        <>
            <FormContainerFoto>
                <FormContainer>
                    <form onSubmit={fileSelectedHandler}>
                        <div><h2>Upload images</h2></div>
                        {/* <h3>Images</h3> */}
                        <input type="file" id='img' />
                        <input type="text" className="file" name="file" id="descricao" placeholder="descrição" />
                        <div className="col text-center">
                                <Button type="submit" className="btn btn-primary">Add Foto</Button>
                            </div>
                    </form>
                    <div>
                        {
                            files.map((file,i) => {
                                return  (
                                  <div key={i}>
                                   <img src={URL.createObjectURL(file.foto)}/>
                                   <p>{file.descricao}</p>
                                   </div>
                                   
                                )
                            })
                        }
                    </div>
                    <div className="col text-center">
                                <Button type="submit" className="btn btn-primary">Add foto</Button>
                            </div>
                </FormContainer>
            </FormContainerFoto>
        </>
    )
}
export default ImageUpload