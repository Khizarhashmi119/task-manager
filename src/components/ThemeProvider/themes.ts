export type Theme = Readonly<{
  activeNavLink: string;
  activeNavLinkHover: string;
  borderColor: string;
  borderColor2: string;
  borderRadiusMd: string;
  borderRadiusMd2: string;
  borderRadiusSm: string;
  buttonGradient1: string;
  buttonGradient10: string;
  buttonGradient11: string;
  buttonGradient12: string;
  buttonGradient13: string;
  buttonGradient14: string;
  buttonGradient2: string;
  buttonGradient3: string;
  buttonGradient4: string;
  buttonGradient5: string;
  buttonGradient6: string;
  buttonGradient7: string;
  buttonGradient8: string;
  buttonGradient9: string;
  colorBackground: string;
  colorBg: string;
  colorBg2: string;
  colorBg3: string;
  colorBg4: string;
  colorButton: string;
  colorDanger: string;
  colorFontPrimary: string;
  colorGradient: string;
  colorGreenDark: string;
  colorGreenLight: string;
  colorGrey0: string;
  colorGrey1: string;
  colorGrey2: string;
  colorGrey3: string;
  colorGrey4: string;
  colorGrey5: string;
  colorGrey6: string;
  colorGreyDark: string;
  colorIcons: string;
  colorIcons2: string;
  colorIcons3: string;
  colorIcons4: string;
  colorPrimary: string;
  colorPrimary2: string;
  colorPrimaryGreen: string;
  colorTextLight: string;
  colorTextPrimary: string;
  colorTextSecondary: string;
  colorWhite: string;
  fH4: string;
  fontSmall: string;
  fontSmall2: string;
  gridGap: string;
  marLRSm: string;
  padLRSm: string;
  shadow1: string;
  shadow2: string;
  shadow3: string;
  shadow5: string;
  shadow6: string;
  shadow7: string;
  sidebarCollapsed: string;
  sidebarWidth: string;
}>;

export type Themes = {
  dark: Theme;
  light: Theme;
};

export type ThemeType = keyof Themes;

