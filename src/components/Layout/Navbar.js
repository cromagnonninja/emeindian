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
  justify-content: space-around;
  align-items: center;
`;

const NavbarLogo = styled.img`
  height: 60%;
  width: auto;
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
`;

export default () => {
  const router = useRouter();

  return (
    <NavbarContainer>
      <NavbarLogo src={LogoColor} alt="Electo Mechanical Enterprises" />

      {/* TODO: Replace with link to search page on mobile */}
      <SearchContainer>
        <SearchIconContainer>
          <SearchIcon src={SearchIconImg} alt="Search" />
        </SearchIconContainer>
        <SearchInput type="text" placeholder="Search for items" />
      </SearchContainer>

      {/* TODO: Replace with hamburger menu on mobile */}
      <div>
        {links.map(({ title, path }) => (
          // TODO: identify active link and highlight
          <Link href={path}>
            <NavLink highlighted={path === router.pathname}>{title}</NavLink>
          </Link>
        ))}
      </div>
    </NavbarContainer>
  );
};
