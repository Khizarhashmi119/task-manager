import "styled-components";

import { Theme } from "@/components/ThemeProvider/themes";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
