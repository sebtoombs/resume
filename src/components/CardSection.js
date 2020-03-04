import React from "react"
import styled from "styled-components"
import { space, compose, position } from "styled-system"
import Container from "@components/Container"
import Section from "@components/Section"

const CardSectionStyled = styled(Section)(compose(space, position))

const CardSection = props => {
  return (
    <CardSectionStyled {...props}>
      <Container>{props.children}</Container>
    </CardSectionStyled>
  )
}
export default CardSection
