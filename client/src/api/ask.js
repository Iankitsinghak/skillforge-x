const API = import.meta.env.VITE_API_URL;

export const askGemini = async (prompt) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API}/api/ask`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ prompt })
  });

  return res.json();
};
