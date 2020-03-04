import React from "react"
import styled from "styled-components"
import css from "@styled-system/css"
import Container from "@components/Container"
import Row from "@components/Row"
import Col from "@components/Col"
import Heading from "@components/Heading"
import Text from "@components/Text"
import Box from "@components/Box"
import Button from "@components/Button"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { motion } from "framer-motion"

const ProfileImageWrap = styled.div`
  ${css({
    overflow: "hidden",
    borderRadius: "full",
    maxWidth: "300px",
    marginX: "auto",
    opacity: 0,
  })}
`

const HeroStyled = styled.div`
  ${css({ paddingY: 12 })}
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      profileImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const motionHeadingContainer = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  const motionHeadingItem = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <HeroStyled
      css={`
        @media print {
          page-break-after: always;
        }
      `}
    >
      <Container>
        <Row>
          <Col width={[1, 1 / 2]}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={motionHeadingContainer}
            >
              <Heading as="h1" fontSize="2xl" mb="3">
                <motion.div key={0} variants={motionHeadingItem}>
                  <Text fontSize="2xl" mb="2" display="block">
                    <Text fontWeight="bold" color="primary">
                      Hello,
                    </Text>{" "}
                    I'm Seb Toombs
                  </Text>
                </motion.div>
                <motion.div key={1} variants={motionHeadingItem}>
                  <Text fontSize="4xl" fontWeight="bold" letterSpacing="wide">
                    Frontend Developer.
                  </Text>
                </motion.div>
              </Heading>
              <motion.div key={2} variants={motionHeadingItem}>
                <Text color="lightText" fontSize="lg">
                  Web developer, UX design enthusiast & serial tinkerer.
                </Text>
              </motion.div>
              <Box as={motion.div} py="6" variants={motionHeadingItem}>
                <Button
                  as={motion.a}
                  variant="primary"
                  size="lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  }}
                  href="mailto:sebtoombs@gmail.com"
                >
                  Hire Me
                </Button>
              </Box>
            </motion.div>
          </Col>
          <Col width={[1, 1 / 2]}>
            <ProfileImageWrap
              as={motion.div}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  y: 20,
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5,
              }}
            >
              <Image fluid={data.profileImage.childImageSharp.fluid} />
            </ProfileImageWrap>
          </Col>
        </Row>
        <Box
          css={`
            display: none;
            @media print {
              display: block;
            }
          `}
          textAlign="center"
          py="12"
        >
          <Heading fontSize="xl">Contact</Heading>
          <Text fontSize="lg" as="p">
            <strong>Phone:</strong> 0439 567 593{" "}
          </Text>
          <Text fontSize="lg" as="p">
            <strong>Email:</strong> sebtoombs@gmail.com
          </Text>
        </Box>
      </Container>
    </HeroStyled>
  )
}
export default React.memo(Hero)
