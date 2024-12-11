import {API_ADDR} from "../utils/consts.ts";
import {getSecureRequestOptions} from "../utils/requstsOptions.ts";
import {ManagerType} from "../../types.tsx";

export const addWorker = async (name : string, surname : string, username : string,
                                password : string, type : string, manager_id: string, is_manager: boolean) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
            name: name,
            surname: surname,
            username: username,
            password: password,
            type: type,
            manager_id: manager_id,
            is_manager: is_manager,
        }),
    };
    const response = await fetch(`${API_ADDR}workers/add`, requestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
    }


export const getWorkerTypes = async (): Promise<string[]> => {
    const response = await fetch(`${API_ADDR}workers/types`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}

export const getManagers = async (): Promise<ManagerType[]> => {
    const response = await fetch(`${API_ADDR}workers/managers`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}