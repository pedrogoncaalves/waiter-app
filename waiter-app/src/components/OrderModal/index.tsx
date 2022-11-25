import React, { useState} from "react";

import * as C from './styles'


export const Modal = ({ onClose = ()=> { }}) => {

  
    return(
        <C.styledModal>
        <C.Container>
            <h1>Mesa 2</h1>
            <C.Button onClick={onClose}>Fechar</C.Button>
        </C.Container>
        </C.styledModal>
    )
}