import {CommentType} from "../../../types.tsx";
// import {Card} from "flowbite-react";
import DateVisualiser from "../../utils/DateViauliser.tsx";
import {HR} from "flowbite-react";

export function Comment(props: { comment: CommentType }) {
    return (
        <div className="max-w-sm p-4" >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.comment.author_name}, {props.comment.author_surname}
            </h5>
            <DateVisualiser date={props.comment.created_at} full={true}/>
            <h6 className="font-extralight tracking-tight text-gray-800 dark:text-white">
                {props.comment.author_type}
            </h6>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {props.comment.content}
            </p>
            <HR />
        </div>)
}