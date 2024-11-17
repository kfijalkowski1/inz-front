"use client";

import {Button, Label, Textarea, TextInput} from "flowbite-react";
import { useState } from "react";
import toastHelper from "../../utils/toastHelper";
import { addPost } from "../fetches"; // Ensure the correct path to `addPost`

export default function AddPost(): JSX.Element {
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");

  async function handleSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault(); // Prevent default form submission
    try {
      const data = {
        title: postTitle,
        description: postText,
      };
      await addPost(data);
      toastHelper.success("Post dodany pomyślnie!");

      // Clear inputs
      setPostTitle("");
      setPostText("");
    } catch (error) {
      // Show error toast
      toastHelper.error("Wystąpił błąd :(. Spróbuj jeszcze raz");
    }
  }

  return (
    <form className="flex flex-col gap-4 m-8 md:mx-32" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="PostTitle" value="Tytuł ogłoszenia" />
        </div>
        <TextInput
          id="PostTitle"
          type="text"
          placeholder="Wpisz tytuł..."
          required
          shadow
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)} // Update state
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="PostText" value="Treść ogłoszenia" />
        </div>
        <Textarea
          rows={9}
          id="PostText"
          placeholder="Wpisz treść..."
          required
          shadow
          value={postText}
          onChange={(e) => setPostText(e.target.value)} // Update state
        />
      </div>
      <Button size="lg" outline gradientDuoTone="greenToBlue" type="submit">
        Dodaj ogłoszenie
      </Button>
    </form>
  );
}
