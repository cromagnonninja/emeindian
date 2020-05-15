import { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

import links from "./links";
import LogoColor from "../../assets/logo-color.png";
import SearchIconImg from "../../assets/icons/search.png";

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
  height: 60%;
  width: auto;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  padding: 05px 12px;
  border: 0.5px solid ${props => props.theme.colors.borderGray};
  border-radius: 4px;
  display: flex;
  align-items: center;
  background: #fff;

  /* &:focus-within {
    border-color: ${props => props.theme.colors.secondary};
  } */
`;

const SearchInput = styled.input`
  font-size: ${props => props.theme.fontSizes[0]};
  font-family: ${props => props.theme.fonts.body};
  border: none;
  width: 400px;
  padding: 08px 0;
  color: ${props => props.theme.colors.textLight};

  &:focus,
  &:active {
    outline: none;
  }
`;

const SearchIconContainer = styled.div`
  height: 100%;
  padding-right: 10px;
  margin-right: 10px;
  border-right: 2px solid #eaeaef;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.img`
  height: calc(${props => props.theme.fontSizes[0]} + 2px);
  width: auto;
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

export default () => {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();

  return (
    <NavbarContainer>
      <Link href="/">
        <NavbarLogo src={LogoColor} alt="Electo Mechanical Enterprises" />
      </Link>

      {/* TODO: Replace with link to search page on mobile */}
      {/* <SearchContainer>
        <SearchIconContainer>
          <SearchIcon src={SearchIconImg} alt="Search" />
        </SearchIconContainer>
        <SearchInput type="text" placeholder="Search for items" />
      </SearchContainer> */}

      <div>
        <Hamburger onClick={() => setNavOpen(true)}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>

        <NavLinksContainer open={navOpen}>
          {links.map(({ title, path }, i) => (
            <Link href={path} key={i}>
              <NavLink highlighted={path === router.pathname}>{title}</NavLink>
            </Link>
          ))}

          <Close onClick={() => setNavOpen(false)}>
            <div></div>
            <div></div>
          </Close>
        </NavLinksContainer>
      </div>

      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
        }
      `}</style>
    </NavbarContainer>
  );
};
