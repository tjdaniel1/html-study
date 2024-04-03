//api/auth.js

import { api } from "../config/network";

export const register = async (data) => {
  const res = await api("/api/auth/register", "post", data);

  return res;
};

export const login = async (data) => {
  const res = await api("/api/auth/login", "post", data);

  return res;
};
