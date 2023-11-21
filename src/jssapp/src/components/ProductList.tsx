import axios from 'axios';
import { useEffect, useState } from 'react';

export const ProductData = (props: any): JSX.Element => {
  const [data, setProductData] = useState({ data: [] });
  useEffect(() => {
    let mounted = true;
    const response = axios({
      method: 'get',
      url: `/api/GetProducts`,
    })
      .then((response: any) => {
        console.log(props);
        console.log('products data is = ' + JSON.stringify(response.data.products));
        const userData = { data: response.data.products };
        setProductData(userData);
        console.log('data inside DATA =' + JSON.stringify(data.data));
      })
      .catch(function (error: any) {
        // handle error
        console.log('error:', error);
      });
    return () => (mounted = false);
  }, [data]);

  console.log(data);

  return (
    <>
      <div className="wrapper">
        <h1>Product List</h1>
        <ul>
          {data.data.map((item) => (
            //console.log(item);
            <>
              <li className="text-3xl">{item.title}</li>
              <li>{item.description}</li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
  /*console.log('$$$$$$$$$$$$$$$$$$$   inside product list $$$$$$$$$$$$$$$$$$$$$$$$$$$');
  const [data, setProductData] = useState({ data: [] });

  const response = await axios({
    method: 'get',
    url: `/api/GetProducts`,
  })
    .then((response: any) => {
      console.log('products data is = '+JSON.stringify(response));
      setProductData(response.data);
    })
    .catch(function (error: any) {
      // handle error
      console.log('error:', error);
    });
  // return it
  return response;*/
  return '';
};

//ProductData();
export default ProductData;
