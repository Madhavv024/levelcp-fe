// utils/api.js
import { useAuth } from "../context/AuthContext";

export const useApi = () => {
  const { accessToken, updateAccessToken } = useAuth(); // ✅ called inside hook
  const request = async (url, options = {}) => {
    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {}),
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    };

    let res = await fetch(url, { ...options, headers, credentials: "include" });

    if (res.status === 401) {
      const refreshRes = await fetch("/api/token/refresh", {
        method: "POST",
        credentials: "include",
      });

      if (!refreshRes.ok) throw new Error("Session expired. Please login again.");

      const data = await refreshRes.json();
      updateAccessToken(data.accessToken);

      headers["Authorization"] = `Bearer ${data.accessToken}`;
      res = await fetch(url, { ...options, headers, credentials: "include" });
    }

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message || "API request failed");
    return data;
  };

  return { request };
};
