import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {RequestType, Role} from "../../../types.tsx";
import { getRequest } from "../fetches.ts";
import toastHelper from "../../utils/toastHelper.tsx";
import { Spinner } from "flowbite-react";
import {getUserNameSurname, getUserRole} from "../../register_login/handle_cred.ts";
import {RequestInfo} from "./RequestInfo.tsx";
import {RequestEdit} from "./RequestEdit.tsx";

function EditableView(props: { request: RequestType, authorName: string }) {
    return <div className="p-12 grid grid-cols-2 gap-4 flex justify-center">
        <RequestInfo request={props.request} authorName={props.authorName}/>
        <RequestEdit request={props.request}/>
    </div>;
}


function UserView(props: { request: RequestType, authorName: string }) {
    return <div className="p-12 flex justify-center">
        <RequestInfo request={props.request} authorName={props.authorName}/>
    </div>;
}

export function ViewRequest() {
    const { requestId } = useParams<{ requestId: string }>();
    const [request, setRequest] = useState<RequestType>();
    const [authorName, setAuthorName] = useState("");
    const [isEmploye, setIsEmploye] = useState<boolean>();


    useEffect(() => {
        getRequest(requestId!)
            .then((data) => setRequest(data))
            .catch((_) => {
                toastHelper.error("Wystąpił błąd :(. Spróbuj jeszcze raz");
            });

        getUserRole().then((value) => {
            setIsEmploye(value == Role.ADMIN || value == Role.WORKER);
        });
    }, []);

    useEffect(() => {
        if (!request) {
            return;
        }
        getUserNameSurname(request?.author_id!)
            .then((data) => setAuthorName(data))
            .catch((_) => {
                toastHelper.error("Wystąpił błąd :(. Spróbuj jeszcze raz");
            });
    }, [request]);

    if (!request) {
        return <Spinner />;
    }

    return ( isEmploye ?
            <EditableView request={request} authorName={authorName}/> :
            <UserView request={request} authorName={authorName}/>

    );
}
