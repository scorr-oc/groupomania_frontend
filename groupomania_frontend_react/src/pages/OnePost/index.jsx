import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  PostPage,
  PostImage,
  PostTitle,
  PostContent,
  PostDescription,
  OnePostPage,
  PostModify,
  PostModifyButton,
} from '../../Utils/styles/onePostStyle'

function OnePost() {
  let { id } = useParams()
  let navigate = useNavigate()
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:4200/post/${id}`).then((response) => {
      setPost(response.data)
    })
  }, [id])

  function deletePost(e) {
    axios.delete(`http://localhost:4200/post/${id}`).then(() => {
      navigate('/home')
    })
  }

  return (
    <OnePostPage>
      <PostPage>
        <PostImage>image</PostImage>
        <PostContent>
          <PostTitle>{post.title}</PostTitle>
          <PostDescription>{post.description}</PostDescription>
          {/* <FontAwesomeIcon icon="fa-thin fa-thumbs-up" />
              <FontAwesomeIcon icon="fa-solid fa-thumbs-up" /> */}
        </PostContent>
      </PostPage>
      <PostModify>
        <PostModifyButton>Modifier</PostModifyButton>
        <PostModifyButton onClick={deletePost}>Supprimer</PostModifyButton>
      </PostModify>
    </OnePostPage>
  )
}

export default OnePost
