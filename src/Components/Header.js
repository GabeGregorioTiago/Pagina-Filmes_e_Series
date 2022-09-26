import React, { Component } from "react";

import * as H from "../Styles/HeaderStyle.js"
import Logo1 from "../Figures/Logo1.png"
import Logo2 from "../Figures/Logo2.png"
import icon from "../Figures/search_icon.png"
import Home from "./Home.js";
import TopMovies from "./TopMovies.js"
import NewMovies from "./NewMovies.js"
import BestMovies from "./BestMovies.js"
import TopSeries from "./TopSeries.js"
import  Busca from "./Search.js";



import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "../Styles/GlobalStyle.js";

//export { BrowserRouter, Link, Routes, Route } from "react-router-dom";


export default class Header extends Component {
    
   render() {
    return (
       
       <BrowserRouter>
        <H.Header>
          
           <H.Ul>
             <li><Link to="/"> <H.FigureOne >
            <H.logoimgOne src={Logo1} alt="Logo_do_site"/>
            <H.logoimgTwo src={Logo2} alt="Logo_do_site"/>
           </H.FigureOne></Link></li>
             <H.Li><Link to="/bestmovies">Top Movies</Link></H.Li>
             <H.Li> <Link to="/topmovies">Popular Movies</Link></H.Li>
             <H.Li><Link to="/topseries">Popular Series</Link></H.Li>
             <H.Li><Link to="/newmovies">Upcoming Movies</Link></H.Li>
             <H.Li><Link to="/busca"> <H.BoxOne>
           
           <H.iconimg src={icon} />
           <h2>Search</h2>
       
        
            </H.BoxOne></Link></H.Li>
             

             
           </H.Ul>
          
        </H.Header>
          <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/topmovies" element={<TopMovies />} />
           <Route path="/newmovies" element={<NewMovies />} />
           <Route path="/topseries" element={<TopSeries />} />
           <Route path="/bestmovies" element={<BestMovies />} />
           <Route path="/busca" element={<Busca />} />
          </Routes>
       </BrowserRouter>
    );
  }
}

