import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "@components/Header"
import GlobalStyles from "@style/GlobalStyles"
import { ThemeProvider, theme as baseTheme } from "@style"
import Footer from "@components/Footer"

const getTheme = mode => {
  if (mode === `light`) return baseTheme
  return { ...baseTheme, colors: baseTheme.colors.modes[mode] }
}

const Layout = ({ children }) => {
  const theme = getTheme("light")

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles bg="pageBackground" color="text" fontFamily="body" />
        <Header />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
