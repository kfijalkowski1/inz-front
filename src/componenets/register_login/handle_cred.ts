import {API_ADDR} from "../utils/consts.ts";
import {getSecureRequestOptions} from "../utils/requstsOptions.ts";

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
        throw new Error("Nie udało się zalogować, spróbuj ponownie"); // TODO error boundry?
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

export function isUserLoggedIn(): boolean {
    return !!localStorage.getItem("accessToken");
}

export function logoutUser(): void {
    localStorage.removeItem("accessToken");
}

export async function getUserId(): Promise<string> {
    const response = await fetch(`${API_ADDR}security/users/me`, getSecureRequestOptions);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    const data = await response.json();
    return data.id;
}