import * as React from "react"
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
import { TransitionState } from "gatsby-plugin-transition-link"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import posed from 'react-pose'
import {Container, Intro, Spacer, Work, WorkImg} from '~/styles/homepageStyles'


// markup
const IndexPage = ({ data }) => {
  if(!data) return null
  const home = data.datoCmsHomepage
  return (
  <Container>
  <Intro><h1>{home.intro}</h1></Intro>

  <Work>
    {home.block.map((post, i) => {
      let linky;
      if(post.link !== null){
        linky = true
      }else linky = false

      return(
        <>
        {linky ?
          <Link to={post.link.url} className={post.model.apiKey}><WorkImg src={post.image.url} /></Link>
          :
          <WorkImg src={post.image.url} className={post.model.apiKey}/>
        }
        </>
    )
    })}


  </Work>
  </Container>

  )
}

export const query = graphql`
query MyQuery {
datoCmsHomepage {
  block {
    ... on DatoCmsHomepageFullImage {
      id
      model{
        apiKey
      }
      image {
        url
      }
      link {
        url
      }
    }
    ... on DatoCmsHomepageHalfImage {
      id
      model{
        apiKey
      }
      image {
        url
      }
      link {
        url
      }
    }
  }
  intro
}
}
`

export default IndexPage
