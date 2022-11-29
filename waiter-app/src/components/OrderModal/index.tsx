import React, { useState} from "react";

import * as C from './styles'
import { Order } from '../../types/Order'
import closeIcon from '../../assets/images/close-icon.svg'
import { formatCurrency } from '../../utils/formatCurrency'

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

                <div className="order-items">
                {order.products.map(({_id, product, quantity}) => (
                    <div className="item" key={_id}>
                        <img 
                        src={`http://localhost:3001/uploads/${product.imagePath}`}
                        alt={product.name}
                        width="56"
                        height="28.51"/>
                        <span className="quantity">{quantity}x</span>

                        <div className="product-details">
                            <strong>{product.name}</strong>
                            <span>{formatCurrency(product.price)}</span>
                        </div>
                        
                    </div>
                ))}
                </div>
                <div className="total">
                    <span>Total</span>
                    <strong>{formatCurrency(</strong>
                </div>
            </C.OrderDetails>
        </C.ModalBody>
        </C.Overlay>
    )
}




