import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import HouseIcon from "../utils/icons/HouseIcon.tsx";
import {useLocation} from "react-router-dom";

function Header(): JSX.Element {
  const location = useLocation();

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
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
