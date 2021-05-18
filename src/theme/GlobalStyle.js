import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');

  body {
    margin: 0;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.fontLight};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-family: ${props => props.theme.fontFamily};
    box-sizing: border-box;
  }

  main {
    padding-left: ${props => props.theme.unit.double};
    padding-right: ${props => props.theme.unit.double};
    padding-top: ${props => props.theme.unit.quadriple};
    padding-bottom: ${props => props.theme.unit.quadriple};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin-bottom: ${props => props.theme.unit.single}
  }

  p {
    font-size: ${props => props.theme.fontSizes.normal}
    font-weight: ${props => props.theme.fontWeights.normal};
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.colors.fontLight}
  }

  a:hover {
    color: ${props => props.theme.colors.fontLight}
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.weryBig}
  }
`
