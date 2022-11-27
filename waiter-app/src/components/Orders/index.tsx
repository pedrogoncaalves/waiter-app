import { useState } from 'react'
import * as S from './styles'

import { Modal } from '../OrderModal/index'
import { OrdersBoard } from '../OrdersBoard';

export const Orders = () => {

  


    return(
        <S.Container>
            <OrdersBoard
            icon="🕑"
            title="Fila de Espera"
            orders={[]}
            />
            <OrdersBoard
            icon="👩‍🍳"
            title="Em produção"
            orders={[]}/>
            <OrdersBoard
            icon="✅"
            title="Pronto!"
            orders={[]}/>
        
        </S.Container>
    )
}