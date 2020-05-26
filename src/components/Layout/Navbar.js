import { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

import links from "./links";
import LogoColor from "../../assets/logo-color.png";
import SearchIconImg from "../../assets/icons/search.svg";

const NavbarContainer = styled.div`
  background: ${props => props.theme.colors.mutedSecondary};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  position: relative;

  @media screen and (max-width: 800px) {
    justify-content: space-between;
    padding: 0 30px;
  }
`;

const NavbarLogo = styled.img`
  height: 6vh;
  width: auto;
  cursor: pointer;
`;

const Hamburger = styled.div`
  /* display: flex; */
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px 0;

  background: white;
  border-radius: 4px;
  width: 40px;
  height: 40px;

  > div {
    background: #888;
    width: 60%;
    height: 3px;
  }

  @media screen and (max-width: 800px) {
    display: flex;
  }
`;

const Close = styled.div`
  display: none;

  position: relative;
  margin-top: 30px;

  height: 40px;
  width: 40px;
  transform: translateX(50%);

  > div {
    background: #888;
    height: ${40 + Math.sqrt(2)}px;
    width: 3px;
    transform-origin: center;
    transform: rotate(45deg);
    position: absolute;
    top: 0;
  }

  > div:last-child {
    transform: rotate(-45deg);
  }

  @media screen and (max-width: 800px) {
    display: block;
  }
`;

const NavLinksContainer = styled.div`
  transition: transform 0.3s ease;

  @media screen and (max-width: 800px) {
    transform: ${props => (props.open ? "" : "translateX(100vw)")};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(256, 256, 256, 0.93);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const NavLink = styled.a`
  margin: 0 15px;
  color: ${props =>
    props.highlighted
      ? props.theme.colors.secondary
      : props.theme.colors.textLight};
  font-weight: ${props =>
    props.highlighted
      ? props.theme.fontWeights.bold
      : props.theme.fontWeights.body};
  font-size: ${props => props.theme.fontSizes[1]};
  border-bottom: ${props =>
    props.highlighted ? `4px solid ${props.theme.colors.secondary}` : "none"};
  padding-left: 2.5px;
  padding-right: 2.5px;
  padding-bottom: ${props =>
    props.highlighted
      ? `calc(5vh - ${props.theme.fontSizes[1]} + 2px);`
      : "none"};

  text-decoration: none;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 800px) {
    display: block;
    padding: 20px 0;
    border-bottom: none;
    font-size: 1.5rem;
    margin: 0;
  }
`;

const SearchIcon = styled.img`
  height: ${props => props.dim || "25px"};
  width: ${props => props.dim || "25px"};
  margin-right: 10px;
  cursor: pointer;
`;

const SearchIconContainer = styled.div`
  display: inline-flex;
  height: 100%;
  align-items: center;
  margin: 0 20px;
`;

const NavSearchContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavbarTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 20px;

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

export default () => {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();

  return (
    <NavbarContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="/">
          <NavbarLogo src={LogoColor} alt="Electo Mechanical Enterprises" />
        </Link>
        <NavbarTitle>Electro Mechanical Enterprises</NavbarTitle>
      </div>

      <NavSearchContainer>
        {/* TODO: Add onclick */}
        <SearchIconContainer>
          <SearchIcon src={SearchIconImg} alt="Search" dim="20px" />
        </SearchIconContainer>
        <div>
          <Hamburger onClick={() => setNavOpen(true)}>
            <div></div>
            <div></div>
            <div></div>
          </Hamburger>

          <NavLinksContainer open={navOpen}>
            {links.map(({ title, path }, i) => (
              <Link href={path} key={i}>
                <NavLink highlighted={path === router.pathname}>
                  {title}
                </NavLink>
              </Link>
            ))}

            <Close onClick={() => setNavOpen(false)}>
              <div></div>
              <div></div>
            </Close>
          </NavLinksContainer>
        </div>
      </NavSearchContainer>

      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
        }
      `}</style>
    </NavbarContainer>
  );
};
