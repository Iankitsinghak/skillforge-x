import React, { useEffect, useState } from "react";
import API from "../utils/api"; // ✅ USE THIS INSTEAD

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get("/users/profile/singhankit200000")
      .then((res) => setProfile(res.data))
      .catch((err) => {
        console.error("Failed to fetch profile:", err);
        setError("Failed to load profile.");
      });
  }, []);

  if (error) return <div className="text-red-400 p-6">{error}</div>;
  if (!profile) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">👤 Profile</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src="/assets/dev-avatar.png"
          alt="User Avatar"
          className="w-32 h-32 rounded-full object-cover border-4 border-purple-600"
        />
        <div>
          <h2 className="text-2xl font-semibold">{profile.username}</h2>
          <p className="text-gray-400">Full Stack Developer | Open Source Lover</p>
          <div className="mt-4">
            <p className="text-sm text-gray-400 mb-1">
              Level: <span className="text-white font-bold">{profile.level}</span>
            </p>
            <p className="text-sm text-gray-400 mb-1">
              XP: <span className="text-white font-bold">{profile.xp}</span>
            </p>
            <p className="text-sm text-gray-400">
              Joined: <span className="text-white">{profile.joined}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
