// On définit les différents rôles des utilisateurs et on détermine les autorisations pour les données protégées de l'API

import axios from 'axios'
import authHeader from './auth-header'

const URL_API = 'http://localhost:4200/test'

const getUserBoard = () => {
  return axios.get(URL_API + 'user', { headers: authHeader() })
}
const getAdminBoard = () => {
  return axios.get(URL_API + 'admin', { headers: authHeader() })
}

const UserService = {
  getUserBoard,
  getAdminBoard,
}

export default UserService()
