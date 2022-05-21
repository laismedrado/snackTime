import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import SplashScreenPage from "../pages/loginPage/splashScreenPage/SplashScreenPage";
import LoginPage from "../pages/loginPage/loginPage/LoginPage";
import AdressRegisterPage from "../pages/registerPage/adressRegisterPage/AdressRegisterPage";
import BasicRegisterPage from "../pages/registerPage/basicRegisterPage/BasicRegisterPage";
import RestaurantsPage from "../pages/restaurantsPage/RestaurantsPage";
import ShoppingCartPage from "../pages/shoppingCartPage/ShoppingCartPage";
import GlobalStyle from "../styles/global";
import ProfilePage from "../pages/profile/profilePage/ProfilePage";
import ProfileEdit from "../pages/profile/profileEdit/ProfileEdit";
// import AdressPageEdit from "../pages/profile/adressPageEdit/AdressPageEdit";
import AdressPageEdit from "../pages/profile/adressPageEdit/AdressPageEdit"
export default function MainRoutes(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<SplashScreenPage/>}/>
                <Route path="/HomePage" element={<HomePage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/AdressRegister" element={<AdressRegisterPage/>}/>
                <Route path="/BasicRegister" element={<BasicRegisterPage/>}/>
                <Route path="/Restaurants/:id" element={<RestaurantsPage/>}/>
                <Route path="/ShoppingCart" element={<ShoppingCartPage/>}/>
                <Route path="/ProfilePage" element={<ProfilePage/>}/>
                <Route path="/AdressPageEdit" element={<AdressPageEdit/>}/>
                <Route path="/Profile/edit" element={<ProfileEdit/>}/>
            </Routes>
            <GlobalStyle/>
        </BrowserRouter>
    )
}