import React, { useEffect } from 'react'
import Header from "./Header"
import {useDispatch, useSelector} from "react-redux";
import currencyFormatter from "currency-formatter";
import {Link} from "react-router-dom"
import { getAllProducts } from '../store/actions/getAllProducts';
const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
      });
    const {products} = useSelector(state => state.ProductsReducer);
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <div className="col-3" key={product.id}>
                            <div className="product">
                                <div className="product__img">
                                    <Link to={`/details/${product.id}`}><img src={product.image} alt="image name"/></Link>
                                </div>
                                <div className="product__name">
                                    {product.name}
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product__price">
                    <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'USD' })}</span> 
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="product__discount__price">
                                        {currencyFormatter.format(product.discount_amount, { code: 'USD' })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
