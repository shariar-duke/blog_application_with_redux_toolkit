import axiosInstance from "../../utils/axios.js";

export const getBlogs = async () => {
  const response = await axiosInstance.get("/blogs");
  return response.data;
};
