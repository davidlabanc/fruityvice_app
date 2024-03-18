"use server"
export const getImage = async (query: string,): Promise<any> => {
  try {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.API_KEY as string,
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json();

    return data
  } catch (error) {
    console.error('Error fetching search results:', error);
    return { error: "Something went wrong" }
  }
}