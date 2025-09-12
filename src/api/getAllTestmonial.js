import api from "./axios";

export const getAllTestmonial = async (t) => {
  // console.log(type);
  try {
    const response = await api.get("/testimonials");

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
