import styled from "styled-components"

const Section = styled("section")({
  "@media print": {
    "page-break-after": "always",
  },
})

export default Section
