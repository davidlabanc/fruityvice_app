"use client"
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from "next/image";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled(Image)`
  animation: ${rotate} 2s linear infinite;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
`;

const Loading = () => {
  return (
    <Container>
      <Loader src='/spinner.svg' alt="Lemon" width={"44"} height={"44"} style={{transform: "rotate(360deg)", transition: "all 1s"}}></Loader>
    </Container>
  );
};

export default Loading;
