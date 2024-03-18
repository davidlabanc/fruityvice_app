import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache';
import { addOrRemoveNumberFromArray } from '../_utils/arrayUtils'

export async function saveToFavorite(id: Number, path_to_revalidate: string): Promise<void> {
  "use server"
  let cookies_value = cookies().get("fruits")?.value ?? "[]"

  let cookies_data = JSON.parse(cookies_value)

  const new_data = addOrRemoveNumberFromArray(cookies_data, id)

  cookies().set("fruits", JSON.stringify(new_data))

  revalidatePath(path_to_revalidate);
}

export const getCookiesArray = (name: string): Number[] => {
  try {
    let cookies_value = cookies().get(name)?.value ?? "[]"
    return JSON.parse(cookies_value)
  } catch (error) {}
  return []
}