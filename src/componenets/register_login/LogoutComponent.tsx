import {logoutUser} from "./handle_cred.ts";
import toastHelper from "../utils/toastHelper.tsx";
import {useNavigate} from "react-router-dom";

export function LogoutComponent() {
    const navigate = useNavigate();
    try {
        logoutUser();
        toastHelper.success("Wylogowano pomyślnie!");
        return navigate("/");
    } catch (error: any) {
        toastHelper.error(error.toString());
    }
}