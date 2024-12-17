
import {Button, Card, Label, Select, TextInput, ToggleSwitch} from "flowbite-react";
import {useEffect, useState} from "react";
import {register, loginUser, getAllEstates} from "./handle_cred.ts";
import toastHelper from "../utils/toastHelper.tsx";
import {useNavigate} from "react-router-dom";
import {EstateType} from "../../types.tsx";



export function LoginComponent() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [allEstates, setAllEstates] = useState<EstateType[]>();
    const [estateId, setEstateId] = useState<string>();
    const navigate = useNavigate();

    useEffect(() => {
        getAllEstates().then(data => setAllEstates(data)).catch((_) => {
            toastHelper.error('Wystąpił błąd :(. Spróbuj jeszcze raz')
        });
    }, []);

    async function submitFunc(event: React.FormEvent): Promise<void> {
        event.preventDefault();
        if (estateId == "") {
            return toastHelper.error("Wybierz spółdzielnie");
        }
        try {
            isRegistering ? await register(name, surname, login, password, estateId!) : await loginUser(login, password);
            const actionName = isRegistering ? "Zarejestrowano" : "Zalogowano";
            toastHelper.success(`${actionName} pomyślnie!`);
            return navigate("/requests");
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
                    {isRegistering ?
                        (
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="estateName" value="Wybierz spółdzielnie"/>
                            </div>
                            <Select id="estateName"
                                    required
                                    onChange={(e) => setEstateId(e.target.value)}>
                                <option key={""}>Wybierz spółdzielnie</option>
                                {allEstates?.map((estate) => (
                                    <option key={estate.id} value={estate.id}>{estate.name}</option>
                                ))}
                            </Select>
                        </div>) : null
                    }
                    <Button outline gradientDuoTone="greenToBlue" type="submit">{isRegistering ? (<>Zarejestruj się</>) : (<>Zaloguj się</>)}</Button>

                </form>
            </Card>
        </div>
    );
}

export default LoginComponent;
