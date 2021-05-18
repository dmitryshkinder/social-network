import styled from 'styled-components'
import backgroundImage from './img/bg.jpg'

export const Main = styled.div`
  & {
    display: flex;
    align-items: stretch;
  }
`
export const RightContent = styled.div`
  padding: 35px;

  & {
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 600px;
    width: 100%;
    color: ${props => props.theme.colors.fontDark};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    color: ${props => props.theme.colors.fontGray};
    font-size: ${props => props.theme.colors.small};
  }

  footer {
    color: ${props => props.theme.colors.fontGrayDark};
  }
`
export const Logo = styled.img`
  & {
    width: 159px;
    height: 56px;
    margin-bottom: ${props => props.theme.unit.eight};
  }
`
export const LeftContent = styled.div`
  margin: auto;
  display: flex;
  justify-content: start;
  max-width: 480px;
  min-height: 100vh;
  flex-direction: column;
  position: relative;

  & {
    width: 100%;
    justify-content: flex-start;
  }

  p,
  a {
    color: ${props => props.theme.colors.fontGrayLight};
  }

  h2 + p,
  h2 {
    text-align: center;
  }

  h2 {
    margin-bottom: 0;
  }
`
export const SignLink = styled.div`
  p {
    font-size: ${props => props.theme.fontSizes.small};
  }

  && {
    margin-bottom: ${props => props.theme.unit.eight};
    color: ${props => props.theme.colors.fontGrayLight};
    text-align: right;

    a {
      color: ${props => props.theme.colors.primary};
    }

    a:hover {
      color: ${props => props.theme.colors.primaryHover};
    }
  }
`

export const WelcomeMessage = styled.div`
  p {
    color: ${props => props.theme.colors.fontGrayDark};
  }
`
