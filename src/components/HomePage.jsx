import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faGlobe, faTree } from "@fortawesome/free-solid-svg-icons";
import "./css/HomePage.css";
import Carousel from "./Carousel"
import Divider from "./Divider";




const HomePage = () => {
    return (
        <>
        <div className="relative flex flex-col items-center justify-center h-[75vh] text-center p-6 overflow-hidden">
            <FontAwesomeIcon
                icon={faLeaf}
                className="absolute text-green-500 wobble fa-leaf"
            />
            <FontAwesomeIcon
                icon={faGlobe}
                className="absolute text-green-500 wobble fa-globe"
            />
            <FontAwesomeIcon
                icon={faTree}
                className="absolute text-green-500 wobble fa-tree"
            />

            {/* Main Content */}
            <h1 className="text-4xl md:text-6xl font-bold text-green-800">Green Pulse</h1>
            <h2 className="text-xl md:text-2xl text-green-600 mt-2 italic">"Powering a Sustainable Tomorrow"</h2>
            <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
                Your One Stop Solution for Everything Related to Climate Change
            </p>
            <button className="mt-6 bg-green-500 px-6 py-3 text-lg text-white rounded-lg hover:bg-green-600 transition">
                Learn More
            </button>
        </div>

        <Carousel />
        <NewsAndEvents />
        <Divider/>
        <UrgentAttention />
        </>
        
    );
};


const NewsAndEvents= () =>{
    return(
        <>
        <section className="mb-10 w-[80%] m-auto mt-20 text-white">
          <h2 className="text-3xl font-semibold text-beige mb-4 text-black">Hot News</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2,].map((item) => (
              <div key={item} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-cornsilk">News Title {item}</h3>
                <p className="text-buff mt-2">Brief description of the news article. This section will be dynamic.</p>
                <button className="mt-4 px-4 py-2 bg-tea-green text-gray-400 rounded-md font-semibold hover:bg-green-400 transition">
                  Read More
                </button>
              </div>
            ))}
          </div>
          <button className="border mt-4 px-4 py-2  text-black rounded-md font-semibold transition">Check more</button>
        </section>

        <section className="mb-10 w-[80%] m-auto mt-10 text-white">
          <h2 className="text-3xl font-semibold text-beige mb-4 text-black">Ongoing Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2,].map((item) => (
              <div key={item} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-cornsilk">Event Title {item}</h3>
                <p className="text-buff mt-2">Brief description of the Event. This section will be dynamic.</p>
                <button className="mt-4 px-4 py-2 bg-tea-green text-gray-400 rounded-md font-semibold hover:bg-green-400 transition">
                  Read More
                </button>
              </div>
            ))}
          </div>
          <button className="border mt-4 px-4 py-2  text-black rounded-md font-semibold transition">Check more</button>
        </section>
        </>
    );
}


const UrgentAttention=()=>{
    return(
        <>
            <div className="mb-10 w-[80%] m-auto mt-10">
                <h1 className="text-2xl font-semibold">Urgent Help needed!</h1>
              <div className="grid md:grid-cols-2 gap-6 mt-5">
                {[1, 2,].map((item) => (
                <div key={item} className=" p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-cornsilk">Telengana Forest Cut Down</h3>
                <p className="text-buff mt-2">The government is corrupted to its core.</p>
                <button className="mt-4 px-4 py-2 bg-tea-green rounded-md font-semibold hover:bg-green-400 transition">
                  Read More
                </button>
                </div>
            ))}
          </div>
            </div>
        </>
    );
}
export default HomePage;