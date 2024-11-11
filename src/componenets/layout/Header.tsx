import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

function Header(): JSX.Element {
  const [activePath, setActivePath] = useState('/');

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="#">
        <img src="../../assets/house.svg" className="mr-3 h-6 sm:h-9" alt="House Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Administracja osiedla
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink
          href="/"
          active={activePath === '/'}
          onClick={() => setActivePath('/')}
        >
          Strona główna
        </NavbarLink>
        <NavbarLink
          href="/ogloszenia"
          active={activePath === '/ogloszenia'}
          onClick={() => setActivePath('/ogloszenia')}
        >
          Ogłoszenia
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
