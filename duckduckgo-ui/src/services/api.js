import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchSearchResults = async (query) => {
  try {
    const response = await api.get("/search", {
      params: {
        query,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching search results: ${error.message}`);
    throw new Error("Failed to fetch search results.");
  }
};

export const fetchQueryHistory = async () => {
  try {
    const response = await api.post("/search");
    return response.data;
  } catch (error) {
    console.error(`Error fetching query history: ${error.message}`);
    throw new Error("Failed to fetch query history.");
  }
};
