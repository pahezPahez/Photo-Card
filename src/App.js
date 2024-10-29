import React from 'react';
import './App.css';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';
import PhotoList from './components/PhotoList';


function App() {
    return(
        <>
        <Header/>
        <PhotoList/>
        <Main/>
        <Footer/>
        </>
    )
}

export default App;
