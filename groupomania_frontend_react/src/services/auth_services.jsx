import axios from 'axios'

// AuthService () : requêtes HTTP gérant l'inscription et les données de connexion, gestion du token dans le localstorage

/* 
login(): requête POST pour se connecter et sauvegarde le token dans le localStorage
logout(): supprime le token du localStorage
signup(): requête POST pour la création de l'user
informationUser(): sauvergarde les informations de l'user
*/

const login = (email, password) => {
  return axios
    .post('http://localhost:4200/auth/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.loggedIn && response.data.token) {
        localStorage.setItem('loggedIn', true)
        localStorage.setItem('token', response.data.token)
      }
      return response.data
    })
}
const logout = () => {
  localStorage.removeItem('token')
}
const signup = (email, password) => {
  return axios.post('http://localhost:4200/auth/signup', {
    email,
    password,
  })
}
const informationUser = () => {
  return JSON.parse(localStorage.getItem('token'))
}

const AuthService = {
  login,
  logout,
  signup,
  informationUser,
}

export default AuthService
