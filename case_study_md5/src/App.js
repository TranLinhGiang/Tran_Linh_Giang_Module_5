import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import CreateService from "./components/Service/CreateService";
import CreateCustomer from "./components/Customer/CreateCustomer";
import CreateContract from "./components/Contract/CreateContract";
import ListCustomer from "./components/Customer/ListCustomer";
import ListContract from "./components/Contract/ListContract";
import ServiceList from "./components/Service/ServiceList";
import EditService from "./components/Service/EditService";
import EditCustomer from "./components/Customer/EditCustomer";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>

            <Route path={"/create-service"} element={<CreateService/>}></Route>

            <Route path={"/create-customer"} element={<CreateCustomer/>}></Route>

            <Route path={"/create-contract"} element={<CreateContract/>}></Route>

            <Route path={"/list-customer"} element={<ListCustomer/>}></Route>

            <Route path={"/list-contract"} element={<ListContract/>}></Route>

            <Route path={"/list-service"} element={<ServiceList/>}></Route>

            <Route path={"/edit-service"} element={<EditService/>}></Route>

            <Route path={"/edit-customer"} element={<EditCustomer/>}></Route>
        </Routes>
    );
}

export default App;
