import styled, { css } from "styled-components"

export const buttonColors = ({ color }) => {
  switch (color) {
    case "primary":
      return css`
        color: #000;
        background-color: #ffc400;

        &:hover {
          background-color: #d4a300;
        }
      `
    default:
      return css``
  }
}

export const Wrapper = styled.button`
  display: inline-block;
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  ${buttonColors}
`
