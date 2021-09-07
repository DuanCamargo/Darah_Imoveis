import {React, useState} from 'react';
import { FormContainerGeral, FormContainer, FormContainerFotoG, FormContainerFoto } from './CadFotoStyle';
import { Button } from '../../SectionHome/SectionStyle';
import {PostCadFoto} from '../../../Service/PostCadFoto';
import ReactDOMServer from 'react-dom/server';

const ImageUpload = () => {
    
    const [files, setFiles] = useState([]);

    const fileSelectedHandler = (e) => {
      setFiles({ files: [...files, ...e.target.files] })
    }

    console.log(files)
  
    return (
        <>
            <form>
                <div><h2>Upload images</h2></div>
                {/* <h3>Images</h3> */}
                <input type="file" multiple onChange={fileSelectedHandler} />
            </form>
            <div>
                <img src={files[0]}></img>
            </div>
        </>
    )
  }
  export default ImageUpload