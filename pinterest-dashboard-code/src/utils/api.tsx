// All API calls go through here.
// "proxy": "http://localhost:5050" in package.json handles the prefix.

const API = {
  async get(path) {
    const res = await fetch(path, { credentials: "include" });
    if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);
    return res.json();
  },

  async post(path, body) {
    const res = await fetch(path, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);
    return res.json();
  },

  async delete(path) {
    const res = await fetch(path, { method: "DELETE", credentials: "include" });
    if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);
    return res.json();
  },

  // Auth
  authStatus: () => API.get("/auth/status"),
  logout: () => API.post("/auth/logout", {}),

  // User
  getUser: () => API.get("/api/user"),

  // Boards & Pins
  getBoards: () => API.get("/api/boards"),
  getBoardPins: (boardId) => API.get(`/api/boards/${boardId}/pins`),
  getPins: () => API.get("/api/pins"),
  createPin: (data) => API.post("/api/pins", data),
  deletePin: (pinId) => API.delete(`/api/pins/${pinId}`),

  // Analytics
  getUserAnalytics: (startDate, endDate) =>
    API.get(
      `/api/analytics/user?start_date=${startDate}&end_date=${endDate}`
    ),
  getPinAnalytics: (startDate, endDate) =>
    API.get(
      `/api/analytics/pins?start_date=${startDate}&end_date=${endDate}`
    ),
  getAudienceAnalytics: () => API.get("/api/analytics/audience"),
};

export default API;
