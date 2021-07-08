import styled from 'styled-components'
import posed from 'react-pose'

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  top: calc(var(--Margin) * -1);
  min-height: 600px;
  height: 100vh;
  position: relative;
  width: calc(100% + var(--Margin));
  margin-bottom: 0;
  justify-content: space-between;
  @media(max-width: 850px){
    height: fit-content;
    max-height: fit-content;
    width: 100%;
    align-items: stretch;
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`

const LeftPose = posed.div({
  hidden: {
    opacity: 0,
    transition: {
    default: { ease: 'easeIn', duration: 400 }

      },
   },
 visible: {
   opacity: 1,
  transition: {
      default: { ease: 'easeIn', duration: 400, delay: 500 },
      opacity: {duration: 600, delay: 200},
    },
 },
})

const Left = styled(LeftPose)`
  width: 50%;
  position: relative;
  flex-wrap: wrap;
  display: flex;
  height: 100vh;
  min-height: 600px;
  align-items: center;
  overflow: hidden;

  @media(max-width: 850px){
    width: 100%;
    margin-top: var(--Margin);
    margin-left: 0;
    margin-bottom: var(--Margin);
    min-height: auto;
    height: 100%;
  }

`

const Right = styled.div`
width: 50%;
margin-left: var(--Margin);

`

const Text = styled.div`
  h2, p, ul{
    margin: 10px 0;
  }

  ul{
    @media(max-width: 1000px){
      margin: 0 calc(var(--Margin) * 2) 0 0;

    }
  }

  li{
      line-height: 22px;
      font-size: 14px;
      strong{
        color: var(--gray);
        font-weight: 400;
      }
  }

  p{
    width: 66%;
    margin-bottom: 30px;
    @media(max-width: 1100px){
      width: 100%;
    }
    @media(max-width: 850px){
      padding-right: 33%;
    }
    @media(max-width: 500px){
      width: 100%;
      padding-right: 0;
    }
  }

  div{
    @media(max-width: 1000px){
      display: flex;
      flex-wrap: wrap;
    }
  }

`

const QuickJump = styled.div`

position: absolute;
text-align: right;
bottom: var(--Margin);
right: 0;
line-height: 22px;


li{
  font-size: 12px;
}


`

const FeatureImgPose = posed.img({

  hidden: {
    opacity: 0,
    width: '60%',
    marginLeft: 0,
    transition: {
        default: { ease: 'easeIn', duration: 400 }
      },
   },
 visible: {
   opacity: 1,
   marginLeft: 'var(--Margin)',
  width: 'calc(50% - var(--Margin))',
  transition: {
      opacity: {duration: 600},
      width: {delay: 100, duration: 800}
    },
 },
})

const FeatureVidPose = posed.div({

  hidden: {
    opacity: 0,
    width: '60%',
    marginLeft: 0,
    transition: {
        default: { ease: 'easeIn', duration: 400 }
      },
   },
 visible: {
   opacity: 1,
   marginLeft: '0',
  width: 'calc(50% - var(--Margin))',
  transition: {
      opacity: {duration: 600},
      width: {delay: 100, duration: 800}
    },
 },
})

const FeatureImg = styled.img`
  margin-left: var(--Margin);
  height: 100vh;
  min-height: 600px;
  object-fit: cover;
  z-index: 10;
  width: 50%;
  min-width: 50%;
  max-width: 50%;
  object-position: center;
  @media(max-width: 850px){
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: auto;
    object-position: center;
    margin-left: 0;
  }
`

const VidHold = styled(FeatureVidPose)`
margin-left: var(--Margin);
height: 100%;
width: calc(50% - var(--Margin));
object-fit: cover;
position: absolute;
z-index: 10;
object-position: left;
overflow: hidden;

video{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media(max-width: 850px){
  width: 100%;
  height: auto;
  object-position: left;
  margin-left: 0;
}
div{
  &.react-player{
    right: 0;
    width: 100%;
    div{
      width: 200% !important;
      margin-left: -50%;
    }
  }
}

}
`

export {Container, VidHold, Right, Left, Text, QuickJump, FeatureImg}
