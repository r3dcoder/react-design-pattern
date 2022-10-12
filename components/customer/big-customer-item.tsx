import React from "react";
import { BigCustomer } from "../../data/big-customers";
 
interface Props {
  customer: BigCustomer;
}
const BigCustomerItem = ({ customer }: Props) => {
  return (
    <>
      <p>
        Name: {customer.name}, Age: {customer.age}
      </p>
      <p>
        Age: {customer.age}, Country: {customer.country}
      </p>
    </>
  );
};

export default BigCustomerItem;
