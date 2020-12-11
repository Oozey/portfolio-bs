import React from "react";
import image from "../images/meportfolio.png";

export default function Home() {
    return (
        <main className="bg-black">
            <section className="m-0 w-full h-full overflow-hidden justify center h-48 flex flex-wrap content-center">
                <h1 className="absolute text-white text-1xl font-bold flex items-center justify-center h-screen">BART SCHOLTEN</h1>
                <div className="relative float-right"> 
                    <img src={image} alt="Me" className="float-right w-2/5 top-0 left-0 mt-20 content-center"/>
                </div>
                </section>
        </main>
    )
}