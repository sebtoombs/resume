import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

// only render content on client
// potentially only render on an interactive client
// useful to help limit phone/email scraping

const ClientOnlyContent = ({ children, ...props }) => {
  const [shouldRender, setShouldRender] = useState(false)

  const onInteraction = () => {
    window.removeEventListener("scroll", onInteraction)
    setShouldRender(true)
  }

  useEffect(() => {
    window.addEventListener("scroll", onInteraction)

    //Remove the listener if not alreadt removed
    return () => {
      window.removeEventListener("scroll", onInteraction)
    }
  }, [])

  if (!shouldRender) return null
  return children
}

ClientOnlyContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ClientOnlyContent
