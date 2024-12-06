import {CardType} from "../../types.tsx";
import {API_ADDR} from "../utils/consts.ts"
import {getSecureRequestOptions} from "../utils/requstsOptions.ts"

export const fetchPosts = async (): Promise<CardType[]> => {
  const response = await fetch(`${API_ADDR}posts`, getSecureRequestOptions);
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  return await response.json();
}

export const fetchPost = async (id: string): Promise<CardType> => {
  const response = await fetch(`${API_ADDR}posts/${id}`, getSecureRequestOptions);
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  return await response.json();
}

export const searchPosts = async (phrase: string): Promise<CardType[]> => {
  const response = await fetch(`${API_ADDR}posts/search/${phrase}`, getSecureRequestOptions);
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  return await response.json();

}

export const addPost = async (data: {title: string, description: string}): Promise<void> => {
  const response = await fetch(`${API_ADDR}posts/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("HTTP error " + response.status); // TODO error boundry?
  }
}

export const userPosts = async (): Promise<CardType[]> => {
    const response = await fetch(`${API_ADDR}posts/user`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}

export const isUserPost = async (id: string): Promise<boolean> => {
    const response = await fetch(`${API_ADDR}posts/user/${id}`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}