"use client"
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Spinner from '../../../_components/Spinner'

const CustomImage = ({ src, alt }: { src: string, alt: string }) => {
  const [reveal, setReveal] = useState(false);

  const handleLoadError = () => {
    setReveal(true);
  };

  const handleLoadComplete = () => {
    setReveal(true);
  };

  return (
    <ImageWrapper>
      <StyledImage
        src={src}
        alt={alt}
        width={"200"}
        height={"200"}
        onError={handleLoadError}
        onLoad={handleLoadComplete}
        visibility={reveal.toString()}
      />
      {!reveal && <Spinner />}
    </ImageWrapper>
  );
};

export default CustomImage;
type ImageType = { visibility: string }
const StyledImage = styled(Image) <ImageType>`
  ${props => props.visibility === "false" ? `
    height: 0px;
  `: `
    height: 200px;
  `};
  

  width: 100%;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  flex-flow: column;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 32px;
`;
