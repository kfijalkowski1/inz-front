import {useEffect, useState} from "react";
import {fetchPosts, searchPosts} from "./fetches.ts";
import toastHelper from "../utils/toastHelper.tsx";
import {CardType} from "../../types.tsx";
import CardGallery from "../utils/CardGallery.tsx";
import SubpageHeader from "../utils/SubpageHeader.tsx";
import PostsButtons from "./PostsButtons.tsx";
import {SearchBar} from "../utils/SearchBar.tsx";


export function Posts() {
  const [posts, setPosts] = useState<CardType[]>([]);

  async function searchSubmit(phrase: string): Promise<void> {
    try {
      setPosts(await searchPosts(phrase));
    } catch (error) {
      toastHelper.error("Nie udało się wyszukać ogłoszeń. Spróbuj ponownie.");
    }

  }

  useEffect(() => {
    fetchPosts().then(data => setPosts(data)).catch((_) => {
      toastHelper.error('Wystąpił błąd :(. Spróbuj jeszcze raz')
    });
  }, []);

  return (
    <>
      <SubpageHeader name="Ogłoszenia" />
      <SearchBar onSearch={searchSubmit} placeholder={"Wyszukaj ogłoszenia"} />
      <PostsButtons />
      <CardGallery cardsInfo={posts} />
    </>

  );
}

export default Posts;