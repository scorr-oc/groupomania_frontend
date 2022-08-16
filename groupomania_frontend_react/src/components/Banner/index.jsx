import { useEffect, useState } from 'react'
import logo from '../../assets/logo_svg.svg'
import { Container } from '../../Utils/styles/bannerStyle'
import { Logo } from '../../Utils/styles/bannerStyle'
import { Styledlinked } from '../../Utils/styles/bannerStyle'

function Banner() {
  return (
    <Container>
      <Logo src={logo} alt="logo Groupomania" />
      <nav>
        <Styledlinked to="/signup">S'inscrire</Styledlinked>
        <Styledlinked to="/login">Se connecter</Styledlinked>
        <Styledlinked to="/login">Déconnexion</Styledlinked>
      </nav>
    </Container>
  )
}

export default Banner
