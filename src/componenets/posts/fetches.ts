import {CardType} from "../../types.tsx";
import {API_ADDR} from "../utils/consts.ts"

export const fetchPosts = async (): Promise<CardType[]> => {
  const response = await fetch(`${API_ADDR}posts`);
  if (!response.ok) {
    throw new Error("HTTP error " + response.status); // TODO error boundry?
  }
  return await response.json();
}

export const addPost = async (data: {title: string, description: string}): Promise<void> => {
  const response = await fetch(`${API_ADDR}posts/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("HTTP error " + response.status); // TODO error boundry?
  }
}