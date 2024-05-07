import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';
import { useEffect,useState } from "react";
import './index.css';
function ProductPage(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(function(){
        axios
        .get(`https://07290afc-3cae-4e3e-ac33-ce05ea206760.mock.pstmn.io/products/${id}`)
        .then(function(result){
            setProduct(result.data);
        })
        .catch(function(error){
            console.error(error);
        })
    },[]);

    if(product===null){
        return <h1>상품 정보를 받고있습니다...</h1>
    }

    return (
        <div>
            <div id="image-box">
                <img src={"/"+product.imageUrl} alt="?"/>
            </div>
            <div id="profile-box">
                <img src={"/images/icons/avatar.png"} alt=""/>
                <span>{product.seller}</span>
            </div>
            <div id="content-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id="createdAt">2024년 5월 7일</div>
                <div id="description">{product.description}</div>
            </div>
        </div>
    );
}

export default ProductPage;