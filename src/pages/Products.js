import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Products({url}) {
  const [name,setName] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams();
  
  useEffect(() => {
    let address = '';
    
    if (params.searchPhrase === undefined) {
      address = url + 'products/getproducts.php/' + params.categoryId;
    } else {
      address = url + 'products/searchproducts.php/' + params.searchPhrase;
    }

    axios.get(address)
      .then((response) => {
        const json = response.data;
        if (params.searchPhrase === undefined) {
          setName(json.category);
          setProducts(json.products);
        } else {
          setName(params.searchPhrase);
          setProducts(json);
        }

      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params])
  
  return (  
    <div>
      <h3>Products for {name}</h3>
      {products.map(product => (
        <Link key={product.id} to={'/product/' + product.id}>
          <div>
            {product.name}
          </div>
        </Link>
      ))}
    </div>
  )
}