import { api } from "../config/network";

export const register = async (data) => {
  const res = await api("/api/auth/register", "post", data);
  return res;
};
