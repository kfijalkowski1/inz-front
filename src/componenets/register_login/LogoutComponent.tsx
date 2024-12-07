import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toastHelper from "../utils/toastHelper";
import { logoutUser } from "./handle_cred";
import {Spinner} from "flowbite-react";

export function LogoutComponent(): JSX.Element {
    const navigate = useNavigate();

    useEffect(() => {
        const performLogout = async () => {
            try {
                logoutUser();
                toastHelper.success("Wylogowano pomyślnie!");
                navigate("/"); // Redirect after successful logout
            } catch (error: any) {
                toastHelper.error(error.toString());
            }
        };

        performLogout();
    }, [navigate]);

    return <Spinner>Wylogowywanie...</Spinner>;
}
