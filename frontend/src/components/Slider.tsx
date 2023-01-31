import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { BsFillCircleFill } from 'react-icons/bs';

const Slider = () => {
  const slideRef = useRef<any>(null);
  const [slideNum, setSlideNum] = useState(0);
  const slideRange = slideNum * -600;
  const movingOne = () => {
    setSlideNum((prev) => 0);
  };
  const movingTwo = () => {
    setSlideNum((prev) => 1);
  };
  const movingThree = () => {
    setSlideNum((prev) => 2);
  };
  const movingFour = () => {
    setSlideNum((prev) => 3);
  };
  const movingPrev = () => {
    if (slideNum === 0) setSlideNum((prev) => prev + 4);
    setSlideNum((prev) => prev - 1);
  };
  const movingNext = () => {
    if (slideNum === 3) setSlideNum((prev) => prev - 4);
    setSlideNum((prev) => prev + 1);
  };
  // const intervalId = setInterval(() => {
  //   if (slideNum === 3) setSlideNum((prev) => prev - 3);
  //   else setSlideNum((prev) => prev + 1);
  // }, 3000);
  useEffect(() => {
    // const timeoutId = setTimeout(() => {
    //   if (slideNum < 3) setSlideNum((prev) => prev + 1);
    //   else setSlideNum(0);
    // }, 4000);
    slideRef.current != null
      ? (slideRef.current.style.transform = `translate(${slideRange}px)`)
      : null;
    slideRef.current != null
      ? (slideRef.current.style.transition = 'all 0.5s')
      : null;
    console.log(slideNum);
  }, [slideNum]);
  return (
    <>
      <SlideContainer>
        <ImageSlider ref={slideRef}>
          <SliderElement>1</SliderElement>
          <SliderElement>2</SliderElement>
          <SliderElement>3</SliderElement>
          <SliderElement>4</SliderElement>
        </ImageSlider>
      </SlideContainer>
      <Pointer>
        <ArrowPrevPoiner onClick={movingPrev}>
          <AiFillLeftCircle size="36" />
        </ArrowPrevPoiner>
        <ArrowNextPoiner onClick={movingNext}>
          <AiFillRightCircle size="36" />
        </ArrowNextPoiner>
        <ChangePagesPoiner onClick={movingOne}>
          <BsFillCircleFill
            size="10"
            color={slideNum == 0 ? '#dfe6e9' : 'black'}
          />
        </ChangePagesPoiner>
        <ChangePagesPoiner onClick={movingTwo}>
          <BsFillCircleFill
            size="10"
            color={slideNum == 1 ? '#dfe6e9' : 'black'}
          />
        </ChangePagesPoiner>
        <ChangePagesPoiner onClick={movingThree}>
          <BsFillCircleFill
            size="10"
            color={slideNum == 2 ? '#dfe6e9' : 'black'}
          />
        </ChangePagesPoiner>
        <ChangePagesPoiner onClick={movingFour}>
          <BsFillCircleFill
            size="10"
            color={slideNum == 3 ? '#dfe6e9' : 'black'}
          />
        </ChangePagesPoiner>
      </Pointer>
    </>
  );
};
export default Slider;

const SlideContainer = styled.div`
  height: 300px;
  width: 600px;
  background-color: black;
  overflow: hidden;
  position: relative;
`;
const ImageSlider = styled.div`
  width: 2400px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  transform: translateX(0px);
`;

const SliderElement = styled.div`
  width: 600px;
  background-color: grey;
  height: 100%;
  text-align: center;
`;
const Pointer = styled.div`
  display: flex;
`;
const ChangePagesPoiner = styled.div`
  padding: 0px 5px;
`;
const ArrowPrevPoiner = styled.div`
  position: absolute;
  transform: translate(-300px, -170px);
`;
const ArrowNextPoiner = styled(ArrowPrevPoiner)`
  transform: translate(350px, -170px);
`;
