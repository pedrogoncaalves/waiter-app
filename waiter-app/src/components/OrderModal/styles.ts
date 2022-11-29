
import styled from "styled-components";




export const Overlay = styled.div`
width: 100%;
height: 100vh;
position: fixed;
top: 0;
left:0;
z-index: 10;
background-color: rgba(0,0,0,0.8);
backdrop-filter: blur(4.5px);
display: flex;
justify-content: center;
align-items: center;
cursor: default;

`

export const ModalBody = styled.div`
background: #FFFFFF;
border-radius: 8px;
width: 30rem;
padding: 32px;

 header {

    display: flex;
 align-items: center;
 justify-content: space-between;

    button {
    border: 0;
    background: transparent;
    line-height: 0;
 }
 

 strong {
    font-size: 24px;
 }

 .status-container {
    margin-top: 32px;

    small {
        font-size: 14px;
        opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      gap: 8px;
      align-items: center
    }
 }

 }

`

export const OrderDetails = styled.div`
margin-top: 32px;

 > strong {
   font-weight: 500;
   font-size: 14px;
   opacity: 0.8;
 }
`