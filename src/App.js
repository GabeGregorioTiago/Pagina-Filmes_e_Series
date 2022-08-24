import React, { Component } from "react";
import * as S from "./Styles/GlobalStyle";
import Header from "./Components/Header.js"

export default class App extends Component {
    
   render() {
    return (
       
       <>
         <S.GlobalStyle />  
         <Header/>
        
       </>
    );
  }
}

