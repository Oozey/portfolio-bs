import React, {useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Projects (){
    const [projectsData, setProjectsData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "projects"]{
            title,
            date,
            mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    },
            description,
            projectsType,
            link,
            tags,
        }`)
        .then((data) => setProjectsData(data))
        .catch(console.error);
    }, []
    );

    return (
        <main ClassName="bg-black-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Mijn Projecten</h1>
                <h2 className="text-lg text-white-600 flex justify-center mb-12">Welkom op mijn project pagina</h2>
                <section className="grid grid-cols-2 gap-8">
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-grey-800 text-3xl font-bold mb-2 hover:text-blue-700">
                            <a 
                        href={Projects.link}
                        alt={Projects.title}
                        target="_blank"
                        rel="noopener noreferrer">
                            {Projects.title}</a>
                            </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className ="font-bold">Finished on</strong>:{""} {new Date(Projects.date).toLocaleDateString()}
                            </span>
                        
                            <span>
                                <strong className="font-bold">Type</strong>:{""} {Projects.projectsType}
                            </span>
                            <p></p>
                            <span></span>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}