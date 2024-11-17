import {useEffect, useState} from "react";
import {fetchPosts} from "./fetches.ts";
import toastHelper from "../utils/toastHelper.tsx";
import {CardType} from "../../types.tsx";
import CardGallery from "../utils/CardGallery.tsx";
import SubpageHeader from "../utils/SubpageHeader.tsx";
import PostsButtons from "./PostsButtons.tsx";


export function Posts() {
  const [posts, setPosts] = useState<CardType[]>([]);

  useEffect(() => {
    fetchPosts().then(data => setPosts(data)).catch((_) => {
      toastHelper.error('Wystąpił błąd :(. Spróbuj jeszcze raz')
    });
  }, []);

  return (
    <>
      <SubpageHeader name="Ogłoszenia" />
      <PostsButtons />
      <CardGallery cardsInfo={posts} />
    </>

  );
}

export default Posts;