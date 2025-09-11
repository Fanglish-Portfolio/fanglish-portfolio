import api from "../axios";

export const getACategory = async (id) => {
  try {
    const response = await api.get(`/service-categories/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
