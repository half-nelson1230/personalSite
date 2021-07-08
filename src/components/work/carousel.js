import * as React from 'react'
import {useState} from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Bottom, Hold, Buttons} from './blocksStyles'

export const Carousel = (props) => {
const [activeIndex, setActiveIndex] = useState(0);

let slidePrev;
if(activeIndex > 0){slidePrev = () => setActiveIndex(activeIndex - 1)}

let slideNext;
if(activeIndex < props.piccies.length - 1){slideNext = () => setActiveIndex(activeIndex + 1)}

const onSlideChanged = ({ item }) => setActiveIndex(item);

return(
  <>
  <Hold>
  <AliceCarousel
        autoWidth
        items={props.piccies}
        activeIndex={activeIndex}
        onSlideChanged={onSlideChanged}
        disableDotsControls
        disableButtonsControls
    />
    </Hold>
    <Bottom>
    <Buttons>
      <h3 onClick={slidePrev}>&larr;</h3>
      <h3 onClick={slideNext}>&rarr;</h3>
    </Buttons>
      <h3>{activeIndex + 1}/{props.piccies.length}</h3>
    </Bottom>
    </>
)

}
