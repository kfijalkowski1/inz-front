import {RequestType, WorkerType} from "../../../types.tsx";
import DateVisualiser from "../../utils/DateViauliser.tsx";
import {Button, Label, Select} from "flowbite-react";
import {useEffect, useState} from "react";
import {getWorkerTypes} from "../../estateAdmin/fetches.ts";
import {getDepartmentWorkers, getStatuses, getVisibilities, updateRequest} from "../fetches.ts";
import toastHelper from "../../utils/toastHelper.tsx";

export function RequestEdit(props: { request: RequestType }) {
    const [departments, setDepartments] = useState<string[]>([]);
    const [workers, setWorkers] = useState<WorkerType[]>([]);
    const [assigneeId, setAssigneeId] = useState(props.request?.assignee_id || "");
    const [states, setStates] = useState<string[]>([]);
    const [visibilities, setAllVisibilities] = useState<string[]>([]);
    const [chosenDepartment, setChosenDepartment] = useState<string>(props.request?.department || "");
    const [visibility, setVisibility] = useState<string>(props.request?.visibility || "");
    const [chosenStatus, setChosenState] = useState<string>(props.request?.status || "");


    const submitFunc = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateRequest(props.request.id, chosenDepartment, chosenStatus, assigneeId, visibility);
            toastHelper.success("Zmiany zapisane pomyślnie!");
            window.location.reload();
        } catch (error) {
            toastHelper.error("Wystąpił błąd :(. Spróbuj jeszcze raz");
        }
    }

    useEffect(() => {
        try {
            getWorkerTypes().then((value) => {
                setDepartments(value);
            });

            getStatuses().then((value) => {
                setStates(value);
            });

            getVisibilities().then((value) => {
                setAllVisibilities(value);
            });
        } catch (error) {
            toastHelper.error("Wystąpił błąd :(. Spróbuj jeszcze raz");
        }
    }, []);

    useEffect(() => {
        getDepartmentWorkers(chosenDepartment).then((value) => {
            setWorkers(value);
        });
    }, [chosenDepartment]);


    return <div className="space-y-4 ml-20">
        <p className="font-normal text-gray-700 dark:text-gray-400">
            Czas zgłoszenia: <DateVisualiser date={props.request?.start_time!} full={true}/>
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
            Czas zakończenia: <DateVisualiser date={props.request?.end_time!} full={true}/>
        </p>
        <form className="flex flex-col gap-4" onSubmit={submitFunc}>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="department" value="Dział odpowiedzialny za zgłoszenie:"/>
                </div>
                <Select id="department"
                        value={chosenDepartment}
                        onChange={(e) => setChosenDepartment(e.target.value)}>
                    {departments.map((department) => (
                        <option key={department} value={department}>{department}</option>
                    ))}
                </Select>
            </div>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="asignee" value="Pracownik przypisany do zadania:"/>
                </div>
                <Select id="asignee"
                        value={assigneeId}
                        required
                        onChange={(e) => setAssigneeId(e.target.value)}>
                    {workers.map((worker) => (
                        <option key={worker.id} value={worker.id}>
                            {worker.name}, {worker.surname} ({worker.username})
                        </option>
                    ))}
                </Select>
            </div>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="states" value="Aktualny stan zadania:"/>
                </div>
                <Select id="states"
                        value={chosenStatus}
                        onChange={(e) => setChosenState(e.target.value)}>
                    {states.map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </Select>
            </div>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="visability" value="Widoczność zadania:"/>
                </div>
                <Select
                    id="visability"
                    value={visibility}
                    onChange={(e) => setVisibility(e.target.value)}
                >
                    {visibilities.map((v) => (
                        <option key={v} value={v}>{v}</option>
                    ))}
                </Select>

            </div>
            <div className="max-w-md">
                <Button outline gradientDuoTone="greenToBlue" type="submit">Zapisz zmiany</Button>
            </div>
        </form>


    </div>;
}