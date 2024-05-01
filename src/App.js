





import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';


function App() {
  return (
    <>
    <Header/>
      <Page1/>
      <Page2/>
      <Page3/>
    </>
  );
}
export default App;