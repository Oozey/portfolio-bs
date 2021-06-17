import React, { useEffect, useState} from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import NavBar from "./NavBar.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}


export default function About() {

    const [author, setAuthor] = useState(null);

    useEffect(() =>{
        sanityClient.fetch(
            `*[_type == "author"]{
                name, 
                bio,
                "authorImage": image.asset->url
            }`
            )
            .then((data) =>setAuthor(data[0]))
            .catch(console.error);

    }, []);

    if (!author) return <div>Loading...</div>



    return (
        <main className="bg-black min-h-screen p-4">
            <section className="container mx-auto p-4">
                <h1 className="text-5xl text-white flex justify-center pt-20">About me</h1>
                <NavBar />
            <div className="p-10 lg:pt48 container mx-auto relative">
                <section className="bg-black-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-4xl text-white mb-4">
                            Hi, I'm {" "}
                            <span className="text-white-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="jeq0og7x" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
            </section>
        </main>

    )
}