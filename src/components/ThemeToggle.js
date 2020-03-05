import { useColorMode } from "@style/ColorMode"
import React, { useState, useEffect } from "react"
import css from "@styled-system/css"
import styled from "styled-components"

/*import Switch from "./Switch"

import sun from "../images/sun.png"
import moon from "../images/moon.png"


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
*/

const MODES = ["light", "dark", "pink"]

const ThemeToggleStyled = styled("button")(
  css({
    bg: "transparent",
    color: "text",
    border: "1px solid",
    borderColor: "text",
    px: 2,
  })
)

const ThemeToggle = props => {
  const { colorMode, setColorMode } = useColorMode()
  const [modeIndex, setModeIndex] = useState(0)

  //Increment the modeIndex by one or wrap back to 0
  const onClickHandler = () => {
    if (modeIndex < MODES.length - 1) {
      setModeIndex(modeIndex + 1)
    } else {
      setModeIndex(0)
    }
  }

  useEffect(() => {
    setColorMode(MODES[modeIndex])
  }, [modeIndex])

  useEffect(() => {
    const index = MODES.indexOf(colorMode) > -1 ? MODES.indexOf(colorMode) : 0
    if (index !== modeIndex) setModeIndex(index)
  }, [colorMode])

  return (
    <ThemeToggleStyled onClick={onClickHandler}>
      {MODES[modeIndex] || "light"}
    </ThemeToggleStyled>
  )
}
export default ThemeToggle
