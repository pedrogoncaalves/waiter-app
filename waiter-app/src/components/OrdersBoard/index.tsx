
import React, { useState, lazy } from 'react';
import { Order } from '../../types/Order'
import { OrderModal } from '../../components/OrderModal/index'

import * as S from './styles';

interface IOrdersProps  {
    icon: string;
    title: string;
    orders: Order[];
}

export const OrdersBoard = ({ icon, title, orders }: IOrdersProps) => {

    const [isModalVisible, setIsModalVisible] = useState(false);


    function handleOpenModal() {
        setIsModalVisible(true);

    }

    return(
        <>
        <OrderModal visible={isModalVisible}/>
        <S.Board>
        <header>
            <span>{icon}</span>
            <strong>{title}</strong>
            <span>(1)</span>
        </header>

       {orders.length > 0  && (
        <S.orderContainer>
            {orders.map((order) => (
                <button type="button" key={order._id} onClick={handleOpenModal}>
                    <strong>Mesa {order.table}</strong>
                    <span>{order.products.length}</span>
                </button>

            ))}
        </S.orderContainer>
        )}
    </S.Board>
    
    </>
    )
}
