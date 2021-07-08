import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 9;
  top: 0;
`

const Name = styled.div`
  h2{
    font-size: 24px;
  }

  h4{
    font-size: 16px;
    color: var(--gray);
  }
`

const Links = styled.div`
  a{
    margin-left: var(--Margin);
  }
`

export {Container, Name, Links}
