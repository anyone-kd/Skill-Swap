// ProfileCard.jsx
import React from "react";

const ProfileCard = ({ name, initials, offeredSkills, wantedSkills, rating }) => {
  return (
    <div className="profile-card bg-white/95 backdrop-blur-xl border border-white/30 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-blue-600/20 transition">
      <div className="profile-avatar w-20 h-20 rounded-full bg-gradient-to-br from-blue-700 to-blue-950 text-white flex items-center justify-center text-2xl font-bold shadow-md">
        {initials}
      </div>

      <div className="profile-info flex-1">
        <h3 className="profile-name text-2xl font-bold text-blue-950 mb-4">{name}</h3>

        <div className="skills-section mb-3">
          <div className="skills-label text-sm font-semibold text-emerald-500 mb-2">Skills Offered</div>
          <div className="skills-tags flex gap-2 flex-wrap">
            {offeredSkills.map((skill, i) => (
              <span
                key={i}
                className="skill-tag offered text-emerald-500 border border-emerald-300 bg-emerald-100/10 text-sm font-medium px-4 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <div className="skills-label text-sm font-semibold text-amber-500 mb-2">Skills Wanted</div>
          <div className="skills-tags flex gap-2 flex-wrap">
            {wantedSkills.map((skill, i) => (
              <span
                key={i}
                className="skill-tag wanted text-amber-500 border border-amber-300 bg-amber-100/10 text-sm font-medium px-4 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-actions flex flex-col items-center md:items-end gap-4">
        <button className="request-btn bg-gradient-to-br from-purple-500 to-purple-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:-translate-y-1 transition">
          Send Request
        </button>
        <div className="rating text-sm text-slate-300 flex items-center gap-2">
          <span className="stars text-amber-400 text-base">{rating.stars}</span>
          <span>{rating.value}/5</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;