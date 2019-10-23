import React from "react"
import { Wrapper } from "./styles"

function Button({ as, href, size, color, children, type }) {
  return (
    <Wrapper as={as} href={href} size={size} type={type} color={color}>
      {children}
    </Wrapper>
  )
}

export default Button
