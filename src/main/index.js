import React from 'react';
import './index.css';
import axios from "axios";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function MainPage(){
    const [products, setProducts] = React.useState([])
    React.useEffect(function(){
        axios
        .get("https://07290afc-3cae-4e3e-ac33-ce05ea206760.mock.pstmn.io/products")
        .then(function(result){
            const products = result.data.products;
            setProducts(products);
        })
        .catch(function(error){
            console.error('에러 발생 : ', error);
        })
    },[])
    return (
        <div>
            <div id="banner">
                <img src="images/banners/banner1.png" alt="?"/>
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
                {
                    products.map(function(product, index){
                        return (
                        <div div className="product-card">
                            <Link className="product-link" to={`/products/${product.id}`}>
                                <div>
                                    <img 
                                        className="product-img" 
                                        src={product.imageUrl}
                                        alt = "?"
                                    />
                                </div>
                                <div className="product-contents">
                                    <span className="product-name">{product.name}</span>
                                    <span className="product-price">{product.price}원</span>
                                    <div className="product-seller">
                                        <img className="product-avatar" src="images/icons/avatar.png" alt="?"/>
                                        <span>{product.seller}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>)
                    })
                }
            </div>
        </div>
    );
}

export default MainPage;