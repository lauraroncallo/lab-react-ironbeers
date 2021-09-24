import React from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import BeerList from "./BeerList";

function Home (){
    return (
        <div> 
            <h1> Home</h1>
            <div>
         
             <h2>  <NavLink to={`/beers`}>All beers</NavLink> </h2>
             <img src="../assets/beers.png" /> 
              <p> All beers description bla bla bla </p>
              </div>  
              <div>
              <h2> <NavLink to={`/random-beer`}>Random Beer</NavLink>  </h2>
              <img src="../assets/random-beer.png" /> 
              <p> Randome beer description bla bla bla </p>
              
              </div>
              <div>  
                  <h2>    <NavLink to={`/new-beer`}>New beer</NavLink>  </h2>
                  <img src="../assets/random-beer.png" /> 
                  <p> Create beer description bla bla bla </p>
            </div>
  
        </div>
    )
    
  
    
}

export default Home