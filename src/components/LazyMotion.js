import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import useOnBeforePrint from "@util/onBeforePrint"

const LazyMotion = ({ delay = 0, once = false, ...props }) => {
  const [ref, inView] = useInView({
    rootMargin: "-100px 0px",
  })

  const [shouldAnimate, setShouldAnimate] = useState(inView)
  const [hasAnimated, setHasAnimated] = useState(inView)

  useEffect(() => {
    if (once && hasAnimated) return
    //Toggle
    if (inView !== shouldAnimate) {
      setShouldAnimate(inView)
      if (!hasAnimated && inView) setHasAnimated(true)
    }
  }, [inView])

  useOnBeforePrint(() => {
    //console.log("print!")
    setShouldAnimate(true)
  })

  //Todo animate once

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={{
        hidden: {
          y: 20,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delay,
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      {...props}
    />
  )
}
export default LazyMotion
