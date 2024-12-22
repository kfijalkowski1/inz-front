import toastHelper from "../../utils/toastHelper.tsx";
import {getComments} from "../fetches.ts";
import {useEffect, useState} from "react";
import {CommentType} from "../../../types.tsx";
import {Comment} from "./Comment.tsx";
import {HR} from "flowbite-react";

export function AllComments(props: { request_id: string }) {
    const [comments, setComments] = useState<CommentType[]>([]);

    useEffect(() => {
        getComments(props.request_id)
            .then((data) => setComments(data))
            .catch(() => toastHelper.error("Wystąpił błąd :(. Spróbuj jeszcze raz"));
    }, [props.request_id]);

    return (
        <div className="p-6 rounded-lg ">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Komentarze
            </h1>
            <HR />
            <div className="space-y-4">
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
}
