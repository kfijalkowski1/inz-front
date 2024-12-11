import {useEffect, useState} from "react";
import {Button, Card, Label, Select, TextInput, ToggleSwitch} from "flowbite-react";
import toastHelper from "../utils/toastHelper.tsx";
import {addWorker, getManagers, getWorkerTypes} from "./fetches.ts";
import {ManagerType} from "../../types.tsx";

export function AddWorker() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [chosenType, setChosenType] = useState<string>("");
    const [managerId, setManagerId] = useState<string>("");
    const [managers, setManagers] = useState<ManagerType[]>([]);
    const [types, setTypes] = useState<string[]>([]);
    const [isManager, setIsManager] = useState(false);

    useEffect(() => {
        getWorkerTypes().then((value) => {
            setTypes(value);
        });

        getManagers().then((value) => {
            setManagers(value);
        });
    }, []);


    async function submitFunc(event: React.FormEvent): Promise<void> {
        event.preventDefault();
        try {
            await addWorker(name, surname, login, password, chosenType, managerId, isManager);
            toastHelper.success(`Dodano pracownika pomyślnie!`);
            setName("");
            setSurname("");
            setLogin("");
            setPassword("");
            setManagerId("");
            setIsManager(false)
        } catch (error: any) {
            toastHelper.error('Nie udało się dodać pracownika');
        }
    }


    return (
        <div className="flex justify-center items-center h-screen">
        <Card className="md:w-1/2 w-10/12">
            <form className="flex flex-col gap-4" onSubmit={submitFunc}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Imię"/>
                    </div>
                    <TextInput id="name" type="text" placeholder="Jacek"
                               required value={name}
                               onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="surname" value="Nazwisko"/>
                    </div>
                    <TextInput id="surname" type="text" placeholder="Kowalski"
                               required value={surname}
                               onChange={(e) => setSurname(e.target.value)}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="login" value="Nazwa użytkownika"/>
                    </div>
                    <TextInput id="login" type="text" placeholder="Jacek123" value={login}
                               onChange={(e) => setLogin(e.target.value)}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Hasło"/>
                    </div>
                    <TextInput id="password1" type="password" required value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="manager" value="Wybierz przełożonego"/>
                    </div>
                    <Select id="manager" onChange={(e) => setManagerId(e.target.value)}>
                        <option key={""} value={managerId}>Brak</option>
                        {managers.map((manager) => (
                            <option key={manager.id} value={managerId}>{manager.name} {manager.surname}</option>
                        ))}
                    </Select>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="workerType" value="Wybierz dział pracownika"/>
                    </div>
                    <Select id="workerType"
                            required
                            onChange={(e) => setChosenType(e.target.value)}>
                        {types.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </Select>
                </div>
                <ToggleSwitch checked={isManager} label="Czy pracownik jest kierownikiem?" onChange={setIsManager}/>
                <Button outline gradientDuoTone="greenToBlue" type="submit">Dodaj pracownika</Button>

            </form>
        </Card>
        </div>
    );


}