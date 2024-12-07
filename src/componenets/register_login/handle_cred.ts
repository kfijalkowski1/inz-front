import {API_ADDR} from "../utils/consts.ts";

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
    async (name: string, surname: string, username: string, password: string) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "accept": "application/json" },
        body: JSON.stringify({
            name: name,
            surname: surname,
            username: username,
            password: password,
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

export async function getUserId(): Promise<string> {
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
    const data = await response.json();
    return data.id;
}