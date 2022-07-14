import React from 'react'
import Banner from './components/Banner'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Signup from './pages/Signup'
import Login from './pages/Login'
import Post from './pages/Post'

const GlobalStyle = styled.div`
  font-family: 'Lato', Helvetica, sans-serif;
  font-size: 20px;
`
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle>
        <Banner />
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </GlobalStyle>
    </BrowserRouter>
  )
}

export default App
