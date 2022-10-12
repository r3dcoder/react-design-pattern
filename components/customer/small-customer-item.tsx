import React from 'react'
import { SmallCustomer } from '../../data/small-customers'

interface Props{
  customer:SmallCustomer
}
const SmallCustomerItem = ({customer}:Props) => {
  return (
    <p>Name: {customer.name}, Age: {customer.age}</p>
   )
}

export default SmallCustomerItem