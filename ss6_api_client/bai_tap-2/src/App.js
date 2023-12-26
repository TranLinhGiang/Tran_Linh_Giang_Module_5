import './App.css';
import './App.css';
import {BrowserRouter, Routes, Router, Route} from "react-router-dom";
import ListBook from "./components/book/ListBook";
import CreateBook from "./components/book/CreateBook";
import EditBook from "./components/book/EditBook";
import React from "react";
function App() {
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ListBook/>}/>
              <Route path="/create" element={<CreateBook/>}/>
              <Route path="/edit/:bookId" element={<EditBook/>}/>
            </Routes>
          </BrowserRouter>
        </>
    );
}

export default App;
