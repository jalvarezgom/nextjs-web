import api, { API_URL } from "./api";


const counterpartiesService = {
  get_all: async () => {
    const url = `${API_URL}/deals/counterparties/`;
    try {
      const response = await api.fetch(url);
      console.log('url', url);
      console.log('response', response);
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
  get: async (id: number) => {
    const url = `${API_URL}/deals/counterparties/${id}/`;
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
  }
}

export default counterpartiesService;