import api from "./axios";

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post("/form-data", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
