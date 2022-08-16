import React from 'react'
import Banner from './components/Banner'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Signup from './pages/Signup'
import Login from './pages/Login'
import Post from './pages/Post'
import Home from './pages/Home'
import OnePost from './pages/OnePost'
import axios from 'axios'

const GlobalStyle = styled.main`
  font-family: 'Lato', Helvetica, sans-serif;
  font-size: 20px;
`

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`

  return config
})
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle>
        <Banner />
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<OnePost />} />
        </Routes>
      </GlobalStyle>
    </BrowserRouter>
  )
}

export default App
