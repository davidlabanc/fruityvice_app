import Image from "next/image";
import Search from "./_components/Search"
import FruitCard from './_components/FruitCard'

import { ResponseAPI } from './_interface/globalInterface'


const handleSearch = async (query: string): Promise<ResponseAPI> => {
  try {
    const response = await fetch(`https://www.fruityvice.com/api/fruit/${query}`);

    const data = await response.json();

    return data
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
  return { error: "Something went wrong" }
};


export default async function Home({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || ''

  const results = query.length > 0 ? await handleSearch(query) :  null

  return (
    <div className="flex items-center flex-col w-1/4 pt-52">
      <Image src='/lemon-image.png' alt="Lemon" width={"200"} height={"200"}></Image>
      <div className="uppercase pb-0 mt-8 tracking-mainHeader text-4xl font-bold">S e a r c h</div>
      <div className="text-2xl uppercase">fruits database</div>
      <Search data={results}></Search>
      <FruitCard data={results}></FruitCard>
    </div>
  );
}
