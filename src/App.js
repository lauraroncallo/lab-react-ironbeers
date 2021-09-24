import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./Home"
import BeerList from './BeerList';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import Header from "./Header";
import BeerDetail from './BeerDetail';

function App() {
  return (
    <> 
  <Header  color="#61dafb"/>
    <Switch>  
    <Route exact path="/" component={Home} />
    <Route exact path="/beers" component={BeerList} />
    <Route path="/beers/:id" component={BeerDetail} />
   <Route exact  path="/random-beer" component={RandomBeer}/>
   <Route  exact path="/new-beer"component={NewBeer} /> 
    </Switch>
    </> 
  );
}

export default App;
