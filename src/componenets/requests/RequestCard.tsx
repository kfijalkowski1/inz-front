import { Card } from "flowbite-react";
import {RequestType} from "../../types.tsx";
import DateVisualiser from "../utils/DateViauliser.tsx";

export function RequestCard(request: RequestType) {
    return (
        <Card href={`/requests/${request.id}`} className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {request.title}
            </h5>
            <h6 className="font-extralight tracking-tight text-gray-800 dark:text-white">
                Stan: {request.status}
            </h6>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {request.description}
            </p>
            Data zgłoszenia: <DateVisualiser date={request.start_time}/>
        </Card>
    );
}

export default RequestCard;
