import React from 'react';
import styled from 'styled-components';
import Projects from './Projects';


const Container = styled.div`
  /* margin: 100px 0; */
`;

export default function HomePage() {
  return (
    <>
      <Container>
       <Projects />

        {/* <CharterBoats /> */}
        {/* <FigmaToCode /> */}
        {/* <BlogProject /> */}
        {/* <FigmaToCode2 /> */}
        {/* <ShopCartProject /> */}
        {/* <ConceptColchoes /> */}
        {/* <FipeProject /> */}
        {/* <About /> */}
      </Container>
    </>
  );
}
