import toastHelper from "../../utils/toastHelper.tsx";
import {getComments} from "../fetches.ts";
import {useEffect, useState} from "react";
import {CommentType} from "../../../types.tsx";
import {Comment} from "./Comment.tsx";

export function AllComments(props: {request_id: string}) {
    const [comments, setComments] = useState<CommentType[]>([]);
    useEffect(() => {
        getComments(props.request_id)
            .then((data) => setComments(data))
            .catch((_) => {
                toastHelper.error("Wystąpił błąd :(. Spróbuj jeszcze raz");
            });
    }, []);
    return (
        <div className="p-12 mx-16">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Komentarze</h1>
            {comments.map((comment) => (
                <Comment comment={comment}/>
            ))}
        </div>
    );
}