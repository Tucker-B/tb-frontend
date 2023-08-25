import { DefaultMantineColor } from '@mantine/core'

declare module '*.tff'

type ExtendedCustomColors = "brand" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, string[]>;
  }
}