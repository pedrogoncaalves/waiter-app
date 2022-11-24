import React, { useState} from "react";

import * as C from './styles'


export const Modal = ({ onClose= () => {}}) => {

  
    return(
        <C.styledModal>
        <C.Container>
            <h1>Mesa 2</h1>
            <button onClick={onClose}>Fechar</button>
        </C.Container>
        </C.styledModal>
    )
}