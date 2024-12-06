import SingleCard from "../utils/SingleCard.tsx";
import {CardType} from "../../types.tsx";
import {useEffect, useState} from "react";
import toastHelper from "../utils/toastHelper.tsx";
import {fetchPost} from "./fetches.ts";
import {useNavigate, useParams} from "react-router-dom";
import { Spinner } from "flowbite-react";
import {getUserId} from "../register_login/handle_cred.ts";
import MyCallButton from "../utils/MyCallButton.tsx";

export default function Post() {
    const {postId} = useParams<{ postId: string }>();
    const [cardData, setCardData] = useState<CardType>();
    const [userId, setUserId] = useState<string>();
    const navigate = useNavigate();

    const goToEdit = () => {
        return navigate(`/posts/${postId}/edit`);
    }

    useEffect(() => {
        fetchPost(postId!).then(data => setCardData(data)).catch((_) => {
            toastHelper.error('Wystąpił błąd :(. Spróbuj jeszcze raz')
        });
    }, [postId]);

    useEffect(() => {
        getUserId().then(data => setUserId(data)).catch((_) => {
            toastHelper.error('Wystąpił błąd :(. Spróbuj jeszcze raz')
        });
    }, [postId]);

    if (!cardData) {
        return <Spinner aria-label="Loading post" />;
    }
    return (<div className="h-screen flex items-center justify-center" key={cardData?.id}>
        <div className="w-2/3 align-center justify-center flex">
            <SingleCard {...cardData!} />
        </div>
        {cardData.author_id === userId ? <MyCallButton onClick={goToEdit} text={"Edytuj"} /> : null}
    </div>)
}