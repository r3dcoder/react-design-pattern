import React from 'react'
 import { SmallProduct } from '../../data/small-products';


interface Props {
    product: SmallProduct;
  }

const SmallProductItem = ({product}:Props) => {
  return (
    <div>
        name: {product.name} , price {product.price}
    </div>
  )
}

export default SmallProductItem