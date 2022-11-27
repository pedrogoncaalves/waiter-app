import { useState } from 'react'
import * as S from './styles'

import { Modal } from '../OrderModal/index'
import { OrdersBoard } from '../OrdersBoard';

export const Orders = () => {

  const [isModalVisible, setModalVisible] = useState(false);


    return(
        <S.Container>
            <OrdersBoard
            icon="🕑"
            title="Fila de Espera"
            />
            <OrdersBoard
            icon="👩‍🍳"
            title="Em produção"/>
            <OrdersBoard
            icon="✅"
            title="Pronto!"/>
        
        </S.Container>
    )
}