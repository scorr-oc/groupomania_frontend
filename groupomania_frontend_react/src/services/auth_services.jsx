import axios from 'axios'

// AuthService () : requêtes HTTP gérant l'inscription et les données de connexion, gestion du token dans le localstorage

const URL_API = 'http///localhost:4200/auth/'

/* 
login(): requête POST pour se connecter et sauvegarde le token dans le localStorage
logout(): supprime le token du localStorage
signup(): requête POST pour la création de l'user
informationUser(): sauvergarde les informations de l'user
*/
const login = (email, password) => {
  return axios
    .post(URL_API + 'login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
}
const logout = () => {
  localStorage.removeItem('user')
}
const signup = (email, password) => {
  return axios.post(URL_API + 'signup', {
    email,
    password,
  })
}
const informationUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

const AuthService = {
  login,
  logout,
  signup,
  informationUser,
}

export default AuthService
