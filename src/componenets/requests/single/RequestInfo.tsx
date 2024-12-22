import {RequestType} from "../../../types.tsx";
import {HR} from "flowbite-react";

export function RequestInfo(props: { request: RequestType, authorName: string }) {
    return <div className="space-y-4 mb-20">
        <h5 className="text-5xl font-light tracking-tight text-gray-900 dark:text-white">
            {props.request?.title}
        </h5>
        <HR/>
        <h6 className="font-extralight tracking-tight text-gray-800 dark:text-white">
            Autor: {props.authorName}
        </h6>
        <h6 className="font-extralight tracking-tight text-gray-800 dark:text-white">
            Status: {props.request?.status}
        </h6>
        <p className="font-normal text-gray-700 dark:text-gray-400">
            {props.request?.description}
        </p>
    </div>;
}