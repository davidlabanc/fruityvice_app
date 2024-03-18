import React from 'react'
import Link from "next/link";

import { ResponseAPI } from '../_interface/globalInterface'

const FruitCard = ({ data }: { data: ResponseAPI | null }) => {
  if (!data || !data?.id || data?.error) {
    return
  }

  const { name, family, order, genus } = data

  return (
    <div className="w-full">
      <div className="rounded-xl bg-bgSecondary w-full p-4">
        <div className="pb-4 font-bold uppercase text-sm">{name}</div>
        <div className="text-sm"><b>Family: </b>{family}</div>
        <div className="text-sm"><b>Order: </b>{order}</div>
        <div className="text-sm"><b>Genus: </b>{genus}</div>
      </div>
      <Link href={`/detail/${name}`} className="flex justify-center my-8 leading-relaxed">
        <div className="pr-2 hover:pr-0 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
        <div className="font-bold pl-2 hover:pl-0 transition-all">Open detail</div>
      </Link>
    </div>
  )
}

export default FruitCard