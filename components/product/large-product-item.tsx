import React from 'react'
import { BigProduct } from '../../data/big-products';


interface Props {
    product: BigProduct;
  }

const BigProductItem = ({product}:Props) => {
  return (
    <div>
        name: {product.name} , 
        price {product.price}, 
        Description {product.description}
    </div>
  )
}

export default BigProductItem