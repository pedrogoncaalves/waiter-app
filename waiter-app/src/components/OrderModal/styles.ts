
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

 .order-items {
   margin-top: 16px;

   .item {
      display: flex;

      & +  .item {
         margin-top: 16px;
      }

      img {
         border-radius: 6px;
      }

      .quantity {
         font-size: 14px;
         color: #6666;
         display: block;
         min-width: 20px;
         margin-left: 12px;

      }

      .product-details {
         margin-left: 4px;
         

         strong {
            display: block;
            margin-bottom: 4px;


         }
         span {
            font-size: 14px;
            color: #6666;
         }
      }
   }

 }

 .total {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 24px;
   
   span {
      font-weight: 500;
   font-size: 14px;
   opacity: 0.8;

   }

 }
`

export const Actions = styled.footer`
display: flex;
flex-direction: column;

margin-top: 32px;

.primary {
   background: #333;
   border-radius: 48px;
   border: 0;
   color: #FFF;
   padding: 12px 24px;
   display: flex;
   align-items: center;
   gap: 8px;
   
}

.secondary {
   padding: 12px 24px;
   color: #D73035;
   font-weight: bold;
   border: 0;
   background: transparent;
   margin-top: 12px;
}
`