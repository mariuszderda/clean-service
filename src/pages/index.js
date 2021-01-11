import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f00;
`;

const IndexPage = () => {
  const square = useRef(null);

  useEffect(() => {
    gsap.set(square.current, { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.fromTo(square.current, { x: '-=300' }, { duration: 3, x: '0', autoAlpha: 1 });
  }, [square]);

  return (
    <>
      <h1>test</h1>
      <Square ref={square} />
    </>
  );
};

export default IndexPage;
