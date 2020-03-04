// This is blatantly copied from Framer Motion example:
// https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?fontsize=14&module=%2Fsrc%2FExample.tsx
// and then modified significantly

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"
import Box from "@components/Box"
import styled from "styled-components"
import css from "@styled-system/css"
import { system } from "styled-system"
import useOnBeforePrint from "../util/onBeforePrint"

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      transition: {
        staggerChildren: 1,
      },
      position: "relative",
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    position: "relative",
    transition: {
      staggerChildren: 1,
    },
  },
  exit: direction => {
    return {
      position: "absolute",
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      transition: {
        staggerChildren: 1,
      },
    }
  },
}

const NavButtonBar = styled("span")(
  css({
    width: "4rem",
    height: "0.5rem",
    bg: "primary",
    opacity: 0.5,
    "&:last-child": {
      mr: 0,
    },
    display: "block",
  })
)
const NavButton = styled("button")(
  css({
    py: "3",
    mr: "3",
    "&:focus": {
      outline: "none",
      "& > span": {
        boxShadow: props => `0 0 0 1px ${props.colors.primary}`,
      },
    },
  }),
  system({
    active: active => (active ? { "& > span": { opacity: 1 } } : null),
  })
)

export const Slider = ({ slides }) => {
  const [[page, direction], setPage] = useState([0, 0])
  const [isDragging, setIsDragging] = useState(false)

  const [isPrint, setIsPrint] = useState(false)

  useOnBeforePrint(() => {
    setIsPrint(true)
  })

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const slideIndex = wrap(0, slides.length, page)

  const paginate = (newDirection, pages = null) => {
    if (!pages) pages = newDirection
    setPage([page + pages, newDirection])
  }

  const handleNavButtonClick = newIndex => {
    return e => {
      e.preventDefault()
      if (slideIndex === newIndex) return
      const pages = newIndex - slideIndex
      paginate(pages)
    }
  }

  return (
    <>
      <Box display="flex" pb="8">
        {slides.map((slide, _slideIndex) => (
          <NavButton
            key={_slideIndex}
            active={slideIndex === _slideIndex}
            onClick={handleNavButtonClick(_slideIndex)}
          >
            <NavButtonBar />
          </NavButton>
        ))}
      </Box>
      <Box
        css={`
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          @media print {
            display: none;
          }
        `}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            css={`
              min-width: 100%;
              width: 100%;
            `}
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 50 },
              opacity: { duration: 0.2 },
              staggerChildren: 1,
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragStart={e => {
              //Set start of drag so we can differentiate between drag and nav click
              setIsDragging(true)
            }}
            onClick={e => {
              //Prevent navigation if we were dragging
              if (isDragging) {
                e.preventDefault()
                return false
              }
            }}
            onDragEnd={(e, { offset, velocity }) => {
              //Hacky way to run this after onClick. It's not foolproof, but it works
              setTimeout(() => {
                setIsDragging(false)
              })

              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          >
            {slides[slideIndex]}
          </motion.div>
        </AnimatePresence>
      </Box>
      {/*<div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>*/}

      {isPrint ? (
        <Box
          css={`
            display: none;
            @media print {
              display: block;
            }
          `}
        >
          {slides.map((slide, index) => (
            <React.Fragment key={index}>{slide}</React.Fragment>
          ))}
        </Box>
      ) : null}
    </>
  )
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}
