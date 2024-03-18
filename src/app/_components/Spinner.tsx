import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from "next/image";

const Loading = () => {
  return (
    <div className='flex justify-center items-center flex-col h-48 w-full'>
      <Loader src='/spinner.svg' alt="Lemon" width={"44"} height={"44"} style={{ transform: "rotate(360deg)", transition: "all 1s" }}></Loader>
    </div>
  );
};

export default Loading;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled(Image)`
  animation: ${rotate} 2s linear infinite;
`;