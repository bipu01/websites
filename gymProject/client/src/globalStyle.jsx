import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    color: white;
}
.global-bg{
    font-family: 'Merriweather Sans', sans-serif;
}
.heroText{

    opacity: 0.85;
    font-size: clamp(3rem, 4.5vw , 8rem);
    
    font-weight: 900;
    line-height: 170.2%; 

    letter-spacing: 1.5rem;
    color: rgba(255, 255, 255, 0.85)
}
button{
    all: unset;
    border-radius: 2px;
    background:  rgba(227, 171, 119, 0.85);
    padding: calc(0.1rem + 1vh ) calc(0.4rem + 2vh);

    color:  #0B0D23;
    font-family: Merriweather Sans;
    font-weight: 400;
    line-height: 170.2%; /* 6.808rem */
    letter-spacing: -0.02rem;
}
.specailBtn{
    position:absolute;
    top: 85%;
    left: 5%;
    width: clamp(5.5rem, 12vw, 20rem);
    
    font-size: clamp(1.1rem, 1.2vw, 2rem); 
}
.primary-onLeft{
    position:absolute;
    bottom: 10%;
    left: 5%;
    width: clamp(5.5rem, 6vw, 10rem);
    font-size: clamp(1.1rem, 1.2vw, 2rem);
}
.primary-onRight{
    position:absolute;
    bottom: 8%;
    right: 5%;
    width: clamp(5.5rem, 6vw, 10rem);
    font-size: clamp(1.1rem, 1.2vw, 2rem);
}
.secondary-onLeft{
    all: unset;
    color: white;
    opacity: 0.5;
    position:absolute;
    bottom: 11%;
    left: calc(15% + 5rem);
    text-decoration: underline;
    text-underline-offset: 6px;

    width: clamp(5.5rem, 5.5vw, 10rem);
    font-size: clamp(1.1rem, 1.2vw, 2rem);
}
 .paragraph {
      font-size:clamp(12px, 1rem, 20px); 
      opacity: 0.85;
      font-weight: 300;
      line-height: 2.5rem;
      letter-spacing: 1px;
      width: 90%;
    }

`;

export default GlobalStyle;
