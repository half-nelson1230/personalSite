import * as React from 'react'
import {graphql} from 'gatsby'
import TopBlock from '~/components/work/topBlock'
import Helmet from 'react-helmet'
import { StructuredText } from 'react-datocms';
import {FullImg, HalfImages, Video, ColorBlocks} from '~/components/work/blocks'
import {Carousel} from '~/components/work/carousel'

const WorkTemplate = ({data}) => {
  const work = data.datoCmsWork

  const Blocks = () => {
    return(
      <>
      {work.content.map((block, i) => {
        let cap;
        if(block.caption.length > 0){
          cap = block.caption
        }else cap = null

        if(block.model.apiKey === "work_full_image"){
          return(<FullImg image={block.image.url} caption={cap}/>)
        }else if(block.model.apiKey==="work_half_image"){
          return(<HalfImages image1={block.image1.url} image2={block.image2.url} caption={cap}/>)
        }else if(block.model.apiKey==="work_slideshow"){
          return(<Carousel caption={block.caption}  piccies={
            block.images.map((pic) => (<img src={pic.url}/>))
          }/>)
        }else if(block.model.apiKey==="work_video"){
          return(<Video vid={block.video.url} ratio={block.ratio} caption={cap}/>)
        }else if(block.model.apiKey==="work_animated"){
          return(<ColorBlocks caption={cap} interval={block.interval} slides={
            block.images.map((pic) => (<img src={pic.url}/>))
          }/>)
        }
        else return null
      })}</>
    )
  }

  return(
      <div>
      <Helmet>
      <body class='nav-switch' />
      </Helmet>
      <TopBlock
      title={work.title}
      description = {work.description}
      image = {work.topImage.url}
      video = {''}
      collaborators = {work.collaborators}
      categories = {work.categories}
      />
      <Blocks/>
      </div>
  )
}

export const query = graphql`
query($url: String!) {
  datoCmsWork(url: {eq: $url}) {
    collaborators
    title
    topImage {
      url
    }
    url
    description
    categories
    content {
      ... on DatoCmsWorkFullImage {
        id
        image {
          url
        }
        model{
          apiKey
        }
        caption
      }
      ... on DatoCmsWorkSlideshow {
        id
        images {
          url
        }
        model{
          apiKey
        }
        caption
      }
      ... on DatoCmsWorkAnimated {
        id
        images {
          url
        }
        model{
          apiKey
        }
        caption
        interval
      }
      ... on DatoCmsWorkHalfImage {
        id
        image1 {
          url
        }
        image2 {
          url
        }
        model{
          apiKey
        }
        caption
      }
      ... on DatoCmsWorkVideo {
        id
        ratio
        video {
          url

        }
        model{
          apiKey
        }
        caption
      }
    }
  }
}
`

export default WorkTemplate
