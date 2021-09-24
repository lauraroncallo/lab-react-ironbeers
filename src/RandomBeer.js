import React, {useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function RandomBeer({match}){
    const [beer, setBeer]= useState({});
    
    useEffect(()=> {
        async function getBeerDetail(){
            // const beerId= match.params.id;
            const response=  await axios.get(
                `https://ih-beers-api2.herokuapp.com/beers/random`
            );
            setBeer(response.data);
        }
        getBeerDetail();
     },[]);// this makes the random beer stop
    
    return(
       <>
       {beer.name ? ( 
       <>
       <img src={beer.image_url}  />
       <h2> {beer.name}</h2>
       <h3>{beer.tagline}  </h3>
       <h4>{beer.first_brewed} </h4>
       <h4>{beer.contributed_by} </h4>
       <p>{beer.description} </p>
            </>
           ) : ( <p>Loading...</p>
            )}
            </>
    );
    
    }
    

export default RandomBeer;