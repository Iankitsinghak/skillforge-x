const API = import.meta.env.VITE_API_URL;

export const getMatchedJobs = async () => {
  const token = localStorage.getItem('token');

  const res = await fetch(`${API}/api/jobs/match`, {
    method: 'GET', // ADD THIS
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};


export const getStartupJobs = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API}/api/jobs/startups`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
export const getAllJobs = async () => {
  const res = await fetch(`${API}/api/jobs`);
  return res.json();
};
