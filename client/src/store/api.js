import {
  mockPost,
  mockGroup,
  mock3DPrinting,
  mockArtificial,
  mockTechNews,
  mockProgramming,
  mockUser,
} from "./mocks";

import axios from "axios";
const apiUrl = {
  getPosts: "https://66b0f7e16a693a95b53ad5a2.mockapi.io/Post",
  getComment: "https://66b0f7e16a693a95b53ad5a2.mockapi.io",
  getPostDetail: (id) => `https://jsonplaceholder.typicode.com/posts/${id}`,
  getGroup: "https://example.com/comments",
};

export const getPost = async () => {
  const posts = await axios.get(apiUrl.getPosts);
  return posts.data;
};

export const addPost = async (post) => {
  const response = await axios.post(apiUrl.getPosts, post);
  return response.data;
};

export const deletePost = async (id) => {
  await axios.delete(`${apiUrl.getPosts}/${id}`);
};

export const addComment = (newComment) => {
  return axios.post(`${apiUrl.getComment}/comments`, newComment);
};

export const getComments = () => {
  return axios.get(`${apiUrl.getComment}/comments`);
};

export const deleteComment = async (commentId) => {
  return axios.delete(`${apiUrl.getComment}/comments/${commentId}`);
};

export const getUserId = async () => {
  return mockUser;
};

export const getThreePrinting = async () => {
  return mock3DPrinting;
};

export const getArtificial = async () => {
  return mockArtificial;
};

export const getProgramming = async () => {
  return mockProgramming;
};

export const getTechNews = async () => {
  return mockTechNews;
};

export const getGroup = async () => {
  return mockGroup;
};

export const getPostDetailAPI = async (userId) => {
  const postdetail = mockPost.find((p) => p.id === Number(userId));
  //Tại sao cần chuyển đổi postId thành số?:
  // Nếu id được lấy từ URL hoặc nguồn chuỗi khác, nó ban đầu là chuỗi.http://localhost:5173/fren/1 => trong code post.id nó lấy được id = nhưng chạy data nó ko trùng với mockpost là id = 1
  // Các id trong dữ liệu mockPost là số, vì vậy bạn cần chuyển đổi postId từ chuỗi thành số để so sánh chính xác.
  console.log("ID tìm kiếm:", userId);
  if (!postdetail) {
    throw new Error("Post not found");
  }
  console.log(postdetail);
  return postdetail;
};
export default apiUrl;
