// Posts and notifications types

export type CardType = {
    id: number;
    title: string;
    description: string;
    created_at: string;
    author_name: string;
    author_id: string;
}

// User
export type UserType = {
    name: string;
    surname: string;
    username: string;
    estate_name: string;
    role: string;
    id: string;
}


// Estate
export type EstateType = {
    id: string;
    name: string;
    description: string;
}


export enum Role {
    ADMIN = "administrator",
    USER = "mieszkaniec",
    WORKER = "pracownik",
}

// Workers
export type ManagerType = {
    id: string;
    name: string;
    surname: string;
    username: string;
}

export type WorkerType = {
    id: string;
    name: string;
    surname: string;
    username: string;
    type: string;
    manager_name: string;
    manager_surname: string;
    is_manager: boolean;
}