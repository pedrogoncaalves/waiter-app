import { useState } from 'react'
import * as S from './styles'

import { Modal } from '../OrderModal/index'
import { OrdersBoard } from '../OrdersBoard';

export const Orders = () => {

  const [isModalVisible, setModalVisible] = useState(false);


    return(
        <S.Container>
            <OrdersBoard/>
            <OrdersBoard/>
            <OrdersBoard/>
        
        </S.Container>
    )
}