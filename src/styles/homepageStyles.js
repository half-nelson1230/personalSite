import styled from 'styled-components'

const Container = styled.div`
`


const Bg=styled.div`
position: fixed;
top: 0; right: 0; bottom: 0; left: 0;
background-color: #fff;
z-index: -1;
`


const Intro = styled.div`
h1{
  padding: 160px 0;
  font-size: 32px;
  width: 83%;
  max-width: 900px;
  font-family: degular-text, sans-serif;
  font-weight: 400;
  }

@media(max-width: 850px){
  h1{
    padding: 50px 0;
    font-size: 28px;
  }
}

@media(max-width: 600px){
  h1{
    width: 100%;
  }
}
`

const Spacer = styled.div`
width: var(--Margin);
`

const gap = 'calc(var(--Margin) / 5)';
const base = 'calc(100% / 6)';
const column = `${base - gap}`;

const Work = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-column-gap: var(--Margin);
grid-row-gap: var(--Margin);

a{
  &.homepage_full_image{
    grid-column: auto / span 6;
  }

  &.homepage_half_image{
    grid-column: auto / span 3;

    @media(max-width: 600px){
      grid-column: auto / span 6;
    }
  }
}
`

const WorkImg = styled.img`
width: 100%;
&.homepage_full_image{
  grid-column: auto / span 6;
}

&.homepage_half_image{
  grid-column: auto / span 3;

  @media(max-width: 600px){
    grid-column: auto / span 6;
  }
}
`

export {Container, Spacer, WorkImg, Work, Intro}
