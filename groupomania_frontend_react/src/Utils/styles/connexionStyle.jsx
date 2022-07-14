import styled from 'styled-components'
import colors from './colors'

export const PageSignup = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FormSignup = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`

export const FormInput = styled.input`
  margin: 15px 0px 15px 0px;
  width: 700px;
  height: 30px;
  color: ${colors.tertiary};
`
export const FormLabel = styled.label`
  color: ${colors.primary};
`
export const FormButton = styled.button`
  margin-top: 30px;
  margin-left: 275px;
  font-size: 15px;
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
