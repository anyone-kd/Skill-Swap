import React from "react";
import ProfileCard from "./ProfileCard.jsx";

export default function Navbar() {
  return (
    <div>
      <header className="flex flex-col md:flex-row justify-between items-center bg-black/90 backdrop-blur p-4 md:p-6 mb-8  shadow-lg">
        <div className="text-2xl font-bold text-white">SkillSwap</div>

        <div className="flex items-center gap-4 flex-1 max-w-xl my-4 md:my-0 md:mx-10">
          <select className="bg-white/90 border border-blue-600/20 rounded px-4 py-3 text-sm font-medium text-slate-800 hover:border-blue-700 hover:bg-white shadow-md transition-all">
            <option>All Availability</option>
            <option>Available Now</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>

          <input
            type="text"
            name="search"
            aria-label="Search"
            placeholder="Search skills, people, or topics..."
            className="flex-1 px-5 py-3 rounded text-sm font-medium border-2 border-blue-600/20 bg-white/90 text-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200"
          />

          <button className="bg-blue-700 text-white px-6 py-3 rounded font-semibold text-sm shadow-lg hover:bg-white hover:text-blue-700 transition-all">
            Search
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white px-5 py-2 rounded font-semibold text-sm hover:bg-gray-700 transition-all cursor-pointer">
            Log In
          </button>

          <button className="text-black bg-white border-2 border-white px-5 py-2 rounded font-semibold text-sm mt-4 md:mt-0 cursor-pointer">
            Sign Up
          </button>
        </div>
      </header>
      <ProfileCard
        name="Riya Trivedi"
        offeredSkills={["React", "Node.js", "Design"]}
        wantedSkills={["Machine Learning", "DevOps"]}
        rating={{ value: 3.5 }}
      />
    </div>
  );
}
