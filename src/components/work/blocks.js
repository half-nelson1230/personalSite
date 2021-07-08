import * as React from 'react'
import {useState} from 'react'
import {FullImage, HalfHold, HalfImg, Full, Caption, Relative, Spanny, Flexy, ColorBlock, LilBlock} from './blocksStyles'
import ReactPlayer from 'react-player'

const Information = (props) => {
  const [info, infoToggle] = useState(false)

  const click = () =>{
    infoToggle(!info)
  }

  let checkToggle;
  if(info === true){
    checkToggle = 'shown'
  }else checkToggle = ''

  return(
    <Flexy className={`${props.class} ${checkToggle} `}><Caption dangerouslySetInnerHTML={{__html: `${props.cappy}`}}/><Spanny><p onClick={click}>more info</p></Spanny></Flexy>
  )
}

export const FullImg = (props) => {
  const cap = props.caption;
  return(
    <Relative>
    {cap === null ? null : <Information cappy={props.caption}/>}
    <FullImage src={props.image}/>
    </Relative>
  )
}

export const HalfImages = (props) => {
  const cap = props.caption;
  console.log(cap)
  return(
    <div>
    {cap === null ? null : <Information class="halfer" cappy={props.caption}/>}
    <HalfHold>
      <HalfImg src={props.image1}/>
      <HalfImg src={props.image2}/>
    </HalfHold>
    </div>
  )
}

export const Video = (props) => {
  const cap = props.caption;
  return(
    <Full className={props.ratio}>
    {cap === null ? null : <Information cappy={props.caption}/>}
    <ReactPlayer url={props.vid}
        className="react-player"
        width='100%'
        height='100%'
        config={{
            youtube: {
              playerVars: { modestbranding: 1 }
                      },
            vimeo: {
              playerOptions:{
                autoplay: 'true',
                muted: 'true',
                controls: 'false',
                loop: 'true',
                background: 'true'
              }
                  }
              }}/>
    </Full>
  )
}

export const ColorBlocks = (props) => {
  const cap = props.caption;
  const [timer, addTime] = useState(0);
  const interval = props.interval * 1000

  if(timer === props.slides.length - 1){
    setTimeout(() => {addTime(0)}, interval);
  }else{
    setTimeout(() => {addTime(timer + 1)}, interval);
  }

  return(
    <>
    {cap === null ? null : <Information class="halfer" cappy={props.caption}/>}
    <ColorBlock>
      {props.slides[timer]}
    </ColorBlock>
    </>
  )
}
