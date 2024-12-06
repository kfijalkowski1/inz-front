
import { Button, Card, Label, TextInput, ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import {register, loginUser} from "./handle_cred.ts";
import toastHelper from "../utils/toastHelper.tsx";
import {useNavigate} from "react-router-dom";



export function LoginComponent() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function submitFunc(event: React.FormEvent): Promise<void> {
        event.preventDefault();
        try {
            isRegistering ? await register(name, surname, login, password) : await loginUser(login, password);
            const actionName = isRegistering ? "Zarejestrowano" : "Zalogowano";
            toastHelper.success(`${actionName} pomyślnie!`);
            return navigate("/");
        } catch (error: any) {
            toastHelper.error(error.toString());
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="md:w-1/2 w-10/12">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{isRegistering ? "Rejestracja": "Login"}</h1>
                <form className="flex flex-col gap-4" onSubmit={submitFunc}>
                    <ToggleSwitch checked={isRegistering} label="Zarejestruj się" onChange={setIsRegistering}/>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Imię (tylko przy rejestracji)"/>
                        </div>
                        <TextInput id="name" type="text" placeholder="Jacek" disabled={!isRegistering}
                                   required={isRegistering} value={name}
                                   onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="surname" value="Nazwisko (tylko przy rejestracji)"/>
                        </div>
                        <TextInput id="surname" type="text" placeholder="Kowalski" disabled={!isRegistering}
                                   required={isRegistering} value={surname}
                                   onChange={(e) => setSurname(e.target.value)}/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="login" value="Nazwa użytkownika"/>
                        </div>
                        <TextInput id="login" type="text" placeholder="Jacek123" value={login}
                                   onChange={(e) => setLogin(e.target.value)} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Hasło"/>
                        </div>
                        <TextInput id="password1" type="password" required value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <Button outline gradientDuoTone="greenToBlue" type="submit">Submit</Button>
                </form>
            </Card>
        </div>
    );
}

export default LoginComponent;
