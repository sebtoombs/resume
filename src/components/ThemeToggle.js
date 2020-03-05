import Switch from "./Switch"

import sun from "../images/sun.png"
import moon from "../images/moon.png"

import { useColorMode } from "@style/ColorMode"
import React, { useContext } from "react"

const iconCss = [{ pointerEvents: `none`, margin: "4px" }]

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

const ThemeToggle = props => {
  const { colorMode, setColorMode } = useColorMode()

  const toggleColorMode = () => {
    setColorMode(colorMode === "dark" ? "light" : "dark")
  }

  return (
    <Switch
      {...props}
      onColor="#1a202c"
      offColor="#1a202c"
      aria-label="Toggle dark mode"
      checkedIcon={checkedIcon}
      uncheckedIcon={uncheckedIcon}
      checked={colorMode === "dark"}
      onChange={toggleColorMode}
      css={{ boxShadow: "0 0 0 1px #ffffff", display: "flex !important" }}
    />
  )
}
export default ThemeToggle
