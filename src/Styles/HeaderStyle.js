import styled, { createGlobalStyle } from "styled-components";

export const Header = styled.header`
display:flex;   
background-color:black;
height:13vh;
width:100%;
position:fixed;


`;
export const Ul = styled.ul`
display:flex;
justify-content:space-evenly;
 align-items: center;

 list-style: none;
   color:white;
     
   width:80vw;
  
   li{
     
      &:hover{

         opacity:1;
         color:white;
        
       }

   }
 
   
   
   
   
`;

export const Li=styled.li`
     opacity:0.6;

`
 

export const FigureOne =styled.figure`
   display:flex; 
   justify-content:space-evenly;
   align-items: center;
`
export const logoimgOne = styled.img`
   width:5vw;
   height:11vh;
   margin-left:1vw;
`
export const logoimgTwo = styled.img`
   width:11vw;
   height:4vh;
   margin-left:1vw;
   opacity:0.8;
`
export const iconimg = styled.img`
   width:1.5vw;
   height:3.5vh;
`

export const BoxOne = styled.div`

display:flex;
justify-content:space-evenly;
 align-items: center;
 opacity:0.8;
 margin-left:8vw;

 h2{
    color:white;
    font-size:3vh;
    margin-left:1vw;
 }

`