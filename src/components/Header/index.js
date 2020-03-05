import styled from "styled-components"
import css from "@styled-system/css"
import React from "react"

import Container from "@components/Container"
import Box from "@components/Box"

import { GoMarkGithub } from "react-icons/go"
import { FaTwitter } from "react-icons/fa"
import ThemeToggle from "@components/ThemeToggle"

const HeaderStyled = styled.div`
  ${css({
    paddingY: 4,
    marginBottom: 6,
  })}
`

const HeaderButton = styled("button")(
  css({
    background: "transparent",
    px: 2,
    py: 1,
    display: "flex",
    svg: {
      fontSize: "2xl",
    },
  })
)

const HeaderRight = styled(Box)(
  css({
    ml: "auto",
    display: "flex",
    alignItems: "center",
    [`& > ${HeaderButton}`]: {
      ml: 2,
    },
  })
)

const Header = ({ children, ...props }) => {
  return (
    <HeaderStyled>
      <Container>
        <Box display="flex" alignItems="center">
          <Box>
            <ThemeToggle />
          </Box>
          <HeaderRight>
            <HeaderButton
              as="a"
              href="https://github.com/sebtoombs/resume"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <GoMarkGithub />
            </HeaderButton>
            <HeaderButton
              as="a"
              href="https://twitter.com/sebtoombs"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </HeaderButton>
          </HeaderRight>
        </Box>
      </Container>
    </HeaderStyled>
  )
}
export default React.memo(Header)
