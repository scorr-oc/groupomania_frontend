import React from 'react'
import { useState } from 'react'
import {
  FormPost,
  InputPost,
  LabelPost,
  PagePost,
  PostButton,
} from '../../Utils/styles/postStyle'
import axios from 'axios'
import { FormError } from '../../Utils/styles/connexionStyle'
import { useNavigate } from 'react-router-dom'

function CreatePost() {
  let navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [message, setMessage] = useState('')
  // const [postImage, setPostImage] = useState(null)
  console.log(title)
  console.log(description)

  function submit(e) {
    e.preventDefault()
    axios
      .post('http://localhost:4200/post', {
        title,
        description,
        image,
      })
      .then(
        () => {
          navigate('/home')
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          setMessage(resMessage)
        }
      )
  }

  // const handlePicture = (e) => {
  //   setPostImage(URL.createObjectURL(e.target.files[0]))
  //   setImage(e.target.files[0])
  // }

  return (
    <PagePost>
      <LabelPost>Ajouter une publication</LabelPost>
      <FormPost>
        <InputPost
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputPost
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputPost
          type="file"
          id="file-upload"
          name="file"
          accept=".jpg, .jpeg, .png"
          // onChange={(e) => handlePicture(e)}
        />
      </FormPost>
      <PostButton type="submit" onClick={submit}>
        PUBLIER
      </PostButton>
      <FormError>{message}</FormError>
    </PagePost>
  )
}

export default CreatePost
