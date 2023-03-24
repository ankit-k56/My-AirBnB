import React from "react";
import './App.css';
import Header from "./components/Header";
import Home from "./Pages/Home";
import {RouterProvider,createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import SearchPage from "./components/SearchPage";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Header />}> 
        <Route index element={<Home/>}></Route>
        <Route path="/search" element={<SearchPage/>}> </Route>
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
