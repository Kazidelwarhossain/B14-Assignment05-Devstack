import React from 'react';

const Banner = () => {
    return (
        <div className="flex justify-between p-8 container mx-auto">
            <div>
                <h2 className="font-bold text-4xl">Build Your Ideal</h2>
                <h2 className="text-5xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                    Development Stack</h2>
                <p>Explore frontend backend database and tooling options, compare them side by side and put together the stack that first your next project.</p>
                <div className=" flex gap-2 p-4">
                     <button className= " px-2 rounded-2xl cursor-pointer bg-pink-500 text-white">Explore Technologies</button>
                <button className="px-2 border rounded-2xl cursor-pointer">Learn More</button>
                </div>
               
            </div>
            <div>
                 <img src="./assets/banner-stack.png" />
            </div>
        </div>
    );
};

export default Banner;