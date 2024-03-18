import React from 'react'

import List from './_components/List'
import Header from '../_components/Header'
import { Fruit } from '../_interface/globalInterface'
import { getListData } from "../_api/fruitsAPI";
import { saveToFavorite } from '../_api/cookiesAPI'

const addFavoriteParameter = (data: Fruit[], cookies_array: Number[]) => {
  return data.map(item => {
    const index = cookies_array.indexOf(item.id);
    if (index === -1) {
      return { ...item, follow: false }
    } else {
      return { ...item, follow: true }
    }
  })
}

async function page({ searchParams }: { searchParams?: { page?: string } }) {
  const query = searchParams?.page || ''
  const data = await getListData(addFavoriteParameter, query)

  return (
    <div className='w-full lg:w-8/12'>
      <Header text='all' header='Fruits list'></Header>
      <List data={data} saveToFavorite={saveToFavorite}></List>
    </div>
  )
}

export default page