import { useState } from 'react'

import {
  PageSignup,
  FormSignup,
  FormLabel,
  FormInput,
  FormButton,
  FormError,
} from '../../Utils/styles/connexionStyle'

import AuthService from '../../services/auth_services'
import { useNavigate } from 'react-router-dom'

function Signup() {
  let navigate = useNavigate()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const [message, setMessage] = useState('')

  function submit(e) {
    e.preventDefault()
    AuthService.signup(emailValue, passwordValue).then(
      () => {
        navigate('/login')
        alert('Utilisateur créé, merci de vous connecter')
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

  return (
    <PageSignup>
      <FormSignup>
        <FormLabel>Email</FormLabel>
        <FormInput
          type="email"
          placeholder="Email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <FormLabel>Mot de passe</FormLabel>
        <FormInput
          type="password"
          placeholder="Mot de passe"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />

        <FormButton
          disabled={!emailValue || !passwordValue ? true : false}
          type="submit"
          onClick={submit}
        >
          S'INSCRIRE
        </FormButton>
        <FormError>{message}</FormError>
      </FormSignup>
    </PageSignup>
  )
}

export default Signup
