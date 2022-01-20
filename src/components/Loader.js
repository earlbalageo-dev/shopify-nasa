import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Container>
      <i className='fas fa-spinner fa-spin fa-4x'></i>
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loader;
