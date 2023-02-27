// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createUser, getAllUsers } from '../../controllers/users.controllers'
import { dbConnect } from '../../libs/mongoose/mongoose'


dbConnect()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  switch (method) {
    case "GET":
      return getAllUsers(req, res)
    case "POST":
      return createUser(req,res)
  }
}
