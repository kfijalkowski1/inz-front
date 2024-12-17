import {useEffect, useState} from "react";
import {getAssigned, getMineRequests, getRequests, searchRequests} from "./fetches.ts";
import toastHelper from "../utils/toastHelper.tsx";
import {RequestType, Role} from "../../types.tsx";
import SubpageHeader from "../utils/SubpageHeader.tsx";
import {SearchBar} from "../utils/SearchBar.tsx";
import MyCallButton from "../utils/MyCallButton.tsx";
import {useNavigate} from "react-router-dom";
import RequestCard from "./RequestCard.tsx";
import {getUserRole} from "../register_login/handle_cred.ts";


export function ViewRequests() {
    const [requests, setRequests] = useState<RequestType[]>([]);
    const navigate = useNavigate();
    const [isWorker, setIsWorker] = useState<boolean>(false);

    useEffect(() => {
        getUserRole().then((value) => {
            setIsWorker(value == Role.WORKER);
        });
    }, []);

    async function searchSubmit(phrase: string): Promise<void> {
        try {
            setRequests(await searchRequests(phrase));
        } catch (error) {
            toastHelper.error("Nie udało się wyszukać zgłoszeń. Spróbuj ponownie.");
        }
    }

    const goToAddRequest = () => {
        return navigate(`/requests/add`);
    }

    async function mineRequests(): Promise<void> {
        try {
            setRequests(await getMineRequests());
        } catch (error) {
            toastHelper.error("Nie udało się wyszukać ogłoszeń. Spróbuj ponownie.");
        }
    }

    async function assignedToMe(): Promise<void> {
        try {
            setRequests(await getAssigned());
        } catch (error) {
            toastHelper.error("Nie udało się wyszukać ogłoszeń. Spróbuj ponownie.");
        }
    }


    useEffect(() => {
        getRequests().then(data => setRequests(data)).catch((_) => {
            toastHelper.error('Wystąpił błąd :(. Spróbuj jeszcze raz')
        });
    }, []);

    return (
    <>
        <SubpageHeader name="Zgłoszenia" />
        <SearchBar onSearch={searchSubmit} placeholder={"Wyszukaj zgłoszeń"} />
        <div className="justify-center flex align-middle p-16 gap-10">
            <MyCallButton onClick={goToAddRequest} text={"Dodaj zgłoszenie"} />
            <MyCallButton onClick={mineRequests} text={"Moje zgłoszenia"} />
            {isWorker ? <MyCallButton onClick={assignedToMe} text={"Przypisane do mnie"} /> : null}
        </div>
        <div className="flex flex-wrap justify-center w-full gap-4">
            {requests.map((request) => (
                <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2" key={request.id}>
                    <RequestCard {...request} />
                </div>
            ))}
        </div>
    </>

    );
}