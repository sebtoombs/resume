import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "@components/Header"
import GlobalStyles from "@style/GlobalStyles"
import { ThemeProvider, theme as baseTheme } from "@style"
import Footer from "@components/Footer"

import { ColorModeProvider } from "@style/ColorMode"

const Layout = ({ children }) => {
  return (
    <ColorModeProvider>
      <>
        <GlobalStyles bg="pageBackground" color="text" fontFamily="body" />
        <Header />
        {children}
        <Footer />
      </>
    </ColorModeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
