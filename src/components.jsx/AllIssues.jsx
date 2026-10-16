import React from 'react';
import TechnologyCard from './TechnologyCard';

const AllIssues = ({allIssues,completedStacks,setCompletedStack}) => {
    // console.log(allIssues);
    return (
         <div className="grid grid-cols-12 gap-4 container mx-auto ">
            <div className="col-span-9 container mx-auto">
                <h2 className=" font-bold text-2xl">Explore the <span className="text-2xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Technologies</span></h2>
                <p>Pick one technology per category to build your ideal stack</p>
                <div className="grid gril-cols-1 md:grid-cols-3 gap-4">
                    {
                        allIssues.map((issue) =>(
                            <TechnologyCard key={issue.id}
                            setCompletedStacks={setCompletedStack}
                            issue={issue} />
                        ))}
                </div>
                </div>
            <div className=" col-span-12 md:col-span-3">
                <h2 className="font-black text-2xl mb-4">Your Stack</h2>
                
                <button className= " px-2 rounded-2xl cursor-pointer border bg-white text-pink-800">Remove All</button>
                </div>
         </div>
    );
};

export default AllIssues; 