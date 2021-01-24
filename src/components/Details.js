import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from "react-icons/bs";
const Details = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductsReducer);
    useEffect(() => {
       dispatch({type: 'PRODUCT', id})
    }, [id])
    const decQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }
    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                <div className="details__image">
                    <img src={product.image} alt=""/>
                </div>
                </div>
                <div className="col-6">
                <div className="details__name">
                    {product.name}
                </div>
                <h3>Description</h3>
                <div>{product.description}</div>
                <h3>Categories</h3>
                <div>{product.categories.map(item => `${item.name},  `)}</div>
                <div className="details__prices">
    <span className="details__actaul">{currencyFormatter.format(product.price, { code: 'USD' })}</span>
    <span className="details__discount">{currencyFormatter.format(product.discount_amount, { code: 'USD' })}</span>

                </div>
                <div className="details__info">
                    <div className="details__incDec">
                    <span className="dec" onClick={decQuantity}><BsDash /></span>
    <span className="quantity">{quantity}</span>
    <span className="inc" onClick={() => setQuantity(quantity+1)}><BsPlus/></span>
    <button className="btn-default" onClick={() => dispatch({type: 'ADD_TO_CART', payload: {product, quantity} })}>add to cart</button>
    </div>
                </div>
                <div className="details__p">
                    <h4>Details</h4>
                    {product.desc}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Details
