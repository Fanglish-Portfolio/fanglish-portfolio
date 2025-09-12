import api from "./axios";

export const getAllCategory = async (type) => {
  // console.log(type);
  try {
    const response = await api.get("/service-categories");
    // console.log(response.data.data);
    const filteredResponse = response.data.data.filter(
      (category) => category.serviceCategory === type
    );
    return filteredResponse;
  } catch (error) {
    console.log(error);
    return [];
  }
};
