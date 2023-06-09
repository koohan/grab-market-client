import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css';
function ProductPage(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(function(){
    axios
        .get(
            `https://cf883f40-256c-40ec-a149-5373ada9d82b.mock.pstmn.io/products/${id}`
        )
        .then(function(result){
            setProduct(result.data);
        })
        .catch(function (error){
            console.error(error);    
        })
    },[]);

    if(product === null){
      return <h1>Product information loading...</h1>
    }

    return (
        <div>
          <div id="image-box">
            <img src={"/"+product.imageUrl} />
          </div>  
          <div id="profile-box">
            <img src="/images/icons/avatar.png"/>
            <span>{product.seller}</span>
          </div>
          <div id="contents-box">
            <div id="name">{product.name}</div>
            <div id="price">{product.price}Won</div>
            <div id="createdAt">2023-4-30</div>
            <div id="description">{product.description}</div>
          </div>  
        </div>
    )
}

export default ProductPage;