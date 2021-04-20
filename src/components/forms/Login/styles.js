import styled from 'styled-components'

export const Links = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: ;
  }

  a:hover {
    color: ${props => props.theme.colors.primary};
  }
`
