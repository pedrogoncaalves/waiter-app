import React, { useState} from "react";

import * as C from './styles'


export const Modal = () => {

    const [isModalAvailabe, setModalAvailable] = useState(true);



    return(
        <C.styledModal>
        <C.Container>
            <h1>Mesa 2</h1>
            <button onClick={() => setModalAvailable(false)}>x</button>
        </C.Container>
        </C.styledModal>
    )
}