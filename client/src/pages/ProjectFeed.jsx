import { useEffect, useState } from 'react';
import { getMatchedProjects } from '../api/projects';

const ProjectFeed = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMatchedProjects();
      setProjects(data || []);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">🔥 Matched Projects For You</h2>

      {projects.length === 0 ? (
        <p className="text-gray-400">No matching projects found for your skills.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-purple-800 transition">
              <h3 className="text-xl font-bold text-purple-400">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{project.description}</p>
              <p className="mt-2 text-sm text-white">
                🔧 Skills: {project.skillsRequired.join(', ')}
              </p>
              <p className="mt-1 text-sm text-gray-500">👤 Created By: {project.createdBy}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectFeed;
