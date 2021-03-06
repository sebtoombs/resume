import React from "react"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "@components/Layout"
import SEO from "@components/seo"

import styled from "styled-components"
import { color, space, layout } from "styled-system"
import css from "@styled-system/css"

import { motion } from "framer-motion"
import LazyMotion from "@components/LazyMotion"

import Container from "@components/Container"
import Hero from "@components/Hero"
import Text from "@components/Text"
import CardSection from "@components/CardSection"
import Heading from "@components/Heading"
import Card from "@components/Card"
import Row from "@components/Row"
import Col from "@components/Col"
import Box from "@components/Box"
import Button from "@components/Button"
import Link from "@components/Link"
import Section from "@components/Section"
import { Slider } from "@components/Slider"
import ClientOnlyContent from "@components/clientOnlyContent"

import CodingSVG from "../images/coding.inline.svg"
import BrowserSVG from "../images/browser.inline.svg"
import LayersSVG from "../images/layers.inline.svg"
import TVSVG from "../images/tv.inline.svg"

const IconCircle = styled("div")(
  css({
    bg: "white",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
    borderRadius: "full",
    width: "4rem",
    minWidth: "4rem",
    height: "4rem",
  })
)

const SectionHeading = ({ heading1, heading2, ...props }) => {
  return (
    <Heading as="h2" textAlign="center" mb="6">
      <Text color="primary" display="block" fontSize="xl">
        {heading1}
      </Text>
      <Text display="block" fontSize="2xl" fontWeight="bold">
        {heading2}
      </Text>
    </Heading>
  )
}

const DotPoint = styled("span")(
  css({
    display: "block",
    bg: "primary",
    width: "0.5rem",
    minWidth: "0.5rem",
    height: "0.5rem",
    minHeight: "0.5rem",
    borderRadius: "full",
    "-webkit-print-color-adjust": "exact !important",
  })
)

const CardDotPoint = styled(DotPoint)(
  css({
    width: "2rem",
    height: "2rem",
    position: "absolute",
    left: [0, 0, "-1rem"],
    top: "50%",
    transform: "translateY(-50%)",
  })
)

const GridList = styled("ul")(
  css({
    display: "flex",
    flexWrap: "wrap",
  })
)
const GridListItemStyled = styled("li")(
  layout,
  css({
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
    px: 3,
    [`& > ${DotPoint}`]: {
      marginRight: 4,
    },
  })
)
const GridListItem = props => {
  return (
    <GridListItemStyled width={[1, 1 / 2]}>
      <DotPoint /> {props.children}
    </GridListItemStyled>
  )
}

