import React from "react";
import image from "../images/meportfolio.png";
import NavBar from "./NavBar.js";



export default function Home() {

    
    
    
    return (
        <main className="bg-black pt-16">
            <div className="content">
                <h1 id="container"className="text" data-text="Bart Scholten">BART SCHOLTEN</h1>
                </div>
            <NavBar />
            <section className="m-0 w-full h-full overflow-hidden justify center h-48 flex flex-wrap content-center">
                
                <h1 id="container"className="absolute text-white text-3xl font-bold text-right mt-80 w-1/3" >Front-end Developer</h1>
                
                <div className="absolute float-right"> 
                    <img src={image} alt="Me" className="float-right w-1/2 mt-20 content-center mr-20"/>
                </div>
                </section>
        </main>
    )
}