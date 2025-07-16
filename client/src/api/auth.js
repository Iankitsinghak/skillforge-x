const API = import.meta.env.VITE_API_URL;

export const signupUser = async (userData) => {
  const res = await fetch(`${API}/api/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const loginUser = async (userData) => {
  const res = await fetch(`${API}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return res.json();
};
export const getProfile = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API}/api/user/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
