import * as React from "react"
import {useState} from "react"
import styled from 'styled-components'
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link"
import ReactPlayer from 'react-player'
import {Container, VidHold, Right, Left, Text, QuickJump, FeatureImg} from './topBlockStyles'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';


export default function TopBlock(props){
  const vid = props.video
  const breakpoints = useBreakpoint();

  let vidCheck

  if(vid === null){
    vidCheck = false
  } else if(vid === ''){
    vidCheck= false
  }
  else vidCheck = true
  return(

          <Container>
          <FeatureImg src={props.image}/>
          <Left
        >
              <Text>
                <h2>{props.title}</h2>
                <div>
                <p>{props.description}</p>
                <div dangerouslySetInnerHTML={{__html: `${props.categories}`}}/>
                {breakpoints.sm ? <div dangerouslySetInnerHTML={{__html: `${props.collaborators}`}}/> : null}
                </div>
              </Text>
              {breakpoints.sm ? null :
                <QuickJump>
                  <div dangerouslySetInnerHTML={{__html: `${props.collaborators}`}}/>
                </QuickJump>
              }

          </Left>
          </Container>


  )
}
