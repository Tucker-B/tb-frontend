declare module '*.tff'
import { Tuple, DefaultMantineColor } from '@mantine/core'

type ExtendedCustomColors = "brand" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, string[]>;
  }
}