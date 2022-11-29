import React, { useState} from "react";

import * as C from './styles'
import { Order } from '../../types/Order'
import closeIcon from '../../assets/images/close-icon.svg'

interface OrderModalProps {
    visible: boolean;
    order: Order | null;
}


export const OrderModal = ({visible, order}: OrderModalProps) => {

    if (!visible || !order) {
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
                    <span>
                        {order.status === 'WAITING' && '🕑'}
                    {order.status === 'DONE' && '✅'}
                    {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
                    </span>
                    <strong>
                    {order.status === 'WAITING' && 'Fila de Espera'}
                    {order.status === 'DONE' && 'Pronto!'}
                    {order.status === 'IN_PRODUCTION' && 'Em produção'}
                    </strong>
                </div>
            </div>
            <C.OrderDetails>
                <strong>Itens</strong>
            </C.OrderDetails>
        </C.ModalBody>
        </C.Overlay>
    )
}




