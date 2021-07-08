import styled from 'styled-components'

const FullImage = styled.img`
width: 100%;
margin-bottom: var(--Margin);
`

const Spanny = styled.div`
p{
color: #fff;
background-color: #222;
transform: rotate(90deg);
line-height: 0px;
margin: 0;
padding: 15px;
font-size: 14px;
:hover{
  cursor: pointer;
}
}
left: -32px;
position: relative;
top: 31px;
`

const Caption=styled.div`
top: 0;
background-color: #fff;
padding: var(--Margin);
width: 300px;
border: 2px solid;
border-left: none;


p{
  font-size: 14px;
  letter-spacing: 1px;

}

h2{
  font-size: 24px;
  margin-bottom: 15px;
}
`

const Relative = styled.div`
position: relative;
`

const Flexy = styled.div`
display: flex;
justify-content: flex-start;
position: absolute;
left: calc(var(--Margin) * -1);
transform: translateX(calc(-302px - (var(--Margin) * 2)));
transition: 0.35s ease-out;



&.halfer{
  left: 0;
}

&.shown{
  transform: translateX(0);
}
`

const HalfHold = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: var(--Margin);
margin-bottom: var(--Margin);

@media(max-width: 700px){
  grid-template-columns: 1fr;
  grid-row-gap: var(--Margin);
}
`

const HalfImg = styled.img`
width: 100%;
`

const Bottom = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: var(--Margin);
`

const Hold = styled.div`
  display: flex;
  margin: 0;
  overflow: hidden;
`

const Buttons = styled.div`
display: flex;
align-items: center;
margin-top: calc(var(--Margin) / 2);
h3{
  margin-right: var(--Margin);
  margin-bottom: 8px;
  :hover{
    cursor: pointer;
  }
}
`

const Full = styled.div`
position: relative;
min-width: 100%;
height: 0;
padding-top: 25;
transition: 0.25s linear;

&.square {
  padding-bottom: 100%;
}
&.sixteen-nine{
  padding-bottom: 56.25%;
}
&.four-three{
  padding-bottom: 75%;
}
`

const ColorBlock = styled.div`
width: 100%;

img{
  width: 100%;
}
`

const LilBlock = styled.div`
position: absolute;
top: 0; right: 0; bottom: 0; left: 0;
background-color: ${props => props.bg || "#000"};
`

export {Bottom, Hold, Buttons, Caption, Relative, Spanny, Flexy}

export {FullImage, HalfHold, HalfImg}

export {Full}

export {ColorBlock, LilBlock}
