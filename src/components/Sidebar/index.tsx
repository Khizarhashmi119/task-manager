"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import menu from "@/utils/menu";

function Sidebar() {
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
            <MenuItemLink href={link}>
              {icon} {title}
            </MenuItemLink>
          </MenuItem>
        ))}
      </MenuItems>
    </Container>
  );
}

const Container = styled.nav`
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  color: ${(props) => props.theme.colorGrey3};
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
`;

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

const MenuItemLink = styled(Link)`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  padding: 0.6rem 1rem 0.6rem 2.1rem;
  position: relative;

  &::before {
    background-color: ${(props) => props.theme.activeNavLinkHover};
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all 0.3s ease-in-out;
    width: 0;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`;

export default Sidebar;
