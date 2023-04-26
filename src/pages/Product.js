import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Product({url,addToCart}) {
  const [product, setProduct] = useState(null);

  let params = useParams();
  
  useEffect(() => {
    axios.get(url + 'products/getproduct.php/' + params.productId)
      .then((response) => {
        const json = response.data;
        setProduct(response.data);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])
  
  return (
    <div>
      <h3>{product?.name}</h3>
      <p>{product?.price}</p>
      { product?.image ?
        <img style={{width: '150px'}} src={url + 'images/' + product?.image} alt="tuotekuva"/> :
        <img style={{width: '150px'}} src={url + 'images/placeholder.png'} alt="tuotekuva"/>
      }
      <div key={product?.id}>
        <button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Add</button>
      </div>
    </div>
  )
}
