import styled from 'styled-components'
import colors from './colors'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${colors.tertiary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px 0px 0px black;
`
export const Logo = styled.img`
  width: 30%;
`
export const Styledlinked = styled(Link)`
  text-decoration: none;
  color: ${colors.secondary};
  padding-left: 15px;
  padding-right: 15px;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`
