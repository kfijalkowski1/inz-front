import {getUserRole} from "../register_login/handle_cred.ts";
import {useNavigate} from "react-router-dom";
import SubpageHeader from "../utils/SubpageHeader.tsx";
import MyCallButton from "../utils/MyCallButton.tsx";
import {useEffect, useState} from "react";
import {Role} from "../../types.tsx";

export function AdminOverview() {
    const navigate = useNavigate();
    const [userIsAdmin, setUserIsAdmin] = useState(false);

    useEffect(() => {
        getUserRole().then((value) => {
            setUserIsAdmin(value == Role.ADMIN);
        });
    }, []);

    const goToViewWorkers = () => {
        return navigate(`/admin/workers_view`);
    }

    const goToViewResidents = () => {
        return navigate(`/admin/residents_view`);
    }

    const goToAddWorker = () => {
        return navigate(`/admin/add_worker`);
    }

    const goToManageTasks = () => {
        return navigate(`/requests`);
    }

    if (!userIsAdmin) {
        return (
            <div className="justify-center flex align-middle p-16">
                <MyCallButton onClick={goToManageTasks} text="Ta strona jest dla administracji, naciśnij aby wrócić na gówną stronę"></MyCallButton>
            </div>
        );
    }

    return (
        <div>
            <div className="justify-center flex align-middle p-16">
                <SubpageHeader name="Panel administracyjny" />
            </div>
            <div className="flex flex-wrap justify-center w-full gap-8">
                <MyCallButton onClick={goToViewWorkers} text="Przeglądaj pracowników"></MyCallButton>
                <MyCallButton onClick={goToViewResidents} text="Przeglądaj mieszkańców"></MyCallButton>
                <MyCallButton onClick={goToAddWorker} text="Dodaj pracownika"></MyCallButton>
                <MyCallButton onClick={goToManageTasks} text="Zarządzaj zgłoszeniami"></MyCallButton>
            </div>

        </div>
    );
}