import styled from 'styled-components'
import colors from './colors'

export const PagePost = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`
export const FormPost = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputPost = styled.input`
  margin: 15px 0px 15px 0px;
  width: 700px;
  height: 30px;
  color: ${colors.tertiary};
`
export const LabelPost = styled.label`
  display: flex;
  justify-content: center;
  color: ${colors.primary};
`
export const PostButton = styled.button`
  margin-top: 30px;
  width: 30%;

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
