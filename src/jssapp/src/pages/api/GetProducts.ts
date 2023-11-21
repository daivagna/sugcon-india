/* eslint-disable prettier/prettier */
//import type { NextApiResponse } from 'next';

//import axios from 'axios';
export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (): Promise<void> => {
  // console.log('##################### inside server side api call ##################33');
  // const url = 'https://dummyjson.com/products';
  // const { data } = await axios.get(url, {
  //   responseType: 'stream',
  // }).catch(function (error: any) {
  //   // handle error
  //   console.log('error from inner api:', error);
  // });;
  // data.pipe(res);
  // this is test
};

export default handler;
