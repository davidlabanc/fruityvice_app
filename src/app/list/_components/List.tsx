"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useInView } from 'react-intersection-observer'

import { Fruit } from '../../_interface/globalInterface'
import FavoriteButton from '../../_components/FavoriteButton'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface Props {
  data: Fruit[];
  saveToFavorite: Function;
}

const List = ({ data = [], saveToFavorite = () => { } }: Props) => {
  const [page, setPage] = useState(1)
  const { ref, inView } = useInView()
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const { replace } = useRouter();

  //styles for head and rows of the table
  const thClass = "text-base text-white text-center py-2 uppercase font-normal";
  const tdClass = "text-sm text-white text-center py-2 font-light"

  useEffect(() => {
    if (inView) {
      setPage(page + 1)
      const params = new URLSearchParams(searchParams)

      if (searchParams) {
        params.set("page", page + 1 + '')
  
      } else {
        params.delete("page")
      }
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [inView])

  return (
    <div>
      <table className="w-full mb-28 table-fixed">
        <thead className="bg-gray-800">
          <tr>
            <th className={thClass}>ID</th>
            <th className={thClass}>Name</th>
            <th className={thClass}>Genus</th>
            <th className={thClass}>Order</th>
            <th className={thClass}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index} className={`line-height: 44px; ${index % 2 === 0 ? 'bg-bgPrimary' : 'bg-bgSecondary'}`}>
                <td className={tdClass}>{row.id.toString()}</td>
                <td className={tdClass}>{row.name}</td>
                <td className={tdClass}>{row.genus}</td>
                <td className={tdClass}>{row.order}</td>
                <td className={`${tdClass} pr-8`}>
                  <div className='flex justify-center h-6 text-left'>
                    <FavoriteButton id={row.id} saveToFavorite={saveToFavorite} follow={row.follow} pathToRefresh='/list'/>
                    <Link href={'/detail/' + row.name} className='pl-6 flex justify-center flex-col'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div ref={ref}></div>
    </div>
  );
};

export default List;
