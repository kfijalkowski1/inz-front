import {useEffect, useState} from "react";
import {UserType} from "../../types.tsx";
import {getUserData} from "../register_login/handle_cred.ts";
import toastHelper from "../utils/toastHelper.tsx";
import {Card, Spinner} from "flowbite-react";

export default function MyPage() {
    const [user, setUser] = useState<UserType>();

    useEffect(() => {
        getUserData().then(data => setUser(data)).catch((_) => {
            toastHelper.error('Wystąpił błąd :(. Spróbuj jeszcze raz')
        });
    }, []);
    if (!user) {
        return <Spinner aria-label="Loading user data"/>;
    }
    return (
        <div className="h-screen flex items-center justify-center">
            <Card className="max-w-sm">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Twoje dane</h1>
                <p className="mb-2 block"><text className="text-gray-600"> Imię:</text> {user.name}</p>
                <p className="mb-2 block"><text className="text-gray-600"> Nazwisko:</text> {user.surname}</p>
                <p className="mb-2 block"><text className="text-gray-600"> Nazwa użytkownika: </text> {user.username}</p>
                <p className="mb-2 block"><text className="text-gray-600"> Typ użytkownika: </text> {user.role}</p>
                <p className="mb-2 block"><text className="text-gray-600"> Spółdzielnia użytkownika: </text> {user.estate_name}</p>
            </Card>
        </div>

    )


}