
import React from "react";

const ProfileCard = ({ name, offeredSkills, wantedSkills, rating }) => {

  const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);     // e.g., 4
  const hasHalfStar = rating % 1 >= 0.5;     // e.g., 0.5
  const totalStars = 5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span className="text-amber-400 text-xl" key={i}>★</span>); // filled star
  }

  if (hasHalfStar) {
    stars.push(<span className="text-amber-400" key="half">☆</span>); // half or outlined star
  }

  while (stars.length < totalStars) {
    stars.push(<span key={`empty-${stars.length}`}>☆</span>); // empty star
  }

  return stars;
};

const addInitials=()=>{
  const nameparts=name.split(" ");
  if (nameparts.length === 1) {
    return nameparts[0].charAt(0).toUpperCase();
  } else {
    return nameparts[0].charAt(0).toUpperCase() + nameparts[1].charAt(0).toUpperCase();
  }
}

  return (
    <div className="profile-card bg-black/50 backdrop-blur-xl border border-white/30 rounded mx-5 p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-blue-600/20 transition">
      <div className="profile-avatar w-40 h-40 rounded-full bg-gradient-to-br from-blue-700 to-blue-950 text-white flex items-center justify-center text-4xl font-bold shadow-md">
        {addInitials()}
      </div>

      <div className="profile-info flex-1">
        <h3 className="profile-name text-2xl font-bold text-white/95 mb-4">{name}</h3>

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
          <span>{renderStars(rating.value)}/5</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;