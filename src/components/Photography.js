import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import NavBar from "./NavBar.js";

export default function Photography() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
            sanityClient
                .fetch(`*[_type == "post"]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    },
                    
                }`)
                .then((data) => setPost(data))
                .catch(console.error)
    }, []);


    return (
        <main className="bg-black min-h-screen p-4">
            <section className="container mx-auto p-4">
                <h1 className="text-5xl text-white flex justify-center pt-20">PHOTOGRAPHY</h1>
                <NavBar />
                <div className="grid grid-cols-4 gap-3">
                   {postData && postData.map((post, index) => (<article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <span className="block h-64 relative shadow leading-snug bg-black m-2" key={index}>
                                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute" />
                                <span className="block relative h-full flex justify-center items-end pb-4">
                                    <h3 className="text-grey-800 text-lg font-bold px-3 py-4 bg-black text-white bg-opacity-75">{post.title}</h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                    ))}
                    
                </div>
            </section>
        </main>
    )
}