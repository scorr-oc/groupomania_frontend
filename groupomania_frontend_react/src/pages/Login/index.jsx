import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../services/auth_services'

import { PageSignup } from '../../Utils/styles/connexionStyle'
import { FormSignup } from '../../Utils/styles/connexionStyle'
import { FormLabel } from '../../Utils/styles/connexionStyle'
import { FormInput } from '../../Utils/styles/connexionStyle'
import { FormButton } from '../../Utils/styles/connexionStyle'

function Login() {
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submit(e) {
    e.preventDefault()
    // axios
    //   .post('http://localhost:4200/auth/login', {
    //     email: emailValue,
    //     password: passwordValue,
    //   })
    AuthService.login(email, password).then(() => {
      navigate('/post')
      window.location.reload()
    })
  }

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
      </FormSignup>
    </PageSignup>
  )
}

export default Login
