/* eslint-disable prefer-destructuring */

const defaultTheme = require("tailwindcss/defaultTheme")
console.log(defaultTheme)

//Map and alias a tailwind config property to a styled-system compatible object
const tailwindToStyledSystem = (twConfigObject, { alias = true } = {}) => {
  const aliases = {}
  const styledSystemConfig = Object.keys(twConfigObject).map(key => {
    aliases[key] = twConfigObject[key]
    return twConfigObject[key]
  })
  if (!alias) return styledSystemConfig
  return { ...styledSystemConfig, ...aliases }
}

/**
 * This is our custom theme where we define global styles.
 * It should serve as a guideline for styling, but not all styles *have* to be taken from here.
 */
//const breakpoints = ["640px", "768px", "1024px", "1280px"]
const breakpoints = tailwindToStyledSystem(defaultTheme.screens, {
  alias: false,
})

//  Aliases
breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]

const sizes = {
  sm: breakpoints[0],
  md: breakpoints[1],
  lg: breakpoints[2],
  xl: breakpoints[3],
}

//Base colors
const baseColors = defaultTheme.colors
//Theme
const lightTheme = {
  pageBackground: baseColors.indigo[`100`],
  text: baseColors.gray[`900`],
  textContrast: baseColors.white,
  primary: baseColors.indigo[`600`],
  primaryDarker: baseColors.indigo[`700`],
  lightText: baseColors.gray[`600`],
  accent: baseColors.teal[`300`],
  footerBackground: baseColors.indigo[`900`],
}

const colors = { ...baseColors, ...lightTheme }

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two to ensure alignment across the entire project
 */
/*const space = [
  "0",
  "4px",
  "8px",
  "16px",
  "32px",
  "64px",
  "128px",
  "256px",
  "512px",
]*/
const space = tailwindToStyledSystem(defaultTheme.spacing)

/**
 * Typographic scale
 */
/*const fontSizes = [
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "32px",
  "48px",
  "64px",
  "96px",
  "128px",
]*/

const fontSizes = tailwindToStyledSystem(defaultTheme.fontSize)

const lineHeights = tailwindToStyledSystem(defaultTheme.lineHeight)

const fontWeights = defaultTheme.fontWeight

const fonts = {
  body: '"Open Sans", sans-serif',
  mono: '"Space Mono", monospace',
}

/**
 * Letter-spacing should vary, depending on usage of text
 */
const letterSpacings = defaultTheme.letterSpacing

/**
 * Border-radius
 */
const radii = tailwindToStyledSystem(defaultTheme.borderRadius)

export const theme = {
  name: "Default",
  breakpoints,
  sizes,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  fonts,
}
