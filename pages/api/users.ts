// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BigCustomer, bigCustomers } from '../../data/big-customers'

 

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BigCustomer[]>
) {
  res.status(200).json(bigCustomers)
}
