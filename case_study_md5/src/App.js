import './App.css';
import Header from "./components/Header/Header";
import PictureBody from "./components/PictureBody/PictureBody";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import CreateService from "./components/CreateService/CreateService";
import CreateCustomer from "./components/CreateCustomer/CreateCustomer";
import CreateContract from "./components/CreateContract/CreateContract";
import ListCustomer from "./components/ListCustomer/ListCustomer";
import ListContract from "./components/ListContract/ListContract";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/create-service"} element={<CreateService/>}></Route>
            <Route path={"/create-customer"} element={<CreateCustomer/>}></Route>
            <Route path={"/create-contract"} element={<CreateContract/>}></Route>
            <Route path={"/list-customer"} element={<ListCustomer/>}></Route>
            <Route path={"/list-contract"} element={<ListContract/>}></Route>

        </Routes>
    );
}

export default App;
