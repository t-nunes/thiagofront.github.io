import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "./styles"

function Label({ children }) {
  return <Wrapper>{children}</Wrapper>
}

Label.defaultProps = {
  children: PropTypes.node,
}

Label.defaultProps = {
  children: null,
}

export default Label
