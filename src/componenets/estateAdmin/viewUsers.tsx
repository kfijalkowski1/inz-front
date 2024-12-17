
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import {useEffect, useState} from "react";
import {UserType} from "../../types.tsx";
import {getUsers} from "./fetches.ts";

export function ViewUsers() {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        getUsers().then((value) => {
            setUsers(value);
        });
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <Table striped color="cyan">
    <TableHead color="red">
        <TableHeadCell>Imię</TableHeadCell>
        <TableHeadCell>Nazwisko</TableHeadCell>
        <TableHeadCell>Nazwa użytkownika</TableHeadCell>
    </TableHead>
        <TableBody className="divide-y">
        {users.map((user) => (
            <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.surname}</TableCell>
                <TableCell>{user.username}</TableCell>
            </TableRow>
))}
    </TableBody>
    </Table>
    </div>
);
}
