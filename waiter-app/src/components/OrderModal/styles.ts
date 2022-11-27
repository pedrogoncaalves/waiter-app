
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

export const Container = styled.div`

background: #FFFFFF;
border-radius: 8px;
width: 30rem;
height: 34.81rem;

`

export const Button = styled.button`
color: black;
border: 1px solid red;
`