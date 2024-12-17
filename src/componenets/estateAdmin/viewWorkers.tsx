
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import {useEffect, useState} from "react";
import {WorkerType} from "../../types.tsx";
import {getWorkers} from "./fetches.ts";

export function ViewWorkers() {
    const [workers, setWorkers] = useState<WorkerType[]>([]);

    useEffect(() => {
        getWorkers().then((value) => {
            setWorkers(value);
        });
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <Table striped color="cyan">
                <TableHead color="red">
                    <TableHeadCell>Imię</TableHeadCell>
                    <TableHeadCell>Nazwisko</TableHeadCell>
                    <TableHeadCell>Nazwa użytkownika</TableHeadCell>
                    <TableHeadCell>Dział pracownika</TableHeadCell>
                    <TableHeadCell>Przełożony</TableHeadCell>
                    <TableHeadCell>Czy jest przełożonym?</TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {workers.map((worker) => (
                        <TableRow key={worker.id}>
                            <TableCell>{worker.name}</TableCell>
                            <TableCell>{worker.surname}</TableCell>
                            <TableCell>{worker.username}</TableCell>
                            <TableCell>{worker.type}</TableCell>
                            <TableCell>{worker.manager_name} {worker.manager_surname}</TableCell>
                            <TableCell>{worker.is_manager ? "Tak" : "Nie"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
