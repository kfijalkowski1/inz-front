import {Button, Label, Textarea, TextInput} from "flowbite-react";
import {useEffect, useState} from "react";
import toastHelper from "../utils/toastHelper";
import {editPost, fetchPost} from "./fetches.ts";
import {useNavigate, useParams} from "react-router-dom";
import {CardType} from "../../types.tsx";

export default function EditPost(): JSX.Element {
    const {postId} = useParams<{ postId: string }>();
    const [postTitle, setPostTitle] = useState("");
    const [postText, setPostText] = useState("");
    let navigate = useNavigate();

    async function handleSubmit(event: React.FormEvent): Promise<void> {
        event.preventDefault(); // Prevent default form submission
        try {
            const data = {
                title: postTitle,
                description: postText,
            };
            await editPost(postId!, data);
            toastHelper.success("Post zmieniony pomyślnie!");

            // Clear inputs
            setPostTitle("");
            setPostText("");
            navigate("/posts");
        } catch (error) {
            // Show error toast
            toastHelper.error("Wystąpił błąd :(. Spróbuj jeszcze raz");
        }
    }

    useEffect(() => {
        fetchPost(postId!).then((data: CardType) => {
            setPostTitle(data.title);
            setPostText(data.description);
        }).catch((_: any) => {
            toastHelper.error('Wystąpił błąd :(. Spróbuj jeszcze raz')
        });
    }, [postId]);

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
                Edytuj ogłoszenie
            </Button>
        </form>
    );
}
