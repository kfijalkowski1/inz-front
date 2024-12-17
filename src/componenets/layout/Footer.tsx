
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

function MyFooter() {
  return (
    <Footer container>
      <FooterCopyright href="/requests" by="Krzysztof Fijalkowski™" year={2024} />
      <FooterLinkGroup>
        <FooterLink href="/contact">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}

export default MyFooter;