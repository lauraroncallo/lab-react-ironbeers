import React, {useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router-dom";

function NewBeer () {
const [name, setName]= useState("");
const [tagline, setTagline]= useState(""); 
const [description, setDescription]= useState("");
const [first_brewed, setFirst_brewed]= useState("");
const [brewers_tips, setBrewers_tips]= useState("");
const [attenuation_level, setAttenuation_level]= useState("");
const [contributed_by, setContributed_by]= useState("");
const history = useHistory();

const handleFormSubmit = async (e)=>{
    e.preventDefault();
    const body = {
name: name,
tagline: tagline,
description: description, 
first_brewed: first_brewed,
brewers_tips: brewers_tips,
attenuation_level: attenuation_level,
contributed_by:contributed_by,
    };

    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);
    setName("");
    setTagline("");
    setDescription("");
    setFirst_brewed("");
    setBrewers_tips("");
    setAttenuation_level("");
    setContributed_by("");
    
    console.log("beer created");
    // toast.success("beerd created");
    history.push("/beers");
};


    return(
        <> 
        <h1> Create beer</h1>
    <form onSubmit={handleFormSubmit} >
    <label>Name </label>
    <input type="text" 
    value={name} 
    onChange={(e)=> setName(e.target.value)}
    required/>

    <label>Tagline </label>
    <input type="text" 
    value={tagline}
    onChange={(e)=> setTagline(e.target.value)}
    required/>

    <label>Description</label>
    <input type="text" 
    value={description}
    onChange={(e)=> setDescription(e.target.value)}
    required/>     

    <label>First brewed</label>
    <input type="text" 
    value={first_brewed}
    onChange={(e)=> setFirst_brewed(e.target.value)}
    required/>    

    <label>Brewers tips</label>
    <input type="text" 
    value={brewers_tips}
    onChange={(e)=> setBrewers_tips(e.target.value)}
    required/>   
    
    <label>Attenuation level</label>
    <input type="number" 
    value={attenuation_level}
    onChange={(e)=> setAttenuation_level (e.target.value)}
    required/>   

    <label>Contributed_by</label>
    <input type="text" 
    value={contributed_by}
    onChange={(e)=> setContributed_by (e.target.value)}
    required/>  
     

    <button type="submit">Add new</button>

    </form>
    </>
    )

}



export default NewBeer;