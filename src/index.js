import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import ProjectsCarousel from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import React from "react";
import ReactDOM from "react-dom";
import About from "./components/About/About";




function App(){
    return (
        <div className="text-center">
        <Navbar />
        <Header/>
        <About/>
        <ProjectsCarousel/>
        <Contacts/>
        <Footer />
        </div>
    
    );
}



ReactDOM.render(<App />, document.getElementById('root'));