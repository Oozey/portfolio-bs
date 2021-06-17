import React, {useEffect, useState } from "react";
import sanityClient from "../client.js";
import NavBar from "./NavBar.js";

export default function Project (){
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
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
            projectType,
            link,
            tags,
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []
    );

    return(
        <main ClassName="bg-black min-h-screen p-4">
            <section className="container mx-auto p-5">
                <h1 className="text-5xl text-white flex justify-center pt-20">PROJECTS</h1>
                <NavBar />
                
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative lg shadow-xl bg-white p-6" >
                        <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="bg-cover w-auto" />
                        <h3 className="text-grey-800 text-3xl font-bold mb-2 hover:text-red-700 pt-2">
                            <a 
                        href={project.link}
                        alt={project.title}
                        target="_blank"
                        rel="noopener noreferrer">
                            {project.title}</a>
                            </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className ="font-bold">Finished on</strong>:{""} {new Date(project.date).toLocaleDateString()}
                            </span>
                        
                            <span>
                                <strong className="font-bold">Type</strong>:{""} {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400" >View the Project{""}<span></span></a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}