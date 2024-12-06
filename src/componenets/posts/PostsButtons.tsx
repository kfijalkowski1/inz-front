"use client";

import {useNavigate} from "react-router-dom";
import MyCallButton from "../utils/MyCallButton.tsx";

export function PostsButtons() {
  const navigate = useNavigate();
  function handleSubmit() {
    return navigate("/posts/add");
  }

  return (
    <div className="flex justify-center gap-4 m-8">
      <MyCallButton onClick={handleSubmit} text={"Dodaj ogłoszenie"}/>
    </div>
    )
}

export default PostsButtons;