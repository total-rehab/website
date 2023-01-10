import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    version: process.env.APP_VERSION,
    environment: process.env.APP_ENV,
  });
};

export default handler;
