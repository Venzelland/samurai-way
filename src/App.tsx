import React from 'react';
import './App.css';
import {Technologies} from "./components/Technologies";
import {Header} from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
    return (
        <div>
            <Header title={"NEW BODY"}/>
            <Technologies titleForBody={"New Footer"}/>
            <Footer/>
        </div>
    );
}
export default App;