const themes: Themes = {
  dark: {
    activeNavLink: "rgba(249,249,249, 0.08)",
    activeNavLinkHover: "rgba(249,249,249, 0.03)",
    borderColor: "rgba(249,249,249, 0.08)",
    borderColor2: "rgba(249,249,249, 0.08)",
    borderRadiusMd: "12px",
    borderRadiusMd2: "15px",
    borderRadiusSm: "8px",
    buttonGradient1: "",
    buttonGradient10: "",
    buttonGradient11: "",
    buttonGradient12: "",
    buttonGradient13: "",
    buttonGradient14: "",
    buttonGradient2: "",
    buttonGradient3: "",
    buttonGradient4: "",
    buttonGradient5: "",
    buttonGradient6: "",
    buttonGradient7: "",
    buttonGradient8: "",
    buttonGradient9: "",
    colorBackground: "#FBFBFD",
    colorBg: "#252525",
    colorBg2: "#212121",
    colorBg3: "#181818",
    colorBg4: "#1A1A1A",
    colorButton: "#3A3B3C",
    colorDanger: "#fe6854",
    colorFontPrimary: "#e5e7eb",
    colorGradient: "linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%)",
    colorGreenDark: "#27AE60",
    colorGreenLight: "#dbe1e8",
    colorGrey0: "#f8f8f8",
    colorGrey1: "#dbe1e8",
    colorGrey2: "#b2becd",
    colorGrey3: "#6c7983",
    colorGrey4: "#454e56",
    colorGrey5: "#2a2e35",
    colorGrey6: "#12181b",
    colorGreyDark: "#131313",
    colorIcons: "rgba(249,249,249, 0.35)",
    colorIcons2: "rgba(249,249,249, 0.75)",
    colorIcons3: "rgba(249,249,249, 0.08)",
    colorIcons4: "rgba(0,0,0, 0.3)",
    colorPrimary: "#7263F3",
    colorPrimary2: "#705DF2",
    colorPrimaryGreen: "#6FCF97",
    colorTextLight: "#f8f8f8",
    colorTextPrimary: "#FFFFFF",
    colorTextSecondary: "#B0B3B8",
    colorWhite: "#fff",
    fH4: "19px",
    fontSmall: "14px",
    fontSmall2: "15px",
    gridGap: "2rem",
    marLRSm: "0 1rem",
    padLRSm: "0 2rem",
    shadow1: "4px 4px 84px rgba(16, 10, 86, 0.04)",
    shadow2: "0px 48px 77px rgba(8, 18, 69, 0.07)",
    shadow3: "0 14px 40px rgb(0 0 0 / 25%)",
    shadow5: "0px 4px 0px rgba(249,249,249, 0.35)",
    shadow6:
      "0px 6px 20px rgba(0, 0, 0, 0.15), 0px -3px 20px rgba(0, 0, 0, 0.1)",
    shadow7: "1px 7px 12px rgba(8, 18, 69, 0.1)",
    sidebarCollapsed: "5.4rem",
    sidebarWidth: "15rem",
  },
  light: {
    activeNavLink: "rgba(230,230,230, .87)",
    activeNavLinkHover: "#C5C5C5",
    borderColor: "rgba(249,249,249, 0.08)",
    borderColor2: "rgba(249,249,249, 0.08)",
    borderRadiusMd: "12px",
    borderRadiusMd2: "15px",
    borderRadiusSm: "8px",
    buttonGradient1:
      "linear-gradient(110.42deg, rgba(107, 190, 146, 0.7) 29.2%, rgba(245, 102, 146, 0.7) 63.56%)",
    buttonGradient10:
      "linear-gradient(110.42deg, rgba(235, 87, 87, 0.7) 29.2%, rgba(189, 68, 166, 0.7) 53.82%, rgba(247, 85, 143, 0.1) 63.56%)",
    buttonGradient11:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient12:
      "linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(247, 104, 85, 0.7) 63.56%)",
    buttonGradient13:
      "linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(99, 3, 255, 0.7) 63.56%)",
    buttonGradient14:
      "linear-gradient(110.42deg, rgba(41, 25, 222, 0.7) 29.2%, rgba(235, 87, 87, 0.7) 63.56%)",
    buttonGradient2:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient3:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient4:
      "linear-gradient(110.42deg, rgba(168, 85, 247, 0.7) 29.2%, rgba(245, 102, 146, 0.7) 63.56%)",
    buttonGradient5:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient6:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient7:
      "linear-gradient(110.42deg, rgba(41, 25, 222, 0.7) 29.2%, rgba(235, 87, 87, 0.7) 63.56%)",
    buttonGradient8:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient9:
      "linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(247, 104, 85, 0.7) 63.56%)",
    colorBackground: "#FBFBFD",
    colorBg: "#fff",
    colorBg2: "#F9F9F9",
    colorBg3: "#EDEDED",
    colorBg4: "#1A1A1A",
    colorButton: "#3A3B3C",
    colorDanger: "#fe6854",
    colorFontPrimary: "#6c7983",
    colorGradient: "linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%)",
    colorGreenDark: "#27AE60",
    colorGreenLight: "#dbe1e8",
    colorGrey0: "#f8f8f8",
    colorGrey1: "#dbe1e8",
    colorGrey2: "#b2becd",
    colorGrey3: "#6c7983",
    colorGrey4: "#454e56",
    colorGrey5: "#2a2e35",
    colorGrey6: "#12181b",
    colorGreyDark: "#131313",
    colorIcons: "#999999",
    colorIcons2: "#181818",
    colorIcons3: "rgba(249,249,249, 0.08)",
    colorIcons4: "rgba(0,0,0, 0.3)",
    colorPrimary: "#7263F3",
    colorPrimary2: "#705DF2",
    colorPrimaryGreen: "",
    colorTextLight: "#f8f8f8",
    colorTextPrimary: "#FFFFFF",
    colorTextSecondary: "#B0B3B8",
    colorWhite: "#fff",
    fH4: "19px",
    fontSmall: "14px",
    fontSmall2: "15px",
    gridGap: "2rem",
    marLRSm: "0 1rem",
    padLRSm: "0 2rem",
    shadow1: "4px 4px 84px rgba(16, 10, 86, 0.04)",
    shadow2: "0px 48px 77px rgba(8, 18, 69, 0.07)",
    shadow3: "0 14px 40px rgb(0 0 0 / 25%)",
    shadow5: "0px 4px 0px rgba(249,249,249, 0.35)",
    shadow6:
      "0px 6px 20px rgba(0, 0, 0, 0.15), 0px -3px 20px rgba(0, 0, 0, 0.1)",
    shadow7: "0px 48px 77px rgba(8, 18, 69, 0.16)",
    sidebarCollapsed: "5.4rem",
    sidebarWidth: "15rem",
  },
};

export default themes;
