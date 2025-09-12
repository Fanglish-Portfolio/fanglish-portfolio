import api from "./axios";

export const getStudyAbroad = async () => {
  try {
    const response = await api.get("/study-abroad");
    return response.data;
  } catch (error) {
    console.error("Error fetching study abroad data:", error);
    throw error;
  }
};