const PortfolioImageWrapper = styled("span")(
  css({
    display: "block",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    borderRadius: "lg",
    borderBottomRightRadius: "4rem",
    bg: "white",
    transition: "0.5s box-shadow ease-in-out",
    "a:hover > &": {
      boxShadow: "0px 0px 40px rgba(0,0,0,0.5)",
    },
    "@media print": {
      maxWidth: "200px",
    },
  })
)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    fragment PortfolioImage on File {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 550, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      hillsthome: file(relativePath: { eq: "hillsthome.portfolio.png" }) {
        ...PortfolioImage
      }
      kingsdesign: file(relativePath: { eq: "kingsdesign.portfolio.png" }) {
        ...PortfolioImage
      }
      castella: file(relativePath: { eq: "castella.portfolio.png" }) {
        ...PortfolioImage
      }
      sebtoombs: file(relativePath: { eq: "sebtoombs.portfolio.png" }) {
        ...PortfolioImage
      }
      tasmania: file(relativePath: { eq: "tasmania.portfolio.png" }) {
        ...PortfolioImage
      }
      insurancecheckup: file(
        relativePath: { eq: "insurancecheckup.portfolio.png" }
      ) {
        ...PortfolioImage
      }
    }
  `)

  const specialties = [
    {
      title: "Development",
      icon: <CodingSVG />,
      text:
        "Intimate knowledge of core web tech (HTML, CSS & JS). I learned web tech when I discovered FrontPage wouldn’t do it for me. I wrote it by hand before bundlers!",
    },
    {
      title: "UI/UX",
      icon: <TVSVG />,
      text:
        "Well designed products are a result of holistic UX practices. Although I’m a “developer” I love to make sure the products I’m producing are delivering the best customer experience.",
    },
    {
      title: "Frontend",
      icon: <BrowserSVG />,
      text:
        "My preferred framework is React, but I have experience with Vue. I like most of my CSS in JS, and my frontends to be as lightweight as possible. Ask me how much I love Gatsby.js or Next.js",
    },
    {
      title: "Full Stack",
      icon: <LayersSVG />,
      text:
        "I lied. I like to think of myself as a frontend dev, but I have experience all over the stack. From devops, to backend (extensive PHP & Wordpress, Node experience to name a few). Frontend is just where I’m most comfortable.",
    },
  ]

  const skills = [
    <Text>
      <strong>Semantic</strong> HTML.
    </Text>,
    <Text>
      Great working knowledge of MYSQL <strong>databases</strong>. DynamoDB
      &amp; MongoDB experience.
    </Text>,
    <Text>
      <strong>CSS</strong>, CSS-in-JS, CSS pre &amp; post processing.
    </Text>,
    <Text>
      Vanilla <strong>Javascript</strong> - Yeah I could write an app without a
      framework. I probably wouldn’t.
    </Text>,
    <Text>
      git commit -m "I love to use <strong>git</strong> for vcs"
    </Text>,
    <Text>
      Javascript <strong>frameworks & libraries</strong>. I can build an app
      with React, Vue and I’ll give anything a go. I also have an unfortunate
      amount of experience with jQuery.
    </Text>,
    <Text>
      I don’t claim to be a visual designer, but I have a good{" "}
      <strong>eye for detail</strong> and I usually have a good feel for what
      works.
    </Text>,
    <Text>
      I’ve got extensive Wordpress experience, but I don’t like to talk about
      it. I also love headless <strong>CMS</strong>es (Sanity.io, Netlify CMS,
      TinaCMS are some of my faves).
    </Text>,
    <Text>
      <strong>Performance</strong> optimisation. I'm pretty handy at making
      sites load and feel fast.
    </Text>,
  ]

  const portfolioData = [
    {
      image: data.hillsthome.childImageSharp.fluid,
      title: "Hill Street Home",
      link: "https://home.hillstreetgrocer.com",
      tech:
        "Wordpress, Woocommerce, but with modern dev workflows (blade templates, webpack...)",
      desc:
        "Very non-traditional Wordpress + Woocommerce with a distinctly single page app feel... Custom theme built with Roots/Sage and Barba.js",
    },
    {
      image: data.kingsdesign.childImageSharp.fluid,
      title: "KingsDesign.com.au",
      link: "https://www.kingsdesign.com.au",
      tech: "Gatsbyjs (React, Node), Tailwindcss, Styled-components, Netlify",
      desc:
        "Collaboratively designed, then built this tasty piece for KingsDesign. This was my first taste of Gatsby for static site generation, so it's not perfect, but it's still a WIP (isn't everything?). Check it out.",
    },
    {
      image: data.castella.childImageSharp.fluid,
      title: "Castella.com.au",
      link: "https://www.castella.com.au",
      tech: "Wordpress, custom theme, SASS, many bundles",
      desc:
        'A client site, this one was designed by a "design agency" and built with a page builder. I converted it to a custom theme and made some updates, with the ulitmate goal of improving load times.',
    },
    {
      image: data.sebtoombs.childImageSharp.fluid,
      title: "SebToombs.com",
      link: "https://sebtoombs.com",
      tech: "Gatsbyjs (React, Node), Tailwindcss, Styled-components, Netlify",
      desc: "My personal site. Whipped it together with Gatsby.",
    },
    {
      image: data.insurancecheckup.childImageSharp.fluid,
      title: "DPAC Insurance Checkup",
      tech: "React, Sharepoint(!), styled-components",
      desc:
        "This little baby hasn't quite gone live yet... but it's a little app to guide Tasmanians through an insurance checkup, organised by the Department of Premier and Cabinet. Designed to fit in with the existing design, its built with React and pulls data from a Sharepoint instance.",
    },
    {
      image: data.tasmania.childImageSharp.fluid,
      title: "Tasmania.com",
      link: "https://tasmania.com",
      tech: "Wordpress, custom theme, SASS, jQuery",
      desc:
        "A big build of a travel affiliate site showcasing Tasmania. I was the lead developer with KingsDesign on this project, built on Wordpress with a couple of API integrations for travel providers.",
    },
  ]

  const portfolioSlides = portfolioData.map((item, index) => (
    <div
      key={index}
      css={`
        @media print {
          margin-bottom: 4rem;
        }
      `}
    >
      <Box mb="8">
        {item.link ? (
          <a
            css={`
              display: block;
            `}
            href={item.link}
            rel="nofollow noreferrer noopener"
            target="_blank"
          >
            <PortfolioImageWrapper>
              <Image fluid={item.image} />
            </PortfolioImageWrapper>
          </a>
        ) : (
          <PortfolioImageWrapper>
            <Image fluid={item.image} />
          </PortfolioImageWrapper>
        )}
      </Box>
      <Heading fontSize="xl" fontWeight="bold" mb="4">
        {item.link ? (
          <Link
            href={item.link}
            rel="nofollow noreferrer noopener"
            target="_blank"
          >
            {item.title}
          </Link>
        ) : (
          item.title
        )}
      </Heading>
      <table
        css={`
          width: 100%;
        `}
      >
        <tbody>
          <tr>
            <td>
              <Text as="p" mr="4" py="3">
                <strong>Tech:</strong>
              </Text>
            </td>
            <td>
              <Text as="p" color="primary" py="3">
                {item.tech}
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text as="p" mr="4" py="3">
                <strong>About:</strong>
              </Text>
            </td>
            <td>
              <Text as="p" color="lightText" py="3">
                {item.desc}
              </Text>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ))

  const experienceCards = [
    {
      title: "KingsDesign",
      position: "Lead Developer",
      text:
        "Lead developer at a small agency. Responsible for delivering web projects that exceed client expectations. Extremely varied role, with interesting tasks encompassing; develop sites and apps from end to end, implement continually improving performance and UX optimisations with a data driven approach and a great many more things.",
    },
    {
      title: "Freelance",
      position: "Principal/Developer",
      text:
        "As a freelance developer, I did all the things a freelancer needs to - find clients, manage client expectations, and deliver product.",
    },
    {
      title: "UTAS",
      position: "Bachelor of Mechanical Engineering (Hons.)",
      text:
        "I earned a Bachelor of Eng. from UTAS. This was fun! Was it the best idea career wise? Probably not. Does it matter now? Nope.",
    },
  ]

  return (
    <Layout>
      <SEO title="Resume" />

      <Hero />

      <CardSection
        marginTop={[null, null, null, -20]}
        zIndex="1"
        position="relative"
        mb="20"
      >
        <Card py="12" as={LazyMotion} delay={1} once="true">
          <SectionHeading heading1={"What I do"} heading2={"I specialise in"} />

          <Row>
            {specialties.map((specialty, index) => (
              <Col width={[1, 1 / 2]} key={index} mb="8" py="4">
                <Box
                  display="flex"
                  px={[null, null, 6]}
                  as={motion.div}
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
                >
                  <IconCircle>{specialty.icon}</IconCircle>
                  <Box flexGrow="1" pl={[3, 3, 8]}>
                    <Heading fontSize="2xl" fontFamily="mono" mb="2">
                      {specialty.title}
                    </Heading>
                    <Text>{specialty.text}</Text>
                  </Box>
                </Box>
              </Col>
            ))}
          </Row>
        </Card>
      </CardSection>

      <Box as={Section} mb="20">
        <Container>
          <Box as={LazyMotion} py={12} once="true">
            <SectionHeading heading1="Expertise" heading2="Special skills" />
            <GridList>
              {skills.map((skill, index) => (
                <GridListItem key={index}>{skill}</GridListItem>
              ))}
            </GridList>
            <Box py="6">
              <Text mb="6" display="block">
                ... &amp; more. Don't see something here? I have a working
                knowledge of a range of topics, but I wanted to keep this
                succinct. If there's a skill you need and you're not sure
                whether I've got it, ask me about it.
              </Text>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="outline-primary"
                  mx="auto"
                  as={"a"}
                  href="mailto:sebtoombs@gmail.com"
                >
                  Ask me what else I know
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <CardSection mb="20">
        <Card py="12" as={LazyMotion} once="true">
          <Row alignItems="center">
            <Col width={[1, 1, 1 / 3]}>
              <SectionHeading
                heading1="Portfolio"
                heading2="Things I've built"
              />
            </Col>
            <Col width={[1, 1, 2 / 3]}>
              <Box px={[null, null, 6, 8]}>
                <Slider slides={portfolioSlides} />
              </Box>
            </Col>
          </Row>
        </Card>
      </CardSection>

      <Box as={Section} mb="20">
        <Container>
          <Box as={LazyMotion} py={12} once="true">
            <SectionHeading
              heading1="Work &amp; Education"
              heading2="Professional experience"
            />
            <Box mx="auto" width={[1, 1, 2 / 3, 1 / 2]}>
              {experienceCards.map((exp, index) => (
                <Box
                  key={index}
                  position="relative"
                  as={motion.div}
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
                  mb="8"
                >
                  <CardDotPoint />
                  <Card
                    css={`
                      position: relative;
                    `}
                    px="6"
                    py="6"
                  >
                    <Heading fontSize="sm" color="primary">
                      {exp.title}
                    </Heading>
                    <Heading fontSize="xl" fontFamily="mono" mb="3">
                      {exp.position}
                    </Heading>
                    <Text color="lightText">{exp.text}</Text>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box as={Section} mb="20">
        <Container>
          <Box as={LazyMotion} py={12} once="true">
            <SectionHeading heading1="Details" heading2="Get in touch" />
            <Row>
              <Col width={[1, 1 / 2]}>
                <Card>
                  <Heading fontSize="lg" fontWeight="bold" textAlign="center">
                    Call me:
                  </Heading>
                  <Text as="p" textAlign="center">
                    <ClientOnlyContent>
                      <Link href="tel:0439567593">0439 567 593</Link>
                    </ClientOnlyContent>
                  </Text>
                </Card>
              </Col>
              <Col width={[1, 1 / 2]}>
                <Card>
                  <Heading fontSize="lg" fontWeight="bold" textAlign="center">
                    Email me:
                  </Heading>
                  <Text as="p" textAlign="center">
                    <ClientOnlyContent>
                      <Link href="mailto:sebtoombs@gmail.com">
                        sebtoombs@gmail.com
                      </Link>
                    </ClientOnlyContent>
                  </Text>
                </Card>
              </Col>
            </Row>

            <Box mx="auto" width={[1, 1, 1 / 2]} py="12"></Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default IndexPage
