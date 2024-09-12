import api, { API_URL } from "./api";

const dealsService = {
  getAll: async () => {
    const url = `${API_URL}/deals/`;
    try {
      const response = await api.fetch(url);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail);
      }
      return data;
    } catch (error) {
      // console.error(error);
      throw error;
    }
  },
  get: async (id: string) => {
    const url = `${API_URL}/deals/${id}/`;
    try {
      const response = await api.fetch(url);
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

export default dealsService;
