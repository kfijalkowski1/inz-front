import Header from "./Header.tsx";
import FlexOutlet from "./FlexOutlet.tsx";
import MyFooter from "./Footer.tsx";
import ScrollToTop from "./ScrollToTop.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {isUserLoggedIn} from "../register_login/handle_cred.ts";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import toastHelper from "../utils/toastHelper.tsx";
import {Spinner} from "flowbite-react";

function Layout(): JSX.Element {
  const location = useLocation();
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check login status
  useEffect(() => {
    // Skip login check for routes that include "login" in the path
    if (location.pathname.includes("login")) {
      return;
    }

    const checkLoginStatus = async () => {
      const isLogged = await isUserLoggedIn(); // Assuming this is an async function
      setUserLoggedIn(isLogged);

      if (!isLogged) {
        toastHelper.error("Musisz być zalogowany, aby mieć dostęp do tej strony");
        navigate("/login"); // Perform navigation after checking
      }
    };

    checkLoginStatus();
  }, [location.pathname, navigate]);

  if (!userLoggedIn && !location.pathname.includes("login")) {
    return <Spinner>Loading...</Spinner>;
  }

  return (
      <div className="min-h-screen flex flex-col">
        <ToastContainer />
        <ScrollToTop />
        <Header />
        <FlexOutlet />
        <MyFooter />
      </div>
  );
}


export default Layout;