"use client"
import React from 'react'

type Button = { id: Number | undefined, saveToFavorite: Function, follow: Boolean | undefined, pathToRefresh: string }

function AddToFavoriteButton({ id, saveToFavorite, follow, pathToRefresh }: Button) {
  let fill = follow ? '#6B48F7' : 'none'
  let border = follow ? '#6B48F7' : 'white'
  let styles = follow ? "w-6 h-6  group-hover:fill-none transition-all" : "w-6 h-6  group-hover:fill-bgWhite transition-all"
  return (
    <button className='group flex justify-center align-center w-full my-8' onClick={() => saveToFavorite(id, pathToRefresh)}>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={border} className={styles}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </div>
      {
        follow
          ? <span className='pl-4 uppercase'>remove from favorite</span>
          : <span className='pl-4 uppercase'>add to favorites</span>
      }
    </button>
  )
}

export default AddToFavoriteButton