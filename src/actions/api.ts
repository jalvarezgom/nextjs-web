import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";

const api = {
  fetch: async (url: string, options: RequestInit = {}): Promise<Response> => {
    const access_token = await api.get_access_token();
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
    const session = await getServerSession(authOptions);
    return session?.access_token;
  },
};

export default api;
