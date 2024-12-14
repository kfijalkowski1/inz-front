import {useEffect, useState} from "react";
import {Button, Card, Label, Select, ToggleSwitch} from "flowbite-react";
import toastHelper from "../utils/toastHelper.tsx";
import {addWorker, getManagers, getUsers, getWorkerTypes} from "./fetches.ts";
import {ManagerType, UserType} from "../../types.tsx";

export function AddWorker() {
    const [users, setUsers] = useState<UserType[]>([]);
    const [chosenUserId, setChosenUserId] = useState<string>("");
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

        getUsers().then((value) => {
            setUsers(value);
        });

    }, []);


    async function submitFunc(event: React.FormEvent): Promise<void> {
        event.preventDefault();
        try {
            await addWorker(chosenUserId, chosenType, managerId, isManager);
            toastHelper.success(`Dodano pracownika pomyślnie!`);
            setIsManager(false);
            window.location.reload();
        } catch (error: any) {
            toastHelper.error('Nie udało się dodać pracownika');
        }
    }


    return (
        <div className="flex justify-center items-center h-screen">
        <Card className="md:w-1/2 w-10/12">
            <form className="flex flex-col gap-4" onSubmit={submitFunc}>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="users" value="Wybierz użytkownika z którego chcesz zrobić pracownika"/>
                    </div>
                    <Select id="users" onChange={(e) => setChosenUserId(e.target.value)}>
                        <option key={""}>Brak</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>{user.name}, {user.surname} ({user.username})</option>
                        ))}
                    </Select>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="manager" value="Wybierz przełożonego"/>
                    </div>
                    <Select id="manager" onChange={(e) => setManagerId(e.target.value)}>
                        <option key={""} value={""}>Brak</option>
                        {managers.map((manager) => (
                            <option key={manager.id} value={manager.id}>{manager.name} {manager.surname}, ({manager.username})</option>
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