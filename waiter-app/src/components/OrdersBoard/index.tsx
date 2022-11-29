
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
    const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

    function handleOpenModal(order: Order) {
        setIsModalVisible(true);
        setSelectedOrder(order);

    }
    function handleCloseModal(order: Order) {
        setIsModalVisible(false);
        setSelectedOrder(null);

    }

    return(
        <>
        <OrderModal visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}/>
        <S.Board>
        <header>
            <span>{icon}</span>
            <strong>{title}</strong>
            <span>(1)</span>
        </header>

       {orders.length > 0  && (
        <S.orderContainer>
            {orders.map((order) => (
                <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
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
