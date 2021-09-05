import React from "react";
import { useState } from "react";



const UsuarioLogadoContext = React.createContext([{}, () => {}]);

const initialStateUser = {
    id: "",
    nome: "",
    sobrenome: "",
    email: "",
    senha:"",
    whatsapp:""
};

const UsuarioLogadoProvider = (props) => {
    

    const [usuarioLogado, setUsuarioLogado] = useState( initialStateUser);
   

    return (
        <UsuarioLogadoContext.Provider 
            value={[usuarioLogado, setUsuarioLogado]}>
                {props.children}
            
        </UsuarioLogadoContext.Provider>
    );
};



export  { initialStateUser, UsuarioLogadoContext, UsuarioLogadoProvider };