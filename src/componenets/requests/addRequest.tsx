import {Button, Label, Textarea, TextInput} from "flowbite-react";
import { useState } from "react";
import toastHelper from "../utils/toastHelper";
import {useNavigate} from "react-router-dom";
import {addRequest} from "./fetches.ts"; // Ensure the correct path to `addPost`

export default function AddRequest() {
    const [requestTitle, setRequestTitle] = useState("");
    const [requestText, setRequestText] = useState("");
    let navigate = useNavigate();

    async function handleSubmit(event: React.FormEvent): Promise<void> {
        event.preventDefault(); // Prevent default form submission
        try {
            await addRequest(requestTitle, requestText);
            toastHelper.success("Zgłoszenie dodany pomyślnie!");

            // Clear inputs
            setRequestTitle("");
            setRequestText("");
            navigate("/requests");
        } catch (error) {
            // Show error toast
            toastHelper.error("Wystąpił błąd :(. Spróbuj jeszcze raz");
        }
    }

    return (
    <form className="flex flex-col gap-4 m-8 md:mx-32" onSubmit={handleSubmit}>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="RequestTitle" value="Tytuł zgłoszenia" />
            </div>
            <TextInput
                id="RequestTitle"
                type="text"
                placeholder="Wpisz tytuł..."
                required
                shadow
                value={requestTitle}
                onChange={(e) => setRequestTitle(e.target.value)} // Update state
            />
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="RequestText" value="Treść zgłoszenia" />
            </div>
                <Textarea
                    rows={9}
                    id="RequestText"
                    placeholder="Wpisz treść..."
                    required
                    shadow
                    value={requestText}
                    onChange={(e) => setRequestText(e.target.value)} // Update state
                />
            </div>
        <Button size="lg" outline gradientDuoTone="greenToBlue" type="submit">
            Dodaj zgłoszenie
        </Button>
    </form>
);
}
