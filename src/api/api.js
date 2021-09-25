import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const request = {
  get: {
    users: () => {
      return api.get("/users");
    },
    userDetail: (id) => {
      return api.get(`/users/${id}`);
    },
    userPost: (id) => {
      return api.get(`/users/${id}/posts`);
    },
    userAlbum: (id) => {
      return api.get(`/users/${id}/albums`);
    },
    posts: () => {
      return api.get("/posts");
    },
    postDetail: (id) => {
      return api.get(`/posts/${id}`);
    },
    postComments: (id) => {
      return api.get(`/posts/${id}/comments`);
    },
    albumPhotos: (id) => {
      return api.get(`/albums/${id}/photos`);
    },
    album: (id) => {
      return api.get(`/albums/${id}`);
    },
    photo: (id) => {
      return api.get(`/photos/${id}`);
    },
    photoComments: (id) => {
      return api.get(`/photos/${id}/comments`);
    },
  },
  post: {
    post: (data) => {
      return api.post(`/posts`, data);
    },
  },
  put: {
    postComment: (id, data) => {
      return api.put(`/posts/${id}`, data);
    },
  },
  patch: {
    editPost: (id, data) => {
      return api.patch(`/posts/${id}`, data);
    },
    editComment: (id, data) => {
      return api.patch(`/posts/${id}`, data);
    },
  },
  delete: {
    deletePost: (id) => {
      return api.delete(`/posts/${id}`);
    },
    deleteComment: (id) => {
      return api.delete(`/comments/${id}`);
    },
  },
};
