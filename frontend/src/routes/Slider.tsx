import styled from 'styled-components';
import { useState } from 'react';
const Slider = () => {
  const [moving, setMoving] = useState(0);
  const SlideContainer = styled.div`
    height: 300px;
    width: 600px;
    background-color: black;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `;
  const ImageSlider = styled.div`
    left: ${moving}%;
    width: 400%;
    height: 100%;
    position: absolute;
    display: flex;
    overflow: hidden;
    transition: ${moving} 3s ease-in;
  `;
  const SliderElement = styled.div`
    width: 100%;
    background-color: grey;
    height: 100%;
    text-align: center;
  `;
  const Pointer = styled.div``;
  const ChangePagesPoiner = styled.button`
     ;
  `;
  const ChangePagesPoiner1 = styled.button`
     ;
  `;

  const movingPrev = () => {
    if (moving == 0) {
      return;
    }
    setMoving((prev) => (prev += 100));
  };
  const movingNext = () => {
    if (moving == -300) return;
    setMoving((prev) => (prev -= 100));
  };
  return (
    <>
      <SlideContainer>
        <ImageSlider>
          <SliderElement>1</SliderElement>
          <SliderElement>2</SliderElement>
          <SliderElement>3</SliderElement>
          <SliderElement>4</SliderElement>
        </ImageSlider>
      </SlideContainer>
      <Pointer>
        <ChangePagesPoiner onClick={movingPrev}>pointer1</ChangePagesPoiner>
        <ChangePagesPoiner1 onClick={movingNext}>pointer2</ChangePagesPoiner1>
      </Pointer>
    </>
  );
};
export default Slider;
