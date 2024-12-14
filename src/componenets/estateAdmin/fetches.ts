import {API_ADDR} from "../utils/consts.ts";
import {getSecureRequestOptions} from "../utils/requstsOptions.ts";
import {ManagerType, UserType, WorkerType} from "../../types.tsx";

export const addWorker = async (userId: string, type : string, manager_id: string, is_manager: boolean) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
            user_id: userId,
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

export const getUsers = async (): Promise<UserType[]> => {
    const response = await fetch(`${API_ADDR}security/users/all`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}

export const getWorkers = async (): Promise<WorkerType[]> => {
    const response = await fetch(`${API_ADDR}workers/all`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}