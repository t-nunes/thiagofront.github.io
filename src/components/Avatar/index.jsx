import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "./styles"

function Avatar({ url, size }) {
  return <Wrapper src={url} size={size} alt="avatar" />
}

Avatar.defaultProps = {
  size: null,
}

Avatar.propTypes = {
  size: PropTypes.string,
}

export default Avatar
