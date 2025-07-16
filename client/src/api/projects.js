const API = import.meta.env.VITE_API_URL;

export const getMatchedProjects = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API}/api/projects/match`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
