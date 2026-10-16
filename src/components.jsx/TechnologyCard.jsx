
import React from 'react';
import { toast } from 'react-hot-toast';

const TechnologyCard = ({ issue,completedStacks,setCompletedStack }) => {
  
  const handleCompletedStack=()=>{
    setCompletedStack([...completedStacks, issue]);
    toast.success("Issu Resolved")
  }
  return (
    <div
    onClick={handleCompletedStack}
    className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

      {/* Icon and Badge */}
      <div className="flex items-center justify-between">
        <img
          src={issue.icon}
          alt={issue.name}
          className="h-10 w-10"
        />

        <span className="rounded-full bg-sky-50 px-3 py-1 text-sm text-sky-500">
          {issue.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-6 text-xl font-bold text-gray-900">
        {issue.name}
      </h2>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-gray-500">
        {issue.description}
      </p>

      {/* Divider */}
      <hr className="my-4 border-gray-100" />

      {/* Category, Difficulty and Rating */}
      <div className="flex items-center justify-between gap-2 text-xs">

        <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
          {issue.category}
        </span>

        <span className="text-gray-500">
          {issue.difficulty}
        </span>

        <span className="font-semibold text-gray-700">
          <span className="text-yellow-400">★</span> {issue.rating}
        </span>

      </div>

      {/* Button */}
      <button className="mt-5 w-full rounded-lg bg-gray-950 py-3 text-sm text-white hover:bg-gray-700">
        Add to Stack
      </button>

    </div>
  );
};

export default TechnologyCard;