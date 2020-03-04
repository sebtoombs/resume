import styled from "styled-components"
import css from "@styled-system/css"

const Link = styled("a")(
  css({
    color: "text",
    backgroundImage: props => {
      return `linear-gradient(transparent 0%,transparent calc(50% - 6px),${props.colors.accent}c0 calc(50% - 6px),${props.colors.accent}c0 100%)`
    },
    transition:
      "background-position 120ms ease-in-out,padding 120ms ease-in-out",
    backgroundSize: "100% 200%",
    backgroundPosition: "0 0",
    textDecoration: "none",
    "&:hover": {
      backgroundImage: props => {
        return `linear-gradient(transparent 0%,transparent calc(50% - 6px),${props.colors.accent} calc(50% - 6px),${props.colors.accent} 100%)`
      },
      backgroundPosition: "0 20%",
    },
  })
)
export default Link
