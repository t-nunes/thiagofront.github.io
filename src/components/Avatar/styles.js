import styled, { css } from "styled-components"

/**
 * Função que lida com o tamanho do avatar
 * @param {string|number} size
 */
const mixinSize = ({ size }) => {
  // Verifica se tem um tamanho
  // se tiver seta o tamanho tanto pra width e height
  if (size) {
    return css`
      width: ${size}px;
      height: ${size}px;
    `
  }

  // Caso não tenha um size definido
  // Deixa o avatar 'responsivo'
  return css`
    width: 100%;
  `
}

// Styles
export const Wrapper = styled.img`
  ${mixinSize};
  border-radius: 50%;
  object-fit: cover;
`
