"use client"
import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components';

function FavoriteButton({ id, saveToFavorite, follow, pathToRefresh }: { id: Number, saveToFavorite: Function, follow: Boolean | undefined, pathToRefresh: string }) {
  const [animateHeart, setAnimateHeart] = useState<any>(false);

  const saveToFav = (id: Number) => {
    saveToFavorite(id, pathToRefresh)

    setAnimateHeart(!animateHeart)
    setTimeout(() => {
      setAnimateHeart(false);
    }, 500);
  }

  //fill and border of the heart icon
  let fill = follow ? '#6B48F7' : 'none'
  let border = follow ? '#6B48F7' : 'white'

  return (
    <div className='flex justify-center flex-col pointer' onClick={async () => { saveToFav(id) }}>
      <AnimatedHeartIcon animate={animateHeart.toString()} xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth="1.5" stroke={border} className={`w-4 h-4 pointer`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </AnimatedHeartIcon>
    </div>
  )
}

export default FavoriteButton

const heartGrow = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

type AnimatedHeartIconType = {animate : string}
const AnimatedHeartIcon = styled.svg<AnimatedHeartIconType>`
  transition: transform 0.5s ease-in-out;
  animation-fill-mode: forwards;
  cursor: pointer;

  ${props => props.animate === "true" ? css`
    animation: ${heartGrow} 0.5s linear;
  `: ``
  };
  
`;