import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import HouseIcon from "../utils/icons/HouseIcon.tsx";
import {useLocation} from "react-router-dom";
import {isUserLoggedIn} from "../register_login/handle_cred.ts";
import {useEffect, useState} from "react";

function Header(): JSX.Element {
  const location = useLocation();
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
    useEffect(() => {
        isUserLoggedIn().then((value) => {
            setUserLoggedIn(value);
        });
    }, []);

  return (
    <Navbar fluid rounded color="cyan">
      <NavbarBrand href="#">
        <HouseIcon />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Administracja osiedla
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink
          href="/"
          active={location.pathname === "/"}
        >
          Strona główna
        </NavbarLink>
        <NavbarLink
          href="/posts"
          active={location.pathname.startsWith("/posts")}
        >
          Ogłoszenia
        </NavbarLink>
          {userLoggedIn ? (
          <NavbarLink
              href="/logout"
              active={location.pathname === "/logout"}
          >Wyloguj się
          </NavbarLink>
         ) : (
          <NavbarLink
              href="/login"
              active={location.pathname === "/login"}
          > Login </NavbarLink>
          )}
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
