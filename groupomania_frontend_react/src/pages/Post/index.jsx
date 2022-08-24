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
  const [picture, setPicture] = useState(null)
  const [filePicture, setFilePicture] = useState()
  const [message, setMessage] = useState('')

  const handlePost = (e) => {
    if (title || description || picture) {
      // on récupère les données à envoyer au back
      const data = new FormData()
      data.append('title', title)
      data.append('description', description)
      // on vérifie qu'il y ait bien une photo
      if (filePicture) data.append('image', filePicture)

      axios.post('http://localhost:4200/post', data).then(
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
    } else {
      alert('Veuillez rentrer un message')
    }
  }

  // e.preventDefault()
  // axios
  //   .post('http://localhost:4200/post', {
  //     title,
  //     description,
  //   })

  // }

  const handlePicture = (e) => {
    // on passe la photo dans picture pour pouvoir l'afficher
    setPicture(URL.createObjectURL(e.target.files[0]))
    // on récupère l'image pour l'envoyer dans la base de données
    setFilePicture(e.target.files[0])
  }

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
          name="image"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => handlePicture(e)}
        />
      </FormPost>
      <PostButton type="submit" onClick={handlePost}>
        PUBLIER
      </PostButton>
      <FormError>{message}</FormError>
    </PagePost>
  )
}

export default CreatePost
