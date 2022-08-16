import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import {
  HomeContent,
  HomeDescription,
  HomeImage,
  HomePage,
  HomePost,
  HomeTitle,
  HomeButton,
} from '../../Utils/styles/homeStyle'

function Home() {
  const [post, setPost] = useState([])
  let navigate = useNavigate()
  //   useEffect(() => {
  //     if (!localStorage.getItem('loggedIn')) {
  //       localStorage.setItem('loggedIn', false)
  //     }
  //   }, [])

  useEffect(() => {
    axios.get('http://localhost:4200/post').then((response) => {
      setPost(response.data)
    })
  }, [])
  return (
    <HomePage>
      <HomeButton onClick={() => navigate(`/post`)}>
        Ajouter une nouvelle publication
      </HomeButton>
      {post.map((val, i) => {
        return (
          <HomePost key={i} onClick={() => navigate(`/post/${val.idpost}`)}>
            <HomeImage>image</HomeImage>
            <HomeContent>
              <HomeTitle>
                {val.title} par {val.author}
              </HomeTitle>
              <HomeDescription>{val.description}</HomeDescription>
              {/* <FontAwesomeIcon icon="fa-thin fa-thumbs-up" />
              <FontAwesomeIcon icon="fa-solid fa-thumbs-up" /> */}
            </HomeContent>
          </HomePost>
        )
      })}
    </HomePage>
  )
}

export default Home
