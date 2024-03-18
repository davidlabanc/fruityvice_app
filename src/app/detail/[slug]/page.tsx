import React, { Suspense } from 'react'
import _ from 'lodash'

import { Fruit } from '../../_interface/globalInterface'
import Header from '../../_components/Header'
import AddToFavoriteButton from './_components/AddToFavoriteButton'
import CustomImage from './_components/Image'
import { saveToFavorite } from '../../_api/cookiesAPI'
import { getFruit } from '../../_api/fruitsAPI'
import { getImage } from '../../_api/imagesAPI'

const isFavorite = (data: Fruit, cookiesArray: Number[]) => {
  if (cookiesArray.indexOf(data.id) >= 0) {
    return { ...data, follow: true }
  }

  return data
}

const page = async ({ params }: { params?: { slug?: string } }) => {
  const query = params?.slug || ''

  const results = query.length > 0 ? await getFruit(query, isFavorite) : null

  const image = query.length > 0 ? await getImage(query) : null

  const textStyles = 'text-sm p-2 text-center'

  return (
    <div className='w-1/4 m-auto min-w-64 flex flex-col items-center'>
      <Header text={results?.name} header="Detail"></Header>
      <CustomImage src={_.get(image, 'photos[0].src.original')} alt={_.get(results, 'results.name', "")}></CustomImage>
      <div className='min-w-64'>
        <div className='rounded-xl bg-bgSecondary p-8 w-full align-center min-w-detailCard'>
          <h3 className='font-bold uppercase text-base text-center pb-7'>Nutritions</h3>
          <div className={textStyles}>Carbohydrates: <span className='font-bold'>{_.get(results, 'nutritions.carbohydrates')}</span></div>
          <div className={textStyles}>Calories: <span className='font-bold'>{_.get(results, 'nutritions.calories')}</span></div>
          <div className={textStyles}>Fat: <span className='font-bold'></span>{_.get(results, 'nutritions.fat')}</div>
          <div className={textStyles}>Sugar: <span className='font-bold'>{_.get(results, 'nutritions.sugar')}</span></div>
          <div className={textStyles}>Protein: <span className='font-bold'>{_.get(results, 'nutritions.protein')}</span></div>
        </div>
        <AddToFavoriteButton id={results?.id} saveToFavorite={saveToFavorite} follow={results?.follow} pathToRefresh={query}></AddToFavoriteButton>
      </div>
    </div>
  )
}

export default page