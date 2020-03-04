import React from "react"
import PropTypes from "prop-types"

import Header from "@components/Header"
import GlobalStyles from "@style/GlobalStyles"
import { ThemeProvider, theme } from "@style"
import Footer from "@components/Footer"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles bg="pageBackground" color="text" fontFamily="body" />
      <Header />
      {children}
      <Footer />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
