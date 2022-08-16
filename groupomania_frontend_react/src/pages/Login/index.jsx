import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '../../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../services/auth_services'

import {
  PageSignup,
  FormSignup,
  FormLabel,
  FormInput,
  FormButton,
  FormError,
} from '../../Utils/styles/connexionStyle'

function Login() {
  const { setAuth } = useContext(AuthContext)
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function submit(e) {
    e.preventDefault()
    AuthService.login(email, password)
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
  useEffect(() => {
    if (!localStorage.getItem('loggedIn')) {
      localStorage.setItem('loggedIn', false)
    }
  }, [])

  return (
    <PageSignup>
      <FormSignup>
        <FormLabel>Email</FormLabel>
        <FormInput
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel>Mot de passe</FormLabel>
        <FormInput
          type="password"
          placeholder="Mot de passe"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormButton type="submit" onClick={submit}>
          SE CONNECTER
        </FormButton>
        <FormError>{message}</FormError>
      </FormSignup>
    </PageSignup>
  )
}

export default Login
