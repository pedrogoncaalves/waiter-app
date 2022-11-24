import { useState } from 'react'
import * as S from './styles'

import { Modal } from '../OrderModal/index'

export const Orders = () => {

  const [isModalVisible, setModalVisible] = useState(false);


    return(
        <S.Container>
        <S.Board>
            <header>
                <span>🕑</span>
                <strong>Fila de Espera</strong>
                <span>(1)</span>
            </header>

            <S.orderContainer>
                <button onClick={() => setModalVisible(true)}type="button">
                    <strong>Mesa 2</strong>
                    <span> 2 itens</span>
                    {isModalVisible ? (
                    <Modal onClose={() => setModalVisible(false)}/> 
                    ) : null}

                </button>
            </S.orderContainer>
        </S.Board>
        <S.Board>
            <header>
                <span>👩‍🍳</span>
                <strong>Em produção</strong>
                <span>(1)</span>
            </header>

            <S.orderContainer>
                <button type="button">
                    <strong>Mesa 2</strong>
                    <span> 2 itens</span>

                </button>
            </S.orderContainer>
        </S.Board>
        <S.Board>
            <header>
                <span>✅</span>
                <strong>Pronto</strong>
                <span>(1)</span>
            </header>

            <S.orderContainer>
                <button type="button">
                    <strong>Mesa 2</strong>
                    <span> 2 itens</span>

                </button>
            </S.orderContainer>
        </S.Board>
        </S.Container>
    )
}