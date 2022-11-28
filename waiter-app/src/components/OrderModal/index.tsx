import React, { useState} from "react";

import * as C from './styles'

import closeIcon from '../../assets/images/close-icon.svg'

interface OrderModalProps {
    visible: boolean;
}


export const OrderModal = ({visible}: OrderModalProps) => {

    if (!visible) {
        return null;
    }

    return(
        <C.Overlay>
        <C.ModalBody>
            <header>
                <strong> Mesa 2</strong>

                <button type="button">
                    <img src={closeIcon} alt="ícone de fechar"/>
                </button>
            </header>

            <div className="status-container">
                <small>Status do Pedido</small>

                <div>
                    <span>🕑</span>
                    <strong>Fila de Espera</strong>
                </div>
            </div>
        </C.ModalBody>
        </C.Overlay>
    )
}




