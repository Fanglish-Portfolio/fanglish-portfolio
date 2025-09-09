import api from "../axios";

export const getAllbanner = async () => {
  try {
    const response = await api.get("/banners");
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
