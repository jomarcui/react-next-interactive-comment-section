// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import comments from "../../../data/data.json";

const handler = (req: NextApiRequest, res: NextApiResponse<any> ) => {
    res.status(200).json(comments);
}

export default handler;