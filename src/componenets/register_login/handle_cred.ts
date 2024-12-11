import {API_ADDR} from "../utils/consts.ts";
import {EstateType, Role, UserType} from "../../types.tsx";

export const loginUser = async (username: string, password: string) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", "accept": "application/json" },
        body: new URLSearchParams({
            grand_type: "password",
            username: username,
            password: password,
            scope: "",
            client_id: "front",
            client_secret: "front",
        }),
    };
    const response = await fetch(`${API_ADDR}security/token`, requestOptions);
    if (response.status === 401) {
        throw new Error("Niepoprawne dane logowania");
    }
    if (!response.ok) {
        throw new Error("Nie udało się zalogować, spróbuj ponownie");
    }
    const data = await response.json();
    localStorage.setItem("accessToken", data.access_token);
};

export const register =
    async (name: string, surname: string, username: string, password: string, estateId: string) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "accept": "application/json" },
        body: JSON.stringify({
            name: name,
            surname: surname,
            username: username,
            password: password,
            estate_id: estateId,
        }),
    }
    const response = await fetch(`${API_ADDR}security/users/add`, requestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    await loginUser(username, password);
}

export const isUserLoggedIn= async(): Promise<boolean> => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
        return false;
    }
    // check if token valid
    try {
        await getUserId();
        return true;
    } catch (error) {
        localStorage.removeItem("accessToken"); // remove invalid token
        return false;
    }
}

export function logoutUser(): void {
    localStorage.removeItem("accessToken");
}

export async function getUserData(): Promise<UserType> {
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        }
    }
    const response = await fetch(`${API_ADDR}security/users/me`, fetchOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}


export async function getUserId(): Promise<string> {
    const data = await getUserData();
    return data.id;
}


export async function getAllEstates(): Promise<EstateType[]> {
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    };
    const response = await fetch(`${API_ADDR}estates`, fetchOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return await response.json();
}


export async function getUserRole(): Promise<Role> {
    const data = await getUserData();
    switch (data.role) {
        case Role.ADMIN.valueOf():
            return Role.ADMIN;
        case Role.USER.valueOf():
            return Role.USER;
        case Role.WORKER.valueOf():
            return Role.WORKER;
        default:
            throw new Error("Invalid role");
    }
}