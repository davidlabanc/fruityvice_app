import { Fruit, ResponseAPI } from '../_interface/globalInterface'
import { getCookiesArray } from './cookiesAPI'
import { NUMBER_OF_FRUITS_TO_FETCH } from '../_constants/constants'

export async function getListData(editData: (data: Fruit[], cookies_array: Number[]) => Fruit[], page: string): Promise<Fruit[]> {
  try {
    const response = await fetch('https://www.fruityvice.com/api/fruit/all');

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json() as Fruit[]

    const cookies_array = getCookiesArray("fruits")

    const edited_data = editData(data, cookies_array)

    const new_data = edited_data.sort(function (a: Fruit, b: Fruit) {
      return +a.id - +b.id || a.name.localeCompare(b.name);
    });

    return new_data.slice(0, Number(page) * NUMBER_OF_FRUITS_TO_FETCH)
  } catch (error) {
    return []
  }
}

export const getFruit = async (query: string, editData: (data: Fruit, cookies_array: Number[]) => Fruit): Promise<ResponseAPI> => {
  try {
    const response = await fetch(`https://www.fruityvice.com/api/fruit/${query}`)

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const cookies_array = getCookiesArray("fruits")

    const data = await response.json();

    const new_data = editData(data, cookies_array)

    return new_data
  } catch (error) {
    console.error('Error fetching search results:', error);
    return { error: "Something went wrong" }
  }
};