import {CommentType, RequestType, WorkerType} from "../../types.tsx";
import {API_ADDR} from "../utils/consts.ts";
import {getSecureRequestOptions} from "../utils/requstsOptions.ts";

export const getRequests = async (): Promise<RequestType[]> => {
    const response = await fetch(`${API_ADDR}requests/all`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}

export const searchRequests = async (phrase: string): Promise<RequestType[]> => {
    const response = await fetch(`${API_ADDR}requests/search/${phrase}`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}

export const addRequest = async (title: string, description: string): Promise<void> => {
    const response = await fetch(`${API_ADDR}requests/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
            title: title,
            description: description,
        }),
    });
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();

}


export const getRequest = async (id: string): Promise<RequestType> => {
    const response = await fetch(`${API_ADDR}requests/${id}`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}

export const getMineRequests = async (): Promise<RequestType[]> => {
    const response = await fetch(`${API_ADDR}requests/user`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}

export const getAssigned = async (): Promise<RequestType[]> => {
    const response = await fetch(`${API_ADDR}workers/mine_assigned`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}

export const getStatuses = async(): Promise<string[]> => {
    const response = await fetch(`${API_ADDR}workers/states`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}

export const getDepartmentWorkers = async (departmentName: string): Promise<WorkerType[]> => {
    const response = await fetch(`${API_ADDR}workers/department/${departmentName}`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}

export const getVisibilities = async (): Promise<string[]> => {
    const response = await fetch(`${API_ADDR}workers/visibilities`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}

export const updateRequest = async (request_id: string, department: string, status: string,
                                    assignee_id: string, visibility: string): Promise<void> => {
    const response = await fetch(`${API_ADDR}requests/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
            request_id: request_id,
            department: department,
            status: status,
            visibility: visibility,
            assignee_id: assignee_id

        }),
    });
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();

}

export const addNewComment = async (request_id: string, content: string): Promise<void> => {
    const response: Response = await fetch(`${API_ADDR}comments/add_request`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
            request_id: request_id,
            content: content,
        }),
    });

    if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
    }

    return await response.json();
};


export const getComments = async (request_id: string): Promise<CommentType[]> => {
    const response = await fetch(`${API_ADDR}comments_request/${request_id}`, getSecureRequestOptions);

    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }

    return await response.json();
};
