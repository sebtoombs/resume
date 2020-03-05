import styled from "styled-components"
import css from "@styled-system/css"
import React from "react"

import Container from "@components/Container"
import Box from "@components/Box"

const FooterStyled = styled("footer")(
  css({
    bg: "footerBackground",
    color: "white",
    py: 12,
  })
)

const Footer = props => {
  return (
    <FooterStyled {...props}>
      <Container>
        <Box>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Freepik
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            www.flaticon.com
          </a>
        </Box>
      </Container>
    </FooterStyled>
  )
}

export default React.memo(Footer)
