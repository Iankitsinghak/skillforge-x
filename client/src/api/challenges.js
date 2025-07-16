const API = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('token');

export const getChallenges = async () => {
  const res = await fetch(`${API}/api/challenges`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const getChallengeById = async (id) => {
  const res = await fetch(`${API}/api/challenges/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const submitChallenge = async (id, link) => {
  const res = await fetch(`${API}/api/challenges/${id}/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ link }),
  });
  return res.json();
};
