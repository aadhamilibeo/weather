// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export async function getData() {
  const response = await fetch('https://www.metaweather.com/api/location/44418/')
  const jsonData = await response.json()
  return jsonData
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonData = await getData()
  res.status(200).json(jsonData)
}
