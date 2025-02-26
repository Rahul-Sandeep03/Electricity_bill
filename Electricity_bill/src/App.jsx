import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Body from "./Body";
import Footer from "./Footer";
import './App.css'
const App=()=>{
    return(<>
     
     <div className="app-container">
        <header className="header">
            <Header />
        </header>
       
     
        <nav className="nav">
            <Nav />
        </nav>
     
     
        <main className="body">
            <Body />
        </main>
     
     
        <footer className="footer">
            <Footer />
        </footer>
     </div> 

    </>)
}
export  default App;