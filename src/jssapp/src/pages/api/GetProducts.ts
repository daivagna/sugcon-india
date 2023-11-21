/* eslint-disable prettier/prettier */
import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';
export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  console.log('##################### inside server side api call ##################33');
  const url = 'https://dummyjson.com/products';
  const { data } = await axios.get(url, {
    responseType: 'stream',
  }).catch(function (error: any) {
    // handle error
    console.log('error from inner api:', error);
  });;
  data.pipe(res);
};

export default handler;
