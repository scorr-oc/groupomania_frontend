// authHeader() : permet de récupérer le token envoyé par le backend pour gérer les autorisations de l'utilisateur loggé dans le localStorage

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.token) {
    return { 'x-access-token': user.token }
  } else {
    return {}
  }
}
