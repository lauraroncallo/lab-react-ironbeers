import React, {useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import Header from "./Header";

function BeerList(){
    const [beers, setBeers] = useState([]);

    useEffect(()=>{
        async function getBeers(){
           const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
           console.log("set state");
           setBeers(response.data);
        }
        getBeers();
        }, []);
    
return (
    <>
{/* {Header} */}
 <ul>
<h3>List of beers </h3>
{beers.length > 0 ? (
 beers.map((beer, index)=>{
    return (<li key={index}>
        <h2> <NavLink to={`/beers/${beer._id}`}>   
{beer.name} </NavLink> </h2>
<p> {beer.tagline} </p>
<img src={beer.image_url} width="50px"/>
<p>Created by: {beer.contributed_by} </p>

</li> );
})
): (<p> Loading ...</p>)}
</ul>
</>
); 

}

export default BeerList;