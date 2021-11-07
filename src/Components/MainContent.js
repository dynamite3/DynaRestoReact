
import react, { useState } from "react";
import { Route,Switch } from "react-router";
import styled from "styled-components";

import NavBar from "./NavBar";

import HomePage from "../Pages/HomePage";
import ManagerPage from "../Pages/ManagerPage";
import ProductPage from "../Pages/ProductPage";
import CartPage from "../Pages/CartPage";
import TablePage from "../Pages/TablePage";
import TableDetailed from "../Pages/TableDetailed";

import { Container } from "react-bootstrap";

// export const apiendpoint="http://localhost:6969"

export const apiendpoint="https://dynaresto.herokuapp.com"




function MainContent(){

    

    return(
        <MainContentStyled>
            <NavBar/>


            <div className="main">
                <Container fluid>
                <Switch>
                    <Route path="/" exact><TablePage/></Route>
                    <Route path="/table/:id" exact><TableDetailed/></Route>
                    <Route path="/manager" exact><ManagerPage /></Route>
                    <Route path="/product" exact><ProductPage/></Route>
                    
                </Switch>
                </Container>
            </div>

            
        </MainContentStyled>


    
    )
  }
  
  const MainContentStyled=styled.div`
    .main{ 
        text-align: center;
    }
  `;
  
  export default MainContent;