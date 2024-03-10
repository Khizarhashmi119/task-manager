"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

import menu from "@/utils/menu";

function Sidebar() {
  const pathname = usePathname();

  return (
    <Container>
      <Profile>
        <ProfileOverlay />
        <ProfileImageContainer>
          <ProfileImage
            src={"/avatar.png"}
            alt="profile-image"
            width={70}
            height={70}
          />
        </ProfileImageContainer>
        <Username>John Doe</Username>
      </Profile>
      <MenuItems>
        {menu.map(({ icon, id, link, title }) => (
          <MenuItem key={id}>
            <MenuItemLink href={link} $active={pathname === link}>
              {icon} {title}
            </MenuItemLink>
          </MenuItem>
        ))}
      </MenuItems>
    </Container>
  );
}

const Container = styled.nav(
  (props) => `
  background-color: ${props.theme.colorBg2};
  border: 2px solid ${props.theme.borderColor2};
  border-radius: 1rem;
  color: ${props.theme.colorGrey3};
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${props.theme.sidebarWidth};
`
);

const ProfileOverlay = styled.div`
  backdrop-filter: blur(10px);
  background-color: ${(props) => props.theme.colorBg3};
  border-radius: 1rem;
  inset: 0;
  opacity: 0.2;
  position: absolute;
  transition: all 0.55s linear;
  z-index: 0;
`;

const Profile = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colorGrey0};
  cursor: pointer;
  display: flex;
  font-weight: 500;
  gap: 1rem;
  margin: 1.5rem 1.5rem 3rem 1.5rem;
  padding: 1rem 0.8rem;
  position: relative;

  &:hover {
    ${ProfileOverlay} {
      opacity: 1;
    }
  }
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  position: relative;
  z-index: 1;
`;

const ProfileImageContainer = styled.div``;

const Username = styled.h1`
  font-size: 1.2rem;
  position: relative;
  z-index: 1;
`;

const MenuItems = styled.ul`
  list-style: none;
`;

const MenuItem = styled.li``;

const MenuItemLink = styled(Link)<{ $active?: boolean }>`
  align-items: center;
  color: ${(props) => (props.$active ? props.theme.colorIcons2 : null)};
  cursor: pointer;
  display: flex;
  gap: 1rem;
  padding: 0.6rem 1rem 0.6rem 2.1rem;
  position: relative;

  i {
    color: ${(props) => (props.$active ? props.theme.colorIcons2 : null)};
  }

  &::before {
    background-color: ${(props) => props.theme.activeNavLinkHover};
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all 0.3s ease-in-out;
    width: ${(props) => (props.$active ? "100%" : "0")};
  }

  &::after {
    background-color: ${(props) => props.theme.colorGreenDark};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    content: "";
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: ${(props) => (props.$active ? "0.3rem" : "0")};
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`;

export default Sidebar;
