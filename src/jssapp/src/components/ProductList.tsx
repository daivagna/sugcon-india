// import axios from 'axios';
// import { useEffect, useState } from 'react';

export const ProductData = (): JSX.Element => {
  // const [data, setProductData] = useState({ data: [] });
  // useEffect(() => {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   let mounted = true;
  //   const response = axios({
  //     method: 'get',
  //     url: `/api/GetProducts`,
  //   })
  //     .then((response: any) => {
  //       console.log(props);
  //       console.log('products data is = ' + JSON.stringify(response.data.products));
  //       const userData = { data: response.data.products };
  //       setProductData(userData);
  //       console.log('data inside DATA =' + JSON.stringify(data.data));
  //       return () => (mounted = false);
  //     })
  //     .catch(function (error: any) {
  //       // handle error
  //       console.log('error:', error);
  //       return () => (mounted = false);
  //     });
  //   return () => (mounted = false);
  // }, [data]);

  // console.log(data);

  // return (
  //   <>
  //     <div className="wrapper">
  //       <h1>Product List</h1>
  //       <ul>
  //         {data.data.map((item) => (
  //           //console.log(item);
  //           <>
  //             <li className="text-3xl">{item.title}</li>
  //             <li>{item.description}</li>
  //           </>
  //         ))}
  //       </ul>
  //     </div>
  //   </>
  // );
  return (
    <>
      <div>this is product list</div>
    </>
  );
};

//ProductData();
export default ProductData;
