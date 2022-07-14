import { useState } from 'react'

import { PageSignup } from '../../Utils/styles/connexionStyle'
import { FormSignup } from '../../Utils/styles/connexionStyle'
import { FormLabel } from '../../Utils/styles/connexionStyle'
import { FormInput } from '../../Utils/styles/connexionStyle'
import { FormButton } from '../../Utils/styles/connexionStyle'

import axios from 'axios'

function Signup() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  console.log(emailValue)
  console.log(passwordValue)
  function submit(e) {
    e.preventDefault()
    axios
      .post('http://localhost:4200/auth/signup', {
        email: emailValue,
        password: passwordValue,
      })
      .then((res) => {
        console.log(res)
      })
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
        <FormButton type="submit" onClick={submit}>
          S'INSCRIRE
        </FormButton>
      </FormSignup>
    </PageSignup>
  )
}

export default Signup
