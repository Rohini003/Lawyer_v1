import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Contacts from "../pages/Contacts"
import Lawyers from "../pages/Lawyers/Lawyers"
import LawyerDetails from "../pages/Lawyers/LawyersDetails"
import{Routes,Route} from 'react-router-dom'

const Router = () => {
    return <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/home" element ={<Home/>} />
        <Route path="/lawyers" element ={<Lawyers/>} />
        <Route path="/lawyers/:id" element ={<LawyerDetails/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/register" element ={<Signup/>} />
        <Route path="/contacts" element ={<Contacts/>} />
        <Route path="/services" element ={<Services/>} />
    </Routes>
};

export default Router;