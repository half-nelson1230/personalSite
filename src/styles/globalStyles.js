import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  --Margin: 30px;
  --gray: #A4A4A4;

  @media(max-width: 900px){
    --Margin: 20px;
  }

  --fullWidth: 100%;
  --halfWidth: 50%;
}

/* Main */
html, body{
  margin: 0;
}

body{
  &.nav-switch{
    .navPosition{
      position: absolute;
      margin-top: var(--Margin);
      width: calc(50% - (var(--Margin) * 2));
      @media(max-width: 850px){
        position: relative;
        width: 100%;
      }
    }

  }
}

button{
  border: none;
  background: none;
  margin: 0;
}

/* Type */
h1, h2, h3, h4, h5, h6, p, a, ul, li{
  margin: 0;
}

h1{
  font-family: degular-display, sans-serif;
  font-weight: 700;
}

h2{
  font-family: degular-display, sans-serif;
  font-weight: 700;
  font-size: 72px;
}

h3{
  font-family: degular-display, sans-serif;
  font-weight: 700;
  }

h4{
  font-family: degular-text, sans-serif;
  font-weight: 400;
}

p, ul, li, a{
  font-family: degular-text, sans-serif;
  font-weight: 400;
  font-size: 16px;
}

ul, li{
  list-style: none;
  text-decoration: none;
  padding: 0;
}

a{
  color: inherit;
  text-decoration: none;
}

/* classes */
.gray{
  color: var(--gray);
}

.container{
  width: calc(100% - var(--Margin)*2);
  margin: 0 auto;
}

.alice-carousel__wrapper{
  height: 90vh;
  img{
    height: 100%;
    object-fit: contain;
    padding-right: var(--Margin);
  }
  @media(max-width: 850px){
    height: 90vw;

    img{
      object-fit: cover;
      max-width: calc(100vw - var(--Margin) * 2);
    }
  }
}

.alice-carousel__stage{
  transition: transform 400ms ease !important;
}

.alice-carousel{
  margin: 0;
}


//gridStyles
.full{
  grid-column: auto / span 6;
}

.half{
    grid-column: auto / span 3;
    @media(max-width: 600px){
      grid-column: auto / span 6;
    }
}

.third{
    grid-column: auto / span 2;
    @media(max-width: 600px){
      grid-column: auto / span 6;
    }
}

.two-thirds{
  grid-column: auto / span 4;
  @media(max-width: 600px){
    grid-column: auto / span 6;
  }
}

.react-player {
  position: absolute;
  top: 0;
  left: 0;

  span{
    left:0;
    top:0;
    height:100% !important;
    width:100% !important;
    position:absolute;

    iframe{
      height:100% !important;
      width:100% !important;

    }
  }

}


`

export default GlobalStyle;
