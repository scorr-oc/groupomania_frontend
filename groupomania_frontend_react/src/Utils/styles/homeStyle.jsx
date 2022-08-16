import styled from 'styled-components'
import colors from './colors'

export const HomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`
export const HomeButton = styled.button`
  font-size: 15px;
  margin-bottom: 20px;
  color: ${colors.tertiary};
  font-weight: bold;
  background-color: ${colors.secondary};
  opacity: 0.7;
  padding: 20px;
  border: none;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
    opacity: 1.2;
  }
`
export const HomePost = styled.div`
  width: 70%;
  border: 2px solid ${colors.tertiary};
  display: flex;
  flex-direction: column;
  padding: 1px;
  margin: 1%;
`
export const HomeImage = styled.div`
  flex: 60%;
  background-color: ${colors.secondary};
  margin: 3px;
`
export const HomeContent = styled.div`
  flex: 40%;
  margin: 3px;
  display: flex;
  flex-direction: column;
`

export const HomeTitle = styled.div`
  flex: 30%;
  color: ${colors.primary};
  text-align: center;
  border-bottom: 1px solid ${colors.secondary};
`
export const HomeDescription = styled.div`
  flex: 70%;
  color: ${colors.tertiary};
  font-size: 15px;
`
