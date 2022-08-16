import styled from 'styled-components'
import colors from './colors'

export const OnePostPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`
export const PostPage = styled.div`
  width: 70%;
  height: 120%;
  border: 2px solid ${colors.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1px;
  margin: 1%;
`
export const PostImage = styled.div`
  width: auto;
  background-color: ${colors.secondary};
  margin: 3px;
`
export const PostContent = styled.div`
  height: 60%;
  margin: 3px;
  display: flex;
  flex-direction: column;
`

export const PostTitle = styled.div`
  height: 20%;
  color: ${colors.primary};
  text-align: center;
  border-bottom: 1px solid ${colors.secondary};
`
export const PostDescription = styled.div`
  height: 80%;
  color: ${colors.tertiary};
  font-size: 15px;
`

export const PostModify = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`
export const PostModifyButton = styled.button`
  margin-top: 30px;
  margin-right: 15px;
  width: 45%;
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
