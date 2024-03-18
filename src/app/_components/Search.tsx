"use client"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react'
import { ResponseAPI } from '../_interface/globalInterface'

const Search = ({ data }: { data: ResponseAPI | null}) => {
  const [searchParam, setSearchParam] = useState('');

  const searchParams = useSearchParams()
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams)

    if (searchParam) {
      params.set("query", searchParam)

    } else {
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  let border = 'border-0 text-white'

  if (data && !data?.error) {
    border = 'border border-success text-success'
  }

  if (data && data?.error) {
    border = 'border border-error text-error'
  }

  return (
    <div className='mb-6'>
      <div className='flex max-w-full mt-7'>
        <input
          type="text"
          placeholder="Search..."
          value={searchParam}
          className={`rounded-l-xl bg-bgSecondary ${border} border-r-0 text-base h-11 p-4 w-4/5 shadow-none outline-none`}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch} className={`rounded-r-xl bg-bgSecondary ${border} border-l-0 text-base h-11 pl-4 w-1/5 flex items-center justify-center`}>
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg></button>
      </div>
      {data && data.error && <div className='text-center text-sm text-error p-2'>{data.error}</div>}
    </div>
  );
};

export default Search