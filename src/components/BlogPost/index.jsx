import React from "react"
import PropTypes from "prop-types"
import { Wrapper, Text } from "./styles"

function BlogPost({ image, text }) {
  return (
    <Wrapper>
      <img src={image} alt="" />
      <Text>{text}</Text>
    </Wrapper>
  )
}

BlogPost.defaultProps = {
  image: null,
  text: null,
}

BlogPost.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
}

export default BlogPost
