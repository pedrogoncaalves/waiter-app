
import React from 'react';

import * as S from './styles';


export const OrdersBoard = () => {
    return(
        <>
        <S.Board>
        <header>
            <span>🕑</span>
            <strong>Fila de Espera</strong>
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