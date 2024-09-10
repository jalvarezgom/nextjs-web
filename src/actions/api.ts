import { getSession } from "./session";

const api = {
  fetch: async (url: string, options: RequestInit = {}): Promise<Response> => {
    console.log('url', url);
    const access_token = await api.get_access_token();
    console.log('access_token', access_token);
    if (access_token) {
      options.headers = {
        ...options.headers,
        Authorization: `Token ${access_token}`,
      };
    }
    const response = await fetch(url, options);
    return response;
  },
  get_access_token: async () => {
    return getSession();
  },
};

export default api;
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

