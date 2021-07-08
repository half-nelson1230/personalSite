import * as React from 'react'
import GlobalStyle from '~/styles/globalStyles'
import Nav from '~/nav/index'
import {Container} from './styles'

const Layout = ({children}) => {
  return(
    <Container>
    <GlobalStyle/>
    <Nav/>
    {children}
    </Container>
  )
}

export default Layout
