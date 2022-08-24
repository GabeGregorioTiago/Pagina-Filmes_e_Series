import React, { Component } from 'react'
import axios from 'axios'
import * as M from '../Styles/HomeMoviesStyle.js'
import HPstone from '../Figures/HP1.jpg'
import HPchamber from '../Figures/HP2.jpg'
import HPprisoner from '../Figures/HP3.jpg'
import HPfour from '../Figures/HP4.jpg'
import HPfive from '../Figures/HP5.jpg'
import HPsix from '../Figures/HP6.jpg'
import HPseven from '../Figures/HP7.jpg'
import HPeight from '../Figures/HP8.jpg'
import Fauno from '../Figures/fauno.jpg'
import Coraline from '../Figures/Coraline.jpg'
import Mind from '../Figures/Mind.jpg'
import PosterS from '../Figures/posterS.jpg'
import Tod from '../Figures/Tod.jpg'
import Alan from '../Figures/alan.jpg'
import Blue from '../Figures/blue.jpg'
import Death from '../Figures/death.jpg'
import Bungo from '../Figures/bungo.jpg'
import Monster from '../Figures/monster.jpg'
import Soul from '../Figures/soul.jpg'
import Noragami from '../Figures/Noragami.jpg'
export default class HomeMovies extends Component {
    render() {
      return (
    
            <M.Corpo>
       
            
                <M.BoxImages>
                    <img src={HPstone}/>
                    <img src={HPchamber}/>
                    <img src={HPprisoner}/>
                    <img src={HPfour}/>
                    <img src={HPfive}/>
                    <img src={HPsix}/>
                    <img src={HPseven}/>
                    <img src={HPeight}/>
                    <img src={Fauno}/>
                    <img src={Coraline}/>
                    
                    <img src={Tod}/>
                    <img src={PosterS}/>
                   
                  
                </M.BoxImages>
            </M.Corpo>
        
     
      );
    }
  }
