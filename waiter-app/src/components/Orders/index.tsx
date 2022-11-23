import * as S from './styles'

export const Orders = () => {
    return(
        <S.Container>
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