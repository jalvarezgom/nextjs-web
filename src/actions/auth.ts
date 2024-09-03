import api from "./api";

const API_URL = process.env.API_URL || "http://localhost:3000";

const authService = {
  me: async (access_token: string) => {
    const url = `${API_URL}/auth/me/`;
    try {
      const response = await api.fetch(url, {
        headers: { Authorization: `Token ${access_token}` },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail);
      }
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  login: async (username: string, password: string) => {
    const url = `${API_URL}/auth/login/`;
    try {
      const response = await api.fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail);
      }
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  logout: async () => {
    const url = `${API_URL}/auth/logout/`;
    try {
      const response = await api.fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail);
      }
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default authService;
