import React from 'react'

import List from '../_components/List'
import Header from '../../_components/Header'
import { Fruit } from '../../_interface/globalInterface'
import { getListData } from '../../_api/fruitsAPI'
import { saveToFavorite } from '../../_api/cookiesAPI'

const filterData = (data: Fruit[], cookies_array: Number[]) => {
  const new_data = data.filter(item => cookies_array.includes(item.id));
  
  return new_data.map(item => { return { ...item, follow: true } })
}

async function page({ searchParams }: { searchParams?: { page?: string } }) {
  const query = searchParams?.page || ''
  const data = await getListData(filterData, query)

  return (
    <div className='w-full lg:w-8/12'>
      <Header text='my' header='Favorite'></Header>
      <List data={data} saveToFavorite={saveToFavorite}></List>
    </div>
  )
}

export default page