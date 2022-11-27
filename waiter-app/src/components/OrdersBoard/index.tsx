
import React from 'react';

import * as S from './styles';

interface IOrdersProps  {
    icon: string
    title: string
}

export const OrdersBoard = ({ icon, title }: IOrdersProps) => {
    return(
        <>
        <S.Board>
        <header>
            <span>{icon}</span>
            <strong>{title}</strong>
            <span>(1)</span>
        </header>

        <S.orderContainer>
            <button type="button">
                <strong>Mesa 2</strong>
                <span> 2 itens</span>
                

            </button>
        </S.orderContainer>
    </S.Board>
    
    </>
    )
}
