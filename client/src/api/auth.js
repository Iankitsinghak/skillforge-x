const API = import.meta.env.VITE_API_URL;

export const signupUser = async (userData) => {
  try {
    const res = await fetch(`${API}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return await res.json();
  } catch (err) {
    console.error('Signup error:', err);
    return { msg: 'Signup request failed' };
  }
};

export const loginUser = async (userData) => {
  try {
    const res = await fetch(`${API}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return await res.json();
  } catch (err) {
    console.error('Login error:', err);
    return { msg: 'Login request failed' };
  }
};

export const getProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API}/api/user/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await res.json();
  } catch (err) {
    console.error('Get profile error:', err);
    return { msg: 'Profile fetch failed' };
  }
};
