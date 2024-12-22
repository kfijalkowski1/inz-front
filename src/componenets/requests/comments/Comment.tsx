import {CommentType} from "../../../types.tsx";
// import {Card} from "flowbite-react";
import DateVisualiser from "../../utils/DateViauliser.tsx";

export function Comment(props: { comment: CommentType }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
                <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                    {props.comment.author_name} {props.comment.author_surname}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
          {props.comment.author_type}
        </span>
            </div>
            <DateVisualiser date={props.comment.created_at} full={true} />
            <p className="text-gray-700 dark:text-gray-300 mt-2">
                {props.comment.content}
            </p>
        </div>
    );
}
