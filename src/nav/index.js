import * as React from 'react'
import {Container, Name, Links} from './styles'
import {Link} from 'gatsby'

const Nav = () => {
  return(
    <Container className="navPosition">
      <Link to='/'>
        <Name>
        <h2>Al Nelson</h2>
        <h4>Branding & Design</h4>
        </Name>
        </Link>

        <Links>
        <a>work</a>
        <a>about</a>
        <a>contact</a>
        </Links>
    </Container>
  )
}

export default Nav
