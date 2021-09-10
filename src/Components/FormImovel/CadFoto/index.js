import { React, useState } from 'react';
import { FormContainerGeral, FormContainer, FormContainerFotoG, FormContainerFoto } from './CadFotoStyle';
import { Button } from '../../SectionHome/SectionStyle';
import { PostCadFoto } from '../../../Service/PostCadFoto';
import ReactDOMServer from 'react-dom/server';

const ImageUpload = () => {

    const init = {
        id_imovel:0,
        foto:"",
        descricao_foto:"",
    }
    
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


        /*
        const [input, setInput] = useState(init);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
      imovelDTO: { id_imovel: location.state },
    });
  };

  console.log(input);
  let history = useHistory()

  const SendValores = (e) => {
    e.preventDefault();
    PostCadValores(input);
    alert("Contas salvas com sucesso")
    history.push({
      pathname: "/CadFoto",
      state: input.imovelDTO.id_imovel,
    })
  }
        */
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
                    <div className="col text-center">
                                <Button type="submit" className="btn btn-primary">Add foto</Button>
                            </div>
                </FormContainer>
            </FormContainerFoto>
        </>
    )
}
export default ImageUpload