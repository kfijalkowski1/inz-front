import {isUserAdmin} from "../register_login/handle_cred.ts";
import {Button} from "flowbite-react";
import {useNavigate} from "react-router-dom";
import SubpageHeader from "../utils/SubpageHeader.tsx";

export function AdminOverview() {
    const navigate = useNavigate();

    const goToMainPage = () => {
        return navigate(`/`);
    }

    if (!isUserAdmin()) {
        return (
            <div>
                <Button onClick={goToMainPage}>Ta strona jest dla administracji, naciśnij aby wrócić na gówną stronę</Button>
            </div>
        );
    }

    return (
        <div>
            <SubpageHeader name="Panel administracyjny" />
        </div>
    );
}