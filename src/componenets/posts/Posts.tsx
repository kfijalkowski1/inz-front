import {useEffect, useState} from "react";
import {fetchPosts} from "./fetches.ts";
import toastHelper from "../utils/toastHelper.tsx";
import {CardType} from "../../types.tsx";
import CardGallery from "../utils/CardGallery.tsx";


export function Posts() {
  const [posts, setPosts] = useState<CardType[]>([]);

  useEffect(() => {
    fetchPosts().then(data => setPosts(data)).catch((_) => {
      toastHelper.error('Wystąpił błąd :(. Spróbuj jeszcze raz')
    });
  }, []);

  return (
    <>
      <h1 className="m-8 text-2xl align-middle flex-auto ">Ogłoszenia</h1>
      <CardGallery cardsInfo={posts} />
    </>

  );
}

export default Posts;